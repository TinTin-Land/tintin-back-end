import * as path from "path";
import { HttpServer } from "tsrpc";
import { serviceProto } from "./shared/protocols/serviceProto";
import {createConnection} from "typeorm";
import {User} from "./entity/user";
import {UserEmail} from "./entity/user_email";

// Create the Server
const server = new HttpServer(serviceProto, {
    port: 3009,
    // Remove this to use binary mode (remove from the client too)
    json: true
});

// Initialize before server start
async function init() {
    // Auto implement APIs
    await server.autoImplementApi(path.resolve(__dirname, 'api'));

    // TODO
    // Prepare something... (e.g. connect the db)
    createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "123456",
        database: "postgres",
        entities: [
            User,UserEmail
        ],
        synchronize: true,
        logging: false
    }).then(async (connection) => {
        console.log("TsRPC Connect PostgreSQL Successed!");
    }).catch(error => console.log(error));
};

// Entry function
async function main() {
    await init();
    await server.start();
};
main();
