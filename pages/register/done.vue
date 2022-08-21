<template>
  <div>
    <v-app-bar color="primary" dense flat dark>
      <v-toolbar-title>Register</v-toolbar-title>
    </v-app-bar>
    <v-container class="pt-0 pb-0">
      <v-row>
        <v-col cols="12">
          <div class="set-padding">
          <div class="text-center mt-13">
            <img src="~/assets/done.png" alt="" width="155" />
          </div>
          <div class="text-center mt-3">
          <h1 class="text-title">ยินดีต้อนรับ, {{name}}</h1>
          <p class="mt-5 pl-8 pr-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate molestias iste optio sunt nobis recusandae</p>
          </div>
           <v-btn rounded color="primary" dark block class="mt-9 text-btn" @click="onWorkshop">
                Register workshop
              </v-btn>

            <div class="w-100 text-center outlined text-btn text-primary mt-3" @click="onClose">Close</div>
        </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data(){
    return {
      name:this.$store.getters.getRegister.Firstname
    }
  },
  methods:{
    onWorkshop(){
      this.router.push('workshop')
    },
    onClose(){

    }
  }
}
</script>

<style>

</style>
