import { readdirSync } from "fs";

const eventsMap: Map<string, Function> = new Map();

let eventLoadCheck: string = "=LoadCheck= EVENTS =\n";
let eventsDirectory: string[] = readdirSync("./build/events");

while(eventsDirectory.length > 0){
  let event: string = eventsDirectory.shift()!;
  if(!event.endsWith(".js")){
    console.error("Algo no diretório events não é script!");
    continue;
  }
  const { process } = await import("../events/"+ event);
  event = event.split(".")[0];  // REMOVE A EXTENSÃO
  eventLoadCheck += event +", ";
  eventsMap.set(event, process);
}

console.log(eventLoadCheck);
export const events = eventsMap;