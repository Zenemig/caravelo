<template>
  <div id="app">
    <main-header />

    <error-message v-if="errorLoadingData" :error="errorMessage" />

    <main v-else class="l-main-content">
      <loading-message v-if="loading" />

      <meal-form v-else :input-json="inputJson" />
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import mainHeader from './components/mainHeader'
import errorMessage from './components/errorMessage'
import loadingMessage from './components/loadingMessage'
import mealForm from './components/mealForm'

export default {
  name: 'app',
  components: {
    mainHeader,
    errorMessage,
    loadingMessage,
    mealForm
  },
  data () {
    return {
      inputJson: null,
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
