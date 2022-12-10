import { ApiCall } from "tsrpc";
import {getRepository} from "typeorm";
import {Course_details} from "../entity/course_details";
import {ReqGetCourse, ResGetCourse} from "../shared/protocols/PtlGetCourse";

export default async function (call: ApiCall<ReqGetCourse, ResGetCourse>) {
    // Error
    if (call.req.course_name === '') {
        await call.error('Content is empty');
        return;
    }
    let time = new Date();


    const course_name = call.req.course_name
    const course_details = await getRepository(Course_details).createQueryBuilder("course_details")
        .where("course_details.course_name = :course_name", { course_name })
        .getOne();

    await call.succ(<ResGetCourse>{
        time: time,
        course_details
    });
}
