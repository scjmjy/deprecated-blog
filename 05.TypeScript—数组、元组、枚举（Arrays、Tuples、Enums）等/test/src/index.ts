enum City { London = "LON", Paris = "PAR", Chicago = "CHI" }
function getMixedValue(input: 1): 1;
function getMixedValue(input: 2 | 3): "Hello" | true;
function getMixedValue(input: 4): City.London;
function getMixedValue(input: 1 | 2 | 3 | 4): 1 | "Hello" | true | City.London {
    switch (input) {
        case 1:
            return 1;
        case 2:
            return "Hello";
        case 3:
            return true;
        case 4:
        default:
            return City.London;
    }
}

let first = getMixedValue(1);  // first的类型是字面值类型 1
let second = getMixedValue(2); // second的类型是字面值类型 "Hello" | true
let third = getMixedValue(4);  // third的类型是字面值类型 City.London