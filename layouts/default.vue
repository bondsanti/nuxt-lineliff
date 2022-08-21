<template>
  <v-app>
    <nuxt/>
      <DialogVue/>
  </v-app>
</template>

<script>
import DialogVue from '~/components/Dialog.vue';
export default {
  components:{
    DialogVue
  }
}
</script>

<style lang="scss">
  .v-application{
  font-family: 'Quicksand', sans-serif;
  }
  .v-toolbar__title{
    text-align: center;
    width: 100%;
    font-weight: bold;
  }
  .v-app-bar .primary{
    background-color: #1A56be !important;
    border-color: #1A56be !important;
  }
  .text-primary{
    color:#1A56be
  }
  .text-main{
    font-size: 20px;
  }
  .text-btn{
    font-size: 20px !important;
    text-transform: none !important;
    height: auto !important;
    padding: 10px 0 !important;
    font-weight: bold;
    &.outlined{
    border: 1px solid #1A56be;
    border-radius: 28px;
    line-height: normal;
  }
  }
  .text-title{
    font-size: 20px;
    font-weight: bold;
  }
  .set-padding{
    padding: 0 10px;
  }

</style>
