<template>
  <div class="c-flight">
    <header class="c-flight__header">
      <h3 class="title">
        Flight {{ flight }}
      </h3>

      <div class="duration">
        <font-awesome-icon :icon="['fal', 'clock']" /> {{ flightLength }}
      </div>
    </header>

    <section class="c-flight__details">
      <div class="item">
        <font-awesome-icon :icon="['fal', 'plane-departure']" class="item__icon" />

        <span class="item__airport">
          {{ departureAirport }}
        </span>

        <span class="item__date">
          {{ departureDate }}
        </span>
      </div>

      <div class="item">
        <font-awesome-icon :icon="['fal', 'plane-arrival']" class="item__icon" />

        <span class="item__airport">
          {{ arrivalAirport }}
        </span>

        <span class="item__date">
          {{ arrivalDate }}
        </span>
      </div>
    </section>
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
    }
  },
  data () {
    return {

    }
  },
  methods: {

  },
  created () {

  }
}
</script>
