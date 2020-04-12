<template>
  <main id="result">
    <h4>{{title}}</h4>
    <p>{{subTitle}}</p>
    <div class="output">
      <div class="data">
        <label>Actually currently Infected</label>
        <p class="value">{{report.currentlyInfected}}</p>
      </div>
      <div class="data">
        <label>Estimated infections in {{input.timeToElapse}} {{input.periodType}}</label>
        <p class="value">{{report.infectionsByRequestedTime}}</p>
      </div>
      <div class="data">
        <label>Cases that might be hospitalised in {{input.timeToElapse}} {{input.periodType}}</label>
        <p class="value">{{report.severeCasesByRequestedTime}}</p>
      </div>
      <div class="data">
        <label>Number of hospital beds available in {{input.timeToElapse}} {{input.periodType}}</label>
        <p class="value">{{report.hospitalBedsByRequestedTime}}</p>
      </div>
      <div class="data">
        <label>Cases that might be in the ICU in {{input.timeToElapse}} {{input.periodType}}</label>
        <p class="value">{{report.casesForICUByRequestedTime}}</p>
      </div>
      <div class="data">
        <label>Cases that might be on ventilators in {{input.timeToElapse}} {{input.periodType}}</label>
        <p class="value">{{report.casesForVentilatorsByRequestedTime}}</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    title: String,
    subTitle: String,
    report: Object,
    input: Object
  }
}
</script>

<style scoped>
#result {
  margin: 30px;
}

#result p {
  font-size: 14px;
}

#result .data {
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 0;
  border-bottom: 1px solid rgba(0,0,0,.1);
}

#result .data label{
  font-size: 13px;
  font-weight: 300;
  margin-right: 25px;
}

</style>