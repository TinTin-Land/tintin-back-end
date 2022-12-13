import { ApiCall } from "tsrpc";
import {getRepository} from "typeorm";
import {Course_survey_result} from "../entity/course_survey_result";
import {ReqGetCourseWjResult, ResGetCourseWjResult} from "../shared/protocols/PtlGetCourseWjResult";


export default async function (call: ApiCall<ReqGetCourseWjResult, ResGetCourseWjResult>) {
    // Error
    if (call.req.survey_id === '') {
        await call.error('Content is empty');
        return;
    }
    let time = new Date();


    const survey_id = call.req.survey_id;
    const course_survey_result = await getRepository(Course_survey_result).createQueryBuilder("course_survey_result")
        .where("course_wj_url.survey_id = :survey_id", { survey_id })
        .getOne();

    await call.succ(<ResGetCourseWjResult>{
        time: time,
        wj_open_id: course_survey_result?.survey_result
    });





}
