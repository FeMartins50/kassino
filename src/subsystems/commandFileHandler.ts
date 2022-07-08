import { MsgCommand } from "../types/MsgCommand.js";
import { SlsCommand } from "../types/SlsCommand.js";
import { Command } from "../types/Command.js";
import { readdirSync } from "fs";

const commandsMap: Map<string, Command> = new Map(); // "Tipo do comando/Nome do comando" => Comando

let commandLoadCheck: string = " === LoadCheck COMMANDS =";
let dirQueue: string[] = ["messageCommands","interactionCommands"];

while(dirQueue.length > 0){
  let directory: string = dirQueue.shift()!;
  let commandsFiles: string[] = readdirSync("./build/"+ directory);
  commandLoadCheck += "\n"+ directory +": ";

  while(commandsFiles.length > 0){
    let commandName: string = commandsFiles.shift()!;
    if(commandName.startsWith("_")) continue;  // Arquivos que começam com _ serão ignorados.

    let formatDot: number = commandName.lastIndexOf(".");
    if(formatDot == -1){
      dirQueue.push(directory +"/"+ commandName);
      continue;
    }
    let format: string = commandName.slice(formatDot);
    if(format != ".js"){  // Supõe-se que há apenas diretórios e scripts js nos arquivos.
      console.log(" => ERR\nExiste um arquivo de extensão:"+format+" na pasta:"+directory+"\n => ERR");
      continue;
    }
    let path: string = "../"+ directory +"/"+ commandName;
    commandName = commandName.split(".")[0];

    try{
      let { command } = (await import(path));

      if(!command.isActive){
        console.log("== Comando "+ commandName + " lido como desativado, em "+ directory);
        continue;
      }
  
      // Verificar o tipo do comando => Distinguir o comando por tipo, dentro do map, a partir da chave
      if(command instanceof MsgCommand){
        for(let name of command.callNames){
          name = "MsgCommand/" + name;
          commandsMap.set(name, command);
        }
        commandLoadCheck += commandName+", ";
      }else
      if(command instanceof SlsCommand){
        let name: string = "SlsCommand/" + command.callName;
        commandsMap.set(name, command);
        commandLoadCheck += commandName+", ";
      }
    }catch(err){
      console.log("\nERRO AO CARREGAR COMANDO ======\n",err,"\nERRO AO CARREGAR COMANDO ======\n");
    }
  }
}

commandLoadCheck += "\n === ";
console.log(commandLoadCheck);
export const commands = commandsMap;