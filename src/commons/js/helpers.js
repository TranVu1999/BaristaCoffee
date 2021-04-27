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