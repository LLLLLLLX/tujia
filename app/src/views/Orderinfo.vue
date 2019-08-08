<template>
    <div>
    <Nav></Nav>
        <div class="orderinfo">
            <el-row>
                <el-col :span="18">
                    <div class="orderStep">
                        <h3>第一步：提交订单</h3>
                        <div class="bookingInfo">
                            <p>&nbsp;&nbsp;预订信息</p>
                            <div class="bookingDate">
                                <span>入住时间段:</span>
                                <div class="bookDate">
                                    <el-date-picker
                                    v-model="date"
                                    value-format="yyyy-MM-dd"
                                    size="mini"
                                    type="daterange"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期">
                                    </el-date-picker>
                                </div>
                                <span>&nbsp;&nbsp;15:00 以后办理入住 , 早到可能需要等待</span>
                            </div>
                            <div class="bookingNum">
                                <span>预订数量：</span>
                                <input type="text" v-model="bookingNum" value="bookingNum">
                                <span>&nbsp;&nbsp;押金：￥100元</span>
                            </div>
                            <div class="bookingPeopleNum">
                                <span>入住人数：</span>
                                <input type="text" v-model="bookingPeopleNum" value="bookingPeopleNum">
                            </div>
                        </div>
                        <div class="ownerInfo">
                            <p>&nbsp;&nbsp;入住人信息</p>
                            <div class="ownerName">
                                <span>姓名：</span><input type="text" v-model="ownerName" value="ownerName">
                            </div>
                            <div class="ownerTel">
                                <span>手机：</span><input type="text" v-model="ownerTel" value="ownerTel">
                            </div>
                            <div class="ownerNum">
                                <span>身份证号：</span><input type="text" v-model="ownerNum" value="ownerNum">
                            </div>
                        </div>
                        <div class="invoice">
                            <p>&nbsp;&nbsp;发票</p>
                            <span>如需房费发票, 请离店后到个人中心开具发票</span>
                        </div>
                        <div class="unsubscribe">
                            <p>&nbsp;&nbsp;退订规则</p>
                            <div>
                                <p>1.入住前一天，取消订单，收取订金的20%。</p>
                                <p>2.入住当天，未入住/提前离店，收取剩余房费的20%。</p>
                            </div>
                            <div class="">
                                <p>全额预付：需预付全额房费</p>
                                <p>无需确认：预定无需等待，订单闪电确认</p>
                            </div>
                        </div>
                        <div class="submit">
                            <el-checkbox v-model="checked">我已阅读并同意 <a href="#">《途家网服务条款》</a> 和上述入住须知</el-checkbox><br>
                            <el-button type="warning" @click="submitorder">提交订单</el-button>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="orderRight" v-for="(elem,i) of details" :key="i">
                        <img :src='require(`../assets/${elem.hic}`)' alt=""/>
                        <p class="orderTitle">{{elem.title}}</p>
                        <div class="orderType"><span>整套出租</span></div>
                        <div class="orderRate">
                            <div class="orderPic"><p>线上支付：</p><p>￥{{elem.price+100}}</p></div>
                            <div class="roomRate"><span>房费：￥{{elem.price}}</span></div>
                            <div class="deposit"><span>押金：￥100</span></div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
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
        checked: false,
        date: [],
        bookingNum:1,
        bookingPeopleNum:1,
        ownerName:'',
        ownerTel:'',
        ownerNum:'',
        value7: '',
        details:[],
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        }
      };
    },
    methods: {
        submitorder(){
            var obj={
                datestart:this.date[0],
                dateend:this.date[1],
                bookingnum:this.bookingNum,
                bookingpeonum:this.bookingPeopleNum,
                ownernum:this.ownerNum,
                ownertel:this.ownerTel,
                ownername:this.ownerName
            };
            if(this.ownerName&&this.ownerTel&&this.ownerNum&&this.checked){
                this.axios.get("/order",{params:obj}).then(res=>{
                    if(res.data.code==1){
                        alert("订单信息提交成功");
                        this.$router.push({
                            path: '/Pay',
                            query: {
                                date:this.date
                            }
                        }) 
                    }else{
                        alert("订单信息提交失败");
                    }
                })
            }else{
                if(!this.ownerName){
                    alert('姓名不能为空');
                }else if(!this.ownerTel){
                    alert('手机号不能为空');
                }else if(!this.ownerNum){
                    alert('身份证号不能为空');
                }else if(!this.checked){
                    alert('请选择是否阅读《途家网服务条款》');
                }
            }
        }
    },
    mounted() {
        var hid={hid:this.$route.query.id};
        this.date=this.$route.query.date;
        //console.log(this.date)
        this.axios.get("/details",{params:hid}).then(res=>{
            if(res.data.code==1){
                this.details=res.data.result;
            }else{
                alert("订单信息查询失败");
            }
            
        })
    },
}
</script>
<style scoped>
.orderinfo{
    margin:30px 50px;
}
.orderStep{
    border:1px solid #ddd;
    padding:20px 10px;
    margin-right:20px;
}
.orderStep h3{
    text-align:center;
}
.orderStep span{
    font-size:14px;
}
.bookingStep{
    margin:0 100px;
}
.bookingInfo,.ownerInfo,.invoice,.unsubscribe{
    padding:30px 10px 20px;
    border-bottom:1px solid #ddd;
}
.bookingInfo p,.ownerInfo p,.invoice p,.unsubscribe p{
    border-left:5px solid #fd8238;
    font-size:18px;
    font-weight:700;
}
.bookingDate{
    display:flex;
}
.bookingDate span{
    display:block;
    margin-top:5px;
}
.bookingDate .bookDate{
    margin-left:15px;
}
.bookingDate,.bookingNum,.bookingPeopleNum,.ownerName,.ownerTel,.ownerNum{
    margin-top:10px;
}
.unsubscribe div p{
    border:0;
    font-size:14px;
    font-weight:400;
}
.submit{
    text-align:center;
    margin:20px;
}
.orderRight{
    border:1px solid #ddd;
}
.orderRight img{
    width:100%;
}
.orderTitle{
    padding:15px;
    margin:0;
    font-size: 16px;
    color: #3e97e2;
    line-height: 20px;
    font-weight: 400;
}
.orderType{
    padding-bottom: 10px;
    font-weight: 700;
    font-size: 12px;
    padding-left:15px;
    
}
.orderRate{
    border-top:1px solid #f5dcbc;
    background:#fffbf6;
}
.orderPic{
    display:flex;
    justify-content:space-between;
    margin:15px;
    border-bottom:1px dashed #f5dcbc;
}
.orderPic p{
    margin:auto 0;
    font-size:16px;
    color:#666;
}
.orderPic p+p{
    font-size: 28px;
    color: #f66;
}
.roomRate,.deposit{
    font-size:12px;
    color:#666;
    padding:0 15px 10px 15px;
}
</style>