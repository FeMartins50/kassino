import { Client, Message, Guild } from "discord.js";
import { MessageCommand } from "../types/MessageCommand.js";
import { MessageCommandProperties } from "../types/MessageCommandProperties.js";

import { 
  joinVoiceChannel, VoiceConnectionStatus, VoiceConnection, createAudioPlayer,
  AudioPlayerStatus, AudioPlayer, createAudioResource, AudioResource
} from "@discordjs/voice";

const commandProperties: MessageCommandProperties = {
  isActive: true,
  callNames: ["teste", "test"],

  command: async function run(bot: Client, message: Message): Promise<void> {
    console.log("= BEGIN TEST =");
    message.reply("testado");

   
    
    console.log("= END TEST =");
  }
};

export const command: MessageCommand = new MessageCommand(commandProperties);