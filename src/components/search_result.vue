<template>
<div class=" mx-5">
  <div class="row d-flex justify-content-between">
    <div class="col-lg-3 col-md-6 col-12 resultA p-4 ">نتایج یافت شده:3000{{number1}} محصول</div>
    <pages class="col-lg-8 col-md-6 col-12 p-0"></pages>
    <div class="col-md-2"></div>
  </div>
  <!--'title1','title2','group1','link1','num1','num2','state1','price1'-->

  <div class="row">
  <result_box title1="گوشی موبایل سامسونگ مدل Galaxy JS prime دو سیم کارت"
                 title2="Sumsong Galaxy JS prime Dual SIM"
                 group1="گوشی موبایل"
                 link1="DKP-327934"
                 num1="2"
                 num2="2"
                 state1="موجود"
                 price1="8,150,000"

                 >
  </result_box>

  <result_box title1="گوشی موبایل سامسونگ مدل Galaxy JS prime دو سیم کارت"
              title2="Sumsong Galaxy JS prime Dual SIM"
              group1="گوشی موبایل"
              link1="DKP-327934"
              num1="2"
              num2="2"
              state1="موجود"
              price1="8,150,000"
              >
  </result_box>

  <result_box title1="گوشی موبایل سامسونگ مدل Galaxy JS prime دو سیم کارت"
              title2="Sumsong Galaxy JS prime Dual SIM"
              group1="گوشی موبایل"
              link1="DKP-327934"
              num1="2"
              num2="2"
              state1="موجود"
              price1="8,150,000"
              >
  </result_box>
  <result_box title1="گوشی موبایل سامسونگ مدل Galaxy JS prime دو سیم کارت"
              title2="Sumsong Galaxy JS prime Dual SIM"
              group1="گوشی موبایل"
              link1="DKP-327934"
              num1="2"
              num2="2"
              state1="موجود"
              price1="8,150,000"
              >
  </result_box>
  </div>

  <div class="row d-flex justify-content-between mt-4">
    <div class="col-3 resultA p-4 ">نتایج یافت شده:{{number1}} محصول</div>
    <pages class="col-8"></pages>
    <div class="col-2"></div>
  </div>
</div>
</template>

<script>
  import pages from '../components/Utils/APagination'
  import result_box from '../components/Utils/AResult'
  export default {
    name: "APagination",
    props:['number1','title1','title2','group1','link1','num1','num2','state1','price1'],
    components:{
      pages,
      result_box
    }
  }
</script>

<style scoped>
  .head{
    border: solid purple;
    border-width: 0px 0px 2px 0px;
    font-size: 16px;
  }
  .resultA{
    font-size: 16px;
  }
</style>
