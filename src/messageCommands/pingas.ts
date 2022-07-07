import { Client, Message } from "discord.js";
import { MessageCommand } from "../types/MessageCommand.js";
import { MessageCommandProperties } from "../types/MessageCommandProperties.js";

const commandProperties: MessageCommandProperties = {
  isActive: true,
  callNames: ["pingas","ping"],

  command: async function run(bot: Client, message: Message): Promise<void> {
    message.reply("pong");
  }
};

export const command: MessageCommand = new MessageCommand(commandProperties);