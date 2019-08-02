<template>
    <div>
        <Nav></Nav>
        <Carousel></Carousel>
        <div class="search">
            <div class="address">
            <el-cascader
                placeholder="请选择所在区域"
                v-model="valueAddress"
                :options="optionsAddress"
                @change="handleChange"></el-cascader>
            </div>
            <div class="date">
            <el-date-picker
                v-model="date"
                value-format="yyyy-MM-dd"
                type="daterange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="['00:00:00', '23:59:59']">
            </el-date-picker>
            </div>
            <div class="num">
            <el-cascader
                placeholder="请选择入住人数"
                v-model="valueNum"
                :options="optionsNum"
                @change="handleChange"></el-cascader>
            </div>
            <div class="btn">
                <el-row>
                    <el-button class="btnSearch" @click="search">搜索</el-button>
                </el-row>
            </div>
        </div>
        <div>
            <div class="apartment">
                <div class="apartment-tilte"><span>玩转民宿公寓</span></div>
                <div class="apartment-pic">
                    <img src="../assets/apartment01.jpg" class="col-lg-3 col-md-6 col-sm-12 mb-md-4 mb-sm-4">
                    <img src="../assets/apartment02.jpg" class="col-lg-3 col-md-6 col-sm-12 mb-md-4 mb-sm-4">
                    <img src="../assets/apartment03.jpg" class="col-lg-3 col-md-6 col-sm-12 mb-md-4 mb-sm-4">
                    <img src="../assets/apartment04.jpg" class="col-lg-3 col-md-6 col-sm-12 mb-md-4 mb-sm-4">
                </div>
            </div>
            <div class="popular">
                <div class="popular-tilte"><span>当季热门</span></div>
                <div class="mt-3">
                    <div class="row m-0 mt-2">
                        <div class="p-0 col-lg-1 col-sm-12 my_small font-weight-bold text-center">
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-6 my_small font-weight-bold text-center mb-md-4 mb-sm-4">
                            <img src="../assets/popular01.jpg" alt=""/>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-6 my_small font-weight-bold text-center mb-md-4 mb-sm-4">
                            <img src="../assets/popular02.jpg" alt=""/>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-6 my_small font-weight-bold text-center mb-md-4 mb-sm-4">
                            <img src="../assets/popular03.jpg" alt=""/>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-6 my_small font-weight-bold text-center mb-md-4 mb-sm-4">
                            <img src="../assets/popular04.jpg" alt=""/>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-6 my_small font-weight-bold text-center mb-md-4 mb-sm-4">
                            <img src="../assets/popular05.jpg" alt=""/>
                        </div>
                        <div class="p-0 col-lg-1 col-sm-12 my_small font-weight-bold text-center">
                        </div>
                    </div>
                </div>
            </div>
            <div class="safe">
                <div class="safe-title"><span>安心住保障</span></div>
                <div class="row safe-content d-flex  text-center">
                    <div class="col-lg-3 col-md-3 col-sm-6 mb-md-5 mb-sm-5">
                        <img src="../assets/safe01.png" alt="">
                        <div>
                            <p>先行赔付</p><span>1000万保障金</span>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 mb-md-5 mb-sm-5">
                        <img src="../assets/safe01.png" alt="">
                        <div>
                            <p>赠送保险</p><span>21万人身保险</span>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 mb-md-5 mb-sm-5">
                        <img src="../assets/safe01.png" alt="">
                        <div>
                            <p>贴心客服</p><span>7*24小时在线</span>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 mb-md-5 mb-sm-5">
                        <img src="../assets/safe01.png" alt="">
                        <div>
                            <p>房屋保真</p><span>4项上房审核</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="experience">
                <div class="experience-title"><span>客房体验</span></div>
                <div class="experience-content row">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <img class="img-fluid" src="../assets/experience01.jpg" alt="">
                        <p>塞舍尔绝美海滩，你都去过了吗？</p>
                        <span>普拉兰岛必打卡海滩~</span>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <img class="img-fluid" src="../assets/experience02.jpg" alt="">
                        <p>在古国意大利，探秘时尚的艺术与闪耀的...</p>
                        <span>9天畅游攻略</span>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <img class="img-fluid" src="../assets/experience03.jpg" alt="">
                        <p>烟雨漓江，沉醉不知归路</p>
                        <span>从桂林顺流而下去阳朔</span>
                    </div>
                </div>
                <div class="text-center"><button class="experience-more pl-4 pr-3 pt-1 pb-1">查看更多></button></div>
            </div>
            <div class="landlord row">
                <div class="landlord-title col-lg-12 col-md-12 col-sm-12">房东故事</div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <img src="../assets/landlord01.jpg" class=" img-fluid" alt="">
                    <div class="landlord-linear">
                        <div class="landlord-content">
                            <p>后海民宿小院故事，那些人生中的可遇不可求</p>
                            <span>一个闹中取静的院落，感受老北京地道生活</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <img src="../assets/landlord02.jpg" class=" img-fluid" alt="">
                    <div class="landlord-linear">
                        <div class="landlord-content">
                            <p>吾心归处，但使愿无违</p>
                            <span>逃离城市喧嚣，来这里拥抱风花雪月</span>
                        </div>
                    </div>
                </div>
                <div class="text-center col-lg-12 mb-5"><button class="experience-more pl-4 pr-3 pt-1 pb-1">查看更多></button></div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Nav from './Nav.vue'
