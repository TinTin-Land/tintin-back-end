
# TSRPC API 接口文档

## 通用说明

- 所有请求方法均为 `POST`
- 所有请求均需加入以下 Header :
    - `Content-Type: application/json`

## 目录

- [增加数据](#/AddCourse)
- [增加数据](#/AddCourseAdvantages)
- [增加数据](#/AddCourseHomework)
- [增加数据](#/AddCourseWj)
- [增加数据](#/AddUser)
- [增加数据](#/AddUserCourseWj)
- [增加数据](#/AddWjAccessToken)
- [增加数据](#/AddWjAnswersList)
- [增加数据](#/AddWjLoginCode)
- [增加数据](#/AddWjUser)
- [增加数据](#/CheckEmail)
- [增加数据](#/EnrollCourse)
- [增加数据](#/EnrollUser)
- [增加数据](#/GetCourse)
- [增加数据](#/GetCourseAdvantages)
- [增加数据](#/GetCourseHomework)
- [增加数据](#/GetCourseWj)
- [增加数据](#/GetCourseWjResult)
- [增加数据](#/GetThirdPartyUser)
- [增加数据](#/GetUser)
- [增加数据](#/GetUserCourseList)
- [增加数据](#/GetUserCourseWj)
- [增加数据](#/GetWjAccessToken)
- [增加数据](#/SendEmail)
- [增加数据](#/UpdateUser)

---

## 增加数据 <a id="/AddCourse"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/AddCourse`

**请求**
```ts
interface ReqAddCourse {
    /** 要增加的消息内容 */
    course_name: string,
    course_image: string,
    course_cycle: string,
    course_state: string,
    course_registration_deadline: string,
    course_link: string,
    course_description: string,
    course_tab: string,
    course_content_data: string,
    course_teacher_info: string,
    course_advantages: string,
    course_provider: string,
    course_student_profile_feedback: string,
    course_community_support: string
}
```

**响应**
```ts
interface ResAddCourse {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string
}
```

---

## 增加数据 <a id="/AddCourseAdvantages"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/AddCourseAdvantages`

**请求**
```ts
interface ReqAddCourseAdvantages {
    /** 要增加的消息内容 */
    course_advantages_label: string,
    course_advantages_content: string
}
```

**响应**
```ts
interface ResAddCourseAdvantages {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string
}
```

---

## 增加数据 <a id="/AddCourseHomework"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/AddCourseHomework`

**请求**
```ts
interface ReqAddCourseHomework {
    /** 要增加的消息内容 */
    course_name: string,
    course_homework_id: string
}
```

**响应**
```ts
interface ResAddCourseHomework {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string
}
```

---

## 增加数据 <a id="/AddCourseWj"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/AddCourseWj`

**请求**
```ts
interface ReqAddCourseWj {
    /** 要增加的消息内容 */
    course_name: string,
    course_wj_url_list: string
}
```

**响应**
```ts
interface ResAddCourseWj {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string
}
```

---

## 增加数据 <a id="/AddUser"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/AddUser`

**请求**
```ts
interface ReqAddUser {
    /** 要增加的消息内容 */
    username: string,
    user_email: string
}
```

**响应**
```ts
interface ResAddUser {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string
}
```

---

## 增加数据 <a id="/AddUserCourseWj"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/AddUserCourseWj`

**请求**
```ts
interface ReqAddUserCourseWj {
    /** 要增加的消息内容 */
    user_email: string,
    course_name: string
}
```

**响应**
```ts
interface ResAddUserCourseWj {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string
}
```

---

## 增加数据 <a id="/AddWjAccessToken"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/AddWjAccessToken`

**请求**
```ts
interface ReqAddWjAccessToken {

}
```

**响应**
```ts
interface ResAddWjAccessToken {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string,
    access_token: string
}
```

---

## 增加数据 <a id="/AddWjAnswersList"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/AddWjAnswersList`

**请求**
```ts
interface ReqAddWjAnswersList {
    /** 要增加的消息内容 */
    course_name: string
}
```

**响应**
```ts
interface ResAddWjAnswersList {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string
}
```

---

## 增加数据 <a id="/AddWjLoginCode"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/AddWjLoginCode`

**请求**
```ts
interface ReqAddWjLoginCode {
    /** 要增加的消息内容 */
    user_email: string
}
```

**响应**
```ts
interface ResAddWjLoginCode {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string,
    code: string
}
```

---

## 增加数据 <a id="/AddWjUser"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/AddWjUser`

**请求**
```ts
interface ReqAddWjUser {
    /** 要增加的消息内容 */
    user_email: string,
    openid: string
}
```

**响应**
```ts
interface ResAddWjUser {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string,
    user_id: number
}
```

---

## 增加数据 <a id="/CheckEmail"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/CheckEmail`

**请求**
```ts
interface ReqCheckEmail {
    /** 要增加的消息内容 */
    email: string,
    code: string
}
```

**响应**
```ts
interface ResCheckEmail {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string,
    state: boolean
}
```

---

## 增加数据 <a id="/EnrollCourse"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/EnrollCourse`

**请求**
```ts
interface ReqEnrollCourse {
    /** 要增加的消息内容 */
    user_id: string,
    course_id: string
}
```

**响应**
```ts
interface ResEnrollCourse {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string
}
```

---

## 增加数据 <a id="/EnrollUser"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/EnrollUser`

**请求**
```ts
interface ReqEnrollUser {
    /** 要增加的消息内容 */
    name: string,
    email: string,
    password: string,
    src: string
}
```

**响应**
```ts
interface ResEnrollUser {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string
}
```

---

## 增加数据 <a id="/GetCourse"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/GetCourse`

**请求**
```ts
interface ReqGetCourse {
    /** 要增加的消息内容 */
    course_name: string
}
```

**响应**
```ts
interface ResGetCourse {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string,
    course_details: {
        course_name?: string,
        course_cycle?: string,
        course_link?: string,
        course_state?: string,
        course_registration_start_date?: string,
        course_registration_deadline?: string,
        course_image?: string,
        course_description?: string,
        course_content_data?: string,
        course_tab?: string,
        course_advantages?: string,
        course_teacher_info?: string,
        course_provider?: string,
        course_student_profile_feedback?: string,
        course_student_profile?: string,
        course_community_support?: string
    }
}
```

---

## 增加数据 <a id="/GetCourseAdvantages"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/GetCourseAdvantages`

**请求**
```ts
interface ReqGetCourseAdvantages {
    /** 要增加的消息内容 */
    course_advantages_label: string
}
```

**响应**
```ts
interface ResGetCourseAdvantages {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string,
    course_advantages_content: string
}
```

---

## 增加数据 <a id="/GetCourseHomework"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/GetCourseHomework`

**请求**
```ts
interface ReqGetCourseHomework {
    /** 要增加的消息内容 */
    course_name: string
}
```

**响应**
```ts
interface ResGetCourseHomework {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string,
    course_homework: {
        course_name?: string,
        course_homework_id?: string
    }
}
```

---

## 增加数据 <a id="/GetCourseWj"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/GetCourseWj`

**请求**
```ts
interface ReqGetCourseWj {
    /** 要增加的消息内容 */
    course_name: string
}
```

**响应**
```ts
interface ResGetCourseWj {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string,
    course_wj_url_list: string
}
```

---

## 增加数据 <a id="/GetCourseWjResult"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/GetCourseWjResult`

**请求**
```ts
interface ReqGetCourseWjResult {
    /** 要增加的消息内容 */
    survey_id: string
}
```

**响应**
```ts
interface ResGetCourseWjResult {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string,
    wj_open_id: string
}
```

---

## 增加数据 <a id="/GetThirdPartyUser"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/GetThirdPartyUser`

**请求**
```ts
interface ReqGetThirdPartyUser {
    /** 要增加的消息内容 */
    user_email: string
}
```

**响应**
```ts
interface ResGetThirdPartyUser {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string,
    wj_open_id: string
}
```

---

## 增加数据 <a id="/GetUser"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/GetUser`

**请求**
```ts
interface ReqGetUser {
    /** 要增加的消息内容 */
    user_email: string
}
```

**响应**
```ts
interface ResGetUser {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string,
    user: {
        username?: string,
        user_email?: string,
        user_course_passport?: string,
        course_user?: boolean,
        description?: string,
        country?: string,
        roles?: string,
        experience?: string,
        achievements?: string,
        twitter?: string,
        github?: string,
        telegram?: string,
        privacy?: boolean
    }
}
```

---

## 增加数据 <a id="/GetUserCourseList"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/GetUserCourseList`

**请求**
```ts
interface ReqGetUserCourseList {
    /** 要增加的消息内容 */
    email: string
}
```

**响应**
```ts
interface ResGetUserCourseList {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string,
    courses: string
}
```

---

## 增加数据 <a id="/GetUserCourseWj"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/GetUserCourseWj`

**请求**
```ts
interface ReqGetUserCourseWj {
    /** 要增加的消息内容 */
    user_email: string,
    course_name: string
}
```

**响应**
```ts
interface ResGetUserCourseWj {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string,
    user_course_wj_url_list: string
}
```

---

## 增加数据 <a id="/GetWjAccessToken"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/GetWjAccessToken`

**请求**
```ts
interface ReqGetWjAccessToken {

}
```

**响应**
```ts
interface ResGetWjAccessToken {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string,
    access_token: string
}
```

---

## 增加数据 <a id="/SendEmail"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/SendEmail`

**请求**
```ts
interface ReqSendEmail {
    /** 要增加的消息内容 */
    email: string
}
```

**响应**
```ts
interface ResSendEmail {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string
}
```

---

## 增加数据 <a id="/UpdateUser"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/UpdateUser`

**请求**
```ts
interface ReqUpdateUser {
    /** 要增加的消息内容 */
    user: {
        username?: string,
        user_email?: string,
        user_course_passport?: string,
        course_user?: boolean,
        description?: string,
        country?: string,
        roles?: string,
        experience?: string,
        achievements?: string,
        twitter?: string,
        github?: string,
        telegram?: string,
        privacy?: boolean
    }
}
```

**响应**
```ts
interface ResUpdateUser {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string,
    user: {
        username?: string,
        user_email?: string,
        user_course_passport?: string,
        course_user?: boolean,
        description?: string,
        country?: string,
        roles?: string,
        experience?: string,
        achievements?: string,
        twitter?: string,
        github?: string,
        telegram?: string,
        privacy?: boolean
    }
}
```

