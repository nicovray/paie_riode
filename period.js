// The monthly period begins on the 1st day (midnight included) and ends on the last day (midnight excluded) of the current month :

let currentDate = new Date();
let startMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
let endMonth =  new Date(currentDate.getFullYear(), currentDate.getMonth() +1);
endMonth.setSeconds(-1);
    console.log(`Le mois en cours commence du ${startMonth} jusqu'au ${endMonth}.`);


// Define the employee's holiday period :

let startHoliday = new Date(2022, 6, 15);
let endHoliday = new Date(2022, 7, 7);
console.log(`La période d'absence commence du ${startHoliday} jusqu'au ${endHoliday}.`);

let timeDiff = endHoliday.getTime() - startHoliday.getTime(); 
let dayDiff = Math.round(timeDiff / (1000 * 3600 * 24)); 
console.log(`Le nombre de jours entre les deux dates est de ${dayDiff}.`);

let lastDayOfMonth1 = new Date(startHoliday.getFullYear(), startHoliday.getMonth() + 1, 0).getDate();

if (startHoliday.getMonth() !== endHoliday.getMonth()) {
  let daysUntilEndOfMonth1 = lastDayOfMonth1 - startHoliday.getDate();
  console.log(`Le salarié a été absent ${daysUntilEndOfMonth1} jours au cours du mois ${startHoliday.getMonth()} et ${dayDiff - daysUntilEndOfMonth1} jours au cours du mois ${endHoliday.getMonth()}.`
  );
} else {
  console.log(`Le salarié a été absent ${dayDiff} jours au cours du mois de ${startHoliday.getMonth()}.`
  );
}


// Define the employee's holiday period in working days :

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
    
  let result = [];
    while (startHoliday <= endHoliday) {
      let day = days[startHoliday.getDay()];
      result.push(day);
      new Date(startHoliday.setDate(startHoliday.getDate() + 1));
    }

    let itemsToBeRemoved = ["Sunday", "Monday"];
    let newResult = result.filter((item) => !itemsToBeRemoved.includes(item));
    let openDays = newResult.length;
    console.log(`Cela correspond à ${openDays} jours ouvrés de congé.`);


// Il conviendrait également d'écrire une fonction qui prenne en compte les jours fériés comme jours non-ouvrés, ou d'ajouter ce paramètre à itemsToBeRemoved.