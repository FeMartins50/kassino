import { MessageCommand } from "../types/MessageCommand.js";
import { SlashCommand } from "../types/SlashCommand.js";
import { Command } from "../types/Command.js";
import { readdirSync } from "fs";

const commandsMap: Map<string, Command> = new Map(); // ["Tipo do comando", "Nome do comando"] => Comando

let commandLoadCheck: string = "=LoadCheck= COMMANDS =";
let queuedDirectories: string[] = ["messageCommands","interactionCommands"];

while(queuedDirectories.length > 0){
  let directory: string = queuedDirectories.shift()!;
  let commandsFilePaths: string[] = readdirSync("./build/"+ directory);
  commandLoadCheck += "\n"+ directory +": ";
  while(commandsFilePaths.length > 0){
    let commandName: string = commandsFilePaths.shift()!;
    if(commandName.startsWith("_")) continue;  // Arquivos que começam com _ serão ignorados.
    if(!commandName.endsWith(".js")){  // Supõe-se que há apenas diretórios e scripts js nos arquivos.
      queuedDirectories.push(directory +"/"+ commandName);
      continue;
    }
    let path: string = "../"+ directory +"/"+ commandName;
    commandName = commandName.split(".")[0];

    try{
      let { command } = (await import(path));

      if(!command.active){
        console.log("== Comando "+ commandName + " lido como desativado, em "+ directory);
        continue;
      }
  
      // Verificar o tipo do comando => Distinguir o comando por tipo, dentro do map, a partir da chave
      if(command instanceof MessageCommand){
        for(let name of command.callNames){
          name = "MessageCommand/" + name;
          commandsMap.set(name, command);
        }
        commandLoadCheck += commandName+", ";
      }else
      if(command instanceof SlashCommand){
        let name: string = "SlashCommand/" + command.callName;
        commandsMap.set(name, command);
        commandLoadCheck += commandName+", ";
      }
      // instanceof não tá funcionando direito...
      // tirei o instanceof por enquanto
      // inicia o bot aí pra tu ver kk
      console.log(" = " + command);
    }catch(err){
      console.log("\nERRO AO CARREGAR COMANDO ======\n",err,+"ERRO AO CARREGAR COMANDO ======\n");
    }
  }
}

console.log(commandLoadCheck);
export const commands = commandsMap;