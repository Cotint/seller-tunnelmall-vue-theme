<template>
  <div class="">
    <div class="row justify-content-between">
        <div class="col-md-9 col-12 row mt-3">
            <h6 class=" ml-2 text-justify">محصولی که قصد فروش آن را دارید جستجو کنید تا بدون نیاز به پروسه ی درج و تایید کالا هر چه سریعتر </h6>
            <h6 class="font-weight-bold"> شما هم بفروشید.</h6>
        </div>
      <div class="col-md-2 col-12 ">
        <router-link to="/table1" class="">
          <button id="btn1" class="text-light p-2 mt-3"><i class="fa fa-edit fa-lg ml-2"></i>ثبت محصول جدید</button>
        </router-link>
      </div>

    </div>
    <div class="row d-flex justify-content-start mt-3">
      <div class="titleA mt-2 col-md-2 col-12 p-0">جستجوی محصول</div>
    <form action="" class="w-100 col-md-9 col-12 px-0">
      <input class="search_input w-75 p-2" placeholder="عنوان فارسی، لاتین، مدل یا کد کالایی محصول در دیجی کالا را جستجو کنید"
             type="text"><button class="search_submit p-2 "><i class="fa fa-search " aria-hidden="true"></i>
      </button>
    </form>
    </div>
    <div class="row mt-4">
      <!--<div class="col-md-9 d-flex px-0">-->
        <div class="col-md-3 col-12 d-flex p-0">
          <ASelect  class=" px-0 ml-1 " header1="انتخاب گروه" input1="نمایش گروه" input2="کفش" input3="لباس"></ASelect>
          <ASelect class=" px-0 ml-1 " header1="انتخاب برند" input1="نمایش همه" input2="کفش" input3="لباس"></ASelect>
        </div>
        <div class="col-md-3 col-12 d-flex p-0">
          <ASelect class=" px-0 ml-1 " header1="انتخاب وضعیت" input1="نمایش همه" input2="کفش" input3="لباس"></ASelect>
          <ASelect class=" px-0 ml-1 " header1="کد محصول فروشنده" input1="کد محصول" input2="کفش" input3="لباس"></ASelect>
        </div>
        <ASelect class="col-md-2 col-12 px-0 ml-1 " header1="کد محصول تونل مال" input1="کد محصول" input2="کفش" input3="لباس"></ASelect>
        <!--</div>-->
      <div class="col-md-3 col-12 button_xs d-flex justify-content-end px-0 mr-5">
        <button id="btn2" class=" h-25 ml-2 text-light col-md-4 col-6"><i class="fa fa-search fa-lg ml-2"></i>اعمال فیلتر</button>
        <button id="btn3" class="h-25 text-light col-md-4 col-6 "><i class="fa fa-eraser fa-lg ml-2"></i>حذف فیلتر</button>
      </div>
    </div>
  </div>
</template>

<script>
  import ASelect from "../components/Utils/ASelect"
    export default {
        name: "search_filter",
      components: {
          ASelect,

      },
    }
</script>

<style scoped>
  @import  url('../assets/awesomedoc/css/font-awesome.min.css');

  h6{
    font-size: 12px;
  }
  button{
    font-size: 12px;
  }
#btn1{
  background-color: #4A148C;
  border: none;
}
#btn2{
  background-color: #00ae00;
  border: none;
  margin-top: 33px;
  font-size: 10px;
  padding: 9px 5px 22px 9px;
}
  #btn3{
    background-color: #ffa500;
    border: none;
    margin-top: 33px;
    font-size: 10px;
    padding: 9px 5px 22px 9px;
  }
  .search_input{
    background-color: white;
    border: solid black;
    border-width: 1px 1px 1px 0px;
    font-size: 10px;
    border-radius: 1px;
  }
  .search_submit{
    background-color: #c2c2c2;
    border: 1px white;
    color: white;
    margin-top: 2px;
    cursor:pointer;
    transition: all 0.3s ease-out;
  }
.titleA{
  font-size: 12px;
}
  @media (max-width: 767px) {
.button_xs{
  margin-right: 0px!important;
}
    .button_xs button{
      height: 50% !important;
    }
  }
</style>
