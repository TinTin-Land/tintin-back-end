import { ApiCall } from "tsrpc";
import {User} from "../../../entity/user";
import {getRepository} from "typeorm";
import {ReqGetUser, ResGetUser} from "../../../shared/protocols/v1/user/PtlGetUser";


export default async function (call: ApiCall<ReqGetUser, ResGetUser>) {
    // Error
    if (call.req.user_email === '') {
        await call.error('Content is empty');
        return;
    }
    let time = new Date();

    const user_email = call.req.user_email;

    const user = await getRepository(User).createQueryBuilder("user")
          .where("user.user_email = :user_email", { user_email })
          .getOne();


    await call.succ(<ResGetUser>{
        time: time,
        user:user
    });
}
