<template>
<div>
<Nav></Nav>
<div class="container">
  <div class="bread">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Index' }">途家网</el-breadcrumb-item>
      <el-breadcrumb-item>{{valueAddress[0]}}/{{valueAddress[1]}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
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
        type="daterange"
        value-format="yyyy-MM-dd"
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
        <el-button class="btnSearch" @click="selectPro">搜索</el-button>
      </el-row>
    </div>
  </div>
  <div class="select">
    <div>
      <div class="selectTitle">
        <span class="selectAddress">位置</span>
        <div>
          <el-dropdown>
            <span class="el-dropdown-link">
              热门推荐<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>大明湖</el-dropdown-item>
              <el-dropdown-item>芙蓉街</el-dropdown-item>
              <el-dropdown-item>宽厚里</el-dropdown-item>
              <el-dropdown-item>火车站</el-dropdown-item>
              <el-dropdown-item>高新区/奥体中心</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="area">
          <span>行政区</span>
          <div class="areaContent">
          <ul>
            <li>历下区</li>
            <li>历城区</li>
            <li>天桥区</li>
            <li>高新区</li>
            <li>市中区</li>
            <li>槐荫区</li>
            <li>长清区</li>
            <li>章丘市</li>
            <li>济阳县</li>
            <li>平阴县</li>
            <li>商河县</li>
          </ul></div>
        </div>
        <div><span>商圈</span></div>
        <div><span>观光景点</span></div>
        <div><span>地铁线路</span></div>
        <div><span>机场/车站</span></div>
        <div><span>高校</span></div>
        <div><span>医院</span></div>
      </div>
      <div class="level">
        <span class="levelTitle">房屋级别</span>
        <div class="levelLimit"><span>不限</span></div>
        <div class="levelContent">
          <el-checkbox-group v-model="checkList1" @change="changeCheck1(checkList1)">
            <el-checkbox label="豪华"></el-checkbox>
            <el-checkbox label="高档"></el-checkbox>
            <el-checkbox label="舒适"></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div class="level">
        <span class="levelTitle">房价</span>
        <div class="levelLimit"><span>不限</span></div>
        <div class="levelContent">
          <el-checkbox-group v-model="checkList2" @change="changeCheck2(checkList2)">
            <el-checkbox label="￥0-200"></el-checkbox>
            <el-checkbox label="￥200-300"></el-checkbox>
            <el-checkbox label="￥300-400"></el-checkbox>
            <el-checkbox label="￥400-500"></el-checkbox>
            <el-checkbox label="￥500-800"></el-checkbox>
            <el-checkbox label="￥800-10000"></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div class="level">
        <span class="levelTitle">户型</span>
        <div class="levelLimit"><span>不限</span></div>
        <div class="levelContent">
          <el-checkbox-group v-model="checkList3" @change="changeCheck3(checkList3)">
            <el-checkbox label="一居"></el-checkbox>
            <el-checkbox label="二居"></el-checkbox>
            <el-checkbox label="三居"></el-checkbox>
            <el-checkbox label="四居及以上"></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div class="level">
        <span class="levelTitle">房型</span>
        <div class="levelLimit"><span>不限</span></div>
        <div class="levelContent">
          <el-checkbox-group v-model="checkList4" @change="changeCheck4(checkList4)">
            <el-checkbox label="公寓"></el-checkbox>
            <el-checkbox label="别墅"></el-checkbox>
            <el-checkbox label="复式"></el-checkbox>
            <el-checkbox label="农家乐"></el-checkbox>
            <el-checkbox label="木屋"></el-checkbox>
            <el-checkbox label="竹屋"></el-checkbox>
            <el-checkbox label="树屋"></el-checkbox>
            <el-checkbox label="四合院"></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div class="level">
        <span class="levelTitle">配套</span>
        <div class="levelLimit"><span>不限</span></div>
        <div class="levelContent">
          <el-checkbox-group v-model="checkList5" @change="changeCheck5(checkList5)">
            <el-checkbox label="无线网络"></el-checkbox>
            <el-checkbox label="全天热水"></el-checkbox>
            <el-checkbox label="电梯"></el-checkbox>
            <el-checkbox label="洗衣机"></el-checkbox>
            <el-checkbox label="电视"></el-checkbox>
            <el-checkbox label="空调"></el-checkbox>
            <el-checkbox label="冰箱"></el-checkbox>
            <el-checkbox label="微波炉"></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div class="level">
        <span class="levelTitle">特色</span>
        <div class="levelLimit"><span>不限</span></div>
        <div class="levelContent">
          <el-checkbox-group v-model="checkList6" @change="changeCheck6(checkList6)">
            <el-checkbox label="做饭方便"></el-checkbox>
            <el-checkbox label="长租首选"></el-checkbox>
            <el-checkbox label="连住优惠"></el-checkbox>
            <el-checkbox label="宠物同行"></el-checkbox>
            <el-checkbox label="聚会轰趴"></el-checkbox>
            <el-checkbox label="湖景房"></el-checkbox>
            <el-checkbox label="江景房"></el-checkbox>
            <el-checkbox label="山景房"></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div class="level7">
        <span class="levelTitle">其他</span>
        <div class="levelLimit"><span>不限</span></div>
        <div class="levelContent">
          <el-checkbox-group v-model="checkList7" @change="changeCheck7(checkList7)">
            <el-checkbox label="豪宅"></el-checkbox>
            <el-checkbox label="超赞房东"></el-checkbox>
            <el-checkbox label="超赞新房"></el-checkbox>
            <el-checkbox label="新房特惠"></el-checkbox>
            <el-checkbox label="自营民宿"></el-checkbox>
            <el-checkbox label="独立单间"></el-checkbox>
            <el-checkbox label="途家优选"></el-checkbox>
            <el-checkbox label="斯维登"></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
    </div>
  </div>
  <div class="detail">
    <div>
      <div class="detailTitle">
        <span class="detailSort">智能排序</span>
        <span>房价</span>
        <span>点评分</span>
      </div>
      <div class="detailContent">
        <div v-for="(detail,i) of details" class="detailPro" @click="toHotel(detail.hid)" :key="i">
          <img class="detailPic" :src='require(`../assets/${detail.hic}`)' alt="">
          <div class="detailTop" ><div class="detailName">{{detail.title.substring(0,14)}}...</div><div class="detailPrice">￥{{detail.price}}</div></div>   
          <div class="detailAddress">{{detail.addr_detail}}</div>
          <div class="detailContentSort"><span>{{detail.h_layout}}</span>/<span>{{detail.Layout}}</span></div>
        </div>
        <!--
        <div>
          <img class="detailPic" src="../assets/detail02.jpg" alt="">
          <div class="detailTop"><div class="detailName">【故里·不二】磁器口古镇中距地铁站</div><div class="detailPrice">￥300</div></div>
          <div class="detailAddress">历下区</div>
          <div class="detailContentSort"><span>一居</span>/<span>公寓</span></div>
        </div>
        <div>
          <img class="detailPic" src="../assets/detail03.jpg" alt="">
          <div class="detailTop"><div class="detailName">磁器口古镇/小街/吉壳儿北欧复古房</div><div class="detailPrice">￥300</div></div>
          <div class="detailAddress">历下区</div>
          <div class="detailContentSort"><span>一居</span>/<span>公寓</span></div>
        </div>
        -->
      </div>
    </div>
  </div>
  <div class="pagination">
    <div class="paginationContent">
      <el-pagination
        background
        v-model="pageNo"
        layout="prev, pager, next"
        :page-count="detailsPc"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :total="200">
      </el-pagination>
    </div>
    <div class="clear"></div> 
  </div>
  <div class="detailEnd">
    <img src="../assets/detailend01.jpg" alt="">
  </div>
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
        details:{},
        pageSize:9,
        pageNo:1,
        currentPage:1,
        detailsPc:10,
        date:[],
        valueNum: [0],
        valueAddress: ['山东','济南'],
        checkList1: [],checkList2: [],checkList3: [],checkList4: [],checkList5: [],checkList6: [],checkList7: [],
        obj1:[],obj2:[],obj3:[],obj4:[],obj5:[],obj6:[],obj7:[],
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
      handleSizeChange(val) {
        
      },
      handleCurrentChange(val) {
        this.pageNo=val;
        //console.log(this.pageNo);
        var obj={pno:this.pageNo,pageSize:this.pageSize};
        //console.log(obj);
        this.axios.get("/pagination",{params:obj}).then(res=>{
            this.details=res.data.data;
            
            //console.log(this.details);
        })
      },
      handleChange(value) {
        console.log(value);
      },
      changeCheck1(item){
        var obj1 =item;
        console.log(obj1);
      },
    changeCheck2(item){
        var obj2 =item;
        console.log(obj2);
      },
    changeCheck3(item){
        var obj3 =item;
        console.log(obj3);
      },
    changeCheck4(item){
        var obj4 =item;
        console.log(obj4);
      },
    changeCheck5(item){
        var obj5 =item;
        console.log(obj5);
      },
    changeCheck6(item){
        var obj6 =item;
        console.log(obj6);
      },
    changeCheck7(item){
        var obj7 =item;
        console.log(obj7);
      },
    selectPro(){
    },
    toHotel(hid){
      //console.log(this.date);
      this.$router.push({path:'hotel',query:{id:hid,date:this.date}}); 
    }
    },
    mounted(){
      //  eventBus.$on('date',function(message){
      //    this.date=message;
      //    console.log(this.date);
      //  })
      this.date=sessionStorage.getItem("date").split(",");
      this.valueAddress=sessionStorage.getItem("valueAddress").split(",");
      this.valueNum=JSON.parse(sessionStorage.getItem("valueNum"));
      //console.log(this.valueAddress);
      //console.log(this.valueNum);
      var obj={pno:this.pageNo,pageSize:this.pageSize};
      //console.log(obj);
      this.axios.get("/pagination",{params:obj}).then(res=>{
            this.details=res.data.data;
            this.detailsPc=res.data.pc;
            //console.log(this.detailsPc);
      })
    },
  };
