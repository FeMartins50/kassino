import { SlashCommandBuilder } from "@discordjs/builders";
import { Command } from "./Command.js";

export class SlsCommand extends Command{
  callName: string;
  guilds: string[];
  options: SlashCommandBuilder;

  constructor(properties: {isActive: boolean, guilds: string[], options: SlashCommandBuilder, command: Function}){
    const { isActive, guilds, options, command } = properties;
    super(isActive, command);
    this.callName = options.name;
    this.guilds = guilds;
    this.options = options;
  }
}