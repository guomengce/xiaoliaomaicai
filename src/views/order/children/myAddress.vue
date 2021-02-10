<template>
  <div>
    <van-nav-bar
      title="我的地址"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          isDefault: true,
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号',
        },
      ],


    };
  },

  components: {},

  created () { },

  methods: {
    onClickLeft () {
      this.$router.back();
    },
    onAdd () {
      this.$router.push('/addAddress')
    },
    onEdit () {

    }

  }
}

</script>
<style scoped>
</style>