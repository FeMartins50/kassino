import { Client, Message } from "discord.js";

export default {
  active: true,
  callNames: ["pingas","ping"],

  async run(bot: Client, message: Message): Promise<void> {
    message.reply("pong");
  }
}