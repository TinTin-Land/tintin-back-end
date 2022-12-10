// This is a demo code file
// Feel free to delete it

import {Column} from "typeorm";

/**
 * 增加数据
 * 此处的注释将会自动附带到生成的 API 文档中
 */
export interface ReqAddCourseHomework {
    /** 要增加的消息内容 */
    course_name: string;
    course_homework_1_id: string;
    course_homework_2_id: string;
    course_homework_3_id: string;
    course_homework_4_id: string;
    course_homework_5_id: string;
    course_homework_6_id: string;
    course_homework_7_id: string;
}

export interface ResAddCourseHomework {
    /** 服务端内容创建时间 */
    time: Date
}
