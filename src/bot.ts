( await import("dotenv") ).config();
const token: string = process.env.TOKEN as string;

import { readFileSync } from "fs";
import { Client, Intents } from "discord.js";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { SlashCommandBuilder } from "@discordjs/builders";

const rawConfig = readFileSync("./config.json").toString();
const config = JSON.parse(rawConfig);
console.log(config);

const bot: Client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ] 
});




bot.on("interactionCreate", interaction => {
  if(!interaction.isCommand()){
    return;
  }
  console.log(interaction);
  interaction.reply("blz mano");
});

try{
  await bot.login(token);
} catch(err){
  console.error(err);
}

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!')
].map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

try{
  rest.put(Routes.applicationGuildCommands(bot.user!.id, config.guildIds.teste), { body: commands });
} catch (err) {
  console.error(err);
}