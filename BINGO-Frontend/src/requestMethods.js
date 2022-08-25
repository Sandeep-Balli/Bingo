import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDc1ZTcwYTkzZTc2NTdmOWQ3ZWNlZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MTQ0MDk5NCwiZXhwIjoxNjYxNzAwMTk0fQ._MbcmCcL9-VO1JC_bSm_0_geKuurRy36LIcb4o5cpbU";

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})