import { Client, Message } from "discord.js";
import { MessageCommand } from "../types/MessageCommand.js";

export const command: MessageCommand = new MessageCommand({
  isActive: true,
  callNames: ["pingas","ping"],

  command: async function run(bot: Client, message: Message): Promise<void> {
    message.reply("pong");
  }
});