import { ApiCall } from "tsrpc";
import {getRepository} from "typeorm";
import {Course_provider} from "../../../entity/course_provider";
import {ReqGetCourseProvider, ResGetCourseProvider} from "../../../shared/protocols/v1/course/PtlGetCourseProvider";

export default async function (call: ApiCall<ReqGetCourseProvider, ResGetCourseProvider>) {
    // Error

    let time = new Date();

    const course_provider = await getRepository(Course_provider).createQueryBuilder("course_provider")
        .getMany();

    // Success
    await call.succ({
        time: time,
        course_provider_info:JSON.stringify(course_provider)
    });
}
