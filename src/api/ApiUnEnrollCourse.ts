import { ApiCall } from "tsrpc";

import axios from 'axios';
import {ReqEnrollCourse, ResEnrollCourse} from "../shared/protocols/PtlEnrollCourse";

export default async function (call: ApiCall<ReqEnrollCourse, ResEnrollCourse>) {
    // Error
    if (call.req.user_id === '') {
        await call.error('Content is empty');
        return;
    }

    let time = new Date();


    const api = axios.create({
        baseURL: 'https://developers.teachable.com/v1',
        timeout: 9999,
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            apiKey: 'rX28HXFKA2aEA991WtHE5UlmSxMP98rW'
        },
    });

    await api.post('/unenroll',{
        user_id:call.req.user_id,
        course_id:call.req.course_id
    })
    // Success
    await call.succ({
        time: time
    });
}
