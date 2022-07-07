import { Client, Message } from "discord.js";
import { MsgCommand } from "../types/MsgCommand.js";

export const command: MsgCommand = new MsgCommand({
  isActive: true,
  callNames: ["pingas","ping"],

  command: async function run(bot: Client, message: Message): Promise<void> {
    message.reply("pong");
  }
});