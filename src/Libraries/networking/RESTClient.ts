import axios from "axios";

export default class RESTClient {
    static default: any;

    client;

    headers: any;

    config;

    constructor(config: any) {
        this.config = config;

        let baseURL: string = this.config?.baseUrl || "";

        this.client = axios.create({
            baseURL
        });
    }

    call(payload: any, params = {}){

        this.initHeaders();

        let { endpoint, method } = this.config;

        endpoint += typeof params === 'string' ? params : '';

        return this.client({
            method: method,
            url: endpoint,
            data: payload,
            headers: this.headers,
            params: params
        })

    }

    errorInterceptor() {
        this.client.interceptors.response.use(
            function (response) {
                // Do something with response data
                return response;
            },
            function (error) {
                // Do something with response error
                console.log(
                    "Axios Error Interceptor - ",
                    error?.response?.data
                );
                throw error;
            }
        );
    }

    initHeaders(){
        const { customHeaders = {} } = this.config;
        this.headers = { ...this.headers, ...customHeaders };
        this.errorInterceptor();        
    }

}