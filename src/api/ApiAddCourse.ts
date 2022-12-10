import { ApiCall } from "tsrpc";
import {getRepository} from "typeorm";
import {Course_details} from "../entity/course_details";
import {ReqAddCourse, ResAddCourse} from "../shared/protocols/PtlAddCourse";

export default async function (call: ApiCall<ReqAddCourse, ResAddCourse>) {
    // Error
    if (call.req.course_name === '') {
        await call.error('Content is empty');
        return;
    }
    let time = new Date();

    const course_details = new Course_details()
    course_details.course_name = call.req.course_name
    course_details.course_image = call.req.course_image
    course_details.course_cycle = call.req.course_cycle
    course_details.course_state = call.req.course_state
    course_details.course_registration_deadline = call.req.course_registration_deadline
    course_details.course_link = call.req.course_link
    course_details.course_description = call.req.course_description
    course_details.course_tab = call.req. course_tab
    course_details.course_content_data = call.req.course_content_data
    course_details.course_teacher_info = call.req.course_teacher_info
    course_details.course_advantages = call.req.course_advantages
    course_details.course_provider = call.req.course_provider
    course_details.course_student_feedback = call.req.course_student_feedback
    course_details.course_student_profile = call.req.course_student_profile
    course_details.course_community_support = call.req.course_community_support
    try {
        await getRepository(Course_details).insert(course_details);
    } catch (e) {
        await getRepository(Course_details).save(course_details);
    }
    // Success
    await call.succ({
        time: time
    });
}
