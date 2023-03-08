import { ApiCall } from "tsrpc";
import {getRepository} from "typeorm";
import {ReqAddUserBind,ResAddUserBind} from "../../../shared/protocols/v1/user/PtlAddUserBind";
import {User_bind} from "../../../entity/user_bind";

export default async function (call: ApiCall<ReqAddUserBind, ResAddUserBind>) {
    // Error
    if (call.req.user_email === '') {
        await call.error('Content is empty');
        return;
    }
    let time = new Date();


    const user = new User_bind();
    user.user_email = call.req.user_email;
    user.evm_address = call.req.user_evm_address;
    try {
        await getRepository(User_bind).insert(user);
    } catch (e) {
        await getRepository(User_bind).save(user);
    }
    // Success
    await call.succ({
        time: time
    });
}
