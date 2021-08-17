import { config } from "dotenv";
import { env } from "process";
import { IConfig } from "./IConfig";

config();

if (!(
    (env.Logger && ["ConsoleLogger", "FileLogger"].indexOf(env.Logger) !== -1)
)) {
    throw new Error("ENV is invalid.");
}

const Config: IConfig = {
    Logger: env.Logger as "ConsoleLogger" | "FileLogger",
    TimeFormat: env.TimeFormat || "DD-MM-YYYY HH:mm:ss",
}

export default Config;
