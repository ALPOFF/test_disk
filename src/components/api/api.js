import * as axios from "axios";
import {token_value} from "../../token_value";

const instance = axios.create({
    baseURL: 'https://cloud-api.yandex.net/v1/disk/',
    headers: {Authorization: 'OAuth ' + token_value}
});

export const diskAPI = {
    getFld (fldpath) {
        return instance.get('resources?path=/' + fldpath)
    }
}




