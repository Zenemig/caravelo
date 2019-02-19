<template>
  <div class="c-bid-control">
    <div class="less" @click="changeAmmout('less')">
      <font-awesome-icon icon="minus-circle" />
    </div>

    <div class="ammount">
      {{ ammount }} {{ currency }}
    </div>

    <div class="more" @click="changeAmmout('more')">
      <font-awesome-icon icon="plus-circle" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'meal',
  props: {
    min: {
      type: Number,
      require: true
    },
    max: {
      type: Number,
      require: true
    },
    jump: {
      type: Number,
      require: true
    },
    currency: {
      type: String,
      require: true
    },
    ammount: {
      type: Number,
      require: true
    }
  },
  data () {
    return {

    }
  },
  methods: {
    changeAmmout: function (type) {
      if (type === 'less' && this.ammount > this.min) {
        this.$emit('less', this.jump)
      } else if (type === 'more' && this.ammount < this.max) {
        this.$emit('more', this.jump)
      }
    }
  }
}
</script>
