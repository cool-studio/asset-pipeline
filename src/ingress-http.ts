import { App } from "@tinyhttp/app";
import Logger from "./Utilities/Logger/Logger";

Logger.info("Initializing ingress-http");

const app = new App();

app
    .use((req, _, next) => {
        Logger.debug(`${req.method} ${req.path} - ${req.ip || "localhost"}`);
        next();
    })
    .get('/', (_, res) => {
        res.send("Hello World");
    })
    .listen(6969);
