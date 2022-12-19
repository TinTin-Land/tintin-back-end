import { ApiCall } from "tsrpc";
import {ReqGetCourseId, ResGetCourseId} from "../../../shared/protocols/v1/teachable/PtlGetCourseId";
const sdk = require('api')('@teachable/v1.1#5zxm7ezlb3yfsh1');

export default async function (call: ApiCall<ReqGetCourseId, ResGetCourseId>) {

    if (call.req.course_name === '') {
        await call.error('Content is empty');
        return;
    }


    let time = new Date();
    const course_name = call.req.course_name;
    sdk.auth('rX28HXFKA2aEA991WtHE5UlmSxMP98rW');
    sdk.listCourses({
        name: course_name,
        is_published: 'true'
    })
        // @ts-ignore
        .then(async ({data}) => {
            await call.succ({
                time: time,
                course_id: (data.courses[0].id).toString()
            });
        })
        // @ts-ignore
        .catch(err => console.error(err));


}

