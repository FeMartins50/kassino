( await import("dotenv") ).config();
const token: string = process.env.TOKEN as string;

import { Client, Intents } from "discord.js";
import { Bot } from "./types/Bot.js";

import { log as slashCommandLog } from "./deploy-commands.js";
//console.log(" === SlsCommands Atualizados!!\n"+slashCommandLog+"\n ===");

import { events } from "./subsystems/eventFileHandler.js";
import { commands } from "./subsystems/commandFileHandler.js";

const bot: Bot = {
  client: new Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_VOICE_STATES
    ] 
  }),
  events,
  commands
}

// console.log(commands,"\n",events);

for(let event of events.keys()){
  bot.client.on(event, (...args) => {
    events.get(event)!(bot, ...args)
  });
}

try{
  await bot.client.login(token);
} catch(err){
  console.error("Não foi possível logar na API discord.js!\n",err);
}