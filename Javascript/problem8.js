function countFrequencies(arr) {
    const freqMap = new Map();

    for (const num of arr) {
        // If the number exists, increment its count
        if (freqMap.has(num)) {
            freqMap.set(num, freqMap.get(num) + 1);
        } else {
            // Otherwise, set its count to 1
            freqMap.set(num, 1);
        }
    }

    return freqMap;
}

const arr = [1, 2, 2, 3, 3, 3, 4];
const frequencies = countFrequencies(arr);


for (const [key, value] of frequencies.entries()) {
    console.log(`${key}: ${value}`);
}

