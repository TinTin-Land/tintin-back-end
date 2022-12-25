import * as path from "path";
import { HttpServer } from "tsrpc";
import { serviceProto } from "./shared/protocols/serviceProto";
import {createConnection} from "typeorm";
import {User} from "./entity/user";
import {UserEmail} from "./entity/user_email";
import {Course_details} from "./entity/course_details";
import {Course_homework} from "./entity/course_homework";
import {Course_wj_url} from "./entity/course_wj_url";
import {Third_party_user} from "./entity/third_party_user";
import {Third_party_access_token} from "./entity/third_party_access_token";
import {User_course_wj_url} from "./entity/user_course_wj_url";
import {User_wj_login_code} from "./entity/user_wj_login_code";
import {Course_survey_result} from "./entity/course_survey_result";
import {Course_advantages} from "./entity/course_advantages";
import {Course_teacher} from "./entity/course_teacher";
import {Course_provider} from "./entity/course_provider";
import {Course_community_support} from "./entity/course_community_support";
import {refresh_app_access_token} from "./scripts";

// Create the Server
const server = new HttpServer(serviceProto, {
    port: 3010,
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
        port: 5433,
        username: "postgres",
        password: "123456",
        database: "postgres",
        entities: [
            User,UserEmail,Course_details,Course_homework,Course_wj_url,Course_survey_result,Course_advantages,
            Course_teacher,Course_provider,Course_community_support,
            Third_party_user,Third_party_access_token,
            User_course_wj_url,User_wj_login_code
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
    await refresh_app_access_token();
};
main();
