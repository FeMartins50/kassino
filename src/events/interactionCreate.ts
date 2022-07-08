import { Interaction } from "discord.js";
import { Bot } from "../types/Bot";


export async function process(bot: Bot, interaction: Interaction): Promise<void> {
  if(!interaction.isCommand()) return;
  let command: string = "SlsCommand/"+ interaction.commandName;
  if(!bot.commands.has(command)) return;
  console.log("SLASH");
  try{
    bot.commands.get(command)!.run(bot, interaction);
    console.log(command+" executado.");
  }catch(err){
    console.error("=ERR= Erro ao executar SlsCommand: "+ command);
    console.error(err);
  }
}