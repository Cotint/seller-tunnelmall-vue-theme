<template>
  <div>
    <el-dropdown class="border-0" :hide-on-click="true" :placement="top-end">
  <span class="el-dropdown-dark">
    شاپکت<i class="el-icon-arrow-down el-icon--right py-1 px-2"></i>
  </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item class="align-self-start m-0">| داشبورد</el-dropdown-item>
        <el-dropdown-item>پروفایل های شما</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
        <el-dropdown-item disabled>تغییر رمز</el-dropdown-item>
        <el-dropdown-item divided>بارگزاری مدارک</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        currentPage: 3
      }
    }
  }
</script>
<style scoped>
  .el-dropdown-dark {
    cursor: pointer;
    color: #0f041f;
    border: none!important;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .el-dropdown-menu__item{
    /*margin-left: 5%;*/
    /*margin-right: 5%;*/
    /*padding: 2%;*/
    direction: rtl;
  }
</style>
