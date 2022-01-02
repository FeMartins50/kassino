export interface Command {
  active: boolean;
  callNames: string[];
  run: Function;
}