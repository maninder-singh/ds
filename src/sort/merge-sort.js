let merge,mergeSort;

merge = function(input,startIndex,middle,endIndex,comparator){
    let leftArray = arrayByIndex(input,startIndex,middle);
    let rightArray = arrayByIndex(input,middle+1,endIndex);
    let output = [], leftIndex = 0 ,rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length){
        let result = comparator(leftArray[leftIndex],rightArray[rightIndex]);
        if(result === 1){
            output.push(rightArray[rightIndex]);
            rightIndex++;
        }else {
            output.push(leftArray[leftIndex]);
            leftIndex++;
        }
    }

    while (leftIndex < leftArray.length){
        output.push(leftArray[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < rightArray.length){
        output.push(rightArray[rightIndex]);
        rightIndex++;
    }

    output.forEach(function (value) {
       input[startIndex] = value;
       startIndex++;
    });
};

const arrayByIndex = function(input,startIndex,endIndex){
    let output = [];
    for(let index = startIndex; index <= endIndex; index++){
        output.push(input[index]);
    }
    return output;
};


mergeSort = function (input, startIndex, endIndex,comparator) {
  if(startIndex < endIndex){
      let middle = Math.floor((startIndex + endIndex) / 2);
      mergeSort(input,startIndex,middle,comparator);
      mergeSort(input,middle+1,endIndex,comparator);
      merge(input,startIndex,middle,endIndex,comparator);
  }
};

const mergeSortUtil = function(input,comparator){
    console.log(`input => ${input}`);
    mergeSort(input,0,input.length -1,comparator);
    return input;
};

export default function (input, comparator) {
    return mergeSortUtil(Object.assign([],input),comparator);
};
