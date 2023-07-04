export const ADDITEM="ADDITEM"
export const DELETEITEM="DELETEITEM"
export const LOGIN ="LOGIN"
export const LOG_DATA="LOG_DATA"
export const LOGOUT="LOGOUT"
export const WHOLE_ITEM="WHOLE_ITEM"


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

export const deItem=(product)=>{
    return {
        type: WHOLE_ITEM,
        payload:product

    }
}

export const logData=(data)=>{
    return {
        type: LOG_DATA,
        payload:data

    }
}

export const logout=()=>{
    return {
        type: LOGOUT,

    }
}


export const loginchange=()=>{
    return {
        type: LOGIN,
        

    }
}