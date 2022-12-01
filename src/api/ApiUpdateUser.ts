import { ApiCall } from "tsrpc";
import {ReqUpdateUser, ResUpdateUser} from "../shared/protocols/PtlUpdateUser";
import {getRepository} from "typeorm";
import {User} from "../entity/user";


export default async function (call: ApiCall<ReqUpdateUser, ResUpdateUser>) {
    // Error
    if (call.req.user.user_email === '') {
        await call.error('Content is empty');
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
        if (call.req.user.username != null) {
            user.username = call.req.user.username;
        }
        if (call.req.user.user_course_passport != null) {
            user.user_course_passport = call.req.user.user_course_passport;
        }
        if (call.req.user.course_user) {
            user.course_user = call.req.user.course_user;
        }
        if (call.req.user.description != null) {
            user.description = call.req.user.description;
        }
        if (call.req.user.country != null) {
            user.country = call.req.user.country;
        }
        if (call.req.user.roles != null) {
            user.roles = call.req.user.roles;
        }
        if (call.req.user.experience != null) {
            user.experience = call.req.user.experience;
        }
        if (call.req.user.achievements != null) {
            user.achievements = call.req.user.achievements;
        }
        if (call.req.user.twitter != null) {
            user.twitter = call.req.user.twitter;
        }
        if (call.req.user.github != null) {
            user.github = call.req.user.github;
        }
        if (call.req.user.telegram != null) {
            user.telegram = call.req.user.telegram;
        }
        if (call.req.user.privacy) {
            user.privacy = call.req.user.privacy;
        }
        await getRepository(User).save(user);
        await call.succ(<ResUpdateUser>{
            time: time,
            user:call.req.user
        });
    }
}
