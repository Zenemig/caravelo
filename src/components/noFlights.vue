<template>
  <section class="c-no-flights">
    <font-awesome-icon
      :icon="['fal', 'plane']"
      class="c-no-flights__icon"
    />

    <h2 class="c-no-flights__title">
      You seem to have no confirmed flights
    </h2>

    <p class="c-no-flights__text">
      Please confirm flights before picking a meal.
    </p>
  </section>
</template>

<script>
export default {
  name: 'noFlights'
}
</script>
