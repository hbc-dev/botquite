import {ClientEvents, Client} from 'discord.js';

interface EventCallbackParams {
    client: Client;
}

type Callback = (params: EventCallbackParams) => void;

interface EventOptions {
    name: keyof ClientEvents;
    once?: boolean;
    execute: Callback;
};

class Event {
    public name: keyof ClientEvents;
    public once: boolean;
    public execute: Callback;

    constructor(options: EventOptions) {
        this.name = options.name;
        this.once = options.once || true;
        this.execute = options.execute;
    }
}

export default Event;