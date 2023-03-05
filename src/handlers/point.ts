import { Client } from 'discord.js';
import DiscordClient from '../structures/DiscordClient';
import TextCommandsLoader from './commands';
import EventsLoader from './events';

export default async function loader(client: DiscordClient): Promise<any> {
    client.addTextCommands(await TextCommandsLoader());
    await EventsLoader(client);

    client.login(process.env.TOKEN);
}