import { SlashCommandBuilder } from "@discordjs/builders";
import { Command } from "./Command.js";

export class SlashCommand extends Command{
  callName: string;
  isGlobal: boolean;
  guilds: string[];
  options: SlashCommandBuilder;

  constructor(properties: {isActive: boolean, guilds: string[], isGlobal: boolean, options: SlashCommandBuilder, command: Function}){
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