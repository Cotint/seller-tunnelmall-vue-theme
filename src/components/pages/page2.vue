<template>
  <div class="pageA">
    <div class="bg-white">
      <header1></header1>
    </div>
    <AWarn></AWarn>
    <div class="head font-weight-bold mx-5 pb-2">جستجو و فیلتر</div>
    <div class="bg-white mx-5 mt-0 box1">
      <search_filter class="mx-5"></search_filter>
    </div>
        <div class="row d-flex justify-content-between mt-4 ">
          <div class="col-2 head font-weight-bold mx-5 pb-2 mt-4">نتایج جستجو</div>
          <pages class="col-4 table-class"></pages>
          <div class="col-4 resultA p-4 ml-5 text-left">نتایج یافت شده:3000 {{number1}} محصول</div>
        </div>
    <div class="bg-white mx-5 box1">
      <!--'title1','title2','group1','link1','num1','num2','state1','price1'-->
      <table1 class="mt-3"></table1>
    </div>
    <div class="row d-flex justify-content-between mt-4">
      <div class="col-2 "></div>
      <pages class="col-8"></pages>
      <div class="col-2"></div>
    </div>
    <!--<div class="position-relative">-->
      <!--<call1 style="z-index:999;margin-right: 200px" class="float-left position-absolute"></call1>-->
      <footer1 class="mt-4" style="z-index: 0" ></footer1>

    <!--</div>-->
  </div>

</template>

<script>
  import header1 from '../header'
  import search_filter from '../search_filter'
  import table1 from '../Utils/ATable'
  import AWarn from '../Utils/AWarning'
  import footer1 from '../AFooter'
  import pages from '../Utils/APagination'
  import call1 from '../Utils/footer-call'
    export default {
        name: "page2",
      components:{
        header1,
        search_filter,
        table1,
        AWarn,
        footer1,
        pages,
        call1
      }
    }
</script>

<style scoped>
  .pageA{
  background-color: #ebebeb;

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  }
  body, html {
    height: 100%;
  }
  .head{
    /*border: solid purple;*/
    /*border-width: 0px 0px 2px 0px;*/
    font-size: 16px;
    color: purple;

  }
  .box1{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .resultA{
    font-size: 16px;
  }


</style>
