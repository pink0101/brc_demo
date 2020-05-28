<template>
  <div class="container">
    <!-- 返回 -->
    <div class="zixun" @click="$router.go(-1)">
      <img class="icon" src="../assets/images/81587028561@2x.png" alt="">
      <div class="title">工作台</div>
    </div>
    <!-- 查询服务 -->
    <div class="gzt_box">
      <div class="gzt_box_name">查询服务</div>
      <div class="gzt_box_content">
        <div class="gzt_box_item">
          <div class="gzt_box_item_top">
            <div></div>
            <img src="../assets/images/gzcx@2x.png" alt="">
          </div>
          <div class="gzt_box_item_bottom">
            <div>公积金查询</div>
            <div>方便/快捷</div>
          </div>
        </div>
        <div class="gzt_box_item">
          <div class="gzt_box_item_top">
            <div></div>
            <img src="../assets/images/gzcx@2x.png" alt="">
          </div>
          <div class="gzt_box_item_bottom">
            <div>公积金查询</div>
            <div>方便/快捷</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 办理服务 -->
    <div class="gzt_box gzt_box_active">
      <div class="gzt_box_name">办理服务</div>
      <div class="gzt_box_content">
        <div class="gzt_box_item">
          <div class="gzt_box_item_top">
            <div></div>
            <img src="../assets/images/gzcx@2x.png" alt="">
          </div>
          <div class="gzt_box_item_bottom">
            <div>公积金查询</div>
            <div>方便/快捷</div>
          </div>
        </div>
        <div class="gzt_box_item">
          <div class="gzt_box_item_top">
            <div></div>
            <img src="../assets/images/gzcx@2x.png" alt="">
          </div>
          <div class="gzt_box_item_bottom">
            <div>公积金查询</div>
            <div>方便/快捷</div>
          </div>
        </div>
        <div class="gzt_box_item">
          <div class="gzt_box_item_top">
            <div></div>
            <img src="../assets/images/gzcx@2x.png" alt="">
          </div>
          <div class="gzt_box_item_bottom">
            <div>公积金查询</div>
            <div>方便/快捷</div>
          </div>
        </div>
        <div class="gzt_box_item">
          <div class="gzt_box_item_top">
            <div></div>
            <img src="../assets/images/gzcx@2x.png" alt="">
          </div>
          <div class="gzt_box_item_bottom">
            <div>公积金查询</div>
            <div>方便/快捷</div>
          </div>
        </div>
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
  display: flex;
  justify-content: center;
  // background:rgba(255,255,255,1);
  height: 1.44rem;
  align-items: center;
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
.gzt_box{
  padding-top: 0.8rem;
  padding-left: 0.64rem;
  padding-right: 0.48rem;
  background:rgba(246,248,249,1);
  .gzt_box_name{
    font-size:0.48rem;
    font-family:Roboto;
    font-weight:400;
    line-height:0.64rem;
    color:rgba(0,0,0,1);
  }
  .gzt_box_content{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 0.27rem;
    .gzt_box_item{
      margin-bottom: 0.4rem;
      width:4.27rem;
      height:4.35rem;
      background:rgba(255,255,255,1);
      box-shadow:-0.07rem 0.14rem 0.48rem rgba(115,100,248,0.1);
      opacity:1;
      border-radius:0.4rem;
      .gzt_box_item_top{
        margin-top: 0.53rem;
        margin-left: 0.32rem;
        position: relative;
        div{
          width:0.93rem;
          height:0.93rem;
          background:rgba(124,184,50,1);
          opacity:0.1;
          border-radius:0.27rem;
        }
        img{
          position: absolute;
          top: 0.3rem;
          left: 0.24rem;
          width:0.93rem;
          height:0.93rem;
        }
      }
      .gzt_box_item_bottom{
        margin-top: 1.3rem;
        margin-left: 0.27rem;
        width:3.73rem;
        height:1.44rem;
        background:rgba(48,73,186,0.05);
        border-radius:0.27rem;
        padding-left: 0.27rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        div:nth-child(1){
          margin-top: 0.19rem;
          font-size:0.43rem;
          font-family:Montserrat;
          font-weight:bold;
          color:rgba(15,2,80,1);
        }
        div:nth-child(2){
          font-size:0.32rem;
          font-family:Montserrat;
          font-weight:600;
          color:rgba(188,188,200,1);
        }
      }
    }
  }
}
.gzt_box_active{
  padding-top: 1.12rem;
}

</style>
