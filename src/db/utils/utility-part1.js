function checkObjectProps(obj, propsList){
    for(let i = 0; i < propsList.length; i++){
        if(!obj.hasOwnProperty(propsList[i])){
            return false;
        }
    }
    return true;
}
const utilspart1 = {
    checkObjectProps: checkObjectProps
}
export default utilspart1;