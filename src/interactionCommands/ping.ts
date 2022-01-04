import { Client, CommandInteraction } from "discord.js";
import { SlashCommand } from "../types/SlashCommand";
import { SlashCommandBuilder } from "@discordjs/builders";

const commandOptions: SlashCommandBuilder = new SlashCommandBuilder();
commandOptions.setName("pingas");
commandOptions.setDescription("PINGAS! PONG!");

export default {
  active: true,
  callName: "pingas",
  global: false,
  guilds: ["528684880968548367"],
  options: commandOptions, // .setName(this.callName)

  async run(bot: Client, interaction: CommandInteraction): Promise<void> {
    interaction.reply("Pong!");
  }
} as SlashCommand;