import { ApiCall } from "tsrpc";
import {getRepository} from "typeorm";
import {User_course_wj_url} from "../entity/user_course_wj_url";
import {ReqGetUserCourseWj, ResGetUserCourseWj} from "../shared/protocols/PtlGetUserCourseWj";

export default async function (call: ApiCall<ReqGetUserCourseWj, ResGetUserCourseWj>) {
    // Error
    if (call.req.user_email === '') {
        await call.error('Content is empty');
        return;
    }
    let time = new Date();


    const user_email = call.req.user_email;
    const course_name = call.req.course_name;
    const user_course_wj_url = await getRepository(User_course_wj_url).createQueryBuilder("user_course_wj_url")
        .where("user_course_wj_url.user_email = :user_email", { user_email })
        .andWhere('course_name = :course_name',{ course_name })
        .getOne();
    await call.succ(<ResGetUserCourseWj>{
        time: time,
        user_course_wj_url_list: user_course_wj_url?.user_course_wj_url_list
    });
}
