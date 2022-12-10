import { ApiCall } from "tsrpc";
import axios from "axios";
import {get_access_token} from "../oauth/wj";
import {ReqAddWjUser, ResAddWjUser} from "../shared/protocols/PtlAddWjUser";

const appid = 'tpidwOboHH9e';

export default async function (call: ApiCall<ReqAddWjUser, ResAddWjUser>) {
    // Error
    if (call.req.openid === '') {
        await call.error('Content is empty');
        return;
    }
    let time = new Date();
    const access_token = await get_access_token();
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
    await call.succ({
        time: time,
        user_id:data
    });

}
