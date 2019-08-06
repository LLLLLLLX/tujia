<template>
    <div>
        <div class="orderinfo">
            <el-row>
                <el-col :span="16">
                    <div class="orderStep">
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
                                <span>&nbsp;&nbsp;押金：￥300元</span>
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
                            <el-checkbox v-model="checked">备选项</el-checkbox><br>
                            <el-button type="warning" @click="submitorder">提交订单</el-button>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8"><div class=""></div></el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
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
        getTime(){
            var t=new Date();
            this.date.push(t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + (t.getDate())) ;
            this.date.push(t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + (t.getDate()+1)) ;
        },
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
            this.axios.get("/order",{params:obj}).then(res=>{
                if(res.data.code==1){
                    alert("订单信息提交成功");
                }else{
                    alert("订单信息提交失败");
                }
            })
        }
    },
    mounted() {
        this.getTime();
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
</style>