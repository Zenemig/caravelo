<template>
  <header class="c-header">
    <img
      class="c-header__img"
      src="../assets/images/jetblue-logo.svg"
      title="JetBlue Logo"
      alt="JetBlue"
    />

    <button
      class="c-header__back-button"
      @click="back()"
    >
      <font-awesome-icon icon="arrow-circle-left" />
    </button>
  </header>
</template>

<script>
export default {
  name: 'mainHeader',
  methods: {
    back () {
      window.history.back()
    }
  }
}
</script>
