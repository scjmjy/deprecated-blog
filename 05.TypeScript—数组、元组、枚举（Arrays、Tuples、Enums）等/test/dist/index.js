var City;
(function (City) {
    City["London"] = "LON";
    City["Paris"] = "PAR";
    City["Chicago"] = "CHI";
})(City || (City = {}));
function getMixedValue(input) {
    switch (input) {
        case 1:
            return 'Hello';
        case 2:
            return "Hello";
        case 3:
            return true;
        case 4:
        default:
            return City.London;
    }
}
let first = getMixedValue(1);
console.log(first);
