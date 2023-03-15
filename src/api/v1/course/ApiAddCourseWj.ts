import { ApiCall } from "tsrpc";
import {ReqAddCourseWj, ResAddCourseWj} from "../../../shared/protocols/v1/course/PtlAddCourseWj";
import {getRepository} from "typeorm";
import {Course_wj_url} from "../../../entity/course_wj_url";

export default async function (call: ApiCall<ReqAddCourseWj, ResAddCourseWj>) {
    // Error
    if (call.req.course_name === '') {
        await call.error('Content is empty');
        return;
    }
    let time = new Date();
    const course_name =  call.req.course_name

    const course_details = await getRepository(Course_wj_url).createQueryBuilder("course_wj_url")
        .where("course_wj_url.course_name = :course_name", { course_name })
        .getOne();

    const course_wj_url = new Course_wj_url()
    course_wj_url.course_name = call.req.course_name;
    course_wj_url.course_wj_url_list = call.req.course_wj_url_list;
    
    if(course_details == undefined){
        await getRepository(Course_wj_url).insert(course_wj_url);
    }else {
        await getRepository(Course_wj_url).save(course_wj_url);
    }
    await call.succ({
        time: time,
    });

}
