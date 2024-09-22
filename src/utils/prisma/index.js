import {PrismaClient as GameDataClient} from "../../../prisma/game/generated/gameDataClient/index.js";
import {PrismaClient as UserDataClient} from "../../../prisma/game/generated/userDataClient/index.js";

export const gameDataClient = new GameDataClient({
    log: ["query", "info", "warn", "error"],
    errorFormat: "pretty",
});

export const userDtaClient = new UserDataClient({
    log: ["query", "info", "warn", "error"],
    errorFormat: "pretty",
});