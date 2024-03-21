// Code your solution here

function findMatching(namesArray,driverName){
    function nameMatch(item){
        if (item.toLowerCase()===driverName.toLowerCase()){ //converts both to lowercase first
            return true
        }
    }
    return namesArray.filter(nameMatch)

}

function fuzzyMatch(namesArray,firstLetters){
    function letterMatch(item){
        if(item.slice(0,firstLetters.length)===firstLetters){ //slices the name then compares it
            return true
        }
    }
    return namesArray.filter(letterMatch)
}

function matchName(driversArray,driverName){
    function nameMatchInObject(item){
        if(item.name===driverName){
            return true
        }
    }
    return driversArray.filter(nameMatchInObject)
}