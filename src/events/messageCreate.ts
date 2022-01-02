import { Message, Client } from "discord.js";
import { readFileSync } from "fs";
import { Command } from "../types/Command";
const rawConfig = readFileSync("./config.json").toString();
const { prefix } = JSON.parse(rawConfig);

export async function process( bot: Client, message: Message, commands: Map<string, Command>): Promise<void>{
  if(!message.content.startsWith(prefix)) return;
  let args: string[] = message.content.slice(prefix.length).trim().split(" ");
  let command: string = args[0];
  if(!commands.has(args[0])){
    console.log(" Comando de mensagem inexistente: "+ command);
    message.reply("Comando indisponível!");
  }
  try{
    commands.get(command)!.run(bot, message);
    console.log(command+" executado.");
  }catch(err){
    console.error("=ERR= Erro ao executar comando: "+ command);
    console.error(err);
  }
}