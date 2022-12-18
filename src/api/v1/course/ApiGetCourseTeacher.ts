import { ApiCall } from "tsrpc";
import {getRepository} from "typeorm";
import {Course_teacher} from "../../../entity/course_teacher";
import {ReqGetCourseTeacher, ResGetCourseTeacher} from "../../../shared/protocols/v1/course/PtlGetCourseTeacher";

export default async function (call: ApiCall<ReqGetCourseTeacher, ResGetCourseTeacher>) {
    // Error

    let time = new Date();

    const course_teacher = await getRepository(Course_teacher).createQueryBuilder("course_teacher")
        .getMany();

    // Success
    await call.succ({
        time: time,
        course_teacher_infos:JSON.stringify(course_teacher)
    });
}
