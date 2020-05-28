<template>
  <div class="container">
    <!-- 返回 -->
    <div class="zixun" @click="$router.go(-1)">
      <img class="icon" src="../assets/images/txjl_back@2x.png" alt="">
      <div class="title">员工业务</div>
    </div>
    <!-- 企业logo -->
    <div class="ygyw_top">
      <img src="../assets/images/qieyebj@2x.png" alt="">
      <div class="ygyw_top_logo">
        <img src="../assets/images/41588229003_.pic_hd@2x.png" alt="">
      </div>
    </div>
    <!-- 登录账号 -->
    <div class="ygyw_sign">
      <div class="ygyw_active">账号登陆</div>
      <div>入职申请账号</div>
    </div>
    <!-- 表单 -->
    <div class="ygyw_input">
      <div class="ygyw_phone">
        <img src="../assets/images/sjh@2x.png" alt="">
        <input type="text" placeholder="输入手机号">
      </div>
      <div class="ygyw_phone">
        <img src="../assets/images/mm@2x.png" alt="">
        <input type="password" placeholder="输入密码">
      </div>
    </div>
    <!-- 立即投递 -->
    <div class="tdjl_box">
      <div class="tdjl" @click="gzt()">
        登录
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
    
    xgzz(){
      this.$router.push({
        path:`/xgzz`
      })
    },
    gzt(){
      this.$router.push({
        path:`/gzt`
      })
    }
    // newsxq(){
    //   this.$router.push({
    //       path: `/ywhz_xq`,
    //   })
    // }
  }
}
</script>

<style lang="less" scoped>
.zixun{
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  // background:rgba(255,255,255,1);
  height: 1.44rem;
  align-items: center;
  .icon{
    position: absolute;
    left: 0.32rem;
    width: 0.67rem;
    height: 0.67rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title{
    font-size:0.48rem;
    font-family:Segoe UI;
    font-weight:400;
    line-height:0.64rem;
    color:rgba(255,255,255,1);
  }
}
.ygyw_top{
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    height: 7.12rem;
    width: 100%;
  }
  .ygyw_top_logo{
    margin-top: -1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width:2.21rem;
    height:2.21rem;
    background:rgba(255,255,255,0.61);
    box-shadow:0rem 0.08rem 0.16rem rgba(0,0,0,0.16);
    border-radius:0.27rem;
    img{
      width: 1.94rem;
      height: 1.84rem;
    }
  }
}
.ygyw_sign{
  margin-top: 1.12rem;
  display: flex;
  justify-content: center;
  div{
    display: flex;
    justify-content: center;
    padding-bottom: 0.48rem;
    width: 3.17rem;
    border-bottom: 0.03rem solid #D8D8D8;
    font-size:0.43rem;
    font-family:Segoe UI Historic;
    font-weight:400;
    line-height:0.56rem;
    color:rgba(190,190,190,1);
  }
  .ygyw_active{
    color:rgba(27,160,209,1);
    border-bottom: 0.03rem solid #1BA0D1;
  }
}
.ygyw_input{
  margin-top: 1.44rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .ygyw_phone{
    height: 1.31rem;
    width: 6.59rem;
    display: flex;
    align-items: center;
    border-bottom: 0.01rem solid rgba(216,216,216,0.66);
    input{
      padding-left: 0.03rem;
      width: 100%;
      height: 100%;
      border: 0;
      font-size:0.37rem;
      font-family:Segoe UI Historic;
      font-weight:400;
      line-height:0.51rem;
      color:rgba(158,158,158,1);
    }
    img{
      width: 0.48rem;
      height: 0.48rem;
    }
  }
}
.tdjl_box{
  background:rgba(255,255,255,1);
  margin-top: 1.36rem;
  .tdjl{
    margin:0rem auto 0.4rem;
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
}


</style>
