import { Client } from "discord.js";
import { MessageCommand } from "./MessageCommand";

export interface Bot{
  client: Client;
  events: Map<string, Function>;
  commands: Map<string, MessageCommand>;
}