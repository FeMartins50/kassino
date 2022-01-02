import { Client } from "discord.js";

export function process(bot: Client, logs: string[]): void {
  console.log("== KASINO IS READY ==");
  const [ eventLoadLog, commandLoadLog ] = logs;
  console.log(eventLoadLog);
  console.log(commandLoadLog);
}