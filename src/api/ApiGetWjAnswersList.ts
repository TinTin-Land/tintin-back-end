import { ApiCall } from "tsrpc";
import axios from "axios";
import {getRepository} from "typeorm";
import {Third_party_access_token} from "../entity/third_party_access_token";
import {ReqGetWjAnswersList, ResGetWjAnswersList} from "../shared/protocols/PtlGetWjAnswersList";

const appid = 'tpidwOboHH9e';

export default async function (call: ApiCall<ReqGetWjAnswersList, ResGetWjAnswersList>) {
    // Error
    if (call.req.survey_id === '') {
        await call.error('Content is empty');
        return;
    }
    let time = new Date();
    const id = 1;
    const third_party_access_token = await getRepository(Third_party_access_token).createQueryBuilder("third_party_access_token")
        .where("third_party_access_token.id = :id", { id })
        .getOne();
    const access_token = third_party_access_token?.wj_access_token;

    const survey_id = call.req.survey_id

    const api = axios.create({
        baseURL: 'https://open.wj.qq.com',
        timeout: 9999,
        headers: {
            'content-type': 'application/json',
        },
        params:{
            appid:`${appid}`,
            access_token:`${access_token}`,
            survey_id:Number(survey_id),
            per_page:20,
            last_answer_id:0,
        },
    });
    const response = await api.get(`/api/surveys/${survey_id}/answers`);


    console.log(response.data.data);


    await call.succ({
        time: time,
    });

}
