<template>
  <div class="c-meal-selection">
    <header class="c-meal-selection__header">
      <h3 class="title">
        Flight {{ flight }}
      </h3>

      <div class="duration">
        <font-awesome-icon :icon="['fal', 'clock']" /> {{ flightLength }}
      </div>

      <font-awesome-icon :icon="['fal', 'times-circle']" @click="cancel" class="icon" />
    </header>

    <section class="c-meal-selection__details">
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

    <section class="c-meal-selection__meals">
      <meal
        v-for="option in mealOptions"
        :key="option.mealId"
        :option="option"
        :class="{'selected': option.mealId === selectedMeal}"
        @click.native="selectOption(option)"
      />
    </section>

    <section class="c-meal-selection__bid">
      <bid-control
        v-if="showBidControl"
        :min="bidMin"
        :max="bidMax"
        :jump="bidJump"
        :currency="bidCurrency"
        :ammount="bidAmmount"
        @less="mutateAmmount('less', $event)"
        @more="mutateAmmount('more', $event)"
      />
    </section>

    <footer class="c-meal-selection__footer">
      <button class="a-button a-button--cancel" @click="cancel">
        Cancel
      </button>

      <button class="a-button" @click="selectMeal">
        Select Meal
      </button>
    </footer>
  </div>
</template>

<script>
import meal from './meal'
import bidControl from './bidControl'

export default {
  name: 'mealSelection',
  components: {
    meal,
    bidControl
  },
  props: {
    flightKey: {
      type: String,
      required: true
    },
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
    closeSidebar: {
      type: Function,
      required: true
    },
    mealOptions: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      bidMin: 0,
      bidMax: 0,
      bidJump: 0,
      bidCurrency: '',
      showBidControl: false,
      bidAmmount: 0,
      selectedMeal: '',
      payload: {}
    }
  },
  methods: {
    selectOption: function (option) {
      this.bidMin = option.priceRange.min
      this.bidMax = option.priceRange.max
      this.bidJump = option.priceRange.jump
      this.bidCurrency = option.currency
      this.bidAmmount = 0
      this.showBidControl = true
      this.selectedMeal = option.mealId
    },
    mutateAmmount: function (type, jump) {
      if (type === 'less') {
        this.bidAmmount = this.bidAmmount - jump
      } else if (type === 'more') {
        this.bidAmmount = this.bidAmmount + jump
      }
    },
    cancel: function () {
      this.closeSidebar()
      this.showBidControl = false
      this.selectedMeal = ''
    },
    selectMeal: function () {
      this.payload = {
        "journeyKey": this.flightKey,
        "amount": this.bidAmmount,
        "currency": this.bidCurrency,
        "mealId": this.selectedMeal
      }
      this.$emit('select-meal', this.payload)
      this.closeSidebar()
      this.bidAmmount = 0
      this.showBidControl = false
      this.selectedMeal = ''
    }
  }
}
</script>
