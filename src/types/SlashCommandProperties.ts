import { SlashCommandBuilder } from "@discordjs/builders";

export interface SlashCommandProperties {
  status: boolean;
  guilds: string[];
  options: SlashCommandBuilder;
  command: Function;
}