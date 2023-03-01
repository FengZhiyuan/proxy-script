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

    urlFromApi() {
        return this.request.url
    }

    bodyFromApi() {
        return JSON.parse(this.response.body)
    }

    toJson(bodyData) {
        return JSON.stringify(bodyData)
    }

    // 结束请求
    done(data) {
        return $done({...data})
    }
}
