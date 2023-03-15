import { ethers } from "ethers";
import { ApiCall } from "tsrpc";
import {ReqCheckTx, ResCheckTx} from "../../../shared/protocols/v1/tx/PtlCheckTx";

export default async function (call: ApiCall<ReqCheckTx, ResCheckTx>) {
    // Error
    if (call.req.tx_hash === '') {
        await call.error('Content is empty');
        return;
    }

    let time = new Date();
    const provider = new ethers.providers.JsonRpcProvider('https://matic-mumbai.chainstacklabs.com');
    console.log("provider",provider)
    const transaction_result = await provider.waitForTransaction(call.req.tx_hash);
    console.log("transaction_result",transaction_result)
    if (transaction_result.status) {
        const tx_result = await provider.getTransaction(call.req.tx_hash)
        console.log("tx_result",tx_result)
        const user_id = call.req.user_id;
        const course_id = call.req.course_id;
        const sdk = require('api')('@teachable/v1.1#5zxm7ezlb3yfsh1');
        sdk.auth('rX28HXFKA2aEA991WtHE5UlmSxMP98rW');
        // @ts-ignore
        sdk.enrollUser({user_id, course_id}).then(async ({data}) => {
            await call.succ({
                time: time
            });
        })
    }else {
        await call.error('error');
        return;
    }
}
