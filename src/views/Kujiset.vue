<template>
  <div id="kujiset">
    <Header></Header>
    <div id="mainkuji">
      <picture>
        <img :src="this.product.pictureUrl" alt="">
      </picture>
      <h3>{{this.product.name}}</h3>
      <h5>發售日期: {{ this.product.saleDate }}</h5>
      <p>數量: {{ this.product.count }} 抽</p>
      <p>剩餘數量: {{ this.remain }} 抽</p>
    </div>
    <div class="productAwards">
      <div class="pa_list" v-for="(item, index) in product.productAwards" :key="index">
        <div>
          <picture>
            <img :src="item.pictureUrl" :alt="item.name">
          </picture>
        </div>
        <div>
          <p>{{item.award}} {{item.name}}</p><br>
          <p>總數量:{{item.count}}</p><br>
          <p>剩餘數量:{{item.remain}}</p><br>
          <p>自訂數量</p><br>
          <p class="qtybox" @click="plus(index)">+1</p>
          <p class="qtybox" @click="minus(index)">-1</p><br>
          <p class="qtybox" @click="fillup(index)">補滿</p>
          <p class="qtybox" @click="zeroing(index)">歸零</p>
        </div>
      </div>
    </div>
    <div class="lottery"  @click="lottery()" v-if="!result">
      抽
    </div> 
    <div class="lottery_result" v-if="result">
      <!-- <div> -->
        <p>抽到的獎項是</p>
        <p class="prize_result">{{this.prize_result.Prize}}</p>
        <img class="prize_img" :src="this.prize_result.pictureUrl" alt="">
        <p>剩餘數量: {{ this.remain }} 抽</p>
        <div class="result_btn">
          <div class="result_box" @click="result=false">結束</div>
          <div class="result_box" @click="lottery()">繼續</div>
        </div> 
      <!-- </div>      -->
    </div>   
  <Button :BtnData="BtnData" :RouterData="RouterData"></Button>
  <Footer></Footer>
  </div>
</template>
<script>
import { productID } from '@/api/index.js';
import Header from '@/component/Header.vue';
import Footer from '@/component/Footer.vue';
import Button from '@/component/Button.vue';
export default {
  name: 'Kujiset',
  components: {
    Header,
    Footer,
    Button,
  },
  data() {
    return {
      product:[],
      remain:[],
      prize:[],
      BtnData:"返回首頁",
      RouterData:"/",
      result:false,
      prize_result:''
    }
  },
   mounted() {
        this.getProduct();
    },
  methods: {
    getProduct() {
    var id = this.$route.query.id
      productID(id).then(res=> {
        this.product=res.data
        this.product.saleDate=this.product.saleDate.slice( 0 , 10 )
        console.log(this.product)
        for(var x=0;x < this.product.productAwards.length;x++){
          this.product.productAwards[x].remain=this.product.productAwards[x].count
        }
        this.remain = this.product.count
      })
      
  },
  plus(index){
    var num = this.product.productAwards
    num[index].remain<num[index].count?num[index].remain+=1:num[index].remain
    this.prize_check()
  },
  minus(index){
    var num = this.product.productAwards
    num[index].remain>0?num[index].remain-=1:num[index].remain
    this.prize_check()
  },
  fillup(index){
    var num = this.product.productAwards
    num[index].remain=num[index].count
    this.prize_check()
  },
  zeroing(index){
    var num = this.product.productAwards
    num[index].remain=0
    this.prize_check()
  },
  prize_check (){
    var check = this.product.productAwards
    this.prize=[]
    // console.log(check.length)
    for(var x=0;x<check.length;x++){
      for(var y=0;y<check[x].remain;y++){
        if(check[x].isPlay==true){ 
          this.prize.push(check[x].award)
          // console.log(this.prize)
        }
      }
    }
    this.remain = this.prize.length
  },
  lottery(){
    this.prize_check()
    var check = this.product.productAwards
    console.log('抽獎')
    this.prize_result = this.prize[parseInt(Math.random()*this.prize.length)]
    // console.log(this.prize_result)
    for(var x=0;x<check.length;x++){
      if(check[x].award==this.prize_result){
          console.log(check[x].remain)
          // console.log('抽獎')
          check[x].remain=check[x].remain-1
          this.prize_result={"Prize":check[x].award+'賞   '+check[x].name,"pictureUrl":check[x].pictureUrl}
      }
    }
    this.prize_check()
    this.result=true
  },
}

}
</script>

<style scoped>
#kujiset{
  /* width: 1440px; */
  max-width: 1440px;
  margin: 0 auto;
  background: #EEE;
  /* height: 2000px; */
}
#mainkuji{
  display: flex;
  flex-direction:column;
  justify-content:center;
  text-align: center;
}
#mainkuji img{
  width: 100%;
}
.productAwards{
  display: flex;
  /* flex-direction:column; */
  /* justify-content:center; */
  flex-wrap: wrap;
  text-align: center;
}
.pa_list{
  width: 25%;
}
.pa_list p{
  display: inline-block;
}
.pa_list picture{
  /* width: 33.333%; */
}
.pa_list picture img{
  width: 100%;
}
.qtybox{
  user-select: none;
  width: 40px;
  height: 20px;
  text-align: center;
  background: red;
  margin: 5px 5px;
}
.lottery{
  position: fixed;
  right: 0;
  top: 80%;
  width: 50px;
  height: 50px;
  background: red;
  line-height: 50px;
  text-align: center;
  font-weight: 700;
  font-size: 30px;
  user-select: none;
  transition: .5s all;
}
.lottery:hover{
  font-size: 40px;
}
.lottery_result{
  position: fixed;
  background: red;
  width: 50%;
  left: 0;
  top: 0;
  /* right: 0;
  bottom: 0; */
  /* margin: auto ; */
  margin-left: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between ;
  /* flex-flow: column nowrap; */
  /* height: auto; */
}
.result_btn{
  display: flex; 
}
.result_box{
  width: 100px;
  height: 40px;
  margin: 10px;
  font-size: 20px;
  text-align: center;
  line-height: 40px;
  background: cyan;
  user-select: none;
  transition: .5s all;
}
.result_box:hover{
  font-size: 30px;
}
.prize_result{
  font-size: 30px;
  font-weight: 700;
}
.prize_img{
  width: 200px;
}
@media (max-width: 768px) {
  .pa_list{
    width: 50%;
  }
  .lottery_result{
    background: red;
    /* left: 0%; */
    width: 100%;
    margin: 10% auto ;
  }
}
</style>
