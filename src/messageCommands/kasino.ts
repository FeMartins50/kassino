import { Client, Message } from "discord.js";
import { MessageCommand } from "../types/MessageCommand.js";
import { MessageCommandProperties } from "../types/MessageCommandProperties.js";

const commandProperties: MessageCommandProperties = {
  isActive: true,
  callNames: ["kasino","KASINO","KAAASIINOOOOOOOOOOO"],

  command: async function run(bot: Client, message: Message): Promise<void> {
    message.reply("III, I DONT WANNA SAY GOODBYYYYE\nIIIIIIIII, DONT WANNA SAAAY GOODBYYYE");
  }
};

export const command: MessageCommand = new MessageCommand(commandProperties);