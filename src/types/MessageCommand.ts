import { Command } from "./Command.js";

export class MessageCommand extends Command{
  callNames: string[];

  constructor( properties: { isActive: boolean, callNames: string[], command: Function } ){
    let { isActive, callNames, command } = properties;
    
    super(isActive, command);
    this.callNames = callNames;
  }
}