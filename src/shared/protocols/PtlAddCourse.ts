// This is a demo code file
// Feel free to delete it

import {Column} from "typeorm";

/**
 * 增加数据
 * 此处的注释将会自动附带到生成的 API 文档中
 */
export interface ReqAddCourse {
    /** 要增加的消息内容 */
    course_name: string;
    course_image:string;
    course_cycle:string;
    course_state:string;
    course_registration_deadline:string;
    course_link:string;
    course_description: string;
    course_tab: string;
    course_content_data: string;
    course_teacher_info: string;
    course_advantages: string;
    course_provider: string;
    course_student_feedback: string;
    course_student_profile: string;
    course_community_support: string;
}

export interface ResAddCourse {
    /** 服务端内容创建时间 */
    time: Date
}
