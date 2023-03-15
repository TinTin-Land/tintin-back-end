import { ApiCall } from "tsrpc";
import {getRepository} from "typeorm";
import {Course_wj_url} from "../../../entity/course_wj_url";
import {ReqAddUserCourseWj, ResAddUserCourseWj} from "../../../shared/protocols/v1/user/PtlAddUserCourseWj";
import {User_course_wj_url} from "../../../entity/user_course_wj_url";
import {User_wj_login_code} from "../../../entity/user_wj_login_code";

const appid = 'tpidwOboHH9e';
const action = 'survey_collect';

export default async function (call: ApiCall<ReqAddUserCourseWj, ResAddUserCourseWj>) {
    // Error
    if (call.req.user_email === '') {
        await call.error('Content is empty');
        return;
    }
    let time = new Date();



    const course_name = call.req.course_name;
    const course_wj_survey_list = await getRepository(Course_wj_url).createQueryBuilder("course_wj_url")
        .where("course_wj_url.course_name = :course_name", { course_name })
        .getOne();

    if (course_wj_survey_list == undefined){
        await call.error('Content is empty');
        return;
    }else{
        const course_wj_survey_list_data = JSON.parse(course_wj_survey_list.course_wj_url_list);
        const user_email = call.req.user_email;
        const user_wj_login_code =  await getRepository(User_wj_login_code).createQueryBuilder("user_wj_login_code")
            .where("user_wj_login_code.user_email = :user_email", { user_email })
            .getOne();
        const code =  user_wj_login_code?.login_code;
        let course_wj_url_list = [];
        for (let i = 0; i < course_wj_survey_list_data.length;i++) {
            const survey_id = course_wj_survey_list_data[i].survey_id
            const survey_hash = course_wj_survey_list_data[i].survey_hash
            const url: string = `https://wj.qq.com/api/v2/redirect?appid=${appid}&code=${code}&action=${action}&survey_id=${survey_id}&survey_hash=${survey_hash}`;
            course_wj_url_list.push(url)
        };


        const user_course_wj_url = await getRepository(User_course_wj_url).createQueryBuilder("user_course_wj_url")
            .where("user_course_wj_url.user_email = :user_email", { user_email })
            .andWhere("user_course_wj_url.course_name = :course_name", { course_name })
            .getOne();


        if (user_course_wj_url != undefined){
            console.log("改变",course_wj_url_list)
            user_course_wj_url.user_course_wj_url_list = JSON.stringify(course_wj_url_list);
            await getRepository(User_course_wj_url).save(user_course_wj_url);
            await call.succ({
                time: time,
            });
        }else{
            console.log("新增",course_wj_url_list)
            const user_course_wj_url = new User_course_wj_url();
            user_course_wj_url.user_email = call.req.user_email;
            user_course_wj_url.course_name = call.req.course_name;
            user_course_wj_url.user_course_wj_url_list = JSON.stringify(course_wj_url_list);
            await getRepository(User_course_wj_url).insert(user_course_wj_url);
            await call.succ({
                time: time,
            });
        }
    }
}
