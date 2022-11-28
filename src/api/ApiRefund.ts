import { ApiCall } from "tsrpc";
import axios from 'axios';
import {ReqEnrollUser, ResEnrollUser} from "../shared/protocols/PtlEnrollUser";

export default async function (call: ApiCall<ReqEnrollUser, ResEnrollUser>) {
    // Error
    if (call.req.name === '') {
        call.error('Content is empty');
        return;
    }

    let time = new Date();


    

    // Success
    call.succ({
        time: time
    });
}