</script>
<style>
.bread{
  margin:40px 0 20px;
  font-size:12px;
}
.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link{
  font-weight:400!important;
}
.search{
  display:flex;
  background:#b1c8d6;
  justify-content:center;
  vertical-align:middle;
}
.address,.date,.num{
  padding:18px 0 6px 0;
}
.btn{
  padding-top:16px!important;  
}
.btnSearch{
  background:#3e97e2;
  border:1px solid #3e97e2;
  color:#fff;
  font-size: 16px;
  padding:10px 40px;
  margin-top:10px;  
}
.el-row{
  margin-bottom: 8px!important;
}
.select{
  border:1px solid #ddd;
  padding:0 19px;
}
.selectAddress{
  color:#999;
}
.selectTitle{
  display:flex;
  justify-content:space-between;
  padding:10px 0px;
  font-size: 12px;
  color: #b1c8d6;
  border-bottom:1px solid #ddd;
}
.level{
  display:flex;
  font-size: 12px;
  color: #b1c8d6;
  padding:10px 0px;
  border-bottom:1px solid #ddd;
}
.level7{
  display:flex;
  font-size: 12px;
  color: #b1c8d6;
  padding:10px 0px;
  border-bottom:0px solid #ddd;
}
.levelTitle{
  width:70px;
  height:30px;
  line-height:30px;
  color:#999;
}
.levelLimit{
  width:110px;
}
.levelLimit span{
  display:block;
  width:34px;
  height:24px;
  background:#3e97e2;
  color:#fff;
  border-radius:2px;
  text-align:center;
  line-height:24px;
}
.el-checkbox__label{
  font-size:12px!important;
}
.el-checkbox{
  width:80px!important;
}
.detailTitle{
  display:flex;
  margin-top:30px;
  margin-bottom:20px;
}
.detailTitle span{
  display:block;
  width:56px;
  font-size:14px;
  color:#666;
}
.detailSort{
  font-weight: 700;
  color: #fd8238!important;
  margin-right: 20px;
}
.detailContent{
  display:flex;
  justify-content:space-between;
  width:100%;
  flex-wrap:wrap;
}
.detailPro{
  padding:10px;
}
.detailPic{
  width:340px;
}
.detailTop{
  display:flex;
  justify-content:space-between;
}
.detailName{
  color:#333;
  font-size:18px;
  margin:10px 0 5px 8px;
}
.detailPrice{
  margin:10px 10px 0 0;
  color:#f66;
  font-size:16px;
}
.detailAddress,.detailContentSort{
  color:#666;
  font-size:14px;
  margin-left:8px;
}

.paginationContent{
  float:right;
  margin:60px auto;
}
.el-pagination.is-background .el-pager li:not(.disabled).active{
  background:#fd8238!important;
}
.el-pagination{
  font-weight:500!important; 
}
.clear{clear:both}
.detailEnd img{
  width:100%;
}
.areaContent{
  display:none;
  width:800px;
  background:#fff;
  position:absolute;
  left:290px;
  top:237px;
  border:1px solid #ddd;
}
.areaContent li{
  float:left;
  margin:20px 5px;
  list-style:none;
  width:50px;
  color:#000;
}
.area:hover .areaContent{
  display:flex;
  z-index:2019;
  position:absolute;
}
</style>