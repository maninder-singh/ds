const insertionSortUtil = function(input,comparator){
    for(let i = 1 ; i < input.length; i++){
        for(let j=i; j>= 0; j--){
            let result = comparator(input[j-1],input[j]);
            if(result === 1){
                let temp = input[j];
                input[j] = input[j-1];
                input[j-1] = temp;
            }
        }
    }
    return input;
};

export default function (input, comparator) {
    return insertionSortUtil(Object.assign([],input),comparator);
};