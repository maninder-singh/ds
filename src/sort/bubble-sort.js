const bubbleSortUtil = function(input,comparator){
    for(let i = 0 ; i < input.length - 1; i++){
        for(let j= 0; j< input.length - i - 1; j++ ){
            let result = comparator(input[j],input[j+1]);
            if(result === 1){
                let temp = input[j];
                input[j] = input[j+1];
                input[j+1] = temp;
            }
        }
    }
    return input;
};

export default function (input, comparator) {
    return bubbleSortUtil(Object.assign([],input),comparator);
};