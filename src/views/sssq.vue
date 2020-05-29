<template>
  <div class="container">
    <!-- 返回 -->
    <div class="zixun" @click="$router.go(-1)">
      <img class="icon" src="../assets/images/81587028561@2x.png" alt="">
      <div class="title">宿舍申请</div>
    </div>
    <!-- 相关信息 -->
    <div class="rzxx_cont">
      <div class="rzxx_item">
        <div>姓名</div>
        <input type="text">
      </div>
      <div class="rzxx_item">
        <div>所在项目</div>
        <input type="text">
      </div>
      <div class="rzxx_item">
        <div>内容</div>
        <img src="../assets/images/sc@2x.png" alt="">
      </div>
      <div class="rzxx_item">
        <div>附件</div>
        <img src="../assets/images/sc@2x.png" alt="">
      </div>
      <div class="rzxx_item">
        <div>备注</div>
        <input type="text">
      </div>
    </div>
    
    <!-- 立即投递 -->
    <div class="tdjl" @click="tdjl()">
      提交申请
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
    tdjl(){
      this.$router.push({
          path: `/gzt`,
      })
    }
  }
}
</script>

<style lang="less" scoped>
.zixun{
  display: flex;
  justify-content: center;
  background:rgba(255,255,255,1);
  height: 1.44rem;
  align-items: center;
  border-bottom: 0.01rem solid #f4f4f4;
  .icon{
    position: absolute;
    left: 0;
    width: 2.01rem;
    height: 1.08rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title{
    font-size:0.48rem;
    font-family:PingFang SC;
    font-weight:400;
    line-height:1.33rem;
    color:rgba(65,65,65,1);
  }
}
.rzxx_cont{
  .rzxx_item{
    padding-left: 0.85rem;
    padding-right: 0.4rem;
    height: 1.76rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.05rem solid #F8F8F8;
    div{
      font-size:0.43rem;
      font-family:Roboto;
      font-weight:400;
      line-height:0.56rem;
      color:rgba(24,24,24,1);
    }
    img{
      width: 0.69rem;
      height: 0.69rem;
    }
    input{
      width: 6rem;
      height: 100%;
      border: 0;
      font-size:0.43rem;
      font-family:Roboto;
      font-weight:400;
      line-height:0.56rem;
      color:rgba(168,168,168,1);
      text-align: right;
      padding-right: 0.83
    }
  }
}

.tdjl{
  margin:0.64rem auto 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width:8.91rem;
  height:1.36rem;
  background:rgba(27,160,209,1);
  opacity:1;
  border-radius:0.16rem;
  font-size:0.48rem;
  font-family:PingFang SC;
  font-weight:600;
  line-height:0.69rem;
  color:rgba(255,255,255,1);
}

</style>
