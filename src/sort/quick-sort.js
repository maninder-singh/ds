let quickSort;

quickSort = function (input, startIndex, endIndex,comparator) {
    if(startIndex < endIndex){
        let pivot = partition(input,startIndex,endIndex,comparator);
        quickSort(input,startIndex,pivot,comparator);
        quickSort(input,pivot+1,endIndex,comparator);
    }
};
const swap = function (input, startIndex, endIndex) {
    let temp = input[startIndex];
    input[startIndex] = input[endIndex];
    input[endIndex] = temp;
};

const partition = function (input, startIndex, endIndex,comparator) {
   let pivot = startIndex,
       i = startIndex + 1;

   for(let j = i; j<= endIndex; j++){
       let result = comparator(input[j],input[pivot]);
       if(result === -1){
           swap(input,i,j);
           i++;
       }
   }
   i = i-1;
   swap(input,pivot,i);
   return (i);
};

const quickSortUtil = function(input,comparator){
    quickSort(input,0,input.length-1,comparator);
    return input;
};

export default function (input, comparator) {
    return quickSortUtil(Object.assign([],input),comparator);
};