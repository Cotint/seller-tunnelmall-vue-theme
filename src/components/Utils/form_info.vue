<template>
  <div class="">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show"  >
      <b-form-group id="exampleInputGroup2"
                    :label="title"
                    label-for="exampleInput2">
                      <!--class="p-2 col-lg-3 col-md-2 col-4">-->

        <b-form-input :id="id"
                      type="text"
                      v-model="form.name"
                      required
                      :value=input
                      class="bg-light p-3"
                      @change.native="handleDataFc"
                     >
        </b-form-input>
      </b-form-group>
      <!--<b-button type="submit" variant="primary">Submit</b-button>-->
      <!--<b-button type="reset" variant="danger">Reset</b-button>-->
    </b-form>
  </div>
</template>

<script>
  export default {
    props:['title','input','value','id'],
    data () {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        show: true,
        childData: 'hiii'
      }
    },
    methods: {
      onSubmit (evt) {
        evt.preventDefault();
        // alert(JSON.stringify(this.form));
      },
      onReset (evt) {
        evt.preventDefault();
        /* Reset our form values */
        this.form.email = '';
        this.form.name = '';
        this.form.food = null;
        this.form.checked = [];
        /* Trick to reset/clear native browser form validation state */
        this.show = false;
        this.$nextTick(() => { this.show = true });
      },
      clicked(){

      },
      updateValue: function (value) {
        this.$emit('input', value);
      },
      handleDataFc: function () {
        var val = event
        console.log("what is event :",event.target.id)
        this.$emit('interface',val ) // handle data and give it back to parent by interface
        // this.$emit('link',event )
      }
    },

  }
</script>
