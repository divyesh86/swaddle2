'use strict';


let jsonToString = (obj) => {
    let result = "";
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result += obj[key] + " ";
        }
    }
    return result.trim();
};

module.exports = {jsonToString};