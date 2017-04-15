<template>
  <div class="index">
    <div class="top">
      <img src="../assets/mainbg.png">
      <img id="askImg" :src="imgUrl" alt="">
      <div class="level">等级：<span class="levelText">{{level}}</span></div>
      <div class="btns">
        <button id="reset" @click="clear">清空</button>
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
      item:'',
      imgUrl: '',
      answer:'',
      remindText:'',
      id:'',
      index:0,
      resAnswer:'',
      level:''
    }
  },
  mounted: function() {
    this.$http.get('data/data.json').then((res) => {
      this.item = res.data.item;
      this.imgUrl = this.item[this.index].imgUrl;
      this.id = this.item[this.index].id;
      this.resAnswer = this.item[this.index].answer;
      this.level = this.item[this.index].level;
      this.remindText = this.item[this.index].answer[0];
    });
  },
  methods: {
    clear() {
      this.answer = '';
    },
    remind() {
      this.answer = this.remindText;
    },
    submit() {
      if(this.answer == this.resAnswer) {
        if(this.index == 9) {
          alert('恭喜通关！您已经是状元了！');
          this.answer = '';
        }
        this.index = this.index+1;
        this.imgUrl = this.item[this.index].imgUrl;
        this.id = this.item[this.index].id;
        this.resAnswer = this.item[this.index].answer;
        this.level = this.item[this.index].level;
        this.remindText = this.item[this.index].answer[0];
        this.answer = '';
      }else {
        alert('答案错误 请重新输入');
        this.answer = '';
      }
    }
  }
}
</script>

<style lang="less">
  .index{
    width: 100%;
    margin-top: 20px;
    .top {
      width:90%;
      height:30%;
      margin:8px auto 5px;
      img {
        width:60%;
        margin:5px auto;
        display: block;
      }
      .level {
        width: 100%;
        margin:10px auto;
        text-align: center;
        font-weight: bold;
        .levelText {
          color:red;
        }
      }
      .btns {
        margin:20px auto;
        text-align: center;
        button {
          padding:5px 15px;
          margin-right: 10px;
          background-color: rgb(213,192,151);
          text-align: center;
          color:white;
          outline: none;
        }
      }
      #askImg {
        width: 30%;
        position: absolute;
        top:20px;
        left:35%;
      }
    }
    .inputCover {
      width: 100%;
      text-align: center;
      input {
        outline: none;
        margin:0;
        padding:3px 5px;
        border: none;
        text-align: center;
      }
    }
    .submit {
      display: block;
      margin:30px auto;
      padding: 6px 40px;
      background-color: #f6d2aa;
      text-align: center;
      font-weight: bold;
      outline: none;
    }
  }
</style>
