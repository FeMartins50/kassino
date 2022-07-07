import { Client, Message, Guild } from "discord.js";
import { MessageCommand } from "../types/MessageCommand.js";

export const command: MessageCommand = new MessageCommand({
  isActive: true,
  callNames: ["teste", "test"],

  command: async function run(bot: Client, message: Message): Promise<void> {
    console.log("= BEGIN TEST =");
    message.reply("testado");

   
    
    console.log("= END TEST =");
  }
});