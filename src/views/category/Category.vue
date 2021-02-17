<template>
  <div id="category">
    <Header title="分类" />
    <div class="listWrapper" v-if="!showLoading">
      <div class="leftWrapper">
        <ul class="wrapper">
          <li class="categoryItem" v-for="(cate, index) in categoriesData" :class="{selected: currentIndex === index}"
            :key="cate.id" @click="clickLeftLi(index)" ref="menuList">
            <span class="textWrapper">{{cate.name}}</span>
          </li>
        </ul>
      </div>
      <ContentView :categoriesDetailData="categoriesDetailData" />
    </div>

    <van-loading v-else type="spinner" color="#75a342"
      style="position: absolute;left:50%;top: 40%;transform: translate(-50%)">小撩正在拼命加载中…</van-loading>
  </div>
</template> 

<script>
import Header from '@/components/Header'
import ContentView from './components/ContentView'
import BScroll from 'better-scroll'
import { getCategories, getCategoriesDetail } from '@/service/axios/index'
export default {
  data () {
    return {
      categoriesData: [],
      categoriesDetailData: [],
      currentIndex: 0,
      showLoading: true
    };
  },

  components: { Header, ContentView },

  created () {
    this.initData();
  },

  methods: {
    // 页面初始化
    async initData () {
      // 1. 获取左边的数据
      let leftRes = await getCategories();
      if (leftRes.success) {
        this.categoriesData = leftRes.data.cate;
      }

      // 2. 获取右边的数据
      let rightRes = await getCategoriesDetail('/lk001');
      if (rightRes.success) {
        this.categoriesDetailData = rightRes.data.cate;
      }


      // 隐藏loading
      this.showLoading = false;

      // 初始化分类目录的滚动条
      this.$nextTick(() => {
        this.leftScroll = new BScroll('.leftWrapper', {
          probeType: 3,
          click: true,
          scrollY: true,
          tap: true,
          mouseWheel: true
        })
      });
    },

    async clickLeftLi (index) {
      // 1.选中的样式
      this.currentIndex = index;

      // 2.选中以后滚动
      let menuLists = this.$refs.menuList;
      let currentMenu = menuLists[index];
      this.leftScroll.scrollToElement(currentMenu);

      // 2. 获取右边的数据
      // lk001-lk006
      let rightRes = await getCategoriesDetail(`/lk00${index + 1}`);
      if (rightRes.success) {
        this.categoriesDetailData = rightRes.data.cate;
        // console.log(this.categoriesDetailData);
      }
    }
  }
}

</script>
<style scoped>
#category {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  overflow: hidden;
}

.listWrapper {
  display: flex;
  position: absolute;
  top: 2.75rem;
  bottom: 3rem;
  width: 100%;
  overflow: hidden;
}

.leftWrapper {
  background-color: #f4f4f4;
  width: 5.3125rem;
  flex: 0 0 5.3125rem;
}

.categoryItem {
  padding: 0.75rem 0;
  border-bottom: solid 1px #e8e9e8;
  position: relative;
}

.categoryItem .textWrapper {
  line-height: 1.25rem;
  border-left: solid 0.1875rem transparent;
  padding: 0.3125rem 0.6875rem;
  font-size: 0.8125rem;
  color: #666666;
}

.categoryItem.selected {
  background: #fff;
}

.categoryItem.selected .textWrapper {
  border-left-color: #3cb963;
  font-weight: bold;
  font-size: 0.875rem;
  color: #333333;
}

@media (min-width: 960px) {
  .wrapper {
    border-right: 1px solid #e8e9e8;
  }

  .wrapper .categoryItem {
    background: #fff;
  }
}
</style>