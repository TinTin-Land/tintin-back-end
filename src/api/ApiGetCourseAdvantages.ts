import { ApiCall } from "tsrpc";
import {getRepository} from "typeorm";
import {Course_advantages} from "../entity/course_advantages";
import {ReqGetCourseAdvantages, ResGetCourseAdvantages} from "../shared/protocols/PtlGetCourseAdvantages";

export default async function (call: ApiCall<ReqGetCourseAdvantages, ResGetCourseAdvantages>) {
    let time = new Date();

    // const course_advantages_label = call.req.course_advantages_label
    const course_advantages = await getRepository(Course_advantages).createQueryBuilder("course_advantages")
        .getMany();

    await call.succ(<ResGetCourseAdvantages>{
        time: time,
        course_advantages: JSON.stringify(course_advantages)
    });
}
