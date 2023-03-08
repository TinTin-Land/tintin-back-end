import { ApiCall } from "tsrpc";
import {getRepository} from "typeorm";
import {ReqGetUserBind, ResGetUserBind} from "../../../shared/protocols/v1/user/PtlGetUserBind";
import {User_bind} from "../../../entity/user_bind";


export default async function (call: ApiCall<ReqGetUserBind, ResGetUserBind>) {
    // Error
    if (call.req.user_email === '') {
        await call.error('Content is empty');
        return;
    }
    let time = new Date();

    const user_email = call.req.user_email;

    const user = await getRepository(User_bind).createQueryBuilder("user")
          .where("user.user_email = :user_email", { user_email })
          .getOne();


    await call.succ(<ResGetUserBind>{
        time: time,
        user_evm_address:user?.evm_address
    });
}
