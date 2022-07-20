const employees = [
  {
    name: "Atticus",
    employeeNumber: "2405",
    annualSalary: "47000",
    reviewRating: 3,
  },
  {
    name: "Jem",
    employeeNumber: "62347",
    annualSalary: "63500",
    reviewRating: 4,
  },
  {
    name: "Scout",
    employeeNumber: "6243",
    annualSalary: "74750",
    reviewRating: 5,
  },
  {
    name: "Robert",
    employeeNumber: "26835",
    annualSalary: "66000",
    reviewRating: 1,
  },
  {
    name: "Mayella",
    employeeNumber: "89068",
    annualSalary: "35000",
    reviewRating: 1,
  },
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

//function that takes an employee object from the array as input
// logs results of each iteration

for (let employee of employees) {
  let basePercent = baseBonusCalculator(employee.reviewRating);
  let serviceAdjustment = yearsOfServiceAdjustment(employee.employeeNumber);
  let incomeAdjustmentPercent = incomeAdjustment(employee.annualSalary);
  let bonusPercentage =
    basePercent + serviceAdjustment - incomeAdjustmentPercent;
  if (bonusPercentage < 0) {
    bonusPercentage = 0;
  }
  if (bonusPercentage > 0.13) {
    bonusPercentage = 13;
  }
  let bonus = employee.annualSalary * bonusPercentage;
  let totalComp = Number(employee.annualSalary) + bonus;

  let newEmployeeObject = {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalComp,
    totalBonus: bonus,
  };

  console.log(newEmployeeObject);
}

function baseBonusCalculator(reviewScore) {
  let basePercent;
  switch (reviewScore) {
    case 3:
      basePercent = 0.04;
      return basePercent;
    case 4:
      basePercent = 0.06;
      return basePercent;
    case 5:
      basePercent = 0.1;
      return basePercent;
    default:
      return 0;
  }
}

function yearsOfServiceAdjustment(employeeID) {
  let serviceBonusPercent;
  if (employeeID.length === 4) {
    serviceBonusPercent = 0.05;
  } else {
    serviceBonusPercent = 0;
  }
  return serviceBonusPercent;
}

function incomeAdjustment(employeeSalary) {
  let incomeAdjustmentPercent;
  if (employeeSalary > 65000) {
    incomeAdjustmentPercent = 0.01;
  } else {
    incomeAdjustmentPercent = 0;
  }
  return incomeAdjustmentPercent;
}

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);
