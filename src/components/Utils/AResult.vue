<template>
  <div class="container-fluid mt-3">
    <div class="row border border-secondary box1">
      <div class="pic p-3 col-xl-1 col-lg-2 col-md-2 col-5 m-0">
        <img src="../../assets/img/mobile5.jpg" class=" pic_size"/>
      </div>
      <div class="col-xl-11 col-lg-10 col-md-10 col-7 p-0 mt-2">
            <div class="row align-items-center pr-3">
                  <div class="col-lg-6 col-md-7 col-12 mb-2">عنوان فارسی: {{title1}}</div>
                  <div class="col-lg-3 col-md-5 col-12 mb-2">گروه: {{group1}}</div>
            </div>
            <div class="row pb-3 pr-3">
                  <div class="col-lg-6 col-md-7 col-12 mb-2">عنوان انگلیسی: {{title2}}</div>
                  <div class="col-lg-3 col-md-5 col-12 mb-2">لینک محصول: {{link1}}</div>
            </div>
        <div class=" col-12 border border-secondary m-0 p-0 w-100"></div>
            <div class="row align-items-center pr-3 mt-2 d-flex justify-content-between">
                  <div class="col-lg-4 col-md-12 col-12 mt-2">
                    <i class="fa fa-circle ml-1" ></i>
                    تعداد فروشندگان این کالا در سایت: {{num1}} فروشنده با {{num2}} تنوع موجود
                  </div>

                  <div class="col-lg-3 col-md-4 col-12 mt-2"><i class="fa fa-circle ml-1" ></i>وضعیت جاری: {{state1}}</div>
                  <div class="col-lg-3 col-md-7 col-12 mt-2"><i class="fa fa-circle ml-1" ></i>کمترین قیمت روی سایت: {{price1}} ریال</div>
                  <v-btn class="col-lg-1 col-md-3 col-12 mt-2 ml-5 text-light p-0" color="purple darken-4" >شما هم بفروشید</v-btn>
            </div>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "AResult",
      props:['title1','title2','group1','link1','num1','num2','state1','price1']
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

</style>
