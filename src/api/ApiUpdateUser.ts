import { ApiCall } from "tsrpc";
import {ReqUpdateUser, ResUpdateUser} from "../shared/protocols/PtlUpdateUser";
import {getRepository} from "typeorm";
import {User} from "../entity/user";


export default async function (call: ApiCall<ReqUpdateUser, ResUpdateUser>) {
    // Error
    if (call.req.user.user_email === '') {
        call.error('Content is empty');
        return;
    }
    let time = new Date();


    const user_email = call.req.user.user_email

    let user = await getRepository(User).createQueryBuilder("user")
        .where("user.user_email = :user_email", { user_email })
        .getOne();

    if (user == undefined){
        await call.error('user undefined');
        return;
    }else{
        user.username = call.req.user.username;
        user.user_course_passport = call.req.user.user_course_passport;
        user.course_user = call.req.user.course_user;
        user.description = call.req.user.description;
        user.country = call.req.user.country;
        user.roles = call.req.user.roles;
        user.experience = call.req.user.experience;
        user.achievements = call.req.user.achievements;
        user.twitter = call.req.user.twitter;
        user.github = call.req.user.github;
        user.telegram = call.req.user.telegram;
        user.privacy = call.req.user.privacy;
        await getRepository(User).save(user);
        await call.succ(<ResUpdateUser>{
            time: time,
            user:call.req.user
        });
    }
}
