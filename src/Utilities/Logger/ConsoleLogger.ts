//import chalk from "chalk";
import chalk from "chalk";
import moment from "moment";
import Config from "../Config/Config";
import { ILogger } from "./ILogger";

class ConsoleLogger implements ILogger {
    public static TYPE_DEBUG = "DEBUG";
    public static TYPE_ERROR = "ERROR";
    public static TYPE_INFO = "INFO";

    public debug(...data: any) {
        this.log(ConsoleLogger.TYPE_DEBUG, ...data);
    }

    public error(...data: any) {
        this.log(ConsoleLogger.TYPE_ERROR, ...data);
    }

    public info(...data: any) {
        this.log(ConsoleLogger.TYPE_INFO, ...data);
    }

    private log(type: string, ...data: any) {
        const timestamp = moment().format(Config.TimeFormat);
        let typeFormatted;

        switch (type) {
            case ConsoleLogger.TYPE_ERROR: {
                typeFormatted = chalk.redBright(type);
            }
            break;
            case ConsoleLogger.TYPE_DEBUG: {
                typeFormatted = chalk.blueBright(type);
            }
            break;
            case ConsoleLogger.TYPE_INFO: {
                typeFormatted = chalk.yellow(type + " ");
            }
        }

        console.log(`[${timestamp}]`, typeFormatted, '|', ...data);

    }
}

export default new ConsoleLogger;
