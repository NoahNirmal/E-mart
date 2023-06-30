export const ADDITEM="ADDITEM"
export const DELETEITEM="DELETEITEM"
export const LOGIN ="LOGIN"
export const REGISTERDATA="REGISTERDATA"


export const addCart=(product)=>{
    return {
        type: ADDITEM,
        payload:product

    }
}

export const delCart=(product)=>{
    return {
        type: DELETEITEM,
        payload:product

    }
}

// export const register=(data)=>{
//     return {
//         type: REGISTERDATA,
//         payload:data

//     }
// }


export const loginchange=()=>{
    return {
        type: LOGIN,
        

    }
}