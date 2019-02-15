<template>
  <section class="c-error-message">
    <font-awesome-icon :icon="['fal', 'times-circle']" class="c-error-message__icon" />
    <h2 class="c-error-message__title">Oops! Something went wrong</h2>
    <p class="c-error-message__text">{{ error }}</p>
  </section>
</template>

<script>
export default {
  name: 'errorMessage',
  props: {
    error: {
      type: String,
      required: true
    }
  }
}
</script>
