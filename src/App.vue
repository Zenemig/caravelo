<template>
  <div id="app">
    <main-header />

    <meal-form />
  </div>
</template>

<script>
import mainHeader from './components/mainHeader'
import mealForm from './components/mealForm'

export default {
  name: 'app',
  components: {
    mainHeader,
    mealForm
  }
}
</script>

<style lang="scss">
@import './styles/main.scss';
</style>
