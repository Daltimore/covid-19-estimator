<template>
  <main id="covid-form">
  <form @submit.stop.prevent="submit">
    <p>Estimation of expected effect of covid-19 in Africa</p>

    <div class="form-input">
      <label for="population">Estimated Current Population</label>
      <input
        type="number"
        min="0"
        class="input"
        id="population"
        data-population="data-population"
        v-model="data.population"
        required="true"
      />
    </div>

    <div class="form-input">
      <label for="totalHospitalBeds">Estimated Number of Hospital Beds</label>
      <input
        type="number"
        min="0"
        class="input"
        id="totalHospitalBeds"
        data-total-hospital-beds="data-total-hospital-beds"
        v-model="data.totalHospitalBeds"
        required="true"
      />
    </div>

    <div class="form-input">
      <label for="periodType">Estimation Period Type</label>
      <select
        name="periodType"
        class="input"
        v-model="data.periodType"
        data-period-type="data-period-type"
        required="true"
        id="periodType"
      >
        <option
          v-for="type in periodTypes"
          :key="type.value"
          :value="type.value"
          >{{ type.label }}</option
        >
      </select>
    </div>

    <div class="form-input">
      <label for="timeToElapse"
        >Number of {{ data.periodType }} to estimate for</label
      >
      <input
        type="number"
        min="0"
        class="input"
        data-time-to-elapse="data-time-to-elapse"
        id="timeToElapse"
        v-model="data.timeToElapse"
        required="true"
      />
    </div>

    <div class="form-input">
      <label for="reportedCases">Currently Reported Cases</label>
      <input
        type="number"
        min="0"
        class="input"
        data-reported-cases="data-reported-cases"
        v-model="data.reportedCases"
        required="true"
        id="reportedCases"
      />
    </div>
    <button class="submit" data-go-estimate="data-go-estimate">Calculate</button>
  </form>
  </main>
</template>

<script>
export default {
  name: 'estimatorForm',
  props: {
    formData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      data: { ...this.formData },
      periodTypes: [
        {
          label: 'Days',
          value: 'days'
        },
        {
          label: 'Weeks',
          value: 'weeks'
        },
        {
          label: 'Months',
          value: 'months'
        }
      ]
    };
  },
  methods: {
    submit() {
      this.$emit('submit', this.data);
    }
  }
};
</script>

<style scoped>
  #covid-form {
    width: 50%;
    margin: 0 auto;
  }
  #covid-form h2, p {
    text-align: center;
    padding: 30px 0;
    font-size: 18px;
  }
  #covid-form label{
    font-size: 14px;
    margin-bottom: 10px;
    font-weight: 200;
  }
  #covid-form input, select{
    width: 100%;
    height: 35px;
    padding: 5px 10px;
    box-sizing: border-box;
    margin: 5px 0 10px 0;
    border-radius: 5px;
    border: 1px solid #eee;
    outline: none;
  }
  #covid-form .submit{
    padding: 10px;
    background: #D2A53E;
    color: #ffffff;
    border-radius: 5px;
    font-weight: 500;
    margin: 20px auto;
    display: block;
    width: 300px;
    max-width: calc(100vw - 40px);
    font-size: 15px;
    box-sizing: border-box;
    border: none;
    outline: none !important;
    box-shadow: none !important;
    cursor: pointer;
  }
  #covid-form .submit:active,
  #covid-form .submit:focus
  {
    outline: none !important;
    box-shadow: none !important;
  }

</style>