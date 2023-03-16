import { ApiCall } from "tsrpc";
import {getRepository} from "typeorm";
import {Course_wj_url} from "../../../entity/course_wj_url";
import {ReqRemoveCourseWj, ResRemoveCourseWj} from "../../../shared/protocols/v1/course/PtlRemoveCourseWj";

export default async function (call: ApiCall<ReqRemoveCourseWj, ResRemoveCourseWj>) {
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

    if(course_details != undefined){
        await getRepository(Course_wj_url).remove(course_details);
        await call.succ({
            time: time
        });
    }else {
        await call.error('Content is empty');
        return;
    }


}
