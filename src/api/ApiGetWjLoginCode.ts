import { ApiCall } from "tsrpc";
import axios from "axios";
import {getRepository} from "typeorm";
import {Third_party_user} from "../entity/third_party_user";
import {User_wj_login_code} from "../entity/user_wj_login_code";
import {ReqGetWjLoginCode, ResGetWjLoginCode} from "../shared/protocols/PtlGetWjLoginCode";

const appid = 'tpidwOboHH9e';

export default async function (call: ApiCall<ReqGetWjLoginCode, ResGetWjLoginCode>) {
    // Error
    if (call.req.openid === '') {
        await call.error('Content is empty');
        return;
    }
    const time = new Date();
    const access_token = await call.req.access_token;
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

    const user_email =  call.req.user_email;
    const third_party_user = await getRepository(Third_party_user).createQueryBuilder("third_party_user")
        .where("third_party_user.user_email = :user_email", { user_email })
        .getOne();

    if (third_party_user == undefined ){
        await call.error('Content is empty');
        return;
    }else{
        const response = await api.post('/api/sso/code',{
            user_id:third_party_user.wj_open_id,
            scene_type:'respondent',
        });
        const user_wj_login_code = new User_wj_login_code();
        user_wj_login_code.login_code = response.data.data.code
        await getRepository(User_wj_login_code).save(third_party_user);
        await call.succ({
            time,
            user_id:response.data.data.code
        });
    }
}
