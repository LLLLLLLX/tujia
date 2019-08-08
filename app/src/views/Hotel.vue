<template>
<div>
    <Nav></Nav>
    <div v-for="(elem,i) of details" :key="i">
        <img class="hotelTopPic" :src='require(`../assets/${elem.hic}`)' alt="">
    </div>
    
    <div class="hotelHead">
        <div class="">
            <span>房屋介绍</span>
            <span>交易规则</span>
            <span>入住须知</span>
            <span>额外费用</span>
            <span>房屋点评</span>
        </div>
        <div>
            <span>分享</span>
            <span>收藏</span>
        </div>
    </div>
    <div class="hotelContent">
        <el-row :gutter="20">
            <el-col :span="16">
                <div class="grid-content bg-purple hotelContentTitle" v-for="(elem,i) of details" :key="i">
                    <h2>{{elem.title}}</h2>
                    <div class="hotelAddress"><span>地址：{{elem.addr_detail}}</span></div>
                    <div class="headDetail"><span>自营民宿</span><span>连住优惠</span><span>闪订</span><span>实拍</span></div>
                    <div class="hotelDetail">
                        <div class=""><p>房屋描述</p></div>
                        <div><span>{{elem.detail}}</span></div>
                    </div>
                    <div class="hotelServe">
                        <div class="serverTitle"><p>设施服务</p></div>
                        <div><span>基础设施</span></div>
                        <div class="serverDetail">
                            <p><img src="../assets/wifi.png" alt="">无线网络</p>
                            <p><img src="../assets/kongtiao.png" alt="">部分空调</p>
                            <p><img src="../assets/dianshi.png" alt="">电视</p>
                            <p><img src="../assets/xiyiji_.png" alt="">洗衣机</p>
                            <p><img src="../assets/weibiaoti.png" alt="">暖气</p>
                        </div>
                        <div class="serverDetail">
                            <p><img src="../assets/shuihu.png" alt="">电热水壶</p>
                            <p><img src="../assets/chuifengji.png" alt="">吹风机</p>
                            <p><img src="../assets/tubiaozhizuomoban-.png" alt="">打扫工具</p>
                            <p><img src="../assets/tuoxie.png" alt="">拖鞋</p>
                            <p><img src="../assets/yizi.png" alt="">休闲椅</p>
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
                    <div class="hotelRule">
                        <p>交易规则<span>此交易规则由房东制定</span></p>
                        <div><span>付款方式：</span>全额预付房费</div>
                        <div><span>无须确认：</span>下单后即有房，无需等待房东确认</div>
                        <div><span>入住押金：</span>到店支付¥200.00</div>
                        <div><span>清洁费：</span>需与房东线下确认</div>
                    </div>
                    <div class="hotelStep">
                        <el-steps  align-center>
                            <el-step title="入驻成功" description=""></el-step>
                            <el-step title="入住当天12:00" description="取消订单收取房费的100%"></el-step>
                            <el-step title="离店当天" description="提前离店收取剩余房费的100%"></el-step>
                        </el-steps>
                    </div>
                </div>
                <div class="hotelReview">
                        <div class="reviewContent">
                            <div class="reviewTitle"><p>本房屋点评</p></div>
                            <div class="hotelScore">
                                <span>综合评分：</span>
                                <el-rate
                                    v-model="score"
                                    disabled
                                    show-score
                                    text-color="#fd8238"
                                    >
                                </el-rate>
                            </div>
                            <div class="scoreDetail">
                                <span>整洁评分：5分</span>
                                <span>管理服务：5分</span>
                                <span>交通位置：5分</span>
                                <span>设施装修：5分</span>
                            </div>
                            <div class="reviewDetail">
                                <div class="reviewAvatar">
                                    <img src="../assets/avatar.png" alt="">
                                </div>
                                <div class="review">
                                    <div class="uname">酷***</div>
                                    <div class="udate">2019-08-01</div>
                                    <div class="ureview">位置好，交通便利，位置好</div>
                                    <div class="ureply">
                                        <span>房东回复：</span> 感谢你的评价，祝你生活愉快,欢迎你下次再来
                                    </div>
                                </div>
                            </div>
                            <div class="reviewDetail">
                                <div class="reviewAvatar">
                                    <img src="../assets/avatar.png" alt="">
                                </div>
                                <div class="review">
                                    <div class="uname">酷***</div>
                                    <div class="udate">2019-08-01</div>
                                    <div class="ureview">位置好，交通便利，位置好</div>
                                    <div class="ureply">
                                        <span>房东回复：</span> 感谢你的评价，祝你生活愉快,欢迎你下次再来
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple hotelintrocontent">
                    <div class="hotelintro">
                        <div class="hotelPrice">
                            <el-row :gutter="10" v-for="(elem,i) of details" :key="i">
                                <el-col :sm="24" :md="16" :lg="16"><h1>￥{{elem.price}}</h1></el-col>
                                <el-col :sm="24" :md="8" :lg="8"><span>每晚</span></el-col>
                            </el-row>
                        </div>
                            
                        <div class="hotelSale">
                            <el-row :gutter="10">
                                <el-col  :sm="24" :md="8" :lg="5" >
                                    <div class="saleLeft"><span>连住优惠</span></div>
                                </el-col>
                                <el-col  :sm="24" :md="16" :lg="19" >
                                    <div><span>&nbsp;&nbsp;&nbsp;满2天9.5折、3天9.0折、7天8.5折、15天8.0折</span></div>    
                                </el-col>
                                </el-row>

                            
                            
                        </div>
                        <div class="hotelDate">
                            <el-date-picker
                            v-model="date"
                            type="daterange"
                            value-format="yyyy-MM-dd"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            :default-time="['00:00:00', '23:59:59']">
                            </el-date-picker>
                        </div>
                        <div class="hotelBtn">
                            <el-row>
                                <el-button type="warning" @click="toOrderinfo(details[0].hid)">立刻预定</el-button>
                            </el-row>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
    <Footer></Footer>
