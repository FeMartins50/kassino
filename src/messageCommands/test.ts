import { Client, Message } from "discord.js";
import { MessageCommand } from "../types/MessageCommand.js";
import { MessageCommandProperties } from "../types/MessageCommandProperties.js";

const commandProperties: MessageCommandProperties = {
  status: true,
  callNames: ["teste", "test"],

  command: async function run(bot: Client, message: Message): Promise<void> {
    console.log("teste");
    message.reply("testado");
  }
};

export const command: MessageCommand = new MessageCommand(commandProperties);