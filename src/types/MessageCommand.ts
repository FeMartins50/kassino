import { Command } from "./Command.js";
import { MessageCommandProperties } from "./MessageCommandProperties.js";

export class MessageCommand extends Command{
  callNames: string[];

  constructor(properties: MessageCommandProperties){
    const { isActive, callNames, command } = properties;
    super(isActive, command);
    this.callNames = callNames;
  }
}