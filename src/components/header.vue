<template>
<div class="container-fluid">
<div class="row head_bot d-flex justify-content-between" @mouseout="mouseLeave">
  <!--<div class="mt-2 col-md-1 col-6">-->
      <!---->
  <!--</div>-->
  <div class="col-md-4 col-12">
    <v-avatar>
      <img src="../assets/img/logo2=3.jpg" class="" alt="">
    </v-avatar>
    <drop_down class="m-2"></drop_down>
  </div>
  <media :query="{minWidth: 500}">
    <div class="col-md-5 col-4" @mouseover="mouseOver" @mouseout="mouseLeave">
      <b-navbar toggleable="md" variant="white" class="p-0">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="p-0">


            <div v-for="item of items" >
              <b-nav-item href="#" class="p-3" @mouseleave="mouseLeave">{{item.message}}</b-nav-item>
            </div>

          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </media>

    <media :query="{maxWidth: 500}">
      <div class="col-md-5 col-4">
        <b-navbar toggleable="md" variant="white" class="p-0">
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
          <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav class="p-0">
                <b-nav-item-dropdown text="درج محصولات" no-caret varient="dark" href="#" class="p-3"  @mousedown="isActive1=true;isActive2=false;isActive3=false;isActive4=false"  v-on :class="{ active:isActive1 }">
                  <b-dropdown-item href="#">درج محصولات</b-dropdown-item>
                  <b-dropdown-item href="#">جستجو</b-dropdown-item>
                  <b-dropdown-item href="#">مدیریت محصولات</b-dropdown-item>
                </b-nav-item-dropdown>
              <b-nav-item href="#" class="p-3" @mousedown="isActive1=false;isActive2=true;isActive3=false;isActive4=false"  v-on :class="{ active:isActive2 }" >جستجوی محصولات</b-nav-item>
              <b-nav-item href="#" class="p-3" @mousedown="isActive1=false;isActive2=false;isActive3=true;isActive4=false"  v-on :class="{ active:isActive3 }">سوالات متداول</b-nav-item>
              <b-nav-item href="#" class="p-3" @mousedown="isActive1=false;isActive2=false;isActive3=false;isActive4=true"  v-on :class="{ active:isActive4 }">گزارشات</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </media>








    <div class="col-md-3 col-6 justify-content-center">
        <img src="../../src/assets/img/tunnel_logo.jpg" class=" rounded mx-auto d-block" alt="Responsive image"/>
    </div>

  </div>
    <media :query="{minWidth: 500}">
      <div class="row align-content-center align-self-center div_nav position-absolute bg-white container-fluid logo_pic">
        <div class="col align-self-start">
        </div>
        <b-navbar toggleable type="light" v-show="ok" variant="faded" class="p-0" @mousedown="isActive1=true;isActive2=false;isActive3=false" @mouseleave="mouseLeave">
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
          <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav class="p-0">
              <b-nav-item href="#" class="p-3">
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
    </media>
  </div>
</template>

<script>
  import navBar from '../components/Utils/Navbar'
  import Media from 'vue-media'
  import drop_down from '../components/Utils/dropdown_1'
    export default {
    components:{
      navBar,
      Media,
      drop_down
    },
      data(){
        return {
          activeColor: 'purple',
          isActive1: false,
          isActive2: false,
          isActive3: false,
          ok:false,
          show:false,
          items: [
            { message: 'درج محصولات',index:'1',isActive: 'true' },
            { message: 'جستجوی محصول',index:'2',isActive: 'false' },
            { message: 'سوالات متداول',index:'3',isActive: 'false' },
            { message: 'گزارشات',index:'4' ,isActive: 'false'},
          ]
        }
      },
      methods: {
        setActive(){
          // vm = this;
          Vue.set(this.$data, 'isActive', true)
        },
        mouseOver: function(){
          this.ok = true;
          // this.isActive1 = true;
        },
        mouseLeave: function(){
          this.ok = false;
          // this.isActive1 = false;
        }
      },
    }
</script>

<style scoped>
  .btn-light{
    background-color: transparent !important;
  }
  .line_class{
    /*border: solid #000;*/
    border-width: 0px 0px 0px 0px;
    /*color: purple;*/
    background: none;
    font-size: 12px;

  }
  .active{
    border: solid purple;
    border-width: 0px 0px 2px 0px;
  }
  button:focus {outline:0;}
  .head_bot{
    /*border-bottom: solid 1px #b3b3b3;*/
    border: solid #b3b3b3;
    border-width: 0px 0px 1px 0px;
  }

  .logo_pic{
        background-repeat: no-repeat;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    /*background-size: 100%;*/
  }
  .font_item{
    font-family: iran!important;
    font-size: 11px;
    text-align: right;
    border: none;
  }

  @media (max-width: 767px) {
    .heads1{
      margin-right: 0 !important;
      padding: 0!important;

    }
  }
  no_shadow{
    box-shadow: none!important;
    -webkit-box-shadow:none!important;
  }
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
  .active:hover{
    border: solid purple;
    border-width: 0px 0px 2px 0px;
  }
  .div_nav{
    /*border: solid gray;*/
    /*border-width: 2px 2px 2px 2px;*/
  }
  .button_1{
    -webkit-box-shadow: none!important;
    box-shadow: none!important;
  }
</style>





