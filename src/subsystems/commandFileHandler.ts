import { Command } from "../types/Command";
import { readdirSync } from "fs";

const commandsMap: Map<string, Command> = new Map();

let commandLoadCheck: string = "=LoadCheck= COMMANDS =";
let queuedDirectories: string[] = ["messageCommands"];
//console.log(commandsFilePaths);

while(queuedDirectories.length > 0){
  let directory: string = queuedDirectories.shift()!;
  let commandsFilePaths: string[] = readdirSync("./build/"+ directory);
  commandLoadCheck += "\n"+ directory +": ";
  while(commandsFilePaths.length > 0){
    let commandName: string = commandsFilePaths.shift()!;
    if(commandName.startsWith("_")) continue;  // Arquivos que começam com _ serão ignorados.
    if(!commandName.endsWith(".js")){  // Supõe-se que há apenas diretórios e scripts js nos arquivos.
      queuedDirectories.push("../"+ directory +"/"+ commandName);
      continue;
    }
    let path: string = "../"+ directory +"/"+ commandName;
    const command = (await import(path)).default as Command;
    console.log("==\n",path,"\n",command,"\n==");
    commandName = commandName.split(".")[0];
    if(!command.active){
      console.log("== Comando "+ commandName + " lido como desativado, em "+ directory);
      continue;
    }
    for(let name of command.callNames){
      commandsMap.set(name, command);
    }
    commandLoadCheck += commandName+", ";
  }
}

export const commands = commandsMap;
export const commandLoadLog = commandLoadCheck;