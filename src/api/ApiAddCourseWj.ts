import { ApiCall } from "tsrpc";
import {ReqAddCourseWj, ResAddCourseWj} from "../shared/protocols/PtlAddCourseWj";
import {getRepository} from "typeorm";
import {Course_wj_url} from "../entity/course_wj_url";

export default async function (call: ApiCall<ReqAddCourseWj, ResAddCourseWj>) {
    // Error
    if (call.req.course_name === '') {
        await call.error('Content is empty');
        return;
    }
    let time = new Date();
    const course_wj_url = new Course_wj_url()
    course_wj_url.course_name = call.req.course_name;
    course_wj_url.course_wj_url_list = call.req.course_wj_url_list;
    await getRepository(Course_wj_url).insert(course_wj_url);
    await call.succ({
        time: time,
    });

}
