
# TSRPC API 接口文档

## 通用说明

- 所有请求方法均为 `POST`
- 所有请求均需加入以下 Header :
    - `Content-Type: application/json`

## 目录

- [增加数据](#/AddCourse)
- [增加数据](#/AddUser)
- [增加数据](#/AddWjUser)
- [增加数据](#/CheckEmail)
- [增加数据](#/EnrollCourse)
- [增加数据](#/EnrollUser)
- [增加数据](#/GetCourse)
- [增加数据](#/GetUser)
- [增加数据](#/GetUserCourseList)
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
    course_student_feedback: string,
    course_student_profile: string,
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

## 增加数据 <a id="/AddWjUser"></a>

此处的注释将会自动附带到生成的 API 文档中

**路径**
- POST `/AddWjUser`

**请求**
```ts
interface ReqAddWjUser {
    /** 要增加的消息内容 */
    openid: string,
    nickname: string,
    avatar: string
}
```

**响应**
```ts
interface ResAddWjUser {
    /** 服务端内容创建时间 */
    time: /*datetime*/ string,
    user_id: string
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
        course_image?: string,
        course_cycle?: string,
        course_state?: string,
        course_registration_deadline?: string,
        course_link?: string,
        course_description?: string,
        course_tab?: string,
        course_content_data?: string,
        course_teacher_info?: string,
        course_advantages?: string,
        course_provider?: string,
        course_student_feedback?: string,
        course_student_profile?: string,
        course_community_support?: string
    }
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

