import { Client, Message } from "discord.js";
import { MessageCommand } from "../types/MessageCommand";

export default {
  active: true,
  callNames: ["teste", "test"],

  async run(bot: Client, message: Message): Promise<void> {
    console.log("teste");
    message.reply("testado");
  }
} as MessageCommand;