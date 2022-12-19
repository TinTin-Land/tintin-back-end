import axios from "axios";
import {getRepository} from "typeorm";
import {Third_party_access_token} from "../entity/third_party_access_token";

const refresh_app_access_token = () =>{
    setInterval(async () => {
        await refresh_wj_access_token()
    },1000*60*119)
}

const refresh_wj_access_token  = async () =>{
    const appid = 'tpidwOboHH9e';
    const secret = 'T7O5Y4hWBE37Nt95BWpWiAWWMIgYmpy2';
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
        console.log("refresh successful")
    }else{
        const third_party_access_token = new Third_party_access_token()
        third_party_access_token.app_name = "wj"
        third_party_access_token.wj_access_token = data
        await getRepository(Third_party_access_token).insert(third_party_access_token);
        console.log("refresh successful")
    }
}


export {
    refresh_app_access_token
}
