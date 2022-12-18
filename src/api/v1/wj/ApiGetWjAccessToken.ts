import { ApiCall } from "tsrpc";
import {getRepository} from "typeorm";
import {Third_party_access_token} from "../../../entity/third_party_access_token";
import {ReqGetWjAccessToken, ResGetWjAccessToken} from "../../../shared/protocols/v1/wj/PtlGetWjAccessToken";


export default async function (call: ApiCall<ReqGetWjAccessToken, ResGetWjAccessToken>) {
    // Error
    const time = new Date();

    const app_name = 'wj'
    const third_party_access_token = await getRepository(Third_party_access_token).createQueryBuilder("third_party_access_token")
        .where("third_party_access_token.app_name = :app_name", { app_name })
        .getOne();

    await call.succ(<ResGetWjAccessToken>{
        time: time,
        access_token: third_party_access_token?.wj_access_token
    });
}
