<template>
  <van-swipe id="swiper" class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="sowing in sowing_list" :key="sowing.public_id">
      <img class="img-auto" :src="sowing.icon_url" :alt="sowing.public_name" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>

export default {
  props: {
    sowing_list: Array
  },
  data () {
    return {
    };
  },

  components: {},

  created () { },

  methods: {}
}

</script>
<style scoped>
#swiper {
  width: 100%;
  height: 14rem;
  background-color: transparent;
}
</style>