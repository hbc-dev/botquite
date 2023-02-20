import {resolve} from "node:path";
import {readdir} from "node:fs/promises";
import {Collection} from "discord.js";

export default async function TextCommands(): Promise<Collection<string, any>> {
    let path = resolve(__dirname, '../commands');
    let folder = await readdir(path);
    let collection: Collection<string, any> = new Collection();

    for (let file of folder) {
        let name = file.split(/\.ts$/g)[0];
        let data = await import(`../commands/${name}`);

        collection.set(name, data);
    }

    return collection;
};