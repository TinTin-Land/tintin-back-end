import { ApiCall } from "tsrpc";
import {getRepository} from "typeorm";
import {ReqAddCourseHomework, ResAddCourseHomework} from "../shared/protocols/PtlAddCourseHomework";
import {Course_homework} from "../entity/course_homework";

export default async function (call: ApiCall<ReqAddCourseHomework, ResAddCourseHomework>) {
    // Error
    if (call.req.course_name === '') {
        await call.error('Content is empty');
        return;
    }
    let time = new Date();

    const course_homework = new Course_homework()
    course_homework.course_name = call.req.course_name
    course_homework.course_homework_1_id = call.req.course_homework_1_id
    course_homework.course_homework_2_id = call.req.course_homework_2_id
    course_homework.course_homework_3_id = call.req.course_homework_3_id
    course_homework.course_homework_4_id = call.req.course_homework_4_id
    course_homework.course_homework_5_id = call.req.course_homework_5_id
    course_homework.course_homework_6_id = call.req.course_homework_6_id
    course_homework.course_homework_7_id = call.req.course_homework_6_id
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
