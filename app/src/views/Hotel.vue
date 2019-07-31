<template>
<div>
    <div class="hotelHead">
        <img src="../assets/hotel01.jpg" alt="">
        <div class="">
            <span>房屋介绍</span>
            <span>交易规则</span>
            <span>入住须知</span>
            <span>额外费用</span>
            <span>房屋点评</span>
            <div>
                <span>分享</span>
                <span>收藏</span>
            </div>
        </div>
    </div>
    <div class="hotelContent">
        <el-row :gutter="20">
            <el-col :span="16">
                <div class="grid-content bg-purple hotelContentTitle">
                    <h2>【班禾】大明湖/小清河/好停车/大一居</h2>
                    <div class="hotelAddress"><span>地址：恒大滨河左岸</span></div>
                    <div class="headDetail"><span>自营民宿</span><span>连住优惠</span><span>闪订</span><span>实拍</span></div>
                    <div class="hotelDetail">
                        <div class=""><p>房屋描述</p></div>
                        <div><span>我的房子是一室一卫，干净整洁，有厨房，有1张双人床可供2人居住，有1个卫生间。采光非常好，下午满满的阳光照射进来非常温暖，通风很好，打开窗户很凉快。每天阳光可晒到大床上，让您沐浴阳光下使完美得自然日光给您带来一天得温暖和幸福。沙发茶几电视网络一应俱全，二楼是卧室，一张一米五的双人大床，床柔软舒适，床品干净整洁，希望缓解您旅途中的疲惫～<br>房子周围交通方便，出行方式众多，打车，公交，单车均十分的方便，南边就是小清河，风景非常优美。距离大明湖3公里左右</span></div>
                    </div>
                    <div class="hotelServe">
                        <div class="serverTitle"><p>设施服务</p></div>
                        <div><span>基础设施</span></div>
                        <div class="serverDetail">
                            <p>无线网络</p>
                            <p>部分空调</p>
                            <p>电视</p>
                            <p>洗衣机</p>
                            <p>暖气</p>
                        </div>
                        <div class="serverDetail">
                            <p>电热水壶</p>
                            <p>吹风机</p>
                            <p>打扫工具</p>
                            <p>拖鞋</p>
                            <p>休闲椅</p>
                        </div>
                        <div><span>卫浴设施</span></div>
                        <div class="serverDetail">
                            <p>全天热水</p>
                            <p>洗浴用品</p>
                            <p>毛巾</p>
                            <p>牙具</p>
                            <p>独立卫浴</p>
                        </div>
                        <div class="serverDetail">
                            <p>浴巾</p>
                            <p>卫生纸</p>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    
                </div>
            </el-col>
        </el-row>

    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style>
.hotelHead img{
    width:100%;
    height:550px;
}
.hotelHead div{
    display:flex;
    margin-left:167px;
}
.hotelHead span{
    display:block;
    width:56px;
    height:56px;
    line-height: 56px;
    font-size:14px;
    color:#333;
    margin-right:56px;
}
.hotelHead div div{
    margin-left:450px;
}
.hotelHead div div span{
    font-size:16px;
    margin-right:30px;
}
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
  }
  .bg-purple-dark {
    background: #fff;
  }
  .bg-purple {
    background: #fff;
  }
  .bg-purple-light {
    background: #fff;
  }
  .grid-content {
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #fff;
  }
  .hotelContent{
      background:#f5f5f5;
      padding:30px 100px;
  }
  .headDetail span{
    padding: 3px 6px;
    margin-right: 14px;
    color: #f66;
    font-size: 12px;
    background: #ffeded;
    border-radius: 2px;
  }
  .hotelContentTitle{
      padding:40px 30px 30px;
  }
  .hotelContentTitle h2{
      font-weight: 500;
      font-size: 28px;
      color: #333;
      margin-bottom:12px;
  }
  .hotelAddress{
      font-weight: 400;
      font-size:14px;
      color:#9b9b9b;
      margin-bottom:20px;
  }
  .hotelDetail{
      margin-top:50px;
  }
  .hotelDetail p{
    font-size: 20px;
    color: #333;
    font-weight:500;
    margin-bottom:25px;
  }
  .hotelDetail div{
    font-size: 14px;
    color: #333;
  }
  .serverDetail{
      display:flex;
  }
  .serverDetail p{
      width:150px;
  }
  .hotelServe{
      margin-top:80px;
  }
</style>