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
  return {
    data,
    impact: {
      currentlyInfected: () => input.reportedCases * 10,
      get infectionsByRequestedTime() {
        return `${this.currentlyInfected}` * 1024;
      }
    },
    severeImpact: {
      currentlyInfected: () => input.reportedCases * 50,
      get infectionsByRequestedTime() {
        return `${this.currentlyInfected}` * 1024;
      }
    }
  };
};


export default covid19ImpactEstimator;
