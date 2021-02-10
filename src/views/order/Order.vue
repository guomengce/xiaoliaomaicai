<template>
  <div style="background-color: #f5f5f5">
    <van-nav-bar
      title="订单"
      left-text="返回"
      :fixed="true"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-contact-card
      style="margin-top: 3rem"
      type="add"
      add-text="选择收货地址"
      @click="chooseAddres"
    />

    <van-cell-group style="margin-top: 0.6rem">
      <van-cell
        title="送达时间"
        :value="arriveDate"
        @click="showDatePopup"
        is-link
      ></van-cell>
      <van-cell value="共3見件" is-link :center="true">
        <template slot="title">
          <img src="./images/detail1.jpg" alt style="width: 3rem" />
        </template>
      </van-cell>
    </van-cell-group>

    <van-cell-group style="margin-top: 0.6rem">
      <van-cell title="支付方式" value="微信"></van-cell>
    </van-cell-group>

    <van-cell-group style="margin-top: 0.6rem">
      <van-cell title="备注">
        <van-field v-model="notice" placeholder="选填，备注您的特殊需求！" />
      </van-cell>
    </van-cell-group>

    <van-cell-group style="margin-top: 0.6rem">
      <van-cell title="商品金额" value="2"></van-cell>
      <van-cell title="配送费" value="1"></van-cell>
    </van-cell-group>

    <van-submit-bar
      :price="3"
      button-text="提交订单"
      label="实付"
      @submit="onSubmit"
    ></van-submit-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentDate: "",
      arriveDate: "",
      notice: ""
    };
  },

  components: {},

  created () { },

  methods: {
    onClickLeft () {
      this.$router.back();
    },
    chooseAddres () {
      this.$router.push('/myAddress')
    },
    showDatePopup () { },
    onSubmit () { }
  }
}

</script>
<style scoped>
</style>