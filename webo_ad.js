const log = console.log.bind(console)

const version = 'v0.1'

const $ = new Env("微博去广告")

var url = $request.url
log(url)

const body = $response.body
log(body)

$.done({ body })
