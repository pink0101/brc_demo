<template>
  <div class="container">
    <!-- 最新资讯 -->
    <div class="zixun">
      <img class="icon" src="../assets/images/81587028561@2x.png" alt="">
      <div class="title">业务合作</div>
    </div>
    <!-- 资讯 item -->
    <div class="zx">
      <div class="zx_item" @click="newsxq()">
        <div class="zx_item_l">
          <div>合作业务一的名称</div>
          <div><img src="../assets/images/iphone@2x.png" alt=""> 8293848372</div>
          <div><img src="../assets/images/adress@2x.png" alt=""> 北京市某某地方</div>
        </div>
        <img class="zx_item_img" src="../assets/images/45@2x.png" alt="">
      </div>
      <div class="zx_item" @click="newsxq()">
        <div class="zx_item_l">
          <div>合作业务一的名称</div>
          <div><img src="../assets/images/iphone@2x.png" alt=""> 8293848372</div>
          <div><img src="../assets/images/adress@2x.png" alt=""> 北京市某某地方</div>
        </div>
        <img class="zx_item_img" src="../assets/images/45@2x.png" alt="">
      </div>
      <div class="zx_item" @click="newsxq()">
        <div class="zx_item_l">
          <div>合作业务一的名称</div>
          <div><img src="../assets/images/iphone@2x.png" alt=""> 8293848372</div>
          <div><img src="../assets/images/adress@2x.png" alt=""> 北京市某某地方</div>
        </div>
        <img class="zx_item_img" src="../assets/images/45@2x.png" alt="">
      </div>
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
    newsxq(){
      this.$router.push({
            path: `/ywhz_xq`,
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
.zx{
  .zx_item{
    border-bottom: 0.01rem solid #f4f4f4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.17rem;
    padding: 0 0.48rem;
    .zx_item_img{
      width: 2.56rem;
      height: 2.56rem;
    }
    .zx_item_l div:nth-child(1){
      margin-top: .45rem;
      font-size:0.48rem;
      font-family:Roboto;
      font-weight:400;
      line-height:0.64rem;
      color:rgba(24,24,24,1);
    }
    .zx_item_l div:nth-child(2){
      img{
        width: 0.43rem;
        height: 0.43rem;
        margin-right: 0.2rem
      }
      margin-top: .21rem;
      display: flex;
      align-items: center;
      font-size:0.43rem;
      font-family:Roboto;
      font-weight:400;
      line-height:0.56rem;
      color:rgba(24,24,24,1);
      opacity:0.71;
    }
    .zx_item_l div:nth-child(3){
      img{
        width: 0.43rem;
        height: 0.43rem;
        margin-right: 0.1rem
      
      }
      margin-top: .24rem;
      display: flex;
      align-items: center;
      font-size:0.43rem;
      font-family:Roboto;
      font-weight:400;
      line-height:0.56rem;
      color:rgba(24,24,24,1);
    }
  }
}
</style>
