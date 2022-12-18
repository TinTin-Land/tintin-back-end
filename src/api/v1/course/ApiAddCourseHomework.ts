import { ApiCall } from "tsrpc";
import {getRepository} from "typeorm";
import {ReqAddCourseHomework, ResAddCourseHomework} from "../../../shared/protocols/v1/course/PtlAddCourseHomework";
import {Course_homework} from "../../../entity/course_homework";

export default async function (call: ApiCall<ReqAddCourseHomework, ResAddCourseHomework>) {
    // Error
    if (call.req.course_name === '') {
        await call.error('Content is empty');
        return;
    }
    let time = new Date();

    const course_homework = new Course_homework()
    course_homework.course_name = call.req.course_name
    course_homework.course_homework_id = call.req.course_homework_id
    try {
        await getRepository(Course_homework).insert(course_homework);
    } catch (e) {
        await getRepository(Course_homework).save(course_homework);
    }
    // Success
    await call.succ({
        time: time
    });
}
