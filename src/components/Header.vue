<template>
  <div id="header">
    <van-nav-bar :title="title" fixed />
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style>
</style>