// version: 1.0.0
const log = console.log.bind(console)

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

    removeTimelineAd() {
        const body = this.bodyFromApi()
        body.data = []
        this.done({ body: this.toJson(body) })
    }
}

// 去除时间线广告
const __main = () => {
    const surge = Surge.new()
    const url = surge.urlFromApi()
    if (url.includes("weibointl")) {
        log('微博去广告：/weibointl')
        surge.removeTimelineAd()
    } else {
        surge.done({})
    }
}

__main()
