export class Command{
    isActive: boolean;
    run: Function;

    constructor(status: boolean, command: Function) {
        this.isActive = status;
        this.run = command;
    }
}