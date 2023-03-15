import { ApiCall } from "tsrpc";
import {getRepository} from "typeorm";
import {Course_wj_url} from "../../../entity/course_wj_url";
import {ReqGetCourseWj, ResGetCourseWj} from "../../../shared/protocols/v1/course/PtlGetCourseWj";
import {ReqGetAllCourseWj, ResGetAllCourseWj} from "../../../shared/protocols/v1/course/PtlGetAllCourseWj";


export default async function (call: ApiCall<ReqGetAllCourseWj, ResGetAllCourseWj>) {
    // Error
    // if (call.req.course_name === '') {
    //     await call.error('Content is empty');
    //     return;
    // }
    let time = new Date();


    const course_details = await getRepository(Course_wj_url).createQueryBuilder("course_wj_url")
        .getMany()
    await call.succ(<ResGetAllCourseWj>{
        time: time,
        course_wj_url_list: JSON.stringify(course_details)
    });

}
