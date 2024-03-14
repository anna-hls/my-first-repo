function MyMathPower(b, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        r *= n;
    }
    console.log(`The ${n}th power of ${b} equals ${r}`);
}

function MyMathPowerDefault1(b = 2, n = 3) {
    MyMathPower(b, n);
}

function MyMathPowerDefault2(b = 2, n = 3) {
    MyMathPower(b, n);
}

function TestAllFunctions() {
    console.log("Testing MyMathPowerDefault1 with both parameters given:");
    MyMathPowerDefault1(2, 3);
    console.log("Testing MyMathPowerDefault1 with only base parameter given:");
    MyMathPowerDefault1(2);
    console.log("Testing MyMathPowerDefault1 with only exponent parameter given:");
    MyMathPowerDefault1(undefined, 3);
    console.log("Testing MyMathPowerDefault1 with no parameters given:");
    MyMathPowerDefault1();

    console.log("Testing MyMathPowerDefault2 with both parameters given:");
    MyMathPowerDefault2(2, 3);
    console.log("Testing MyMathPowerDefault2 with only base parameter given:");
    MyMathPowerDefault2(2);
    console.log("Testing MyMathPowerDefault2 with only exponent parameter given:");
    MyMathPowerDefault2(undefined, 3);
    console.log("Testing MyMathPowerDefault2 with no parameters given:");
    MyMathPowerDefault2();
}

TestAllFunctions();
