<template>
  <div id="home">
    <Header title="首页" />
    <Sowing :sowing_list="sowing_list" />
    <Nav :nav_list="nav_list" />
    <FlashSale :flash_sale_product_list="flash_sale_product_list" />
    <YouLike :you_like_product_list="you_like_product_list" />
  </div>
</template>

<script>

// 接口
import { getHomeData, addGoodsToCart } from '@/service/axios/index'

// 组件
import Header from '@/components/Header'
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

    };
  },

  components: { Header, Sowing, Nav, FlashSale, YouLike, MarkPage },

  created () {
    this.getHomeInfo();
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

      }
    },

  }
}

</script>
<style lang="less" scoped>
#home {
  background-color: rgb(240, 237, 237);
}
</style>