/**
 * 
 * @param {*} str is price
 * @returns string is standardzied
 */
export const standardPrice = (str) =>{
    str += ""
    let resString = ""
    let splitStr = str.split("");

    let length = splitStr.length
    for(let i = 0; i < length; i++){
        if(((length - i)) % 3 === 0){
            resString += ','
        }
        resString += splitStr[i]
    }

    let indexComma = resString.indexOf(',')
    if(indexComma === 0){
        resString = resString.slice(1)
    }

    return resString
}

/**
 * 
 * @param {*} str is date time string
 * @returns object is standardzied
 */
 export const standardDateTime = (str) =>{

    let splitStr = str.split('-')

    const year = splitStr[0] || 1999
    const month = splitStr[1] || 10
    const date = splitStr[2] ? splitStr[2].slice(0, 2) : 1
    return {
        date, month, year
    }
}