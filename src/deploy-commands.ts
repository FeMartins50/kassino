( await import("dotenv") ).config();
const token: string = process.env.TOKEN as string;

import { SlashCommandBuilder } from "@discordjs/builders";
import { readFileSync, readdirSync } from "fs";
import { SlashCommand } from "./types/SlashCommand";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";

const rawConfig = readFileSync("./config.json").toString();
const { clientId } = JSON.parse(rawConfig);

let commandFiles: string[] = readdirSync("./build/interactionCommands");

const commandDestination: Map<string, SlashCommandBuilder[]> = new Map();
commandDestination.set("global", []);
let slashCommandLog: string = "SlashCommands atualizados: ";

for(let file of commandFiles) {
  const { isGlobal, guilds, options } = (await import("./interactionCommands/"+file)).default as SlashCommand;
  if(isGlobal){
    commandDestination.get("global")!.push(options);
    continue;
  }
  for(let id of guilds){
    if(!commandDestination.has(id)) {
      commandDestination.set(id, [options]);
      continue;
    }
    commandDestination.get(id)!.push(options);
  }
  slashCommandLog += file+", ";
}

console.log("\n",commandDestination,"\n");

const rest = new REST({ version: '9' }).setToken(token);

try{
  let commands = JSON.parse(JSON.stringify( commandDestination.get("global") ));
  await rest.put(
    Routes.applicationCommands(clientId),
    { body: commands },
  );
}catch(error){
  console.log("=ERR= Erro ao atualizar SlashCommands globais!");
  console.error(error);
};

commandDestination.forEach( async (commandsRaw, id) => {
  if(id == "global") return;
  try{
    let commands = JSON.parse(JSON.stringify( commandsRaw ));
    await rest.put(
      Routes.applicationGuildCommands(clientId, id),
      { body: commands },
    );
  }catch(error){
    console.log("=ERR= Erro ao atualizar SlashCommands da guilda "+ id);
    console.error(error);
  }
});

console.log(slashCommandLog);