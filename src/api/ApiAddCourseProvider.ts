import { ApiCall } from "tsrpc";
import {getRepository} from "typeorm";
import {Course_provider} from "../entity/course_provider";
import {ReqAddCourseProvider, ResAddCourseProvider} from "../shared/protocols/PtlAddCourseProvider";

export default async function (call: ApiCall<ReqAddCourseProvider, ResAddCourseProvider>) {
    // Error
    if (call.req.course_provider_name === '') {
        await call.error('Content is empty');
        return;
    }
    let time = new Date();

    const course_provider = new Course_provider();
    course_provider.course_provider_name = call.req.course_provider_name;
    course_provider.course_provider_info =  call.req.course_provider_info;
    try {
        await getRepository(Course_provider).insert(course_provider);
    } catch (e) {
        await getRepository(Course_provider).save(course_provider);
    }
    // Success
    await call.succ({
        time: time
    });
}
