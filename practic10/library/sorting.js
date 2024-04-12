function exchange(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function bubbleSort(arr, order) {
    let comparisons = 0;
    let exchanges = 0;
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            comparisons++;
            if ((order === 'asc' && arr[j] > arr[j + 1]) || (order === 'desc' && arr[j] < arr[j + 1])) {
                exchange(arr, j, j + 1);
                exchanges++;
            }
        }
    }
    console.log(`Bubble sort: comparisons - ${comparisons}, exchanges - ${exchanges}`);
}

function selectionSort(arr, order) {
    let comparisons = 0;
    let exchanges = 0;
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            comparisons++;
            if ((order === 'asc' && arr[j] < arr[minIndex]) || (order === 'desc' && arr[j] > arr[minIndex])) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            exchange(arr, i, minIndex);
            exchanges++;
        }
    }
    console.log(`Selection sort: comparisons - ${comparisons}, exchanges - ${exchanges}`);
}

function insertionSort(arr, order) {
    let comparisons = 0;
    let exchanges = 0;
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;
        comparisons++;
        while (j >= 0 && ((order === 'asc' && arr[j] > current) || (order === 'desc' && arr[j] < current))) {
            arr[j + 1] = arr[j];
            j--;
            comparisons++;
            exchanges++;
        }
        arr[j + 1] = current;
    }
    console.log(`Insertion sort: comparisons - ${comparisons}, exchanges - ${exchanges}`);
}

