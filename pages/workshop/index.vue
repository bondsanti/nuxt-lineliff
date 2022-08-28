<template>
  <div>
    <v-app-bar color="primary" dense flat dark>
      <v-toolbar-title>Register Workshop</v-toolbar-title>
    </v-app-bar>
    <v-container class="pt-0 pb-0">
      <v-row>
        <v-col cols="12">
          <div class="mt-3 text-primary text-title text-center">
            Date
          </div>
        </v-col>
        <v-col cols="12">
          <v-card class="mx-auto" max-width="450">
            <v-img
              class="white--text align-end"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <div class="more-detail">More Detail</div>
            </v-img>
            <div class="card-content">
              <div>
                <v-card-text class="text--primary">
                  <h1>Workshop 1</h1>
                </v-card-text>
                <v-card-subtitle class=" pt-0"> Number 10 </v-card-subtitle>
              </div>
              <v-btn class="circle" fab x-small>
                <v-icon>mdi-check</v-icon>
              </v-btn>
            </div>
          </v-card>
          <v-card class="mx-auto active" max-width="450">
            <v-img
              class="white--text align-end"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <div class="more-detail">More Detail</div>
            </v-img>
            <div class="card-content">
              <div>
                <v-card-text class="text--primary">
                  <h1>Workshop 2</h1>
                </v-card-text>
                <v-card-subtitle class=" pt-0"> Number 10 </v-card-subtitle>
              </div>
              <v-btn class="circle" fab x-small>
                <v-icon>mdi-check</v-icon>
              </v-btn>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12">
        <div class="text-center">
              <v-btn rounded color="primary" dark block class="mt-9 text-btn">
                Next
              </v-btn>
            </div>
            </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
  .circle{
    color: #FFF;
    background: rgba($color:#1A56BE,$alpha:0.3)!important;
    align-self: center;
  }
  .card-content{
    display: flex;
    justify-content: space-between;
    padding: 15px;
  }
  .more-detail{
    font-size: 12px;
    color:#1A56BE;
    border-radius:25px;
    padding: 10px 20px;
    background-color: #FFF;
    font-weight: bolder;
    display: inline;
    position: absolute;
    bottom: 11px;
    right: 11px;
  }
  .v-card__subtitle{
    padding: 0px;
  }
  .v-card__text{
    padding: 0px;
    padding-bottom: 5px
    h1{
      font-size: 24px;
    };
  }
  .v-card+.v-card{
    margin-top: 30px;
  }
  .v-card.active{
    .circle{
      background: rgba($color:#1A56BE,$alpha:1)!important;
    }
    .v-image{
    &::before{
      content:'Selected';
      font-weight: bold;
      font-size: 24px;
      display: flex;
      height: 100%!important;
      width: 100%!important;
      align-items: center;
      justify-content: center;
      background: rgba($color:#1A56BE,$alpha:1)!important;
    }
  }
  }


  </style>
