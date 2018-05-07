<template>
  <div>
    <div class="headerC mb-2 mt-2 font-weight-bold">{{header1}}</div>
    <!--<b-dropdown class="m-2" variant="link" id="ddown-left" size="sm" text="شاپکت" >-->
      <!--<b-dropdown-item-button class="font_item">| داشبورد</b-dropdown-item-button>-->
      <!--<b-dropdown-item-button class="font_item">پروفایل های شما</b-dropdown-item-button>-->
      <!--&lt;!&ndash;<b-dropdown-divider></b-dropdown-divider>&ndash;&gt;-->
      <!--<b-dropdown-item-button class="font_item">تغییر رمز</b-dropdown-item-button>-->
      <!--<b-dropdown-item-button class="font_item">بارگزاری مدارک</b-dropdown-item-button>-->
    <!--</b-dropdown>-->
    <div class="">
      <b-form-select v-model="selected" class="mb-3 tes">
        <option :value="null" class="headerC" disabled>{{input1}}</option>
        <option value="a">{{input2}}</option>
        <option value="a">{{input3}}</option>
      </b-form-select>
    </div>





    <!--<form>-->
      <!--<div class="form-group">-->
        <!--<label for="sel1">انتخاب گروه</label>-->
        <!--<select class="form-control" id="sel1">-->
          <!--نمایش گروه-->
          <!--<option>1</option>-->
          <!--<option>2</option>-->
          <!--<option>3</option>-->
          <!--<option>4</option>-->
        <!--</select>-->
      <!--</div>-->
    <!--</form>-->
  </div>
</template>

<script>
    export default {
      props: ['header1','input1','input2','input3'],
      components: {

      },
      data () {
        return {
          selected: null,
          options: [
            { value: null, text:  'salammm' },
            { value: 'a', text: 'This is First option' },
            { value: 'b', text: 'Selected Option' },
            { value: {'C': '3PO'}, text: 'This is an option with object value' },
            { value: 'd', text: 'This one is disabled', disabled: true }
          ]
        }
      }
    }
</script>

<style scoped>
.headerC{
  font-size: 12px;
}
b-dropdown{
  background-color: #1d2124!important;
}

.tes{
  font-size: 11px;
}

</style>
