import { ServiceProto } from 'tsrpc-proto';
import { ReqAddUser, ResAddUser } from './PtlAddUser';
import { ReqCheckEmail, ResCheckEmail } from './PtlCheckEmail';
import { ReqEnrollCourse, ResEnrollCourse } from './PtlEnrollCourse';
import { ReqEnrollUser, ResEnrollUser } from './PtlEnrollUser';
import { ReqGetUser, ResGetUser } from './PtlGetUser';
import { ReqGetUserCourseList, ResGetUserCourseList } from './PtlGetUserCourseList';
import { ReqSendEmail, ResSendEmail } from './PtlSendEmail';
import { ReqUpdateUser, ResUpdateUser } from './PtlUpdateUser';

export interface ServiceType {
    api: {
        "AddUser": {
            req: ReqAddUser,
            res: ResAddUser
        },
        "CheckEmail": {
            req: ReqCheckEmail,
            res: ResCheckEmail
        },
        "EnrollCourse": {
            req: ReqEnrollCourse,
            res: ResEnrollCourse
        },
        "EnrollUser": {
            req: ReqEnrollUser,
            res: ResEnrollUser
        },
        "GetUser": {
            req: ReqGetUser,
            res: ResGetUser
        },
        "GetUserCourseList": {
            req: ReqGetUserCourseList,
            res: ResGetUserCourseList
        },
        "SendEmail": {
            req: ReqSendEmail,
            res: ResSendEmail
        },
        "UpdateUser": {
            req: ReqUpdateUser,
            res: ResUpdateUser
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 1,
    "services": [
        {
            "id": 0,
            "name": "AddUser",
            "type": "api"
        },
        {
            "id": 1,
            "name": "CheckEmail",
            "type": "api"
        },
        {
            "id": 2,
            "name": "EnrollCourse",
            "type": "api"
        },
        {
            "id": 3,
            "name": "EnrollUser",
            "type": "api"
        },
        {
            "id": 4,
            "name": "GetUser",
            "type": "api"
        },
        {
            "id": 7,
            "name": "GetUserCourseList",
            "type": "api"
        },
        {
            "id": 5,
            "name": "SendEmail",
            "type": "api"
        },
        {
            "id": 6,
            "name": "UpdateUser",
            "type": "api"
        }
    ],
    "types": {
        "PtlAddUser/ReqAddUser": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "username",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "user_email",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlAddUser/ResAddUser": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "PtlCheckEmail/ReqCheckEmail": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "email",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "code",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlCheckEmail/ResCheckEmail": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 1,
                    "name": "state",
                    "type": {
                        "type": "Boolean"
                    }
                }
            ]
        },
        "PtlEnrollCourse/ReqEnrollCourse": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "user_id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "course_id",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlEnrollCourse/ResEnrollCourse": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "PtlEnrollUser/ReqEnrollUser": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "email",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "password",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "src",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlEnrollUser/ResEnrollUser": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "PtlGetUser/ReqGetUser": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "user_email",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlGetUser/ResGetUser": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 1,
                    "name": "user",
                    "type": {
                        "type": "Reference",
                        "target": "../interface/user/user"
                    }
                }
            ]
        },
        "../interface/user/user": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "username",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 1,
                    "name": "user_email",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 2,
                    "name": "user_course_passport",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 3,
                    "name": "course_user",
                    "type": {
                        "type": "Boolean"
                    },
                    "optional": true
                },
                {
                    "id": 4,
                    "name": "description",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 5,
                    "name": "country",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 6,
                    "name": "roles",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 7,
                    "name": "experience",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 8,
                    "name": "achievements",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 9,
                    "name": "twitter",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 10,
                    "name": "github",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 11,
                    "name": "telegram",
                    "type": {
                        "type": "String"
                    },
                    "optional": true
                },
                {
                    "id": 12,
                    "name": "privacy",
                    "type": {
                        "type": "Boolean"
                    },
                    "optional": true
                }
            ]
        },
        "PtlGetUserCourseList/ReqGetUserCourseList": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "email",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlGetUserCourseList/ResGetUserCourseList": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "PtlSendEmail/ReqSendEmail": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "email",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlSendEmail/ResSendEmail": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "PtlUpdateUser/ReqUpdateUser": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "user",
                    "type": {
                        "type": "Reference",
                        "target": "../interface/user/user"
                    }
                }
            ]
        },
        "PtlUpdateUser/ResUpdateUser": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                },
                {
                    "id": 1,
                    "name": "user",
                    "type": {
                        "type": "Reference",
                        "target": "../interface/user/user"
                    }
                }
            ]
        }
    }
};