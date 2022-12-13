import { ApiCall } from "tsrpc";
import axios from "axios";
import {ReqAddWjUser, ResAddWjUser} from "../shared/protocols/PtlAddWjUser";
import {getRepository} from "typeorm";
import {Third_party_user} from "../entity/third_party_user";
import {Third_party_access_token} from "../entity/third_party_access_token";

const appid = 'tpidwOboHH9e';

export default async function (call: ApiCall<ReqAddWjUser, ResAddWjUser>) {
    // Error
    if (call.req.openid === '') {
        await call.error('Content is empty');
        return;
    }
    let time = new Date();


    const id = 1;
    const third_party_access_token = await getRepository(Third_party_access_token).createQueryBuilder("third_party_access_token")
        .where("third_party_access_token.id = :id", { id })
        .getOne();

    const access_token = third_party_access_token?.wj_access_token;
    const api = axios.create({
        baseURL: 'https://open.wj.qq.com',
        timeout: 9999,
        headers: {
            'content-type': 'application/json',
        },
        params:{
            appid:`${appid}`,
            access_token:`${access_token}`,
        },
    });
    const openid = call.req.openid;
    const nickname = call.req.nickname;
    const avatar = call.req.avatar;
    const response = await api.post('/api/sso/users',{
        openid,
        nickname,
        avatar,
    });
    const data = response.data.user_id;
    const third_party_user = new Third_party_user();
    third_party_user.user_email = call.req.user_email;
    third_party_user.teachable_user_email = call.req.user_email;
    third_party_user.wj_open_id = data;
    await getRepository(Third_party_user).insert(third_party_user);
    await call.succ({
        time: time,
        user_id:data
    });

}
