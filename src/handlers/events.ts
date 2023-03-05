import {resolve} from "node:path";
import {readdir} from "node:fs/promises";
import DiscordClient from "../structures/DiscordClient";
import Event from "../structures/Event";

export default async function EventsLoader(client: DiscordClient): Promise<void> {
    let path = resolve(__dirname, '../events');
    let folder = await readdir(path);

    for (let file of folder) {
        let name = file.split(/\.ts$/g)[0];
        let data = (await import(`../events/${name}`)).default;

        if (!(data instanceof Event)) continue;

        if (data.once) client.once(data.name, (...args: any) => data.execute({client, ...args}));
        else client.on(data.name, (...args: any) => data.execute({client, ...args}));
    }

    console.log(`The events were loaded successfully!`);
};