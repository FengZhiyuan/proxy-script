// 创建个 Surge 类用来封装 surge 的 api
class Surge {
    constructor() {
        // 请求的 request
        this.request = $request
        // 请求的 response
        this.response = $response
    }
    static new(...args) {
        if (!this.instance) {
            this.instance = new this(...args)
        }

        return this.instance
    }

    bodyFromApi() {
        return JSON.parse(this.response.body)
    }

    bodyJson(bodyData) {
        return JSON.stringify(bodyData)
    }

    // 结束请求
    done(data) {
        return $done({...data})
    }
}
