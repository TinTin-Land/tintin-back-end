import { ApiCall } from "tsrpc";
import axios from "axios";
import {getRepository} from "typeorm";
import {Third_party_user} from "../entity/third_party_user";
import {User_wj_login_code} from "../entity/user_wj_login_code";
import {ReqAddWjLoginCode, ResAddWjLoginCode} from "../shared/protocols/PtlAddWjLoginCode";
import {Third_party_access_token} from "../entity/third_party_access_token";

const appid = 'tpidwOboHH9e';

export default async function (call: ApiCall<ReqAddWjLoginCode, ResAddWjLoginCode>) {
    // Error
    if (call.req.user_email === '') {
        await call.error('Content is empty');
        return;
    }
    const time = new Date();
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

    const user_email =  call.req.user_email;
    const third_party_user = await getRepository(Third_party_user).createQueryBuilder("third_party_user")
        .where("third_party_user.user_email = :user_email", { user_email })
        .getOne();

    if (third_party_user == undefined ){
        await call.error('Content is empty');
        return;
    }else{
        const response = await api.post('/api/sso/code',{
            user_id:Number(third_party_user?.wj_open_id),
            scene_type:'respondent',
        });
        const user_wj_login_code = new User_wj_login_code();
        user_wj_login_code.user_email = third_party_user.user_email;
        user_wj_login_code.login_code = response.data.data.code;
        await getRepository(User_wj_login_code).save(user_wj_login_code);
        await call.succ({
            time,
            code:response.data.data.code
        });
    }
}
