import { ApiCall } from "tsrpc";
import {getRepository} from "typeorm";
import {Course_details} from "../../../entity/course_details";
import {ReqGetCourse, ResGetCourse} from "../../../shared/protocols/v1/course/PtlGetCourse";
import {ReqGetAllCourse, ResGetAllCourse} from "../../../shared/protocols/v1/course/PtlGetAllCourse";

export default async function (call: ApiCall<ReqGetAllCourse, ResGetAllCourse>) {
    // Error
    // if (call.req.course_name === '') {
    //     await call.error('Content is empty');
    //     return;
    // }
    let time = new Date();

    const course_details = await getRepository(Course_details).createQueryBuilder("course_details")
        .getMany()

    await call.succ({
        time: time,
        course_details: JSON.stringify(course_details),
    });
}
