import {resolve} from "node:path";
import {readdir} from "node:fs/promises";
import {Collection} from "discord.js";
import TextCommand from "../structures/TextCommand";

export default async function TextCommandsLoader(): Promise<Collection<string, any>> {
    let path = resolve(__dirname, '../commands');
    let folder = await readdir(path);
    let collection: Collection<string, any> = new Collection();

    for (let file of folder) {
        let name = file.split(/\.ts$/g)[0];
        let data = await import(`../commands/${name}`);

        if (!(data instanceof TextCommand)) continue;

        collection.set(name, data);
    }

    console.log(`The commands (${collection.size}) were loaded successfully!`);
    return collection;
};