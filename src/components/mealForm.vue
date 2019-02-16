<template>
  <form class="c-form">
    <section class="c-form__section">
      <header class="c-form__section-header">
        <h3 class="title">
          Flight<span v-if="totalJourneys > 1">s</span>
        </h3>

        <p class="description">
          Please select the flight<span v-if="totalJourneys > 1">s</span> you'd like to choose a meal for.
        </p>
      </header>

      <ul class="c-form__section-options">
        <li v-for="journey in journeys" :key="journey.key" class="c-form__section-option">
          <div class="c-flight-detail">
            <input type="checkbox" :id="journey.key" v-model="flightsSelected" :value="journey.key">

            <label :for="journey.key">
              <div class="item flight">
                <font-awesome-icon :icon="['fal', 'plane']" class="icon" /> <span class="text">Flight</span>
                <strong>{{ journey.flight }}</strong>
              </div>

              <div class="item duration">
                <font-awesome-icon :icon="['fal', 'clock']" class="icon" /> <span class="text">Duration</span>
                <strong>{{ flightLength(journey.arrivalDate, journey.departureDate) }}</strong>
              </div>
            </label>
          </div>
        </li>
      </ul>

      <footer class="c-form__section-footer">
        <span>
          You've selected {{ flightsSelected.length }} flight<span v-if="flightsSelected.length !== 1">s</span>
        </span>

        <button class="a-button a-button--primary">
          Pick Meals
        </button>
      </footer>
    </section>
  </form>
</template>

<script>
import moment from 'moment'

export default {
  name: 'mealForm',
  props: {
    inputJson: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      journeys: [],
      totalFlights: 0,
      totalPassengers: 0,
      flightsSelected: []
    }
  },
  methods: {
    flightLength: (departureDate, arrivalDate) => {
      return moment(departureDate).to(arrivalDate, true)
    }
  },
  created () {
    this.journeys = this.inputJson.booking.journeys
    this.totalJourneys = Object.keys(this.journeys).length
    this.totalPassengers = Object.keys(this.inputJson.booking.passengers).length
  }
}
</script>
