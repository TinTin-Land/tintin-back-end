import { ApiCall } from "tsrpc";
import * as nodemailer from 'nodemailer';
import {UserEmail} from "../../../entity/user_email";
import {getRepository} from "typeorm";
import {ReqSendEmail, ResSendEmail} from "../../../shared/protocols/v1/email/PtlSendEmail";


const regEmail=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
const randomFns=()=> { // 生成6位随机数
    let code = '';
    for(let i= 0;i<6;i++){
        code += parseInt(String(Math.random() * 10));
    }
    return code;
};



// This is a demo code file
// Feel free to delete it

export default async function (call: ApiCall<ReqSendEmail, ResSendEmail>) {
    // Error
    let time = new Date();
    const email_check = regEmail.test(call.req.email);
    if (email_check){
        const code = randomFns();
        const transporter = nodemailer.createTransport({
            host: 'smtp.larksuite.com',
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: 'email@tintinland.com', // generated ethereal user
                pass: 'Ubi0am7rSq7qNPvb', // generated ethereal password
            },
        });
        const email = call.req.email
        const email_contont = `
<tbody>
<tr>
    <td width="100%">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
            <tbody>
            <tr>
                <td>
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px"
                           align="center">
                        <tbody>
                        <tr>
                            <td role="modules-container"
                                style="padding:0px 0px 0px 0px;color:#f0f0f0;text-align:left;background-color:#ffffff"
                                bgcolor="#000" width="100%" align="left">
                                <table class="m_6746742989523138337preheader" role="module" border="0" cellpadding="0"
                                       cellspacing="0" width="100%"
                                       style="display:none!important;opacity:0;color:transparent;height:0;width:0">
                                    <tbody>
                                    <tr>
                                        <td role="module-content">
                                            <p>Transforming a new
                                                generation of gameplay
                                                and digital content.</p>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <table class="m_6746742989523138337wrapper" role="module" border="0" cellpadding="0"
                                       cellspacing="0" width="100%" style="table-layout:fixed">
                                    <tbody>
                                    <tr>
                                        <td style="font-size:6px;line-height:10px;padding:0px" valign="top"
                                            align="center">
                                            <img class="m_6746742989523138337max-width" border="0"
                                                 style="display:block;color:#ffffff;text-decoration:none;font-family:&#39;Roboto&#39;,Helvetica,arial,sans-serif;font-size:16px;width:100%;height:auto!important"
                                                 src="https://tintinland.com/about%20us.png"
                                                 alt="TinTinLand" width="300">
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <table role="module" border="0" cellpadding="0" cellspacing="0" width="100%"
                                       style="table-layout:fixed">
                                    <tbody>
                                    <tr>
                                        <td style="background-color:#ffffff;padding:0px 0px 0px 0px;line-height:22px;text-align:left;border-bottom:3px solid #f0f0f0;max-width:600px"
                                            height="100%" valign="top" bgcolor="#FFFFFF">
                                            <div>
                                                <div style="margin-top:12px">
                                                    <div style="margin-top:24px;color:#1e1e1e;font-family:inherit;text-align:left">
                                                        <div style="margin-top:48px;color:#1e1e1e;font-family:inherit;text-align:left">
                                                            <div style="text-align:center">
<span style="color:#1e1e1e;font-size:32px;font-family:&#39;Roboto&#39;,Helvetica,arial,sans-serif"><strong>Welcome Login!</strong>
</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style="margin:24px 24px 0 24px;color:#1e1e1e;font-family:inherit;text-align:center">
<span style="font-family:&#39;Roboto&#39;,Helvetica,arial,sans-serif">
Use the verification code below to log in.
</span>
                                                    </div>
                                                </div>
                                                <div style="margin:60px 0 0 0;color:#1e1e1e;font-family:inherit;text-align:center">
                                                    <span style="padding:6px 48px;border:2px solid #e2e2e2;border-radius:6px;font-size:38px;font-weight:600;font-family:&#39;Roboto&#39;,Helvetica,arial,sans-serif">${code}</span>
                                                </div>
                                                <div style="margin-top:48px;border-top:2px solid #e2e2e2;color:#1e1e1e;font-family:inherit;text-align:center;width:100%;max-width:600px">
                                                    <div style="padding:36px 5%">
                                                        <span style="font-family:&#39;Roboto&#39;,Helvetica,arial,sans-serif">You received this email because you requested to log in to your TinTin Account. If you didn&#39;t request to log in, you can safely ignore this e-mail.</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <table role="module" border="0" cellpadding="0" cellspacing="0" width="100%"
                                       style="table-layout:fixed">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div style="padding:24px 0px 0px 24px;font-size:6px;line-height:10px;background-color:#1e1e1e;text-align:left">
                                                <a role="social-icon-link"
                                                   href="https://tintinland.com/"
                                                   alt="TinTinland" title="TinTinland"
                                                   style="display:inline-block;background-color:#1e1e1e;height:auto;width:125px;border-radius:30px"
                                                   target="_blank"
                                                   data-saferedirecturl="https://www.google.com/url?hl=zh-CN&amp;q=http://url3035.web3games.com/ls/click?upn%3DCHs2prb-2B7Yc8dW-2BsIPwM1zNLPSflbSqrkZklF6-2B2zPY-3DBpAc_3-2B-2BLz101MJPa3SFGC-2BMHAiaf46CkQ4Lk4ajceE2HSbLOSzZuqvANwAQmmMWyHsBxODryxJbqsjm2FAZx4KV5gIkBXnOuVPDLbeqT-2FtXXoEuno42lWIQsnSO6CEDIRctc1RUSvzfRZ1Yuu850ZsCAV9-2FvsHCDz3H2JkMKyFps5rQC3lN0bEeuJ5w4JMZIEY-2BMr6GPZV-2Bjzdl9HcY5jSOwm0JegqnFSaWOtA-2FGErQQa9IHg71q0aune-2BD647hKN3pKIOaTc2Z8umrhm-2BOVhZ0w1YtEtNi9hCSkv1F2Di6YL47GqevLhI8-2BIDzb4Wl1DAFRjXOnSaG4nv9O4YTmfNJq6A-3D-3D&amp;source=gmail&amp;ust=1667465317248000&amp;usg=AOvVaw3JwwviWoSRQMg2wm6wZ1pe">
                                                    <img role="social-icon" alt="TinTinland" title="TinTinland"
                                                         src="https://tintinland.com/tintin_color_horizontal2.svg"
                                                         style="height:auto;width:125px" width="150">
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr style="padding:0;margin:0">
                                        <td>
                                            <table role="module" border="0" cellpadding="0" cellspacing="0" width="100%"
                                                   style="table-layout:fixed;background-color:#1e1e1e;margin:0;padding:0">
                                                <tbody>
                                                <tr>
                                                    <td style="vertical-align:center;text-align:left;width:30%">
                                                        <div style="display:inline-block;margin:0 24px">
                                                            <div style="margin:12px 0px 24px 0px;color:#ffffff;font-size:12px;text-align:left">
                                                                <span>2022 © TinTinLand</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td style="vertical-align:center;text-align:right;width:70%">
                                                        <div style="display:inline-block;margin:0 24px 12px">
                                                          <div style="display:inline-block">
                                                            <a role="social-icon-link" href="https://medium.com/@tintin.land2021" alt="Medium" title="Medium" style="display:inline-block;background-color:#1e1e1e;height:24px;width:24px;border-radius:30px;padding:0 4px" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=zh-CN&amp;q=http://url3035.web3games.com/ls/click?upn%3DCHs2prb-2B7Yc8dW-2BsIPwM16xWh9zLWPrtF77UmbL9D-2B9UUDNtmMVN18YeOpTdsSZM96dG_3-2B-2BLz101MJPa3SFGC-2BMHAiaf46CkQ4Lk4ajceE2HSbLOSzZuqvANwAQmmMWyHsBxODryxJbqsjm2FAZx4KV5gIkBXnOuVPDLbeqT-2FtXXoEuno42lWIQsnSO6CEDIRctc1RUSvzfRZ1Yuu850ZsCAV9-2FvsHCDz3H2JkMKyFps5rQC3lN0bEeuJ5w4JMZIEY-2BMrgTtpfVm1FbGsnkjDgIGgabAA42iEOVveGdi3IXv9deIEFXtM20unCqUy5NTrYyy7YfLA-2B0-2Bn3sIco-2Bn7WNCVWAL8Keru46B51tv-2BGiRSWONgKqhuDZzZGJz7X0QViSI-2BQssXybaO62Yb0-2BqHnp8FA-3D-3D&amp;source=gmail&amp;ust=1667898619480000&amp;usg=AOvVaw2JDc4VI2aVFnhaHYLP9y4Z">
                                                                <img role="social-icon" alt="Medium" title="Medium" src="https://web3games.oss-accelerate.aliyuncs.com/email/icon-medium.png" style="height:24px;width:24px" height="24" width="24">
                                                            </a>
                                                          </div>
                                                          <div style="display:inline-block">
                                                            <a role="social-icon-link" href="https://twitter.com/Tintinland2021" alt="Twitter" title="Twitter" style="display:inline-block;background-color:#1e1e1e;height:24px;width:24px;border-radius:30px;padding:0 4px" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=zh-CN&amp;q=http://url3035.web3games.com/ls/click?upn%3DCHs2prb-2B7Yc8dW-2BsIPwM1zHnTcF1x378WAzu-2BPRUowMxSvi1Huzg8BAUPSuTBU629oZ2_3-2B-2BLz101MJPa3SFGC-2BMHAiaf46CkQ4Lk4ajceE2HSbLOSzZuqvANwAQmmMWyHsBxODryxJbqsjm2FAZx4KV5gIkBXnOuVPDLbeqT-2FtXXoEuno42lWIQsnSO6CEDIRctc1RUSvzfRZ1Yuu850ZsCAV9-2FvsHCDz3H2JkMKyFps5rQC3lN0bEeuJ5w4JMZIEY-2BMgVECQ6N7nISHCa6PWspaZ-2F9WRubkOY9mXPfyHKgKQvQV9P5ToDZRw6BJFiEKdP7MFEhzIivp5VbrIDj3ZShLxM5pIOWgH2LN-2BnnahyrG7KFBW-2BPVhkavrt9TZ0zX2rF2TrZdJMM5UqmNVS8-2Fk4roeA-3D-3D&amp;source=gmail&amp;ust=1667898619480000&amp;usg=AOvVaw1lPTDVYIbJyM9gH26-ityx">
                                                                <img role="social-icon" alt="Twitter" title="Twitter" src="https://web3games.oss-accelerate.aliyuncs.com/email/icon-twitter.png" style="height:24px;width:24px" height="24" width="24">
                                                            </a>
                                                          </div>
                                                          <div style="display:inline-block">
                                                            <a role="social-icon-link" href="" alt="Telegram" title="Telegram" style="display:inline-block;background-color:#1e1e1e;height:24px;width:24px;border-radius:30px;padding:0 4px" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=zh-CN&amp;q=http://url3035.web3games.com/ls/click?upn%3DCHs2prb-2B7Yc8dW-2BsIPwM18yakx1PdsgEzvCi6vWUo4xA1u4XofW-2Fc2awqMlRAiaDhj-l_3-2B-2BLz101MJPa3SFGC-2BMHAiaf46CkQ4Lk4ajceE2HSbLOSzZuqvANwAQmmMWyHsBxODryxJbqsjm2FAZx4KV5gIkBXnOuVPDLbeqT-2FtXXoEuno42lWIQsnSO6CEDIRctc1RUSvzfRZ1Yuu850ZsCAV9-2FvsHCDz3H2JkMKyFps5rQC3lN0bEeuJ5w4JMZIEY-2BMqfY-2BQmmIKfB8UWh8bUZPH962r-2BDNGDjwebgrmsXIZo483uk-2FQ5IXdv31ZyOYdf3bVOyZDdjHEyylG1VpV1e8R8T4qZD5k4nCb679y-2FZv-2B3K4sBcqhNbPyHWjGiwnUntG4rIDLrOM1DFjYY5bpcw13g-3D-3D&amp;source=gmail&amp;ust=1667898619480000&amp;usg=AOvVaw2QRUzOBlZBkdTqh-_h9yJK">
                                                                <img role="social-icon" alt="Telegram" title="Telegram" src="https://web3games.oss-accelerate.aliyuncs.com/email/icon-telegram.png" style="height:24px;width:24px" height="24" width="24">
                                                            </a>
                                                          </div>
                                                          <div style="display:inline-block">
                                                            <a role="social-icon-link" href="https://discord.com/invite/6b2QNSYgmz" alt="Discord" title="Discord" style="display:inline-block;background-color:#1e1e1e;height:24px;width:24px;border-radius:24px;padding:0 4px" target="_blank" data-saferedirecturl="https://www.google.com/url?hl=zh-CN&amp;q=http://url3035.web3games.com/ls/click?upn%3DCHs2prb-2B7Yc8dW-2BsIPwM13lnv84EFnAkKHMOwR5O15Y6IaVJX6B-2BcgfiunDDvINaptE9_3-2B-2BLz101MJPa3SFGC-2BMHAiaf46CkQ4Lk4ajceE2HSbLOSzZuqvANwAQmmMWyHsBxODryxJbqsjm2FAZx4KV5gIkBXnOuVPDLbeqT-2FtXXoEuno42lWIQsnSO6CEDIRctc1RUSvzfRZ1Yuu850ZsCAV9-2FvsHCDz3H2JkMKyFps5rQC3lN0bEeuJ5w4JMZIEY-2BMU4-2BVnTtPo4ddkd1BNst0talJ-2BPuvN20LFlEAiqn8NN1dJ-2Bfgeta8MzuKGK6OAq9wmRAkq-2FhLXsbOBueRLvwMG-2BHXkO-2F8LY3TXbcgOlVrGkxuwG9gSd9m7Ahd8Wp1-2BROdhs-2FT85-2FhvnQc-2FFoRcOV1lg-3D-3D&amp;source=gmail&amp;ust=1667898619481000&amp;usg=AOvVaw2Yp7vKeF4OZg1eC8dLrLEo">
                                                                <img role="social-icon" alt="Discord" title="Discord" src="https://web3games.oss-accelerate.aliyuncs.com/email/icon-discord.png" style="height:24px;width:24px" height="24" width="24">
                                                            </a>
                                                          </div>                                                                                        
                                                        </div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            </tbody>
        </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>`
        await transporter.sendMail({
                from: 'email@tintinland.com', // 发件邮箱
                to: `${email}`, // 收件列表
                subject: `${code} is your verification code`, // 标题
                html: email_contont, // html 内容
            }
        );
        // Success
        const user = new UserEmail();
        user.email = `${email}`;
        user.code = `${code}`;
        try {
            await getRepository(UserEmail).insert(user);
        } catch (e) {
            await getRepository(UserEmail).save(user);
        }
        setTimeout(async ()=>{    //10分钟后失效
            await getRepository(UserEmail).remove(user);
        },1000*60*5)
        await call.succ({
            time: time
        });
    }else{
        await call.error('email is error');
        return;
    }
}
