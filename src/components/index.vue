<template>
  <div class="index">
    <div class="top">
      <img src="../assets/mainbg.png">
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="less">
  .index{
    width: 100%;
    .top {
      width:90%;
      height:30%;
      margin:10px auto;
      img {
        width:100%;
      }
    }
  }
</style>
