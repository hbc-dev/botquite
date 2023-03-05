import { Client, Collection } from "discord.js";
import TextCommand from "./TextCommand";

type TextCommandsCollection = Collection<string, TextCommand>;

export default class DiscordClient extends Client {
    public text_commands: TextCommandsCollection = new Collection();

    addTextCommands(commands: TextCommandsCollection): this {
        this.text_commands.merge(
            commands,
            value => ({keep: true, value}),
            value => ({keep: true, value}),
            (first, second) => ({keep: true, value: second}),
        );

        return this;
    }
}