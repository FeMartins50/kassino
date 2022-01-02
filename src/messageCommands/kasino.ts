import { Client, Message } from "discord.js";
import { Command } from "../types/Command";

export default {
  active: true,
  callNames: ["kasino","KASINO","KAAASIINOOOOOOOOOOO"],

  async run(bot: Client, message: Message): Promise<void> {
    message.reply("III, I DONT WANNA SAY GOODBYYYYE\nIIIIIIIII, DONT WANNA SAAAY GOODBYYYE");
  }
} as Command;