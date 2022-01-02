import { Bot } from "../types/Bot.js";
import { Message } from "discord.js";
import { readFileSync } from "fs";
const rawConfig = readFileSync("./config.json").toString();
const { prefix } = JSON.parse(rawConfig);

export async function process(bot: Bot, message: Message): Promise<void>{
  if(!message.content.startsWith(prefix)) return;
  let args: string[] = message.content.slice(prefix.length).trim().split(" ");
  let command: string = args[0];
  if(!bot.commands.has(args[0])){
    console.log(" Comando de mensagem inexistente: "+ command);
    message.reply("Comando indisponível!");
  }
  try{
    bot.commands.get(command)!.run(bot, message);
    console.log(command+" executado.");
  }catch(err){
    console.error("=ERR= Erro ao executar comando: "+ command);
    console.error(err);
  }
}