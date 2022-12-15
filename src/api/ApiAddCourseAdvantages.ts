import { ApiCall } from "tsrpc";
import {getRepository} from "typeorm";
import {ReqAddCourseAdvantages, ResAddCourseAdvantages} from "../shared/protocols/PtlAddCourseAdvantages";
import {Course_advantages} from "../entity/course_advantages";

export default async function (call: ApiCall<ReqAddCourseAdvantages, ResAddCourseAdvantages>) {
    // Error
    if (call.req.course_advantages_label === '') {
        await call.error('Content is empty');
        return;
    }
    let time = new Date();

    const course_advantages = new Course_advantages()
    course_advantages.course_advantages_label = call.req.course_advantages_label
    course_advantages.course_advantages_content =  call.req.course_advantages_content
    try {
        await getRepository(Course_advantages).insert(course_advantages);
    } catch (e) {
        await getRepository(Course_advantages).save(course_advantages);
    }
    // Success
    await call.succ({
        time: time
    });
}
