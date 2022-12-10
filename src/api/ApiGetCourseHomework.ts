import { ApiCall } from "tsrpc";
import { getRepository } from "typeorm";
import { Course_homework } from "../entity/course_homework";
import {ReqGetCourseHomework, ResGetCourseHomework} from "../shared/protocols/PtlGetCourseHomework";

export default async function (call: ApiCall<ReqGetCourseHomework, ResGetCourseHomework>) {
    // Error
    if (call.req.course_name === '') {
        await call.error('Content is empty');
        return;
    }
    let time = new Date();

    const course_name = call.req.course_name

    const course_homework = await getRepository(Course_homework).createQueryBuilder("course_homework")
        .where("course_homework.course_name = :course_name", { course_name })
        .getOne();

    await call.succ(<ResGetCourseHomework>{
        time: time,
        course_homework:course_homework
    });
}
