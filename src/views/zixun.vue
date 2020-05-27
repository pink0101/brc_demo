<template>
  <div class="container">
    <!-- 最新资讯 -->
    <div class="zixun">
      <van-icon name="arrow-left" class="icon" @click="$router.go(-1)"/>
      <div class="title">最新资讯</div>
    </div>
    <!-- banner -->
    <div class="banner">
      <img class="img" src="../assets/images/banner2x.png" />
      <div class="b-content">祖国母亲70华诞，员工献唱表白圆满结束</div>
    </div>
    <!-- 资讯 item -->
    <div class="zx">
      <div class="zx_item" @click="newsxq()">
        <div class="zx_item_l">
          <div>祖国母亲70华诞，员工献唱表白圆满结束</div>
          <div>2020-12-23</div>
        </div>
        <img class="zx_item_img" src="../assets/images/junren@2x.png" alt="">
      </div>
      <div class="zx_item">
        <div class="zx_item_l">
          <div>祖国母亲70华诞，员工献唱表白圆满结束</div>
          <div>2020-12-23</div>
        </div>
        <img class="zx_item_img" src="../assets/images/junren@2x.png" alt="">
      </div>
      <div class="zx_item">
        <div class="zx_item_l">
          <div>祖国母亲70华诞，员工献唱表白圆满结束</div>
          <div>2020-12-23</div>
        </div>
        <img class="zx_item_img" src="../assets/images/junren@2x.png" alt="">
      </div>
      <div class="zx_item">
        <div class="zx_item_l">
          <div>祖国母亲70华诞，员工献唱表白圆满结束</div>
          <div>2020-12-23</div>
        </div>
        <img class="zx_item_img" src="../assets/images/junren@2x.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      la:'12'
    }
  },
  created() {
  },
  methods: {
    newsxq(){
      this.$router.push({
          path: `/newsxq`,
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
.banner{
  height: 5.68rem;
  background:rgba(249,250,255,1);
  display: flex;
  flex-direction: column;
  align-items: center;
  .img{
    width: 9.09rem;
    height: 3.87rem;
    margin-top: 0.43rem
  }
  .b-content{
    padding-top: .32rem;
    padding-left: .53rem;
    width:9.09rem;
    height:1.15rem;
    background:rgba(255,255,255,1);
    font-size:0.37rem;
    font-family:Roboto;
    font-weight:400;
    line-height:0.51rem;
    color:rgba(24,24,24,1);
    text-align: left;
    border-bottom-left-radius: 0.1rem;
    border-bottom-right-radius: 0.1rem;
  }
}
.zx{
  padding: 0 0.45rem;
  .zx_item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.17rem;
    .zx_item_img{
      width: 2.57rem;
      height: 2.56rem;
    }
    .zx_item_l div:nth-child(1){
      width:6rem;
      height:1.12rem;
      font-size:0.43rem;
      font-family:Roboto;
      font-weight:400;
      line-height:0.56rem;
      color:rgba(24,24,24,1);
      text-align: left;
      margin-bottom: .64rem
    }
    .zx_item_l div:nth-child(2){
      height:0.43rem;
      font-size:0.32rem;
      font-family:Roboto;
      font-weight:400;
      line-height:0.43rem;
      color:rgba(173,171,171,1);
      text-align: left;
    }
  }
}
</style>
