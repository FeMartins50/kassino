import { SlashCommandBuilder } from "@discordjs/builders";

export interface SlashCommandProperties {
  isActive: boolean;
  guilds: string[];
  isGlobal: boolean;
  options: SlashCommandBuilder;
  command: Function;
}