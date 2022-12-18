import { ApiCall } from "tsrpc";
import {getRepository} from "typeorm";
import {ReqAddCourseTeacher, ResAddCourseTeacher} from "../../../shared/protocols/v1/course/PtlAddCourseTeacher";
import {Course_teacher} from "../../../entity/course_teacher";

export default async function (call: ApiCall<ReqAddCourseTeacher, ResAddCourseTeacher>) {
    // Error
    if (call.req.course_teacher_name === '') {
        await call.error('Content is empty');
        return;
    }
    let time = new Date();

    const course_teacher = new Course_teacher();
    course_teacher.course_teacher_name = call.req.course_teacher_name;
    course_teacher.course_teacher_info =  call.req.course_teacher_info;
    try {
        await getRepository(Course_teacher).insert(course_teacher);
    } catch (e) {
        await getRepository(Course_teacher).save(course_teacher);
    }
    // Success
    await call.succ({
        time: time
    });
}
