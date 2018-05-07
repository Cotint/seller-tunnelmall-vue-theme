<template>
  <div class="sec p-2 my-3 mx-5">
    <h6 class="my-2">توجه شود <span class="my-2">فروشنده محترم توجه داشته باشید فروش کالای غیر اصل یا تقلبی، طبق قوانین دیجی کالا به شدت در حال بررسی است و در صورت مشاهده و اثبات تخلف، جریمه ی آن 10 برابر ارزش کالای فروش رفته خواهد بود.</span></h6>
  </div>
</template>

<script>
    export default {
        name: "AWarning"
    }
</script>

<style scoped>
  .sec {
    /*float:left;*/
    background:pink;
    border-radius: 8px;
  }
  h6 {text-align:right;
    font-size: 11px;
  }
  h6 span{display: block;}
</style>
