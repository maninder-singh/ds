const selectionSortUtil = function(input,comparator){
    for(let i = 0 ; i < input.length - 1; i++){
        for(let j= i+1; j< input.length; j++ ){
            let result = comparator(input[i],input[j]);
            if(result === 1){
                let temp = input[i];
                input[i] = input[j];
                input[j] = temp;
            }
        }
    }
    return input;
};

export default function (input, comparator) {
    return selectionSortUtil(Object.assign([],input),comparator);
};