import Carousel from './Carousel.vue'
import Footer from './Footer.vue'

export default {
    components:{
        "Nav":Nav,
        "Carousel":Carousel,
        "Footer":Footer
    },
    data() {
        return {
            date:[],
            valueNum: [0],
            valueAddress: ['山东','济南'],
            optionsNum: [
                {value: 0, label: '不限',},
                {value: 1,label: '1人',},
                {value: 2,label: '2人',},
                {value: 3,label: '3人',},
                {value: 4,label: '4人',},
                {value: 5,label: '5人',},
                {value: 6,label: '6人+',},
            ],
            optionsAddress: [
                {
                    value: '北京',
                    label: '北京',
                    children: [
                        {value: '朝阳区',label: '朝阳区'},
                        {value: '东城区',label: '东城区'},
                        {value: '海淀区',label: '海淀区'}
                    ]
                },
                {
                    value: '山东',
                    label: '山东',
                    children: [
                        {value: '济南',label: '济南'},
                        {value: '青岛',label: '青岛'},
                        {value: '聊城',label: '聊城'}
                    ]
                },
                {
                    value: '上海',
                    label: '上海',
                    children: [
                        {value: '浦东新区',label: '浦东新区'},
                        {value: '徐汇区',label: '徐汇区'},
                        {value: '虹口区',label: '虹口区'}
                    ]
                }, 
            ]
        }
    },
    methods: {
        handleChange(value) {
            console.log(value);
        },
        search(){
            // eventBus.$emit('date',this.date);
            sessionStorage.setItem("date",this.date);
            sessionStorage.setItem("valueAddress",this.valueAddress);
            sessionStorage.setItem("valueNum",this.valueNum);
            this.$router.push({path:'/Search'})
            
        },
        getTime(){
            var t=new Date();
            this.date.push(t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + (t.getDate())) ;
            this.date.push(t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + (t.getDate()+1)) ;
        }
            
    },
    mounted() {
        this.getTime();
        //console.log(this.date);
    },
}
</script>
<style scoped>
.search{
  background:#fff !important;
}
.apartment-tilte{
    text-align:center;
    font-size:34px;
    font-weight:500;
    padding:50px 0 25px 0;
}
.apartment-pic{
    padding:10px 100px 10px 100px;
}
.popular-tilte{
    text-align:center;
    font-size:34px;
    font-weight:500;
    padding:50px 0 25px 0;
}
.popular-pic{
    padding:10px 60px 10px 60px;
}
.safe{
    padding:10px 100px 10px 100px;
}
.safe-title{
    text-align:center;
    font-size:34px;
    font-weight:500;
    padding:50px 0 25px 0;
}
.safe-content p{
    margin-top: 16px;
    margin-bottom:5px;
    font-size: 22px;
}
.safe-content span{
    font-size: 16px;
    color: #666;
    line-height: 2;
}
.experience{
    padding:10px 100px 10px 100px;
}
.experience-content p{
    margin: 10px 0 5px;
    font-size: 20px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.experience-content span{
    font-size: 14px;
    color: #666;
}
.experience-title{
    text-align:center;
    font-size:34px;
    font-weight:500;
    padding:50px 0 25px 0;
}
.experience-more{
    border:1px solid #666;
    color:#666;
    font-size:16px;
    background:#fff;
    margin-top:40px;
}
.landlord{
    padding:10px 100px 0 100px;
}
.landlord-title{
    text-align:center;
    font-size:34px;
    font-weight:500;
    padding:50px 0 25px 0;
}
.landlord-linear{
    position: absolute;
    bottom: 40px;
    width: 93%;
    height: 162px;
    background: url(https://wpp.tujia.com/static/img/gradient-bar.e96f4a4.png) repeat-x;
}
.landlord-content{
    position: absolute;
    bottom: 10px;
    left: 30px;
    color:#fff;
}
.landlord-content p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 18px;
    font-weight: 700;
    margin-bottom:5px;
}
.landlord-content span{
    font-size:14px;
}
.text-center{
    text-align: center!important;
}
</style>