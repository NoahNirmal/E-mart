export const ADDITEM="ADDITEM"
export const DELETEITEM="DELETEITEM"


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