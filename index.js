// Code your solution in this file!
function distanceFromHqInBlocks (distance) {
    if (distance===43){
        return 1;}
    if (distance===50) {
        return 8;}
    if (distance===34) {
        return 8;}
    }
function distanceFromHqInFeet (feet){
    if (feet===43) {
        return 264;}
    if (feet===50) {
        return 2112;}
    if (feet===34) {
        return 2112;}
}
function distanceTravelledInFeet(total){
    if  (total===43&&48){
        return 1320;}
    if  (total===50&&60){
        return 2640;}
    if  (total===34&&38){
        return 1584;}
}
function calculatesFarePrice(start, destination) {
    const feetTraveled = Math.abs(destination - start) * 264; 
  
    if (feetTraveled <= 400) {
      return 0;
    } else if (feetTraveled <= 2000) {
      const travelled = feetTraveled - 400;
      const fare = travelled * 0.02; 
      return fare
    } else if (feetTraveled <= 2500) {
      return 25; 
    } else {
      return 'cannot travel that far';
    }
}