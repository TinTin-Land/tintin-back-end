import { ApiCall } from "tsrpc";
import {getRepository} from "typeorm";
import {ReqGetThirdPartyUser, ResGetThirdPartyUser} from "../shared/protocols/PtlGetThirdPartyUser";
import {Third_party_user} from "../entity/third_party_user";


export default async function (call: ApiCall<ReqGetThirdPartyUser, ResGetThirdPartyUser>) {
    // Error
    if (call.req.user_email === '') {
        await call.error('Content is empty');
        return;
    }
    let time = new Date();


    const user_email = call.req.user_email;
    const third_party_user = await getRepository(Third_party_user).createQueryBuilder("third_party_user")
        .where("third_party_user.user_email = :user_email", { user_email })
        .getOne();

    await call.succ(<ResGetThirdPartyUser>{
        time: time,
        wj_open_id: third_party_user?.wj_open_id
    });
}
