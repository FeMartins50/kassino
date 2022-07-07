import { Client, Message } from "discord.js";
import { MsgCommand } from "../types/MsgCommand.js";

export const command: MsgCommand = new MsgCommand({
  isActive: true,
  callNames: ["kasino","KASINO","KAAASIINOOOOOOOOOOO"],

  command: async function run(bot: Client, message: Message): Promise<void> {
    message.reply("III, I DONT WANNA SAY GOODBYYYYE\nIIIIIIIII, DONT WANNA SAAAY GOODBYYYE");
  }
});