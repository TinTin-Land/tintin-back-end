import { ApiCall } from "tsrpc";

import axios from 'axios';
import {ReqEnrollCourse, ResEnrollCourse} from "../../../shared/protocols/v1/teachable/PtlEnrollCourse";

export default async function (call: ApiCall<ReqEnrollCourse, ResEnrollCourse>) {
    // Error
    if (call.req.user_id === '') {
        await call.error('Content is empty');
        return;
    }

    let time = new Date();

    const user_id = call.req.user_id;
    const course_id = call.req.course_id;

    const sdk = require('api')('@teachable/v1.1#5zxm7ezlb3yfsh1');

    sdk.auth('rX28HXFKA2aEA991WtHE5UlmSxMP98rW');
    // @ts-ignore
    sdk.enrollUser({user_id, course_id}).then(async ({data}) => {
        await call.succ({
            time: time
        });
    })


    // const api = axios.create({
    //     baseURL: 'https://developers.teachable.com/v1',
    //     timeout: 9999,
    //     headers: {
    //         accept: 'application/json',
    //         'content-type': 'application/json',
    //         apiKey: 'rX28HXFKA2aEA991WtHE5UlmSxMP98rW'
    //     },
    // });
    //
    // await api.post('/enroll',{
    //     user_id:call.req.user_id,
    //     course_id:call.req.course_id
    // })
    // Success

}