</div>
</template>
<script>
import Nav from './Nav.vue'
import Footer from './Footer.vue'

export default {
    components:{
        "Nav":Nav,
        "Footer":Footer,
        
    },
    data() {
        return {
             date: [],
             score:3.7,
             hid:'',
             details:[]
        }
    },
    methods: {
        toOrderinfo(hid){
            //console.log(hid);
            this.$router.push({path:'/Orderinfo',query:{id:hid,date:this.date}});
        }
    },
    mounted(){
        this.date=sessionStorage.getItem("date").split(",");
        //console.log(this.$route.query.id);
        var hid={hid:this.$route.query.id};
        this.axios.get("/details",{params:hid}).then(res=>{
            this.details=res.data.result;
            //console.log(this.details);
        })
    },
}
</script>
<style>
.hotelTopPic{
    width:100%;
    height:550px;
}
.hotelHead div{
    display:flex;
}
.hotelHead {
     display:flex;
     justify-content:space-around;
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
      margin:auto 0;
  }
  .serverDetail p img{
      width:28px;
      height:28px;
      margin-right:8px;
  }
  .hotelServe{
      margin-top:80px;
  }
  .hotelServe div span{
      font-size:14px;
      color:#333;
      font-weight:400;
  }
  .hotelServe div{
      font-size:14px;
      color:#333;
      font-weight:400;
      margin-bottom:16px;
  }
  .serverTitle p{
      font-size:20px;
      color:#333;
      font-weight:500;
  }
  .serverDetail{
      font-size:14px;
      color:#333;
      font-weight:400;
  }
  .serverDetail p{
      font-size:14px;
      color:#666;
      width:20%;
      margin:0;
  }
  .hotelintro{
      padding:30px 20px;
  }
  .hotelPrice{
      display:flex;
  }
  .hotelPrice p{

  }
  .hotelPrice span{
      display:block;
      margin-top:13px;
      margin-left:5px;
  }
  .hotelSale{
      display:flex;
      margin-bottom:20px;
  }
  
  .hotelSale span{
      font-size:12px;
      color:#666;
      
  }
  .saleLeft span{
      border:1px solid #fd8238;
      color:#fd8238;
      font-size:12px;
  }
  .hotelBtn{
      margin-top:20px;
  }

  .hotelRule p{
    font-size: 20px;
    color: #333;
    margin-bottom: 25px;
    margin-top: 50px;
    font-weight: 500;
  }
  .hotelRule p span{
    color: #999;
    font-size: 14px;
    font-weight: 400;
  }
  .hotelRule div{
      font-size:14px;
      color:#666;
      margin-bottom:8px;
  }
  .hotelRule div span{
      color:#333;
  }
  .hotelStep{
      margin-top:30px;
  }
  .hotelReview{
      background:#fff;
      margin-top:20px;
  }
  .reviewTitle{
      border-bottom:1px solid #ddd;
      padding:20px 20px;
  }
  .reviewTitle p{
      margin:auto 0;
      color: #333;
      font-size:18px;
  }
  .reviewContent{
      
  }
  .hotelScore{
      padding:20px 20px 10px 20px;
      font-size:16px;
      color:#666;
      display:flex;
  }
  .el-rate__icon{
      font-size:26px!important;
  }
  .scoreDetail span{
      margin-right:40px;
      color:#666;
      font-size:14px;
  }
  .scoreDetail{
      margin-right:40px;
      color:#666;
      font-size:14px;
      padding:0 20px 20px 20px;
  }
  .reviewDetail{
      display:flex;
      padding:20px 40px;
      border-bottom:1px solid #ddd;
  }
  .reviewAvatar{
      margin-right:20px;
  }
  .reviewAvatar img{
      width:40px;
      height:40px;
  }
  .uname{
      font-size:16px;
  }
  .udate{
      font-size:12px;
      color:#999;
      margin:10px 0;
  }
  .ureview{
      font-size:14px; 
      color:#333;
      margin-top:20px;
  }
  .ureply{
      background:#f8f8f8;
      border:1px solid #ddd;
      margin-top:20px;
      padding:14px 15px;
      font-size:14px;
  }
  .ureply span{
      font-weight: 700;
  }
</style>