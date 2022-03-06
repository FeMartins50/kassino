import { Command } from "./Command.js";
import { MessageCommandProperties } from "./MessageCommandProperties.js";

export class MessageCommand extends Command{
  callNames: string[];

  constructor(properties: MessageCommandProperties){
    const { status, callNames, command } = properties;
    super(status, command);
    this.callNames = callNames;
  }
}