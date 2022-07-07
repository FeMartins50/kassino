export interface MessageCommandProperties {
  isActive: boolean;
  callNames: string[];
  command: Function;
}