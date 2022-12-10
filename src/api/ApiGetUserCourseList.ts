import { ApiCall } from "tsrpc";
import {ReqGetUserCourseList, ResGetUserCourseList} from "../shared/protocols/PtlGetUserCourseList";
const sdk = require('api')('@teachable/v1.1#5zxm7ezlb3yfsh1');

export default async function (call: ApiCall<ReqGetUserCourseList, ResGetUserCourseList>) {
    // Error
    if (call.req.email === '') {
        await call.error('Content is empty');
        return;
    }

    let time = new Date();

    sdk.auth('rX28HXFKA2aEA991WtHE5UlmSxMP98rW');
    sdk.listUsers()
        // @ts-ignore
        .then(({ data }) => {
            for (let i = 0; i < data.users.length; i++) {
                if (data.users[i].email == call.req.email){
                    sdk.showUser({user_id: data.users[i].id})
                        // @ts-ignore
                        .then(async ({data}) => {
                            await call.succ({
                                time: time,
                                courses:JSON.stringify(data.courses)
                            });
                        })
                        // @ts-ignore
                        .catch(err => console.error(err));
                }
            }

        })
        // @ts-ignore
        .catch(err => console.error(err));


}
