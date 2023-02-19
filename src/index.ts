// IMPORTACIONES
import {Client, GatewayIntentBits, Partials} from "discord.js";
import * as dotenv from "dotenv";

dotenv.config();

// CÓDIGO
const client = new Client({
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

client.login(process.env.TOKEN);