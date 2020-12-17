const getSleepHours = day => {
  if(day === 'monday'){
    return 8;
  }
  else if(day === 'tuesday'){
    return 7;
  }
  else if(day === 'wednesday'){
    return 8;
  }
  else if(day === 'thursday'){
    return 6;
  }
  else if(day === 'friday'){
    return 7;
  }
  else if(day === 'saturday'){
    return 9;
  }
  else if(day === 'sunday'){
    return 10;
  }
  
};
const getActualSleepHours = () => {
 let sum = 8 + 7 + 8 + 6 + 7 + 9 + 10; 
return sum;
};

const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = () => {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours){
    console.log((idealSleepHours - actualSleepHours) + ' - perfect ammount sleep');
  }
  else if (actualSleepHours > idealSleepHours){
    console.log((idealSleepHours - actualSleepHours) + ' - more ammount sleep');
  }
   else if (actualSleepHours < idealSleepHours){
    console.log((idealSleepHours - actualSleepHours) + ' - less ammount sleep');
  }
};
calculateSleepDebt();


