import { ApiCall } from "tsrpc";
import {getRepository} from "typeorm";
import {
    ReqAddCourseCommunitySupport,
    ResAddCourseCommunitySupport
} from "../../../shared/protocols/v1/course/PtlAddCourseCommunitySupport";
import {Course_community_support} from "../../../entity/course_community_support";

export default async function (call: ApiCall<ReqAddCourseCommunitySupport, ResAddCourseCommunitySupport>) {
    // Error
    if (call.req.course_community_support_name === '') {
        await call.error('Content is empty');
        return;
    }
    let time = new Date();

    const course_community_support = new Course_community_support();
    course_community_support.course_community_support_name = call.req.course_community_support_name;
    course_community_support.course_community_support_info =  call.req.course_community_support_info;
    try {
        await getRepository(Course_community_support).insert(course_community_support);
    } catch (e) {
        await getRepository(Course_community_support).save(course_community_support);
    }
    // Success
    await call.succ({
        time: time
    });
}
