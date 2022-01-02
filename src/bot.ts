( await import("dotenv") ).config();
const token: string = process.env.TOKEN as string;

// import { readFileSync } from "fs";
import { Client, Intents } from "discord.js";
import { Bot } from "./types/Bot.js"
// import { REST } from "@discordjs/rest";
// import { Routes } from "discord-api-types/v9";
// import { SlashCommandBuilder } from "@discordjs/builders";

// const rawConfig = readFileSync("./config.json").toString();
// const { guildIds } = JSON.parse(rawConfig);

import { events } from "./subsystems/eventFileHandler.js";
import { commands } from "./subsystems/commandFileHandler.js";

const bot: Bot = {
  client: new Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES
    ] 
  }),
  events,
  commands
}

// console.log(commands,"\n",events);

for(let event of events.keys()){
  bot.client.on(event, (...args) => {
    events.get(event)!(bot, ...args)
  })
}


try{
  await bot.client.login(token);
} catch(err){
  console.error("Não foi possível logar na API discord.js!\n",err);
}

// bot.on("interactionCreate", interaction => {
//   if(!interaction.isCommand()){
//     return;
//   }
//   console.log(interaction);
//   interaction.reply("blz mano");
// });

// const commands = [
// 	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!')
// ].map(command => command.toJSON());

// const rest = new REST({ version: '9' }).setToken(token);

// try{
//   rest.put(Routes.applicationGuildCommands(bot.user!.id, config.guildIds.teste), { body: commands });
// } catch (err) {
//   console.error(err);
// }