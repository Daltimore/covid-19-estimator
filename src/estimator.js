const covid19ImpactEstimator = (data) => {
  const input = {
    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 5,
      avgDailyIncomePopulation: 0.71
    },
    periodType: 'days',
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
  };
  let powerFactor;
  let period;


  if (input.periodType === 'days') {
    powerFactor = Math.floor(input.timeToElapse / 3);
    period = input.timeToElapse;
  } else if (input.periodType === 'weeks') {
    powerFactor = Math.floor((input.timeToElapse * 7) / 3);
    period = input.timeToElapse * 7;
  } else {
    powerFactor = Math.floor((input.timeToElapse * 30) / 3);
    period = input.timeToElapse * 30;
  }
  // impactEstimation Section
  const impactCurrentlyInfected = input.reportedCases * 10;
  const impactInfectionsByRequestedTime = impactCurrentlyInfected * (2 ** powerFactor);
  const casesByRequestedTime = impactInfectionsByRequestedTime * 0.15;
  const impactHospitalBedsByRequestedTime = (input.totalHospitalBeds * 0.35) - casesByRequestedTime;
  const impactCasesForICUByRequestedTime = impactInfectionsByRequestedTime * 0.05;
  const impactCasesForVentilatorsByRequestedTime = impactInfectionsByRequestedTime * 0.02;
  const impactDollarsInFlight = impactInfectionsByRequestedTime
  * input.region.avgDailyIncomePopulation * input.region.avgDailyIncomeInUSD * period;

  // severeImpactEstimation Section
  const severeImpactCurrentlyInfected = input.reportedCases * 50;
  const severeImpactInfectionsByRequestedTime = severeImpactCurrentlyInfected * (2 ** powerFactor);
  const severeCasesByRequestedTime = severeImpactInfectionsByRequestedTime * 0.15;
  const hospitalBedsByRequestedTime = (input.totalHospitalBeds * 0.35) - severeCasesByRequestedTime;
  const casesForICUByRequestedTime = severeImpactInfectionsByRequestedTime * 0.05;
  const casesForVentilatorsByRequestedTime = severeImpactInfectionsByRequestedTime * 0.02;
  const dollarsInFlight = severeImpactInfectionsByRequestedTime
  * input.region.avgDailyIncomePopulation * input.region.avgDailyIncomeInUSD * period;


  const impact = {
    currentlyInfected: impactCurrentlyInfected,
    infectionsByRequestedTime: impactInfectionsByRequestedTime,
    severeCasesByRequestedTime: casesByRequestedTime,
    hospitalBedsByRequestedTime: impactHospitalBedsByRequestedTime,
    casesForICUByRequestedTime: impactCasesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime: impactCasesForVentilatorsByRequestedTime,
    dollarsInFlight: impactDollarsInFlight
  };

  const severeImpact = {
    currentlyInfected: severeImpactCurrentlyInfected,
    infectionsByRequestedTime: severeImpactInfectionsByRequestedTime,
    severeCasesByRequestedTime,
    hospitalBedsByRequestedTime,
    casesForICUByRequestedTime,
    casesForVentilatorsByRequestedTime,
    dollarsInFlight
  };

  return {
    data,
    impact,
    severeImpact
  };
};

export default covid19ImpactEstimator;
