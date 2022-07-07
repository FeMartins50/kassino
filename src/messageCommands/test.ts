import { Client, Message, Guild } from "discord.js";
import { MsgCommand } from "../types/MsgCommand.js";

export const command: MsgCommand = new MsgCommand({
  isActive: true,
  callNames: ["teste", "test"],

  command: async function run(bot: Client, message: Message): Promise<void> {
    console.log("= BEGIN TEST =");
    message.reply("testado");

   
    
    console.log("= END TEST =");
  }
});