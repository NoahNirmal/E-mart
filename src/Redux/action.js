export const ADDITEM="ADDITEM"
export const DELETEITEM="DELETEITEM"
export const LOGIN ="LOGIN"


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

export const loginchange=()=>{
    return {
        type: LOGIN,
        

    }
}