import axios from "axios";

const appid = 'tpidwOboHH9e';
const secret = 'T7O5Y4hWBE37Nt95BWpWiAWWMIgYmpy2';

const get_access_token = async () => {
    const api = axios.create({
        baseURL: 'https://open.wj.qq.com',
        timeout: 9999,
        headers: {
            'content-type': 'application/json',
        },
    });
    const response = await api.get(`/api/oauth2/access_token?appid=${appid}&secret=${secret}&grant_type=client_credential`);
    const data = response.data.data.access_token;
    return data;
};

export {
    get_access_token
}
