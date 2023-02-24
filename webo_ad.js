// version: 1.0.0
const log = console.log.bind(console)

let url = $request.url
log("weibo_ad url is ", url)
let body = $response.body

if (url.includes("weibointl")) {
    let obj = JSON.parse(body)
    obj.data = []
    body = JSON.stringify(obj)
}

$done({ body })
