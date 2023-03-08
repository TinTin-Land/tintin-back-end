import { ApiCall } from "tsrpc";
import axios from 'axios';
import {ReqGetTaUser, ResGetTaUser} from "../../../shared/protocols/v1/teachable/PtlGetTaUser";
const sdk = require('api')('@teachable/v1.1#5zxm7ezlb3yfsh1');

export default async function (call: ApiCall<ReqGetTaUser, ResGetTaUser>) {

    if (call.req.user_email === '') {
        await call.error('Content is empty');
        return;
    }


    let time = new Date();


    // const loop_get_user_id = async() => {
    //     sdk.auth('rX28HXFKA2aEA991WtHE5UlmSxMP98rW')
    //     sdk.listUsers({page: '1'})
    //         // @ts-ignore
    //         .then(async ({data}) => {
    //             const users = data.users
    //             for (let i = 0; i < users.length; i++) {
    //                 if (users[i].email == email) {
    //                     await call.succ({
    //                         time: time,
    //                         user_id: (users[i].id).toString()
    //                     });
    //                 }
    //                 if (i == users.length -1){
    //
    //                 }
    //             }
    //         })
    //         // @ts-ignore
    //         .catch(err => console.error(err));
    // }

    const email = call.req.user_email
    sdk.auth('rX28HXFKA2aEA991WtHE5UlmSxMP98rW')
    sdk.listUsers({page: '1'})
        // @ts-ignore
        .then(async ({data}) => {
            const users = data.users
            for (let i = 0; i < users.length; i++) {
                if (users[i].email == email) {
                    await call.succ({
                        time: time,
                        user_id: (users[i].id).toString()
                    });
                }
                if (i == users.length -1){
                }
            }
        })
        // @ts-ignore
        .catch(err => console.error(err));
}
