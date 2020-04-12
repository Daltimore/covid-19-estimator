<template>
  <main id="home" :class="{'no-result': !report}">
    <nav-bar></nav-bar>
    <form-component :form-data="formData" @submit="getEstimate" v-if="showForm"></form-component>
     <transition name="results">
      <div class="results" v-if="report">
        <i class="close" @click="hideResults">clear</i>
        <ResultComponent :report="report.impact" :input="formData" class="impact" title="Estimated Impact" />
        <ResultComponent :report="report.severeImpact" :input="formData" class="severe-impact" title="Estimated Severe Impact"  sub-title="According to Harvard Medical School / Massachusetts General Hospital" />
      </div>
    </transition>
  </main>
</template>

<script>
import FormComponent from './components/FormComponent'
import NavBar from './components/Navbar'
import estimator from '../estimator'
import ResultComponent from './components/ResultComponent'

export default {
  data() {
    return {
      formData: {
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
      },
      report: false,
      showForm: true
    }
  },
  components: {
    FormComponent,
    NavBar,
    ResultComponent
  },
  methods: {
    getEstimate(data) {
      this.formData = {...data};
      this.report = estimator(data);
      this.showForm = false;
    },
    hideResults() {
      this.report = false;
      this.showForm = true;
    }
  }
}
</script>


<style scoped>

#home .results{
  padding: 20px 0;
}
#home i{
  float: right;
  cursor: pointer;
  padding: 5px 20px;
  background: #D2A53E;
  color: #fff;
  font-size: 12px;
  margin-right: 20px;
}

</style>