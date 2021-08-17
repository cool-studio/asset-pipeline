import Config from "../Config/Config";
import ConsoleLogger from "./ConsoleLogger";
import { ILogger } from "./ILogger";

interface LoggerMap {
    [key: string]: ILogger
}

const Loggers: LoggerMap = {
    "ConsoleLogger": ConsoleLogger
}

let Logger: ILogger;

if (Loggers.hasOwnProperty(Config.Logger)) {
    Logger = Loggers[Config.Logger];
} else {
    throw new Error("Invalid Logger Specified");
}

export default Logger;
