<template>
  <div class="c-flight" :class="{'c-flight--meal-selected': isMealSelected}">
    <header class="c-flight__header">
      <h3 class="title">
        Flight {{ flight }}
      </h3>

      <div class="duration">
        <font-awesome-icon icon="clock" /> {{ flightLength }}
      </div>
    </header>

    <section class="c-flight__details">
      <div class="item">
        <font-awesome-icon icon="plane-departure" class="item__icon" />

        <span class="item__airport">
          {{ departureAirport }}
        </span>

        <span class="item__date">
          {{ departureDate }}
        </span>
      </div>

      <div class="item">
        <font-awesome-icon icon="plane-arrival" class="item__icon" />

        <span class="item__airport">
          {{ arrivalAirport }}
        </span>

        <span class="item__date">
          {{ arrivalDate }}
        </span>
      </div>
    </section>

    <footer v-if="isMealSelected" class="c-flight__footer">
      <span class="text">
        <font-awesome-icon icon="check-circle" /> Meal Selected
      </span>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'flightDetail',
  props: {
    flight: {
      type: String,
      required: true
    },
    flightLength: {
      type: String,
      required: true
    },
    departureAirport: {
      type: String,
      required: true
    },
    departureDate: {
      type: String,
      required: true
    },
    arrivalAirport: {
      type: String,
      required: true
    },
    arrivalDate: {
      type: String,
      required: true
    },
    selectedMeals: {
      type: Array,
      required: true
    },
    flightKey: {
      type: String,
      required: true
    }
  },
  data () {
    return {

    }
  },
  computed: {
    isMealSelected () {
      let arr = this.selectedMeals
      let result = false
      arr.map(selection => {
        if (this.flightKey === selection.journeyKey) {
          result = true
        }
      })
      return result
    }
  }
}
</script>
