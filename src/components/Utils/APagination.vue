<template>
  <!--<nav aria-label="...">-->
  <!--<ul class="pagination pagination-sm justify-content-center">-->
  <!--<li class="page-item disabled">-->
  <!--<span class="page-link border-0 mx-1">بعدی</span>-->
  <!--</li>-->
  <!--<li class="page-item"><a class="page-link itemA border-0" href="#">1</a></li>-->
  <!--<li class="page-item active">-->
  <!--<span class="currentItem page-link mx-2 border-0">-->
  <!--2-->
  <!--<span class="sr-only">(current)</span>-->
  <!--</span>-->
  <!--</li>-->
  <!--<li class="page-item"><a class="page-link itemA border-0" href="#">3</a></li>-->
  <!--<li class="page-item">-->
  <!--<a class="page-link border-0 mx-1" href="#">قبلی</a>-->
  <!--</li>-->
  <!--</ul>-->
  <!--</nav>-->
  <div class="text-xs-center flex-row border-0 ">
    <v-container class="border-0 p-0">
      <v-layout justify-center>
        <v-flex xs8>
          <v-card class="border-0">
            <v-card-text class="p-0 mt-3">
              <v-pagination color="purple" next-icon="chevron_left" prev-icon="chevron_right"
                            :length="12"
                            v-model="page"
                            total-visible="5">
              </v-pagination>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "search_result",
    data () {
      return {
        page: 1
      }
    }
  }
</script>

<style scoped>
  .card{
    background-color: transparent!important;
  }
  .justify-center{
    justify-content: right;
  }
</style>

