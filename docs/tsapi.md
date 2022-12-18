
# TSRPC API 接口文档

## 通用说明

- 所有请求方法均为 `POST`
- 所有请求均需加入以下 Header :
    - `Content-Type: application/json`

## 目录

- v1
    - course
        - [增加数据](#/v1/course/AddCourse)
        - [增加数据](#/v1/course/AddCourseAdvantages)
        - [增加数据](#/v1/course/AddCourseCommunitySupport)
        - [增加数据](#/v1/course/AddCourseHomework)
        - [增加数据](#/v1/course/AddCourseProvider)
        - [增加数据](#/v1/course/AddCourseTeacher)
        - [增加数据](#/v1/course/AddCourseWj)
        - [增加数据](#/v1/course/GetCourse)
        - [增加数据](#/v1/course/GetCourseAdvantages)
        - [增加数据](#/v1/course/GetCourseCommunitySupport)
        - [增加数据](#/v1/course/GetCourseHomework)
        - [增加数据](#/v1/course/GetCourseProvider)
        - [增加数据](#/v1/course/GetCourseTeacher)
        - [增加数据](#/v1/course/GetCourseWj)
        - [增加数据](#/v1/course/GetCourseWjResult)
    - email
        - [增加数据](#/v1/email/CheckEmail)
        - [增加数据](#/v1/email/SendEmail)
    - teachable
        - [增加数据](#/v1/teachable/EnrollCourse)
        - [增加数据](#/v1/teachable/EnrollUser)
    - user
        - [增加数据](#/v1/user/AddUser)
        - [增加数据](#/v1/user/AddUserCourseWj)
        - [增加数据](#/v1/user/GetThirdPartyUser)
        - [增加数据](#/v1/user/GetUser)
        - [增加数据](#/v1/user/GetUserCourseList)
        - [增加数据](#/v1/user/GetUserCourseWj)
        - [增加数据](#/v1/user/UpdateUser)
    - wj
        - [增加数据](#/v1/wj/AddWjAccessToken)
        - [增加数据](#/v1/wj/AddWjAnswersList)
        - [增加数据](#/v1/wj/AddWjLoginCode)
        - [增加数据](#/v1/wj/AddWjUser)
        - [增加数据](#/v1/wj/GetWjAccessToken)

---

## v1

### course

#### 增加数据 <a id="/v1/course/AddCourse"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/v1/course/AddCourse`

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
    course_target_user_group: string,
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

#### 增加数据 <a id="/v1/course/AddCourseAdvantages"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/v1/course/AddCourseAdvantages`

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

#### 增加数据 <a id="/v1/course/AddCourseCommunitySupport"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/v1/course/AddCourseCommunitySupport`

**请求**
```ts
interface ReqAddCourseCommunitySupport {
    /** 要增加的消息内容 */
    course_community_support_name: string,
    course_community_support_info: string
}
```

**响应**
```ts
interface ResAddCourseCommunitySupport {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string
}
```

---

#### 增加数据 <a id="/v1/course/AddCourseHomework"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/v1/course/AddCourseHomework`

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

#### 增加数据 <a id="/v1/course/AddCourseProvider"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/v1/course/AddCourseProvider`

**请求**
```ts
interface ReqAddCourseProvider {
    /** 要增加的消息内容 */
    course_provider_name: string,
    course_provider_info: string
}
```

**响应**
```ts
interface ResAddCourseProvider {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string
}
```

---

#### 增加数据 <a id="/v1/course/AddCourseTeacher"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/v1/course/AddCourseTeacher`

**请求**
```ts
interface ReqAddCourseTeacher {
    /** 要增加的消息内容 */
    course_teacher_name: string,
    course_teacher_info: string
}
```

**响应**
```ts
interface ResAddCourseTeacher {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string
}
```

---

#### 增加数据 <a id="/v1/course/AddCourseWj"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/v1/course/AddCourseWj`

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

#### 增加数据 <a id="/v1/course/GetCourse"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/v1/course/GetCourse`

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

#### 增加数据 <a id="/v1/course/GetCourseAdvantages"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/v1/course/GetCourseAdvantages`

**请求**
```ts
interface ReqGetCourseAdvantages {

}
```

**响应**
```ts
interface ResGetCourseAdvantages {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string,
    course_advantages: string
}
```

---

#### 增加数据 <a id="/v1/course/GetCourseCommunitySupport"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/v1/course/GetCourseCommunitySupport`

**请求**
```ts
interface ReqGetCourseCommunitySupport {

}
```

**响应**
```ts
interface ResGetCourseCommunitySupport {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string,
    course_community_support_info: string
}
```

---

#### 增加数据 <a id="/v1/course/GetCourseHomework"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/v1/course/GetCourseHomework`

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

#### 增加数据 <a id="/v1/course/GetCourseProvider"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/v1/course/GetCourseProvider`

**请求**
```ts
interface ReqGetCourseProvider {

}
```

**响应**
```ts
interface ResGetCourseProvider {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string,
    course_provider_info: string
}
```

---

#### 增加数据 <a id="/v1/course/GetCourseTeacher"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/v1/course/GetCourseTeacher`

**请求**
```ts
interface ReqGetCourseTeacher {

}
```

**响应**
```ts
interface ResGetCourseTeacher {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string,
    course_teacher_infos: string
}
```

---

#### 增加数据 <a id="/v1/course/GetCourseWj"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/v1/course/GetCourseWj`

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

#### 增加数据 <a id="/v1/course/GetCourseWjResult"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/v1/course/GetCourseWjResult`

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

### email

#### 增加数据 <a id="/v1/email/CheckEmail"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/v1/email/CheckEmail`

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

#### 增加数据 <a id="/v1/email/SendEmail"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/v1/email/SendEmail`

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

### teachable

#### 增加数据 <a id="/v1/teachable/EnrollCourse"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/v1/teachable/EnrollCourse`

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

#### 增加数据 <a id="/v1/teachable/EnrollUser"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/v1/teachable/EnrollUser`

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

### user

#### 增加数据 <a id="/v1/user/AddUser"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/v1/user/AddUser`

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

#### 增加数据 <a id="/v1/user/AddUserCourseWj"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/v1/user/AddUserCourseWj`

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

#### 增加数据 <a id="/v1/user/GetThirdPartyUser"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/v1/user/GetThirdPartyUser`

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

#### 增加数据 <a id="/v1/user/GetUser"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/v1/user/GetUser`

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

#### 增加数据 <a id="/v1/user/GetUserCourseList"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/v1/user/GetUserCourseList`

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

#### 增加数据 <a id="/v1/user/GetUserCourseWj"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/v1/user/GetUserCourseWj`

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

#### 增加数据 <a id="/v1/user/UpdateUser"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/v1/user/UpdateUser`

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

---

### wj

#### 增加数据 <a id="/v1/wj/AddWjAccessToken"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/v1/wj/AddWjAccessToken`

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

#### 增加数据 <a id="/v1/wj/AddWjAnswersList"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/v1/wj/AddWjAnswersList`

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

#### 增加数据 <a id="/v1/wj/AddWjLoginCode"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/v1/wj/AddWjLoginCode`

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

#### 增加数据 <a id="/v1/wj/AddWjUser"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/v1/wj/AddWjUser`

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

#### 增加数据 <a id="/v1/wj/GetWjAccessToken"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/v1/wj/GetWjAccessToken`

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

