function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let pivot = array.shift();
    let leftHalf = array.filter( el => el < pivot);
    let rightHalf = array.filter( el => el >= pivot);

    let sortedLeft = quickSort(leftHalf);
    let sortedRight = quickSort(rightHalf);

    return [...sortedLeft, pivot, ...sortedRight];
}


module.exports = {
    quickSort
};