import { ApiCall } from "tsrpc";
import axios from "axios";
import {getRepository} from "typeorm";
import {Third_party_access_token} from "../entity/third_party_access_token";
import {ReqAddWjAnswersList, ResAddWjAnswersList} from "../shared/protocols/PtlAddWjAnswersList";
import {Third_party_user} from "../entity/third_party_user";
import {Course_wj_url} from "../entity/course_wj_url";
import {User_course_homework} from "../entity/user_course_homework";
import {Course_survey_result} from "../entity/course_survey_result";

const appid = 'tpidwOboHH9e';

export default async function (call: ApiCall<ReqAddWjAnswersList, ResAddWjAnswersList>) {
    // Error
    if (call.req.course_name === '') {
        await call.error('Content is empty');
        return;
    }
    let time = new Date();
    const id = 1;
    const third_party_access_token = await getRepository(Third_party_access_token).createQueryBuilder("third_party_access_token")
        .where("third_party_access_token.id = :id", { id })
        .getOne();
    const access_token = third_party_access_token?.wj_access_token;


    const course_name = call.req.course_name;
    const course_wj_url = await getRepository(Course_wj_url).createQueryBuilder("course_wj_url")
        .where("course_wj_url.course_name = :course_name", { course_name })
        .getOne();

    const course_wj_url_list = JSON.parse(<string>course_wj_url?.course_wj_url_list)



    for (let i = 0; i < course_wj_url_list.length;i++){
        const survey_id = course_wj_url_list[i].survey_id
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
        if (response.data.code == 'OK') {
            const length = response.data.data.total;
            let wj_open_id_array = [];
            for (let i = 0; i < length; i++) {
                const wj_open_id = response.data.data.list[i].third_party_user.respondent_id;
                wj_open_id_array.push(wj_open_id);
            }
            const course_survey_result = new Course_survey_result();
            course_survey_result.survey_id = course_wj_url_list[i].survey_id;
            course_survey_result.survey_result = JSON.stringify(wj_open_id_array);
            await getRepository(Course_survey_result).save(course_survey_result);
            await call.succ({
                time: time,
            });
        }else{
            await call.error('Content is empty');
            return;
        }
    }
}
