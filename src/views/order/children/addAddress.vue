<template>
  <div>
    <van-nav-bar
      title="编辑地址"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- :area-list="areaList" -->
    <van-address-edit
      show-postal
      show-delete
      show-set-default
      show-search-result
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      areaList: [],
      searchResult: [],
    };
  },

  components: {},

  created () { },

  methods: {
    onClickLeft () {
      this.$router.back();
    },
    onSave () { },
    onDelete () { },
    onChangeDetail () { }
  }
}

</script>
<style scoped>
</style>