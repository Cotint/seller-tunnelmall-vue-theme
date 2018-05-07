<template>
  <div>
    <b-navbar toggleable="md" variant="white" class="p-0">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="p-0">
          <b-nav-item href="#" class="p-3" @mouseover="mouseOver" @mouseout="mouseLeave" @mousedown="isActive1=true;isActive2=false;isActive3=false;isActive4=false"  v-on :class="{ active:isActive1 }">درج محصولات</b-nav-item>
          <b-nav-item href="#" class="p-3" @mousedown="isActive1=false;isActive2=true;isActive3=false;isActive4=false"  v-on :class="{ active:isActive2 }" >جستجوی محصولات</b-nav-item>
          <b-nav-item href="#" class="p-3" @mousedown="isActive1=false;isActive2=false;isActive3=true;isActive4=false"  v-on :class="{ active:isActive3 }">سوالات متداول</b-nav-item>
          <b-nav-item href="#" class="p-3" @mousedown="isActive1=false;isActive2=false;isActive3=false;isActive4=true"  v-on :class="{ active:isActive4 }">گزارشات</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div class="row align-content-center align-self-center div_nav">
      <div class="col align-self-start">
      </div>
      <b-navbar toggleable type="light" v-show="ok" variant="faded" class="p-0">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="p-0">
            <b-nav-item href="#" class="p-3" @mousedown="isActive1=true;isActive2=false;isActive3=fals"  v-on :class="{ active:isActive1 }">
              <i class="fa fa-pencil-square-o ml-1" aria-hidden="true"></i> درج محصولات
            </b-nav-item>
            <b-nav-item href="#" class="p-3" @mousedown="isActive1=false;isActive2=true;isActive3=false;"  v-on :class="{ active:isActive2 }" >
              <i class="fa fa-search ml-1" aria-hidden="true"></i>            جستجو</b-nav-item>
            <b-nav-item href="#" class="p-3" @mousedown="isActive1=false;isActive2=false;isActive3=true;"  v-on :class="{ active:isActive3 }">
              <i class="fa fa-list ml-2" aria-hidden="true"></i>مدیریت محصولات</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <div class="col align-self-end">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        navbars : [
          {title:"آخرین ها",href:"#",carret:true},
          {title:"فیلم",href:"#",carret:true},
          {title:"سریال",href:"#",carret:true},
          {title:"انیمیشن",href:"#",carret:true},
        ],
        isActive1: false,
        isActive2: false,
        isActive3: false,
        isActive4: false,
        ok: false,
      }
    },
    methods: {
      mouseOver: function(){
        this.ok = true;
      },
      mouseLeave: function(){
        this.ok = false;
      }
    }
  }
</script>

<style>
  .a-navbar {
    background-color: white;
    text-align: right;

  }

  .nav-item {
    /*display: flex;*/
    /*align-items: center;*/
    transition: all 0.3s ease-out;
    font-size: 12px;
  }


  .single-item .cr-item {
    position: relative;
    margin: 0px 6px;
  }

  .a-navbar .nav-item:hover{
    color: white!important;
    background-color: #f8b3ff;
  }
  .active{
    border: solid purple;
    border-width: 0px 0px 2px 0px;
  }
.div_nav{
  border: solid gray;
  border-width: 2px 2px 2px 2px;
}
</style>
