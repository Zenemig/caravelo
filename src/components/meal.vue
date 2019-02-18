<template>
  <div class="c-meal">
    <h4 class="c-meal__info" :for="option.mealId">
      <span class="name">
        {{ name }}
      </span>

      <span class="range">
        {{ option.priceRange.min }} - {{ option.priceRange.max }} {{ option.currency }}
      </span>

      <small class="description">
        {{ description }}
      </small>
    </h4>
  </div>
</template>

<script>
export default {
  name: 'meal',
  props: {
    option: {
      type: Object,
      require: true
    }
  },
  data () {
    return {
      name: '',
      description: '',
      ammount: 0,
      message: ''
    }
  },
  created () {
    let arr = this.option.desc.split(': ')
    this.name = arr[0]
    this.description = arr[1]
  }
}
</script>
