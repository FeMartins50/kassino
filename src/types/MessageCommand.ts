export interface MessageCommand {
  active: boolean;
  callNames: string[];
  run: Function;
}