import { ApiCall } from "tsrpc";
import {getRepository} from "typeorm";
import {Course_wj_url} from "../entity/course_wj_url";
import {ReqGetCourseWj, ResGetCourseWj} from "../shared/protocols/PtlGetCourseWj";


export default async function (call: ApiCall<ReqGetCourseWj, ResGetCourseWj>) {
    // Error
    if (call.req.course_name === '') {
        await call.error('Content is empty');
        return;
    }
    let time = new Date();


    const course_name = call.req.course_name;
    const course_details = await getRepository(Course_wj_url).createQueryBuilder("course_wj_url")
        .where("course_wj_url.course_name = :course_name", { course_name })
        .getOne();
    await call.succ(<ResGetCourseWj>{
        time: time,
        course_wj_url_list: course_details?.course_wj_url_list
    });

}
