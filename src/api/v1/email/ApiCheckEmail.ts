import { ApiCall } from "tsrpc";
import {ReqCheckEmail, ResCheckEmail} from "../../../shared/protocols/v1/email/PtlCheckEmail";
import {getCustomRepository, getRepository} from "typeorm";
import {UserEmail, UserEmailRepository} from "../../../entity/user_email";


const regEmail=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

export default async function (call: ApiCall<ReqCheckEmail, ResCheckEmail>) {
    let time = new Date();
    const email_check = regEmail.test(call.req.email);
    if (email_check){
        const email = call.req.email;
        const code = call.req.code;
        const result = await getCustomRepository(UserEmailRepository).findByEmailAndCode(email,code)
        if (result != undefined){
            const user = new UserEmail()
            user.email = email
            user.code = code
            // await getRepository(UserEmail).remove(user);
            await call.succ({
                state: true,
                time
            });
            return;
        }else{
            await call.succ({
                state: false,
                time
            });
            return;
        }
    }else{
        await call.error('email is error');
        return;
    }

}

