<template>
  <div class="text-center">
    <v-dialog v-model="getDialog.isShow" width="500" persistent>
      <v-card>
        <v-card-title class="text-h5 red lighten-2">
          Error Message
        </v-card-title>

        <v-card-text>  <v-alert
      dense
      outlined
      type="error"
      v-html="getDialog.message"
      class="mt-2 mr-n3 ml-n3 mb-n3"
    >

    </v-alert></v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn depressed color="error" @click="onCloseDialog"> OK </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {

  computed:{
    getDialog(){
      return this.$store.getters.getDialog
    }
  },
  methods:{
    onCloseDialog(){
      this.$store.dispatch('setDialog',{
        isShow:false,
        message:''
      })
    }
  }
  // data() {
  //   return {
  //     dialog: true,
  //     massage: "",
  //   };
  // },
};
</script>
