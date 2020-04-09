const covid19ImpactEstimator = (data) => {
  const inputData = {
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


  if (inputData.periodType === 'days') {
    powerFactor = Math.floor(inputData.timeToElapse / 3);
    period = inputData.timeToElapse;
  } else if (inputData.periodType === 'weeks') {
    powerFactor = Math.floor((inputData.timeToElapse * 7));
    period = inputData.timeToElapse * 7;
  } else {
    powerFactor = Math.floor((inputData.timeToElapse * 30));
    period = inputData.timeToElapse * 30;
  }
  // impactEstimation Section
  const impactCurrentlyInfected = inputData.reportedCases * 10;
  const impactInfectionsByRequestedTime = impactCurrentlyInfected * (2 ** powerFactor);
  const casesByRequestedTime = impactInfectionsByRequestedTime * 0.15;
  const impactHospitalBedsByRequestedTime = (inputData.totalHospitalBeds
    * 0.35) - casesByRequestedTime;
  const impactCasesForICUByRequestedTime = impactInfectionsByRequestedTime * 0.05;
  const impactCasesForVentilatorsByRequestedTime = impactInfectionsByRequestedTime * 0.02;
  const impactDollarsInFlight = impactInfectionsByRequestedTime
  * inputData.region.avgDailyIncomePopulation * inputData.region.avgDailyIncomeInUSD * period;

  // severeImpactEstimation Section
  const severeImpactCurrentlyInfected = inputData.reportedCases * 50;
  const severeImpactInfectionsByRequestedTime = severeImpactCurrentlyInfected * (2 ** powerFactor);
  const severeCasesByRequestedTime = severeImpactInfectionsByRequestedTime * 0.15;
  const hospitalBedsByRequestedTime = (inputData.totalHospitalBeds
    * 0.35) - severeCasesByRequestedTime;
  const casesForICUByRequestedTime = severeImpactInfectionsByRequestedTime * 0.05;
  const casesForVentilatorsByRequestedTime = severeImpactInfectionsByRequestedTime * 0.02;
  const dollarsInFlight = severeImpactInfectionsByRequestedTime
  * inputData.region.avgDailyIncomePopulation * inputData.region.avgDailyIncomeInUSD * period;


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
