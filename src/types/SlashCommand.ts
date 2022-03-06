import { SlashCommandBuilder } from "@discordjs/builders";
import { SlashCommandProperties } from "./SlashCommandProperties.js";
import { Command } from "./Command.js";

export class SlashCommand extends Command{
  callName: string;
  global: boolean;
  guilds: string[];
  options: SlashCommandBuilder;

  constructor(properties: SlashCommandProperties){
    const { status, guilds, options, command } = properties;
    super(status, command);
    this.callName = options.name;
    this.global = false;
    if(guilds.length === 0) {
      this.global = true;
    }
    this.guilds = guilds;
    this.options = options;
  }
}