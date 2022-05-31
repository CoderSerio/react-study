import axios from "axios";

function Request (url, data, success, error) {
    this.post = function () {
        axios.post(url, {
            data
        }).then((res) => {
            success(res)
        }).catch((err) => {
            error(err)
        })
    }
    this.get = function () {
        axios.get(url, {
            params: data
        }).then((res) => {
            success(res)
        }).catch((err) => {
            error(err)
        })
    }
}


export {
    Request
}