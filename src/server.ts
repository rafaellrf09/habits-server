import Fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./routes";

const app = Fastify({
    logger: true
})

app.register(cors);
app.register(appRoutes);

app.listen({
    port: 3333
}).then(() => {
    app.log.info("Server Running on port 3333");
}).catch((err) => {
    app.log.error(err);
})