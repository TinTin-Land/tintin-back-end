import { ApiCall } from "tsrpc";
import {getRepository} from "typeorm";
import {
    ReqGetCourseCommunitySupport,
    ResGetCourseCommunitySupport
} from "../shared/protocols/PtlGetCourseCommunitySupport";
import {Course_community_support} from "../entity/course_community_support";

export default async function (call: ApiCall<ReqGetCourseCommunitySupport, ResGetCourseCommunitySupport>) {
    // Error

    let time = new Date();

    const course_community_support = await getRepository(Course_community_support).createQueryBuilder("course_community_support")
        .getMany();

    // Success
    await call.succ({
        time: time,
        course_community_support_info:JSON.stringify(course_community_support)
    });
}
