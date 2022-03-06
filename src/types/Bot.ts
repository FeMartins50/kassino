import { Client } from "discord.js";
import { Command } from "./Command";

export interface Bot{
  client: Client;
  events: Map<string, Function>;
  commands: Map<string, Command>;
}