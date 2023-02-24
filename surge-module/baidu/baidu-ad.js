// version: 1.0.0
// 消息接口 http://c.tieba.baidu.com/c/u/follow/getFoldedMessageUserInfo
// 预览图片接口 http://c.tieba.baidu.com/c/f/pb/picpage

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

    bodyToJson(bodyData) {
        return JSON.stringify(bodyData)
    }

    // 结束请求
    done(data) {
        return $done({...data})
    }
}

// 去除时间线广告
const removePicturePageAd = (surge) => {
    const body = surge.bodyFromApi()
    // 删除推荐信息
    body.recom_ala_info = []
    // 删除推荐直播
    body.recom_live_list = []
    //
    surge.done({ body: surge.bodyToJson(body) })
}

const __main = () => {
    const surge = Surge.new()
    const url = surge.urlFromApi()
    // 删除图片预览广告
    if (url.includes("/picpage")) {
        removePicturePageAd(surge)
    }
}

__main()
