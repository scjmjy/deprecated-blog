let val1: unknown = 10;
let val2: any = val1; // Ok
let val3: number = val1; // Error: Type 'unknown' is not assignable to type 'number'.ts(2322)
let val4: number = val1 as number; // Ok