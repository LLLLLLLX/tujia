<template>
<div>
    <Nav></Nav>
    <div class="PersonalCenter">
        <el-row>
            <el-col :span="5">
                <div class="perLeft">
                    <div class="perInfo">
                        <p>18375435076</p>
                        <p>修改个人资料</p>
                        <p>钻石卡绑定</p>
                    </div>
                    <div class="perTitle">
                        <img src="../assets/dingdan.png" alt="">
                        <span>我的订单</span>
                    </div>
                    <div class="perOrder">
                        <ul>
                            <li>订单管理</li>
                            <li>点评管理</li>
                        </ul>
                    </div>
                    <div class="perTitle">
                        <img src="../assets/dingdan.png" alt="">
                        <span>我的资产</span>
                    </div>
                    <div class="perOrder">  
                        <ul>
                            <li>账户余额</li>
                            <li>收款账号</li>
                            <li>我的途游卡</li>
                            <li>我的红包</li>
                            <li>我的积分</li>
                        </ul>
                    </div>
                    <div class="perTitle">
                        <img src="../assets/dingdan.png" alt="">
                        <span>个人中心</span>
                    </div>  
                    <div class="perOrder">
                        <ul>
                            <li>个人资料</li>
                            <li>修改密码</li>
                            <li>我的收藏</li>
                        </ul>
                    </div>
                </div>
            </el-col>
            <el-col :span="19">
                <div class="perRight">
                    <p>我的订单</p>
                    <div>
                        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                            <el-tab-pane label="国内订单" name="first">
                                <div class="rContent" v-for="(elem,i) of hotelList" :key="i">
                                    <el-row>
                                        <el-col :span="4">
                                            <div class="rpic">
                                                <img src="../assets/landlord01.jpg" alt="">
                                            </div>
                                        </el-col>
                                        <el-col :span="20">
                                            <div class="rcontent">
                                                <p class="rtitle">{{elem.hname}}</p>
                                                <div class="rdate">
                                                    <p>入住：{{elem.datestart}}</p>
                                                    <p>退房：{{elem.dateend}}</p>
                                                    <p>套数：{{elem.bookingnum}}</p>
                                                    <p>房费：￥288</p>
                                                </div>
                                                <p class="rrate">订金：￥100</p>
                                                <p class="rstate" v-show="payState==1">订单状态：已支付</p>
                                                <p class="rstate" v-show="payState==0">订单状态：待支付</p>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="国外港台订单" name="second">国外港台订单</el-tab-pane>
                        </el-tabs>
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
        "Footer":Footer
    },
    data() {
      return {
        activeName: 'first',
        date:[],
        hid:'',
        orderList:[],
        hotelList:{},
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    mounted() {
        this.date=this.$route.query.date;
        this.payState=this.$route.query.payState;
        //console.log(this.$route.query.hid)
        this.axios.get("/orderinfo").then(res=>{
            if(res.data.code==1){
                this.orderList=res.data.result;
                for(var i=0;i<this.orderList.length;i++){
                    //console.log(this.orderList[i]);
                    var hid={hid:this.orderList[i].hid};
                    this.axios.get("/details",{params:hid}).then(res=>{
                        if(res.data.code==1){
                            this.hotelList=Object.assign(this.hotelList,res.data.result[0]);
                            //this.hotelList[i]=Object.assign(this.orderList[i],res.data.result[0]);
                            console.log(this.hotelList);
                            //console.log(i);
                            //console.log(res.data.result[0]);
                        }else{
                            alert('房屋信息查询失败');
                        }
                    })
                }
            }else{
                alert("订单信息查询失败");
            }
        })
        for(var i=0;i<this.orderList.length;i++){
            var hid={hid:this.orderList[i].hid};
            this.axios.get("/details",{params:hid}).then(res=>{
                if(res.data.code==1){
                    this.orderList[i].concat(res.data.result);
                    console.log(this.orderList);
                }else{
                    alert('房屋信息查询失败');
                }
            })
        }
        /** 
        this.axios.get("/details",{params:this.hid}).then(res=>{
            if(res.data.code==1){
                this.hotelList=res.data.result;
                //console.log(this.hotelList);
            }else{
                alert('房屋信息查询失败');
            }
        })*/
    },
}
</script>
<style scoped>
.PersonalCenter{
    padding:20px 150px;
    background:#eee;
}
.perLeft{
    background:#fff;
    border:1px solid #ddd;
}
.perRight{
    margin-left:5px;
}
.perInfo{
    padding:25px 25px;
    border-top:4px solid #fd8238;
}
.perInfo p{
    font-size:14px;
    color:#007bff;
    margin-bottom:5px;
}
.perOrder{
    padding:0px 25px 10px;
}
.perTitle{
    padding:10px 25px 10px;
    background:#eee;
}
.perTitle img{
    width:22px;
    margin-right:10px;
}
.perOrder ul{
    padding:0 30px;
    margin:0;
}
.perOrder li{
    list-style:none;
    padding-top:10px;
    font-size:14px;
    color:#555;
}
.rpic img{
    width:100%;
}
.rcontent p{
    margin:0;
    padding:5px 20px 0;
    font-size:14px;
}
.rdate{
    margin:0;
    font-size:14px;
    display:flex;
    justify-content:space-between;
    padding-left:20px;
}
.rdate p{
    padding:0;
}
</style>