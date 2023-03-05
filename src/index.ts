// IMPORTACIONES
import DiscordClient from '../src/structures/DiscordClient';
import {GatewayIntentBits, Partials} from "discord.js";
import * as dotenv from "dotenv";
import loader from "./handlers/point";

dotenv.config();

// CÓDIGO
const client = new DiscordClient({
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent,
    ],
    partials: [
        Partials.Message,
        Partials.User,
        Partials.Channel,
    ],
});

loader(client);