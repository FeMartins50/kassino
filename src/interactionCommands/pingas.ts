import { Client, CommandInteraction } from "discord.js";
import { SlsCommand } from "../types/SlsCommand.js";
import { SlashCommandBuilder } from "@discordjs/builders";

const commandOptions: SlashCommandBuilder = new SlashCommandBuilder();
commandOptions.setName("pingas");
commandOptions.setDescription("PINGAS! PONG!");

export const command = new SlsCommand({
  isActive: true,
  guilds: ["528684880968548367","993916529601159218"],
  options: commandOptions,
  command: async function run(bot: Client, interaction: CommandInteraction): Promise<void> {
    console.log("Pong!");
    interaction.reply("Pong!");
  }
});