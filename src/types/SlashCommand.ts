import { SlashCommandBuilder } from "@discordjs/builders";

export interface SlashCommand{
  active: boolean;
  callName: string;
  global: boolean;
  guilds: string[];
  options: SlashCommandBuilder;
  run: Function;
}