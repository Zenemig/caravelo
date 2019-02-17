<template>
  <div id="app">
    <main-header />

    <error-message v-if="errorLoadingData" :error="errorMessage" />

    <main v-else class="l-main-content">
      <loading-message v-if="loading" />

      <meal-form v-else-if="confirmed" :input-json="inputJson" />

      <no-flights v-else />
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import mainHeader from './components/mainHeader'
import errorMessage from './components/errorMessage'
import loadingMessage from './components/loadingMessage'
import noFlights from './components/noFlights'
import mealForm from './components/mealForm'

export default {
  name: 'app',
  components: {
    mainHeader,
    errorMessage,
    loadingMessage,
    noFlights,
    mealForm
  },
  data () {
    return {
      inputJson: null,
      confirmed: false,
      outputJson: null,
      loading: true,
      errorLoadingData: false,
      errorMessage: ''
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
