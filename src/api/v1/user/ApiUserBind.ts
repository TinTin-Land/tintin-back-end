import { ApiCall } from "tsrpc";
import { ReqUserBind, ResUserBind } from "../../../shared/protocols/v1/user/PtlUserBind";

export default async function (call: ApiCall<ReqUserBind, ResUserBind>) {
    // TODO
    call.error('API Not Implemented');
}