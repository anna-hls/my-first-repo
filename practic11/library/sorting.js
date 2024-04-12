function shellSort(array, order) {
    let comparisons = 0;
    let exchanges = 0;
    const len = array.length;
    
    for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < len; i++) {
            const temp = array[i];
            let j = i;

            while (j >= gap && (order === 'asc' ? array[j - gap] > temp : array[j - gap] < temp)) {
                array[j] = array[j - gap];
                j -= gap;
                comparisons++;
                exchanges++;
            }
            
            array[j] = temp;
            exchanges++;
        }
    }
    
    console.log(`Shell Sort: Comparisons: ${comparisons}, Exchanges: ${exchanges}`);
}

function quickSort(array, order) {
    function partition(array, left, right, order) {
        const pivot = array[Math.floor((right + left) / 2)];
        let i = left;
        let j = right;
        let comparisons = 0;
        let exchanges = 0;

        while (i <= j) {
            while (order === 'asc' ? array[i] < pivot : array[i] > pivot) {
                i++;
                comparisons++;
            }
            while (order === 'asc' ? array[j] > pivot : array[j] < pivot) {
                j--;
                comparisons++;
            }
            if (i <= j) {
                [array[i], array[j]] = [array[j], array[i]];
                i++;
                j--;
                exchanges++;
            }
        }
        return i;
    }

    function recursiveQuickSort(array, left, right, order) {
        let index;
        let comparisons = 0;
        let exchanges = 0;

        if (array.length > 1) {
            index = partition(array, left, right, order);
            if (left < index - 1) {
                comparisons++;
                recursiveQuickSort(array, left, index - 1, order);
            }
            if (index < right) {
                comparisons++;
                recursiveQuickSort(array, index, right, order);
            }
        }
        console.log(`Quick Sort: Comparisons: ${comparisons}, Exchanges: ${exchanges}`);
    }

    recursiveQuickSort(array, 0, array.length - 1, order);
}

function sortArray(array, algorithm, order) {
    const cleanedArray = array.filter(el => el !== undefined);
    if (cleanedArray.length !== array.length) {
        console.log('Увага! Масив містить undefined-елементи.');
    }

    if (algorithm === 'shell') {
        shellSort(cleanedArray, order);
    } else if (algorithm === 'quick') {
        quickSort(cleanedArray, order);
    } else {
        console.log('Невірний алгоритм сортування.');
    }
}

const array = [5, 3, undefined, 8, 1, 2, 7, 4, 6];
sortArray(array, 'shell', 'asc');
sortArray(array, 'quick', 'desc');
