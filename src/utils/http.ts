const domain: string = 'http://localhost:8081'

export const get = (requestUrl, params, header) => {
    const keys = Object.keys(params);
    let queryString = '';
    keys.forEach((item, index) => {
        queryString += `${item}=${params[item]}`;
        queryString += index === keys.length - 1 ? '' : '&'
    })
    return new Promise((resolve, reject) => {
        uni.request({
            url: `${domain}${requestUrl}?${queryString}`,
            header,
            success: (res) => {
                resolve(res)
            },
            fail: (res) => {
                reject(res)
            }
        })
    })
}
