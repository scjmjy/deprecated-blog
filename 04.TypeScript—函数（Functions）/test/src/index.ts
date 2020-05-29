// "strictNullChecks": true

function calculateTax(amount:number): number;
function calculateTax(amount:null): null;
function calculateTax(amount:number|null): number|null {
    if (amount === null) {
        return null;
    } else {
        return amount*1.2;
    }
}

let tax = calculateTax(100); // tax是number类型
// if (tax !== null) { // 不需要额外的判断
    console.log('Tax value: ', tax);
// }