import { SlashCommandBuilder } from "@discordjs/builders";
import { SlashCommandProperties } from "./SlashCommandProperties.js";
import { Command } from "./Command.js";

export class SlashCommand extends Command{
  callName: string;
  isGlobal: boolean;
  guilds: string[];
  options: SlashCommandBuilder;

  constructor(properties: SlashCommandProperties){
    const { isActive, guilds, isGlobal, options, command } = properties;
    super(isActive, command);
    this.callName = options.name;
    this.isGlobal = isGlobal;
    if(guilds.length === 0) {
      this.isGlobal = true;
    }
    this.guilds = guilds;
    this.options = options;
  }
}