import { ApiCall } from "tsrpc";
import {ReqAddUser, ResAddUser} from "../../../shared/protocols/v1/user/PtlAddUser";
import {User} from "../../../entity/user";
import {getRepository} from "typeorm";
import { nanoid } from 'nanoid'

export default async function (call: ApiCall<ReqAddUser, ResAddUser>) {
    // Error
    if (call.req.username === '') {
        await call.error('Content is empty');
        return;
    }
    let time = new Date();


    const user = new User();
    user.unique_username = nanoid();
    user.username = call.req.username;
    user.user_email = call.req.user_email;
    user.course_user = false;
    user.user_course_passport = '';
    user.description = '';
    user.country = '';
    user.roles = '';
    user.experience = '';
    user.achievements = '';
    user.twitter = '';
    user.github = '';
    user.telegram = '';
    user.privacy = false;
    try {
        await getRepository(User).insert(user);
    } catch (e) {
        await getRepository(User).save(user);
    }
    // Success
    await call.succ({
        time: time
    });
}
