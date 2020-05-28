<template>
  <div class="container">
    <!-- 返回 -->
    <div class="zixun" @click="$router.go(-1)">
      <img class="icon" src="../assets/images/txjl_back@2x.png" alt="">
      <div class="title">填写简历</div>
    </div>
    <!-- 头像 -->
    <div class="avatar">
      <img class="avatar_bj" src="../assets/images/txjl_bj@2x.png" alt="">
      <div class="avavtar_img">
        <img src="../assets/images/avator@2x.png" alt="">
        <div class="ava_xj">
          <img src="../assets/images/xj@2x.png" alt="">
        </div>
      </div>
     
    </div>
    <!-- 个人信息 -->
    <div class="jl_content">
      <div class="jl_top">
        <div class="jl_item" @click="rzxx()">
          <div class="jl_item_l">
            <div class="jl_item_l_l">
              <img src="../assets/images/rzgl@2x.png" alt="">
            </div>
            <div class="jl_item_l_r">
              <div>入职信息</div>
              <div>已完善</div>
            </div>
          </div>
          <img class="jl_item_r" src="../assets/images/jl_toback@2x.png" alt="">
        </div>
        <div class="jl_item" @click="grxx()">
          <div class="jl_item_l">
            <div class="jl_item_l_l">
              <img src="../assets/images/grxx@2x.png" alt="">
            </div>
            <div class="jl_item_l_r">
              <div>个人信息</div>
              <div>已完善</div>
            </div>
          </div>
          <img class="jl_item_r" src="../assets/images/jl_toback@2x.png" alt="">
        </div>
        <div class="jl_item" @click="jyjy()">
          <div class="jl_item_l">
            <div class="jl_item_l_l">
              <img src="../assets/images/jyxx@2x.png" alt="">
            </div>
            <div class="jl_item_l_r">
              <div>教育经验</div>
              <div>已完善</div>
            </div>
          </div>
          <img class="jl_item_r" src="../assets/images/jl_toback@2x.png" alt="">
        </div>
        <div class="jl_item" @click="gzjy()">
          <div class="jl_item_l">
            <div class="jl_item_l_l">
              <img src="../assets/images/gzjy@2x.png" alt="">
            </div>
            <div class="jl_item_l_r">
              <div>工作经验</div>
              <div>已完善</div>
            </div>
          </div>
          <img class="jl_item_r" src="../assets/images/jl_toback@2x.png" alt="">
        </div>
        <div class="jl_item" @click="xgzz()">
          <div class="jl_item_l">
            <div class="jl_item_l_l">
              <img src="../assets/images/zzzs@2x.png" alt="">
            </div>
            <div class="jl_item_l_r">
              <div>相关资质证书</div>
              <div>已完善</div>
            </div>
          </div>
          <img class="jl_item_r" src="../assets/images/jl_toback@2x.png" alt="">
        </div>
        <div class="jl_item" @click="Show()">
          <div class="jl_item_l">
            <div class="jl_item_l_l_lv">
              <img src="../assets/images/word@2x.png" alt="">
            </div>
            <div class="jl_item_l_r" v-show="!isShow">
              <div>附件简历</div>
              <div>可以上传附件简历</div>
            </div>
            <div class="jl_item_l_r_2" v-show="isShow">
              <div>个人简历个人简历个人-张桐桐</div>
              <div>54.5KB</div>
            </div>
          </div>
          <img class="jl_item_r" v-show="!isShow" src="../assets/images/tj@2x.png" alt="">
        </div>
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
    Show(){
      this.isShow = !this.isShow
    },
    rzxx(){
      this.$router.push({
        path:`/rzxx`
      })
    },
    grxx(){
      this.$router.push({
        path:`/grxx`
      })
    },
    jyjy(){
      this.$router.push({
        path:`/jyjy`
      })
    },
    gzjy(){
      this.$router.push({
        path:`/gzjy`
      })
    },
    xgzz(){
      this.$router.push({
        path:`/xgzz`
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
    font-size:0.53rem;
    font-family:Segoe UI;
    font-weight:400;
    line-height:0.72rem;
    color:rgba(255,255,255,1);
  }
}
.avatar{
  height:5.95rem;
  background:rgba(21,136,223,1);
  display: flex;
  flex-direction: column;
  align-items: center;
  .avatar_bj{
    width: 100%;
    height: 100%;
  }
  .avavtar_img{
    position: relative;
    width: 2.08rem;
    height: 2.08rem;
    margin-top: -4rem;
    img:nth-child(1){
      width: 100%;
      height: 100%;
    }
    .ava_xj{
      position: absolute;
      right: 0;
      bottom: 0;
      width:0.64rem;
      height:0.64rem;
      background:rgba(255,255,255,1);
      box-shadow:0rem 0.08rem 0.16rem rgba(0,0,0,0.16);
      border-radius:50%;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: .51rem;
        height: .51rem;
      }
    }
  }
}
.jl_content{
  height:15.65rem;
  background:rgba(248,248,248,1);
  position: relative;
  .jl_top{
    position: absolute;
    top: -1.2rem;
    left: 0.59rem;
    width: 8.84rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    .jl_item{
      margin-bottom: 0.35rem;
      width:8.84rem;
      height:2.4rem;
      background:linear-gradient(153deg,rgba(255,255,255,1) 0%,rgba(255,255,255,1) 100%);
      box-shadow:0rem 0.11rem 0.21rem rgba(18,18,18,0.05);
      opacity:1;
      border-radius:0.13rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 0.88rem;
      padding-right: 0.64rem;
      .jl_item_l{
        display: flex;
        align-items: center;
        .jl_item_l_l{
          background: url('../assets/images/grxx_bj@2x.png');
          background-size:1.12rem 1.31rem;
          background-repeat:no-repeat;
          width: 1.12rem;
          height: 1.31rem;
          display: flex;
          justify-content: center;
          align-items: center;
          img{
            width: 0.61rem;
            height: 0.61rem;
          }
        }
        .jl_item_l_l_lv{
          background: url('../assets/images/jl_bg@2x.png');
          background-size:1.12rem 1.31rem;
          background-repeat:no-repeat;
          width: 1.12rem;
          height: 1.31rem;
          display: flex;
          justify-content: center;
          align-items: center;
          img{
            width: 0.61rem;
            height: 0.61rem;
          }
        }
        .jl_item_l_r{
          margin-left: 0.16rem;
          div:nth-child(1){
            font-size:0.43rem;
            font-family:Arial Black;
            font-weight:400;
            line-height:0.61rem;
            color:rgba(64,64,64,1);
          }
          div:nth-child(2){
            margin-top:0.1rem;
            font-size:0.37rem;
            font-family:Roboto;
            font-weight:400;
            line-height:0.51rem;
            color:rgba(161,161,161,1);
          }
        }
        .jl_item_l_r_2{
          margin-left: 0.16rem;
          div:nth-child(1){
            font-size:0.43rem;
            font-family:Roboto;
            font-weight:400;
            line-height:0.56rem;
            color:rgba(54,54,54,1);
          }
          div:nth-child(2){
            margin-top:0.1rem;
            font-size:0.35rem;
            font-family:Roboto;
            font-weight:400;
            line-height:0.45rem;
            color:rgba(108,108,108,1);
            opacity:0.66;
          }
        }
      }
      .jl_item_r{
        width: 0.4rem;
        height: 0.4rem;
      }
    }
  }
}
.tdjl_box{
  background:rgba(248,248,248,1);
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
