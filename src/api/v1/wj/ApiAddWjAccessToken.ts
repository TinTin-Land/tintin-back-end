import { ApiCall } from "tsrpc";
import axios from "axios";
import {getRepository} from "typeorm";
import {Third_party_access_token} from "../../../entity/third_party_access_token";
import {ReqAddWjAccessToken, ResAddWjAccessToken} from "../../../shared/protocols/v1/wj/PtlAddWjAccessToken";

const appid = 'tpidwOboHH9e';
const secret = 'T7O5Y4hWBE37Nt95BWpWiAWWMIgYmpy2';

export default async function (call: ApiCall<ReqAddWjAccessToken, ResAddWjAccessToken>) {
    const time = new Date();
    const api = axios.create({
        baseURL: 'https://open.wj.qq.com',
        timeout: 9999,
        headers: {
            'content-type': 'application/json',
        },
    });
    const response = await api.get(`/api/oauth2/access_token?appid=${appid}&secret=${secret}&grant_type=client_credential`);
    const data = response.data.data.access_token;

    const app_name = "wj"
    const third_party_access_token = await getRepository(Third_party_access_token).createQueryBuilder("third_party_access_token")
        .where("third_party_access_token.app_name = :app_name", { app_name })
        .getOne();


    if (third_party_access_token != undefined){
        third_party_access_token.wj_access_token = data
        await getRepository(Third_party_access_token).save(third_party_access_token);
        await call.succ({
            time: time,
            access_token:data
        });

    }else{
        const third_party_access_token = new Third_party_access_token()
        third_party_access_token.app_name = "wj"
        third_party_access_token.wj_access_token = data
        await getRepository(Third_party_access_token).insert(third_party_access_token);
        await call.succ({
            time: time,
            access_token:data
        });
    }


}
