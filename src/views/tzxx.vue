<template>
  <div class="container">
    <!-- 返回 -->
    <div class="zixun" @click="$router.go(-1)">
      <img class="icon" src="../assets/images/81587028561@2x.png" alt="">
      <div class="title">通知消息</div>
    </div>
    <!-- item -->
    <div class="tzxx_box" @click="tzxx_xq()">
      <img src="../assets/images/xxzt-ytd@2x.png" alt="">
      <div class="tzxx_box_r">
        <div>投递通知</div>
        <div>我们已经向您发起了面试邀请…</div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow:0,
    }
  },
  created() {
  },
  methods: {
    
    tzxx_xq(){
      this.$router.push({
          path: `/tzxx_xq`,
      })
    }
  }
}
</script>

<style lang="less" scoped>
.zixun{
  width: 100%;
  display: flex;
  justify-content: center;
  // background:rgba(255,255,255,1);
  height: 1.44rem;
  align-items: center;
  border-bottom: 0.03rem solid rgba(112,112,112,0.14);
  .icon{
    position: absolute;
    left: 0rem;
    width: 2.01rem;
    height: 1.08rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title{
    font-size:0.48rem;
    font-family:Roboto;
    font-weight:400;
    line-height:0.64rem;
    color:rgba(0,0,0,1);
  }
}
.tzxx_box{
  height: 2.45rem;
  padding-left: 0.51rem;
  display: flex;
  align-items: center;
  border-bottom: 0.03rem solid rgba(112,112,112,0.14);
  img{
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.24rem;
  }
  .tzxx_box_r{
    div:nth-child(1){
      font-size:0.43rem;
      font-family:PingFang SC;
      font-weight:400;
      line-height:0.61rem;
      color:rgba(39,39,39,1);
    }
    div:nth-child(2){
      font-size:0.32rem;
      font-family:PingFang SC;
      font-weight:400;
      line-height:0.48rem;
      color:rgba(39,39,39,1);
    }
  }
}

</style>
