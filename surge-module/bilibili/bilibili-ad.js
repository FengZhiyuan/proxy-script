// 推荐列表接口 https://app.bilibili.com/x/v2/feed/index
// 动态列表接口 https://grpc.biliapi.net/bilibili.app.dynamic.v2.Dynamic/DynAll

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

    // 删除列表栏广告

    removeListAd() {
        const body = this.bodyFromApi()
        const data = body.data || {}
        const items = data.items || []
        const newItems = items.filter((item) => {
            // 广告的对象带有 ad_info 属性
            return !item.ad_info
        })

        const count = items.length - newItems.length
        log(`*** /feed/index 删除广告 ${count} 条`)
        data.items = newItems || []
        //
        this.done({ body: this.toJson(body) })
    }
}

const __main = () => {
    const surge = Surge.new()
    const url = surge.urlFromApi()
    // 删除列表栏广告
    if (url.includes("/feed/index")) {
        // log("*** bilibili 去广告：/feed/index")
        surge.removeListAd()
    } else {
        surge.done({})
    }
}

__main()
