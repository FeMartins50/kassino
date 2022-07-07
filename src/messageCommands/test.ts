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

    if(message.channel.type != 'GUILD_TEXT') return console.log("Voice Cancelado");

    let resource: AudioResource = createAudioResource(".../sounds/olhaeleae.mp3");
    const player: AudioPlayer = createAudioPlayer();

    let guild: Guild = message.channel.guild;
    let channelId: string | null | undefined = guild.members.resolve(message.author)?.voice.channelId;
    if(channelId == undefined || channelId == null){
      return console.log("Não consegui pegar o id do usuário!");
    }
    const connection = joinVoiceChannel({
      channelId: channelId,
      guildId: guild.id,
      adapterCreator: guild.voiceAdapterCreator,
    });

    connection.subscribe(player);
    setTimeout(() => {
      player.play(resource);
      console.log("Time 1");
    }, 5000);
    setTimeout(() => {
      connection.destroy();
      console.log("Time 2");
    }, 12000);
    
    console.log("= END TEST =");
  }
};

export const command: MessageCommand = new MessageCommand(commandProperties);