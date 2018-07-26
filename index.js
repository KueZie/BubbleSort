const btn = document.querySelector('#submitBtn'); //Submit button
const output = document.querySelector('#output'); //Output p tag
const arr = document.querySelector('#arr'); // Tag for showing current array
const input = document.querySelector('#input'); // Input field
const sortBtn = document.querySelector('#sortBtn');
const sortedArr = document.querySelector('#sortedArr');
const reset = document.querySelector('#reset');
const currentArray = [];
let swapped = true;

function formattedArray(arr) {
    let _output = '';
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (i === len - 1) {
            _output += `${arr[i]}`;
        } else {
            _output += `${arr[i]}, `
        }
    }
    return _output;
}

function sort(arr) {
    if (arr.length <= 2) {
        sortedArr.innerHTML = 'Array length must be greater than 2.';
    } else {
        const _output = [...arr];
        while (swapped) {
            swapped = false;
            for (let i = 0; i < _output.length; i++) {
                if (_output[i] > _output[i + 1]) {
                    _temp = _output[i];
                    _output[i] = _output[i + 1];
                    _output[i + 1] = _temp;
                    swapped = true;
                }
            }
        }
        return _output;
    }
    const _output = [...arr];
    while (swapped) {
        swapped = false;
        for (let i = 0; i < _output.length; i++) {
            if (_output[i] > _output[i + 1]) {
                _temp = _output[i];
                _output[i] = _output[i + 1];
                _output[i + 1] = _temp;
                swapped = true;
            }
        }
    }
    return _output;
}

function handleClick(e) {
    const data = parseInt(input.value);
    if (isNaN(data)) {
        output.innerHTML = 'Output only accepts single integers.'
    } else {
        currentArray.push(data);
        arr.innerHTML = `Current array: [${formattedArray(currentArray)}]`;
    }
    input.value = '';
}

function handleSort() {
    sortedArr.innerHTML = `Sorted array: [${sort(currentArray)}]`;
}

function handleReset() {
    location.reload();
}

btn.addEventListener('click', handleClick);
document.addEventListener('keydown', e => {
    console.log(e.key)
    if (e.key === 'Enter') {
        handleClick(e);
    }
});
sortBtn.addEventListener('click', handleSort);
reset.addEventListener('click', handleReset);