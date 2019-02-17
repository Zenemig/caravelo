<template>
  <section class="c-flight-selection">
    <h2 class="c-flight-selection__title">
      Flight<span v-if="totalJourneys > 1">s</span>
    </h2>

    <p class="c-flight-selection__description">
      Please select the flight<span v-if="totalJourneys > 1">s</span> you'd like to choose a meal for.
    </p>

    <div class="c-flight-selection__flights">
      <flight-detail
        v-for="journey in journeys"
        :key="journey.key"
        :flight="journey.flight"
        :flight-length="flightLength(journey.departureDate, journey.arrivalDate)"
        :departure-airport="journey.departure"
        :departure-date="getDate(journey.departureDate)"
        :arrival-airport="journey.arrival"
        :arrival-date="getDate(journey.arrivalDate)"
      />
    </div>

    <footer class="c-flight-selection__footer">
      <div class="a-alert" :class="alertType">
        {{ alertText }}
      </div>

      <button v-if="selectedMeals.length !== 0" class="a-button a-button--primary">
        Submit Meals
      </button>
    </footer>
  </section>
</template>

<script>
import moment from 'moment'
import flightDetail from './flightDetail'

export default {
  name: 'flightSelection',
  components: {
    flightDetail
  },
  props: {
    inputJson: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      journeys: [],
      totalJourneys: 0,
      selectedMeals: []
    }
  },
  methods: {
    flightLength: (departureDate, arrivalDate) => {
      return moment(departureDate).to(arrivalDate, true)
    },
    getDate: (date) => {
      return moment(date).format('ddd, hh:mm a')
    }
  },
  created () {
    this.journeys = this.inputJson.booking.journeys
    this.totalJourneys = Object.keys(this.journeys).length
  },
  computed: {
    alertText () {
      let meals = this.selectedMeals.length
      if (meals === 0) {
        return 'No flights have been selected'
      } else if (meals === 1 && this.totalJourneys === 1) {
        return "You've selected a meal for " + meals + ' flight'
      } else if (meals === this.totalJourneys) {
        return "You've selected a meal for each flight"
      } else {
        return "You've selected a meal for " + meals + ' of ' + this.totalJourneys + ' flights'
      }
    },
    alertType () {
      let meals = this.selectedMeals.length
      if (meals === 0) {
        return 'error'
      } else if (meals === this.totalJourneys) {
        return 'success'
      } else {
        return 'warning'
      }
    }
  }
}
</script>
