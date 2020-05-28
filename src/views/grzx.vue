<template>
  <div class="container">
    <!-- 返回 -->
    <div class="zixun" @click="$router.go(-1)">
      <img class="icon" src="../assets/images/txjl_back@2x.png" alt="">
      <div class="title">个人设置</div>
    </div>
    <!-- bj -->
    <div class="grzx_bj_top"></div>
    <!-- touxiang -->
    <div class="grzx_box">
      <div class="avatar">
        <div class="avatar_box">
          <img src="../assets/images/371586850784_.pic_hd@2x.png" alt="">
        </div>
        <div>普通用户</div>
      </div>
      <div class="gr_zt">
        <div class="gr_zt_item" @click="ytd()">
          <img src="../assets/images/ydd@2x.png" alt="">
          <div>已投递</div>
        </div>
        <div class="gr_zt_item" @click="tzxx()">
          <img src="../assets/images/tz@2x.png" alt="">
          <div>通知信息</div>
        </div>
      </div>
      <div class="tx_xx">
        <div class="tx_xx_cont">
          <div class="tx_xx_cont_l">
            <img src="../assets/images/xm@2x.png" alt=""> 姓名
          </div>
          <input type="text" name="" id="" placeholder="请输入">
        </div>
        <div class="tx_xx_cont">
          <div class="tx_xx_cont_l">
            <img src="../assets/images/dh@2x.png" alt=""> 联系电话
          </div>
          <input type="text" name="" id="" placeholder="请输入">
        </div>
        <div class="tx_xx_cont">
          <div class="tx_xx_cont_l">
            <img src="../assets/images/yx@2x.png" alt=""> 邮箱
          </div>
          <input type="text" name="" id="" placeholder="请输入">
        </div>
        <div class="tx_xx_cont">
          <div class="tx_xx_cont_l">
            <img src="../assets/images/adress@2x.png" alt=""> 地址
          </div>
          <input type="text" name="" id="" placeholder="请输入">
        </div>
      </div>
      <div class="xg_dl">
        <img src="../assets/images/mima@2x.png" alt="">
        更改登录密码
      </div>
    </div>
    <!-- 立即投递 -->
    <div class="tdjl_box">
      <div class="tdjl">
        立即投递
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
    ytd(){
      this.$router.push({
          path: `/ytd`,
      })
    },
    tzxx(){
      this.$router.push({
          path: `/tzxx`,
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
  top: 0;
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
    font-size:0.53rem;
    font-family:Segoe UI;
    font-weight:400;
    line-height:0.72rem;
    color:rgba(255,255,255,1);
  }
}
.grzx_bj_top{
  height:3.26rem;
  background:rgba(27,160,209,1);
}
.grzx_box{
  background:rgba(246,246,246,1);
  display: flex;
  flex-direction: column;
  align-items: center;  
  padding-bottom: 3.52rem;
  .avatar{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -1.4rem;
    .avatar_box{
      margin-bottom: 0.2rem;
      width:2.67rem;
      height:2.67rem;
      background:rgba(255,255,255,1);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 1;
      img{
        width: 2.4rem;
        height: 2.4rem;
      }
      
    }
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        width:1.84rem;
        height:0.45rem;
        background:rgba(27,160,209,1);
        box-shadow:0rem 0.08rem 0.16rem rgba(0,0,0,0.16);
        opacity:0.54;
        border-radius:0.11rem;
        font-size:0.27rem;
        font-family:Segoe UI;
        font-weight:normal;
        line-height:0.37rem;
        color:rgba(255,255,255,1);
      }
    
    
  }
  .gr_zt{
    margin-top: 0.88rem;
    width:9.2rem;
    height:2.67rem;
    background:rgba(255,255,255,1);
    opacity:1;
    border-radius:0.21rem;
    padding-left: 1.52rem;
    padding-right: .99rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .gr_zt_item{
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
        width: 0.8rem;
        height: .8rem;
      }
      div{
        margin-top: 0.24rem;
        font-size:0.37rem;
        font-family:Segoe UI Historic;
        font-weight:400;
        line-height:0.51rem;
        color:rgba(68,65,68,1);
      }
    }
  }
  .tx_xx{
    width:9.17rem;
    height:4.8rem;
    background:rgba(255,255,255,1);
    opacity:1;
    border-radius:0.21rem;
    padding-left: 0.53rem;
    padding-right: 0.48rem;
    margin-top: 0.24rem;
    .tx_xx_cont{
      display: flex;
      justify-content: space-between;
      border-bottom: 0.03rem solid #F8F8F9;
      height: 1.2rem;
      input{
        width: 5rem;
        border: 0;
        text-align: right;
        font-size:0.37rem;
        font-family:Segoe UI Historic;
        font-weight:400;
        line-height:0.51rem;
        color:rgba(187,187,187,1);
      }
      .tx_xx_cont_l{
        display: flex;
        align-items: center;
        font-size:0.37rem;
        font-family:Segoe UI Historic;
        font-weight:400;
        line-height:0.51rem;
        color:rgba(68,65,68,1);
        img{
          margin-right: 0.35rem;
          width: 0.32rem;
          height: 0.32rem;
        }
      }
    }
  }
  .xg_dl{
    padding-left: 0.53rem;
    margin-top: .27rem;
    width:9.17rem;
    border-radius:0.21rem;
    height:1.39rem;
    background:rgba(255,255,255,1);
    font-size:0.37rem;
    font-family:Segoe UI Historic;
    font-weight:400;
    line-height:0.51rem;
    color:rgba(68,65,68,1);
    display: flex;
    align-items: center;
    img{
      margin-right: 0.11rem;
      width: 0.67rem;
      height: 0.67rem;
    }
  }
}
.tdjl_box{
  background:rgba(246,246,246,1);
  padding-bottom: 0.8rem;
  .tdjl{
    margin:0rem auto 0;
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
