export const isArrayEmpty = (arr) => {
    if( arr !== undefined && arr !== null && arr.length > 0)
    {
        return false;
    }
    return true;
}

export const dumplogs = (message) =>{
    console.log(message);
}

