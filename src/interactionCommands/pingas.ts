import { Client, CommandInteraction } from "discord.js";
import { SlashCommand } from "../types/SlashCommand.js";
import { SlashCommandBuilder } from "@discordjs/builders";

const commandOptions: SlashCommandBuilder = new SlashCommandBuilder();
commandOptions.setName("pingas");
commandOptions.setDescription("PINGAS! PONG!");

export const command = new SlashCommand({
  isActive: true,
  guilds: ["528684880968548367"],
  isGlobal: false,
  options: commandOptions,
  command: async function run(bot: Client, interaction: CommandInteraction): Promise<void> {
    console.log("Pong!");
    interaction.reply("Pong!");
  }
});