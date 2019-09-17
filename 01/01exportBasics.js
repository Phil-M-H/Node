const sum = (x, y) => x + y;
const PI = 3.14;
class simpleClass{
    constructor(){
        console.log('object created');
    }
}
// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.simpleClass = simpleClass;

module.exports = {sum : sum, PI : PI, simpleClass : simpleClass}