<template>
  <div id="app">
    <main-header />

    <error-message v-if="errorLoadingData" :error="errorMessage" />

    <main v-else class="l-main-content">
      <loading-message v-if="loading" />

      <flight-selection v-else-if="confirmed" :input-json="inputJson" @submit-payload="printOutputJson" />

      <no-flights v-else />
    </main>

    <div class="c-output-modal" :class="{'c-output-modal--show': showOutputJson}">
      <font-awesome-icon :icon="['fal', 'times-circle']" @click="showOutputJson = false" class="icon" />
      <pre><code>{{ outputJson }}</code></pre>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import mainHeader from './components/mainHeader'
import errorMessage from './components/errorMessage'
import loadingMessage from './components/loadingMessage'
import noFlights from './components/noFlights'
import flightSelection from './components/flightSelection'

export default {
  name: 'app',
  components: {
    mainHeader,
    errorMessage,
    loadingMessage,
    noFlights,
    flightSelection
  },
  data () {
    return {
      inputJson: null,
      confirmed: false,
      outputJson: null,
      loading: true,
      errorLoadingData: false,
      errorMessage: '',
      showOutputJson: false
    }
  },
  methods: {
    printOutputJson: function (payload) {
      this.outputJson = {
        "selection": payload
      }
      this.showOutputJson = true
    }
  },
  created () {
    axios
      .get('data/input.json')
      .then(response => {
        this.inputJson = response.data
        this.loading = false
        if (response.data.booking.status === 'Confirmed') {
          this.confirmed = true
        }
      })
      .catch(error => {
        console.log(error)
        this.errorLoadingData = true
        this.errorMessage = error.message
      })
  }
}
</script>

<style lang="scss">
@import './styles/main.scss';
</style>
