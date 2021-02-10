<template>
  <div id="dashboard">
    <van-tabbar v-model="active" route>
      <van-tabbar-item to="/dashboard/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/dashboard/category" icon="search"
        >分类</van-tabbar-item
      >
      <van-tabbar-item to="/dashboard/cart" icon="friends-o"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item to="/dashboard/mine" icon="setting-o"
        >我的</van-tabbar-item
      >
      <!-- <van-tabbar-item to="/dashboard/text" icon="setting-o">测试</van-tabbar-item> -->
    </van-tabbar>

    <!-- 不经常改变的页面做页面缓存 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepalive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepalive" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 监听active的变化
      active: Number(sessionStorage.getItem('active') || 0)
    };
  },


  components: {},

  created () {
    console.log(this.$route.meta);
  },

  methods: {},

  watch: {
    active (val) {
      console.log(val);
      this.active = sessionStorage.setItem('active', val);
    }
  }
}

</script>
<style lang="less" scoped>
</style>