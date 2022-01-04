import { Client, Message } from "discord.js";
import { MessageCommand } from "../types/MessageCommand";

export default {
  active: true,
  callNames: ["pingas","ping"],

  async run(bot: Client, message: Message): Promise<void> {
    message.reply("pong");
  }
} as MessageCommand;