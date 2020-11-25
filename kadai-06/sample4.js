
// サーバーから正常なデータが取得できた場合
//const jsonstring = '{"name":"kamata", "tweet": 500, "follows":100, "follower": 50}'
// 変なデータが入ってきた場合
const jsonstring = undefined

let userdata

try {
   userdata = JSON.parse(jsonstring) 
   console.log("こんにちは、" + userdata.name + "!")
} catch (error) {
    console.log(error)
    console.log("異常なJSONです")
}
