<template>
  <div class="index">
    <div class="top">
      <img src="../assets/mainbg.png">
      <img id="askImg" :src="askImg[0]" alt="">
      <div class="btns">
        <button id="reset" @click="clear">重来</button>
        <button id="reminder" @click="remind">提示</button>
      </div>
    </div>
    <div class="inputCover">
      <input type="text" v-model="answer" placeholder="请输入答案">
    </div>
    
    <button class="submit" @click="submit">提交</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      askImg: ['src/assets/imgs/1.png'],
      answer:''
    }
  },
  methods: {
    clear() {
      this.answer = '';
    },
    remind() {

    },
    submit() {

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
      position: relative;
      img {
        width:100%;
      }
      .btns {
        position: absolute;
        top:160px;
        left: 10%;
        width: 80%;
        text-align: center;
        button {
          padding:5px 15px;
          margin-right: 10px;
          background-color: rgb(213,192,151);
          text-align: center;
          color:white;
        }
      }
      #askImg {
        width: 40%;
        position: absolute;
        top:20px;
        left:30%;
      }
    }
    .inputCover {
      width: 100%;
      text-align: center;
      margin-top: 50px;
      input {
        outline: none;
        margin:0;
        padding:3px 5px;
      }
    }
    .submit {
      display: block;
      margin:30px auto;
      padding: 6px 40px;
      background-color: #f6d2aa;
      text-align: center;
      font-weight: bold;
    }
  }
</style>
