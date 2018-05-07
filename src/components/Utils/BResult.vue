<template>
  <div class="container-fluid mt-3">
    <div class="row border border-secondary box1">
      <div class="pic p-3 col-xl-1 col-lg-2 col-md-2 col-5 m-0">
        <img src="../../assets/img/mobile5.jpg" class=" pic_size"/>
      </div>
      <div class="col-xl-11 col-lg-10 col-md-10 col-7 p-0 mt-2">
        <div class="row align-items-center pr-3">
          <div class="col-lg-6 col-md-7 col-12 mb-2">عنوان فارسی: گوشی موبایل سامسونگ مدل Galaxy JS prime دو سیم کارت{{title1}}</div>
          <div class="col-lg-3 col-md-5 col-12 mb-2">گروه: گوشی موبابل{{group1}}</div>
          <div class="col-lg-3 col-md-5 col-12 mb-2">قیمت شما:8,150,000 ریال {{yourPrice}}</div>
        </div>
        <div class="row pb-3 pr-3">
          <div class="col-lg-6 col-md-7 col-12 mb-2">عنوان انگلیسی: گوشی موبایل سامسونگ مدل Galaxy JS prime دو سیم کارت{{title2}}</div>
          <div class="col-lg-3 col-md-5 col-12 mb-2">کد محصول: 646546546{{link1}}</div>
          <div class="col-lg-3 col-md-5 col-12 mb-2">کمترین قیمت روی سایت: 8,150,000 ریال{{minPrice}}</div>
        </div>
        <div class=" col-12 border border-secondary m-0 p-0 w-100"></div>
        <div class="row align-items-center pr-3 mt-2 d-flex justify-content-between">
          <div class="row col-lg-8 col-md-12 col-12">
            <div class="col"><i class="fa fa-circle ml-1 icon-cog" ></i> برند: Pasabahse - پاشاباغچه</div>
            <div class="col"><i class="fa fa-circle ml-1" ></i>وضعیت:پیشنویس {{price1}} ریال</div>
            <div class="col"><i class="fa fa-circle ml-1" ></i>تعداد تنوع:{{num_kind}} لیست تنوع</div>
          </div>
          <div class="row col-lg-4 col-md-4 col-12 justify-content-end ml-1">
            <v-btn class="col-lg-3 col-md-12 mt-2 text-light p-0" color="grey " ><i class="fa fa-edit ml-1" ></i>ویرایش محصول</v-btn>
            <v-btn class="col-lg-3 mt-2  text-light p-0" color="amber darken-1" ><i class="fa fa-pencil-square ml-1" ></i>افزودن تنوع</v-btn>
            <v-btn class="col-lg-3 mt-2  text-light p-0" color="purple darken-4" ><i class="fa fa-check ml-1" ></i>انتشار</v-btn>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "BResult",
    props:['title1','title2','group1','link1','num_kind','num2','state1','price1','yourPrice','minPrice'],
    data() {
      return {
        statuses: [
          {
            text: 'پیشنویس',
            color: 'amber darken-1'
          },
          {
            text: 'تایید شده',
            color: 'light-green accent-4'
          },

          {
            text: 'بررسی مجدد',
            color: 'red lighten-1'
          }
        ],
      }
    },
  }
</script>

<style scoped>
  @import  url('../../assets/awesomedoc/css/font-awesome.min.css');
  .pic{
    border-left: solid 1px #717171;
  }
  .box1{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  @media (max-width: 767px) {
    .pic_size{
      width: 70px;
      height:90px;
    }
  }
  @media (max-width: 1023px) {
    .pic_size{
      width: 80px;
      height:100px;
    }
  }
button{
  font-size: 12px;
}
  .icon-cog {
    color: #ffa500;
  }

</style>

