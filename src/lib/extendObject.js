const extendObject = (originalObject, toAdd) => {
    return Object.assign({}, originalObject, toAdd);
}

export default extendObject;