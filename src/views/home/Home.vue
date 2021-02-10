<template>
  <div id="home">
    <Header />
    <Sowing :sowing_list="sowing_list" />
    <Nav :nav_list="nav_list" />
    <FlashSale :flash_sale_product_list="flash_sale_product_list" />
    <YouLike :you_like_product_list="you_like_product_list" />
    <MarkPage v-if="showBackStatus" :scrollTop="scrollTop" />
  </div>
</template>

<script>
import { getHomeData, addGoodsToCart } from '@/service/axios/index'
import Header from './components/header/Header'
import Sowing from './components/sowing/Sowing'
import Nav from './components/nav/Nav'
import FlashSale from './components/flashSale/FlashSale'
import YouLike from './components/youLike/YouLike'
import MarkPage from './components/markPage/MarkPage'

// 向上滚动
import { showBack, animate } from '@/config/global.js'

import Pubsub from 'pubsub-js'
export default {
  data () {
    return {
      sowing_list: [],
      nav_list: [],
      flash_sale_product_list: [],
      you_like_product_list: [],
      showBackStatus: false

    };
  },

  components: { Header, Sowing, Nav, FlashSale, YouLike, MarkPage },

  created () {
    this.getHomeInfo();
  },

  mounted () {
    // 订阅添加到购物车消息
  },

  methods: {
    // 获取首页图片文本
    async getHomeInfo () {
      let res = await getHomeData();
      if (res.success) {
        this.sowing_list = res.data.list[0].icon_list;
        this.nav_list = res.data.list[2].icon_list;
        this.flash_sale_product_list = res.data.list[3].product_list;
        this.you_like_product_list = res.data.list[12].product_list;


        // 页面获取数据之后，监听滚动和滑动，判断是否隐藏
        showBack(() => {
          this.showBackStatus = true;
        })



      }
    },

    // 滚回顶部
    scrollTop () {
      // 做缓动动画返回顶部
      let docB = document.documentElement || document.body;
      animate(docB, { scrollTop: '0' }, 400, 'ease-out');
    },


    // 添加到购物车
    addGoodCart () {
      addGoodsToCart().then(res => {
        console.log(res);
      })
    },
  }
}

</script>
<style lang="less" scoped>
#home {
  background-color: rgb(240, 237, 237);
}
</style>