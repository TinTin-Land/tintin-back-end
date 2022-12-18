import { ApiCall } from "tsrpc";
import {getRepository} from "typeorm";
import {Course_survey_result} from "../../../entity/course_survey_result";
import {ReqGetCourseWjResult, ResGetCourseWjResult} from "../../../shared/protocols/v1/course/PtlGetCourseWjResult";


export default async function (call: ApiCall<ReqGetCourseWjResult, ResGetCourseWjResult>) {
    // Error
    if (call.req.course_name === '') {
        await call.error('Content is empty');
        return;
    }
    let time = new Date();


    const course_name = call.req.course_name;
    const course_survey_result = await getRepository(Course_survey_result).createQueryBuilder("course_survey_result")
        .where("course_survey_result.course_name = :course_name", { course_name })
        .getMany();

    let survey_result = []
    for (let i = 0; i < course_survey_result.length ;i++){
        survey_result.push(course_survey_result[i].survey_result)
    }

    await call.succ(<ResGetCourseWjResult>{
        time: time,
        unique_username:JSON.stringify(survey_result)
    });





}
