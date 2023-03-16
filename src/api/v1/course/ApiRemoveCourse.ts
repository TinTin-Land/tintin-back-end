import { ApiCall } from "tsrpc";
import {getRepository} from "typeorm";
import {Course_details} from "../../../entity/course_details";
import {ReqRemoveCourse, ResRemoveCourse} from "../../../shared/protocols/v1/course/PtlRemoveCourse";

export default async function (call: ApiCall<ReqRemoveCourse, ResRemoveCourse>) {
    // Error
    if (call.req.course_name === '') {
        await call.error('Content is empty');
        return;
    }
    let time = new Date();

    const course_name = call.req.course_name;
    const course_details_list = await getRepository(Course_details).createQueryBuilder("course_details")
        .where("course_details.course_name = :course_name", { course_name })
        .getOne();

    if (course_details_list != undefined){
        await getRepository(Course_details).remove(course_details_list);
        await call.succ({
            time: time
        });
    }else{
        await call.error('Content is empty');
        return;
    }



}
