<template>
  <div>
    <div class="row d-flex justify-content-between align-items-center">
      <div class="col-md-2"></div>
      <pages class="col-md-4 col-12 table-class"></pages>
      <div class="col-md-4 col-12 resultA p-4 ml-5 text-left">نتایج یافت شده:3000 {{number1}} محصول</div>
    </div>
    <b-table striped hover responsive :items="items" :fields="fields" thead-class="head-class"></b-table>
    <div class="row d-flex justify-content-between mt-4">
      <div class="col-md-2 "></div>
      <pages class="col-md-8 col-12"></pages>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
  import pages from '../Utils/APagination'
  export default {
    components:{
      pages
    },
    data () {
      return {
        // Note 'isActive' is left out and will not appear in the rendered table
        fields: {
          id1: {
            label: 'ردیف',
            sortable: false,
            class:'border'
          },
          title1: {
            label: 'عنوان گروه',
            sortable: false,
            class:'border'
          },
          code1: {
            label: 'کد محصول',
            sortable: false,
            class:'border'
          },
          code2: {
            label: 'کد تنوع',
            sortable: false,
            class:'border'
          },
          code3: {
            label: 'کد سفارش',
            sortable: true,
            class:'border'
          },
          date1: {
            label: 'تاریخ تایید تونل مال',
            sortable: true,
            class:'border'
          },
          date2: {
            label: 'تاریخ ثبت سفارش',
            sortable: true,
            class:'border p-5'
          },
          date3: {
            label: 'تاریخ خروج انبار',
            sortable: false,
            class:'border'
          },
          title2: {
            label: 'عنوان تنوع',
            sortable: false,
            class:"big-col border"
          },
          kind: {
            label: 'نوع',
            sortable: false,
            class:'border'
          },
          price1: {
            label: 'قیمت واحد',
            sortable: false,
            class:'border'
          },
          price2: {
            label: 'تخفیف واحد',
            sortable: false,
            class:'border'
          },
          number1: {
            label: 'تعداد',
            sortable: false,
            class:'border'
          },
          price3: {
            label: 'تخفیف مدیر',
            sortable: false,
            class:'border'
          },

        },
        items: [
          { isActive: true,title1: 'موبایل', id1: '1', code1: '5588', code2:'55986',code3:'54564',date1:'12',date2:'13'},
          { isActive: true,title1: 'موبایل', id1: '2', code1: '5588', code2:'55986',code3:'54564',date1:'12',date2:'14'},
          { isActive: true,title1: 'موبایل', id1: '3', code1: '5588', code2:'55986',code3:'54564',date1:'15',date2:'11'},
          { isActive: true,title1: 'موبایل', id1: '3', code1: '5588', code2:'55986',code3:'54564',date1:'15',date2:'11'},
          { isActive: true,title1: 'موبایل', id1: '3', code1: '5588', code2:'55986',code3:'54564',date1:'15',date2:'11'},
          { isActive: true,title1: 'موبایل', id1: '3', code1: '5588', code2:'55986',code3:'54564',date1:'15',date2:'11'},
          { isActive: true,title1: 'موبایل', id1: '3', code1: '5588', code2:'55986',code3:'54564',date1:'15',date2:'11'},
          { isActive: true,title1: 'موبایل', id1: '3', code1: '5588', code2:'55986',code3:'54564',date1:'15',date2:'11'},
          { isActive: true,title1: 'موبایل', id1: '3', code1: '5588', code2:'55986',code3:'54564',date1:'15',date2:'11'},
          { isActive: true,title1: 'موبایل', id1: '3', code1: '5588', code2:'55986',code3:'54564',date1:'15',date2:'11'},
      ]
      }
    }
  }
</script>
<style>
.head-class{
background-color: #540883;
border: solid 1px white;
color: white;
  padding: 10%!important;
}
.item1{
background-color: #005cbf!important;
}
table.b-table > thead > tr > th.sorting, table.b-table > tfoot > tr > th.sorting{
  padding: 1%!important;
}
table.table tbody td:first-child, table.table tbody td:not(:first-child), table.table tbody th:first-child, table.table tbody th:not(:first-child), table.table thead td:first-child, table.table thead td:not(:first-child), table.table thead th:first-child, table.table thead th:not(:first-child){
  padding: 1%!important;
}
table.b-table > thead > tr > th.sorting::before, table.b-table > thead > tr > th.sorting::after, table.b-table > tfoot > tr > th.sorting::before, table.b-table > tfoot > tr > th.sorting::after{
  opacity: 1.4;
  /*padding: 0px;*/
  /*margin: 0px;*/
  /*left: 10px;*/
}

table.b-table > thead > tr > th.sorting::after, table.b-table > tfoot > tr > th.sorting::after{
  /*right: 50px;*/
  /*padding-right: 50%;*/
  /*padding-bottom: 10%;*/
}
table.b-table > thead > tr > th.sorting::before, table.b-table > thead > tr > th.sorting::after, table.b-table > tfoot > tr > th.sorting::before, table.b-table > tfoot > tr > th.sorting::after{
  /*padding: 20%;*/
  padding-right: 77%;
  padding-bottom: 10%;
}
  .big-col{
    width:15%;
  }
@media (max-width: 767px){
  .text-left{
    text-align: right!important;
  }
}
</style>
