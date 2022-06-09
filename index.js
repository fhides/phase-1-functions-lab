// Code your solution in this file!
const distanceFromHqInBlocks = function (sum){

    return sum> 42 ?  sum - 42 : 42 - sum;
}

const distanceFromHqInFeet = function (sum){
    return sum > 42 ?  (sum - 42)*264 : (42 - sum)*264;
}
const distanceTravelledInFeet =function(start , destination) {
    return destination > start? (destination- start) * 264 : (start - destination) * 264 
  
}
const calculatesFarePrice = function (start, destination) {
    
    return distanceTravelledInFeet(start, destination) < 400 ? 0
    : distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet
    (start, destination) <= 2000 ?  (distanceTravelledInFeet
        (start, destination)-400) * 0.02
    : distanceTravelledInFeet(start, destination) >2000 && distanceTravelledInFeet
    (start, destination) <= 2500 ? 25: 'cannot travel that far';
   

}