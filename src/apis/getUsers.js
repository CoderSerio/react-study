import { Request } from "../tools/request";


function getUsersInfo (data, success, fail) {
    const request = new Request('https://api.github.com/search/users', data, (res)=>{
        success(res)
    }, (err) => {
        fail(err)
    })
    request.get()
}

export {
    getUsersInfo
}