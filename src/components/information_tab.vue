<template>
  <div class=" tab_father">
    <v-tabs v-model="active" color="white" dark slider-color="deep-purple darken-1" class="tabs__bar">
      <v-tab ripple >اطلاعات پایه</v-tab>
      <v-tab ripple>اطلاعات تماس</v-tab>
      <v-tab ripple>اطلاعات قراردادی</v-tab>
      <v-tab ripple>حساب بانکی</v-tab>
      <v-tab-item class="row mt-2">
        <div class="container-fluid col-12 border-bottom div_border"></div>
        <v-card flat class="border-0 col-lg-3" v-for="(item, key) in result2">
            <form_info :title="item.title" :input="item.input" class="p-2" v-on:click="update_form(item)"></form_info>
        </v-card>
        <!--<v-card flat class="border-0 col-lg-3">-->
          <!--<form_info title="نام فروشگاه" :input="result2.id" class="p-2"></form_info>-->
        <!--</v-card>-->
      </v-tab-item>
      <v-tab-item class="row mt-2">
        <div class="container-fluid col-12 border-bottom div_border"></div>
        <v-card flat class="border-0 col-lg-3" v-for="item in items">
          <form_info :title="item.title" :input="item.input" class="p-2"></form_info>
        </v-card>
      </v-tab-item>
    </v-tabs>
    <!--<el-tabs tab-position="top" v-model="activeName" @tab-click="handleClick">-->
      <!--<el-tab-pane label="User" name="first">User</el-tab-pane>-->
      <!--<el-tab-pane label="Config" name="second">Config</el-tab-pane>-->
      <!--<el-tab-pane label="Role" name="third">Role</el-tab-pane>-->
      <!--<el-tab-pane label="Task" name="fourth">Task</el-tab-pane>-->
    <!--</el-tabs>-->
  </div>
</template>

<script>
  import form_info from '../components/Utils/form_info'
  export default {
    components:{
      form_info,
    },
    methods:{
      update_form: function (item) {
        axios.put(`/v1/shops/3`, {
          name: "ahmad"
        })
      }
    },
    created(){
      const _this = this;
      window.axios.get(`/v1/shops/3`)
        .then(function(result){
          // _this.result2 = result.data.data;
          _this.result2.push({
            title:'نام فروشگاه' , input:result.data.data.name,
          })
          _this.result2.push({
            title:'نام و نام خانوادگی' , input:"نام و نام خانوادگی"
          })
          _this.result2.push({
            title:'تاریخ ثبت نام' , input:result.data.data.start_date
          })
          _this.result2.push({
            title:'نوع' , input:result.data.data.type
          })
          _this.result2.push({
            title:'کد ملی' , input:result.data.data.user.national_id
          })
          _this.result2.push({
            title:'تلفن' , input:result.data.data.user.phone
          })
          _this.result2.push({
            title:'آدرس سایت' , input:result.data.data.website_url
          })
          _this.result2.push({
            title:'جنسیت' , input:result.data.data.gender
          })
          _this.result2.push({
            title:'واحد پولی' , input:result.data.data.bank,
          })
          _this.result2.push({
            title:'تاریخ تولد' , input:result.data.data.start_date
          })
          _this.result2.push({
            title:'شماره شناسنامه' , input:result.data.data.national_id
          })
          _this.result2.push({
            title:'کد فروشنده' , input:result.data.data.reseller_code
          })
          // _this.result2.push({
          //   title:'فعال' , 'هست'
          // })
          // _this.result2.push({
          //   title:'عضویت در خبرنامه' , "ندارد"
          // })
          console.log("hiiii",result.data);
        })},

    data () {
      return {
        active: null,
        result2: [],
        items:[
          {title:'نام فروشگاه',id_title:'1'},
          {title:'نام و نام خانوادگی' , id_title:'2'},
          {title:'نام فروشگاه',input:'sdd23',id_title:'3',id_input:'3'},
          {title:'تاریخ ثبت نام',input:'sdd23',id_title:'4',id_input:'4'},
          {title:'نوع',input:'sdd23',id_title:'5',id_input:'5'},
          {title:'کد ملی',input:'sdd23',id_title:'6',id_input:'6'},
          {title:'تلفن',input:'sdd23',id_title:'7',id_input:'7'},
          {title:'آدرس سایت',input:'sdd23',id_title:'8',id_input:'8'},
          {title:'نام فروشگاه',input:'sdd23',id_title:'9',id_input:'9'},
          {title:'نام فروشگاه',input:'sdd23',id_title:'10',id_input:'10'},
          {title:'نام فروشگاه',input:'sdd23',id_title:'11',id_input:'11'},
          {title:'نام فروشگاه',input:'sdd23',id_title:'12',id_input:'12'},
          {title:'نام فروشگاه',input:'sdd23',id_title:'13',id_input:'13'},
          {title:'نام فروشگاه',input:'sdd23',id_title:'14',id_input:'14'},
        ],
        activeName: 'first',

      }
    },
    methods: {
      next () {
        const active = parseInt(this.active)
        this.active = (active < 2 ? active + 1 : 0).toString()
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    // created() {
    //   const _this = this;
    //   window.axios.get("/v1/shops/3").then(function (result) {
    //
    //       // this.info_forms.id = result.data.data.id;
    //       // this.info_forms = result.data;
    //       console.log("salaaaaaaaaaaaaam",result.data.data.id)
    //       // console.log("hiiiiii",this.info_forms)
    //     // this.forms = result.data.data;
    //
    //   })
    //
    // },
  }
</script>

<style scoped>
.tabs__bar {
  border-bottom: 2px!important;
}
  .tabs__wrapper{
    border-bottom: 2px!important;
  }
  .div_border{
  position: relative;
  margin-top: -11%;
    z-index: -10;
    margin-bottom: 7px;
    margin-left: -2%;
    border-bottom: solid 1px #acacac;
  }

</style>
