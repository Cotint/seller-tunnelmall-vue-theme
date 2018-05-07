<template>
  <div class="pageA">
    <div class="bg-white">
      <header1></header1>
    </div>
    <AWarn></AWarn>
    <div class="head font-weight-bold mx-5 res_xs pb-2">جستجو و فیلتر</div>
    <div class="bg-white mx-5 res_xs mt-0 box1">
      <search_filter class="mx-5 "></search_filter>
    </div>
    <div class="head font-weight-bold mx-5 res_xs pb-2 mt-4">نتایج جستجو</div>
    <div class="bg-white mx-5 res_xs box1">
      <!--'title1','title2','group1','link1','num1','num2','state1','price1'-->
      <router-view></router-view>
    </div>
    <footer1 class="mt-4"></footer1>
  </div>
</template>

<script>
  import header1 from '../header'
  import search_filter from '../search_filter'
  import search_result from '../search_result'
  import AWarn from '../Utils/AWarning'
  import footer1 from '../AFooter'
    export default {
        name: "page1",
      components:{
          header1,
          search_filter,
          search_result,
          AWarn,
          footer1
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
  border: solid #4A148C;
  border-width: 0px 0px 2px 0px;
  font-size: 16px;
  color: #4A148C;

}
  .box1{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  @media (max-width: 767px) {
    .res_xs{
      margin:3%!important;
    }

  }
</style>
