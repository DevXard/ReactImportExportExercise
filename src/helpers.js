;

const choice = (items) => {
    const rand =  Math.floor(Math.random() * items.length);
    return items[rand]
}

const remove = (items, item) => {
    for( let i = 0; i < items.length; i++){
        if( items[i] === item ){
            return items.splice(i, 1)
        }
    }
}

export {choice, remove};