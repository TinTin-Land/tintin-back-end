import { ApiCall } from "tsrpc";
import {getRepository} from "typeorm";
import {Third_party_access_token} from "../entity/third_party_access_token";
import {ReqGetWjAccessToken, ResGetWjAccessToken} from "../shared/protocols/PtlGetWjAccessToken";


export default async function (call: ApiCall<ReqGetWjAccessToken, ResGetWjAccessToken>) {
    // Error
    const time = new Date();

    const id = 1;
    const third_party_access_token = await getRepository(Third_party_access_token).createQueryBuilder("third_party_access_token")
        .where("third_party_access_token.id = :id", { id })
        .getOne();

    await call.succ(<ResGetWjAccessToken>{
        time: time,
        access_token: third_party_access_token?.wj_access_token
    });
}
