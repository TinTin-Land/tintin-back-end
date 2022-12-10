// import { ApiCall } from "tsrpc";
// import axios from "axios";
// import {get_access_token} from "../oauth/wj";
// import {ReqAddWjUser, ResAddWjUser} from "../shared/protocols/PtlAddWjUser";
//
// const appid = 'tpidwOboHH9e';
//
// export default async function (call: ApiCall<ReqAddWjUser, ResAddWjUser>) {
//     // Error
//     if (call.req.openid === '') {
//         await call.error('Content is empty');
//         return;
//     }
//     let time = new Date();
//     const access_token = await get_access_token();
//     const get_url = async () =>{
//         const code = await get_login_code(user_id);
//         const url  = `https://wj.qq.com/api/v2/redirect?appid=${appid}&code=${code}&action=${action}&survey_id=10464231&survey_hash=427d`;
//         await call.succ({
//             time: time,
//             user_id:data
//         });
//     };
//
//
// }
