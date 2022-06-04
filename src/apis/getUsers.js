import { Request } from "../tools/request";


function getUsersInfo (data, success, fail) {
    const request = new Request('https://api.github.com/search/users', data, (res)=>{
        success(res)
    }, (err) => {
        fail(err)
    })
    request.get()
}

function autoGetUsersInfo (success, fail) {
    fetch('https://api.github.com/search/users?q=furry', {
            method:'GET'
        }).then((res) => {
            return res.json()
        }).then((res) => {
            // console.log(res)
            success(res)
        }).catch((err) => {
            fail(err)
        })
}

export {
    getUsersInfo,
    autoGetUsersInfo
}