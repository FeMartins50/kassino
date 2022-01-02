import { Client, Message } from "discord.js";
import { Command } from "../types/Command";

export default {
  active: true,
  callNames: ["pingas","ping"],

  async run(bot: Client, message: Message): Promise<void> {
    message.reply("pong");
  }
} as Command;