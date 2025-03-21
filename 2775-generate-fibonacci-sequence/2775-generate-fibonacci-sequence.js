/**
 * @return {Generator<number>}
 */
function* fibGenerator() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

// Test fonksiyonu
function getFibSequence(callCount) {
    const gen = fibGenerator();
    return Array.from({ length: callCount }, () => gen.next().value);
}

// Testler
console.log(getFibSequence(5)); // [0, 1, 1, 2, 3]
console.log(getFibSequence(0)); // []

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */