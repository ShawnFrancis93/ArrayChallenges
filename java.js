// .1) High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    
    for(i=0;i<arr.length; i++ ){
        if( arr[i] >= cutoff){
            filteredArr.push (arr[i])
        } 
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);


// 2.)Evens or Odds 
function evensOfOdds(arr) {
    var totalOdds = 0;
    var totalEvens = 0;
    for(i=0; i<arr.length; i++){
        if (arr[i] % 2 !=0){

        totalOdds += (arr[i])
            
        } else{
            totalEvens += (arr[i])
        }
    }
    if(totalOdds>totalEvens){
        return 'Odds are larger'
    }
    if(totalOdds<totalEvens){
        return 'Evens are larger'
    }
    return 'Tied'
}

var result = evensOfOdds([6, 8, 3, 10, -2, 5, 9]);
console.log(result)

// 3.)Better than average
function betterThanAverage(arr) {
    var sum = 0;
    var avg = 0; 
    var count = 0;
    
    for(i=0; i< arr.length; i++){
        sum += arr[i];
    }
    var avg = sum / arr.length;
    // console.log(avg);

    for(r=0; r<arr.length; r++){

    if (arr[r] > avg)
    
    {
        count += 1;
    }   
    }    
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// 3.)Fibonacci Array
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for(i=2; i<n; i++){
        fibArr[i-2] + fibArr[i-1]
        console.log("first part", fibArr[i-2]+ "second part", fibArr[i-1])
        fibArr.push(fibArr[i-2]+ fibArr[i-1] )


    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]