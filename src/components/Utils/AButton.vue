<template>
  <button id="btn1" class="p-2 text-light"><i class="fa fa-edit fa-lg ml-2"></i>ثبت محصول جدید{{title1}}
  </button>
</template>

<script>
    export default {
        name: "AButton",
      props:['title1']
    }
</script>

<style scoped>
  button{
    font-size: 12px;
  }
  #btn1{
    background-color: #70088d;
    border: none;
    border-radius: 5px;
  }
</style>
