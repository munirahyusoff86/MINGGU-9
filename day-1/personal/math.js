//MODULE LESSON
//mathematical function
function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b){
    return a*b;
}

const math = {
    add,
    subtract,
    multiply
};

module.exports = math;

