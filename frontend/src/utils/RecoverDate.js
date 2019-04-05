export function recoverDate(timestamp) {
    let date = new Date(timestamp*1000)
    let day = ("0" + date.getDate()).slice(-2)
    let month = ("0" + date.getMonth()).slice(-2)
    let year = ("0" + date.getFullYear()).slice(-2)

    return `${date.getHours()}:${date.getMinutes()}   ${month}/${day}/${year}`
}
