declare enum City {
    London = "LON",
    Paris = "PAR",
    Chicago = "CHI"
}
declare function getMixedValue(input: 1): 1;
declare function getMixedValue(input: 2 | 3): "Hello" | true;
declare function getMixedValue(input: 4): City.London;
declare let first: 1;
