import { ApiCall } from "tsrpc";
import axios from 'axios';
import {ReqEnrollUser, ResEnrollUser} from "../shared/protocols/PtlEnrollUser";

export default async function (call: ApiCall<ReqEnrollUser, ResEnrollUser>) {
    // Error
    if (call.req.name === '') {
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

    await api.post('/users',{
        name: call.req.name,
        email: call.req.email,
        password: call.req.password,
        src: call.req.src
    })
    // Success
    await call.succ({
        time: time
    });
}
