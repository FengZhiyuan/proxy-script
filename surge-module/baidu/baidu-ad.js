// version: 1.0.0
const log = console.log.bind(console)

let url = $request.url
const body = JSON.parse($response.body)

// 时间线广告处理
if (url.includes("weibointl")) {
    body.data = []
}

bodyJson = JSON.stringify(body)

$done({ bodyJson })
