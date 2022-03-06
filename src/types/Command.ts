export class Command{
    active: boolean;
    run: Function;

    constructor(status: boolean, command: Function) {
        this.active = status;
        this.run = command;
    }
}