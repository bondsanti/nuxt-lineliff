<template>
  <div>
    <v-app-bar color="primary" dense flat dark>
      <v-toolbar-title>Register</v-toolbar-title>
    </v-app-bar>
    <v-container class="pt-0 pb-0">
      <v-row>
        <v-col cols="12">
          <div class="mt-8 text-primary text-title text-center">
            Step 1 of 2
          </div>
        </v-col>
        <v-col cols="12">
          <div class="text-center">
            <img src="~/assets/profile.png" alt="" width="155" />
          </div>
        </v-col>
        <v-col cols="12" class="text-center mt-n3"> Display name </v-col>
        <v-col cols="12">
          <v-form>
            <v-text-field
              v-model="form.Firstname"
              label="First name"
              dense
            ></v-text-field>
            <v-text-field
              v-model="form.Lastname"
              label="Last name"
              dense
            ></v-text-field>
            <div class="gander-group d-flex mt-3">
              <p>Gender</p>
              <div class="circle" :class="form.gender ==1 ? 'active': ''" @click="onChooseGender(1)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  shape-rendering="geometricPrecision"
                  text-rendering="geometricPrecision"
                  image-rendering="optimizeQuality"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  viewBox="0 0 512 511.01"
                >
                  <path
                    fill-rule="nonzero"
                    d="m456.72 96.62-115.49 115.5c22.46 31.03 35.72 69.17 35.72 110.41 0 52.04-21.1 99.17-55.2 133.27-34.11 34.1-81.23 55.21-133.28 55.21-52.03 0-99.17-21.11-133.27-55.21C21.1 421.7 0 374.57 0 322.53c0-52.04 21.1-99.17 55.2-133.27 34.1-34.1 81.23-55.21 133.27-55.21 42.91 0 82.47 14.35 114.16 38.5L419.89 55.28h-62.84V0H512v158.91h-55.28V96.62zM282.66 228.35c-24.1-24.1-57.41-39.02-94.19-39.02s-70.08 14.92-94.18 39.02c-24.1 24.1-39.01 57.4-39.01 94.18 0 36.78 14.91 70.09 39.01 94.19 24.1 24.1 57.4 39.01 94.18 39.01 36.78 0 70.09-14.91 94.19-39.01 24.1-24.1 39.01-57.41 39.01-94.19s-14.91-70.08-39.01-94.18z"
                  />
                </svg>
              </div>
              <p>Male</p>
              <div class="circle" :class="form.gender ==2 ? 'active': ''" @click="onChooseGender(2)">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 1000 1000"
                  enable-background="new 0 0 1000 1000"
                  xml:space="preserve"
                >
                  <g>
                    <g transform="matrix(1 0 0 -1 0 1952)">
                      <path
                        d="M842.8,1599.2c0,189.3-153.5,342.8-342.8,342.8c-189.3,0-342.8-153.5-342.8-342.8c0-173.4,128.7-316.7,295.8-339.6v-102.5h-66.3c0,0-32.6,4.1-32.6-32.7v-31.6c0,0-6.1-33.7,31.6-33.7h65.6v-62.6c0,0-2-34.7,28.6-34.7h36.7c0,0,31.3-2,31.3,31.6v65.6h66.3c0,0,32.6,1,32.6,31.6v33.7c0,0-1,32.7-32.6,32.7h-67l0.7,102.6C714.6,1283.1,842.8,1426.2,842.8,1599.2L842.8,1599.2z M500.1,1351.5c-136.4,0-247,110.6-247,247s110.6,244.6,247,244.6c136.4,0,247-108.2,247-244.6S636.5,1351.5,500.1,1351.5z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <p>Female</p>
            </div>
            <div class="text-center">
              <v-btn rounded color="primary" dark block class="mt-9 text-btn" @click="onNext">
                Next
              </v-btn>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </v-container>



  </div>
</template>

<script>
export default {
  data() {
    return {

      form: {
        Firstname: this.$store.getters.getRegister.Firstname,
        Lastname: this.$store.getters.getRegister.Lastname,
        gender: this.$store.getters.getRegister.gender,
      },
    };
  },
  methods: {
      onChooseGender(gender){
        this.form.gender = gender
      },
      validate(){
        let validated = true
        const errors =[]
        const validatorField =[
          'Firstname',
          'Lastname'
        ]
        validatorField.forEach((field) => {
          if(this.form[field] == '') {
            validated = false
            errors.push(`<strong>${field}</strong>&nbsp;can not null`)
          }
        });

        if(!validated){
          this.$store.dispatch('setDialog',{
            isShow:true,
            message:errors.map((error)=> ` ${error}<br>`).join('')
          });
        }

        return validated
      },
      onNext(){
        if(this.validate()){
          this.$store.dispatch('setRegister',this.form);
          this.$router.push('/register/step2');
        }

      }
    },
};
</script>

<style lang="scss" scoped>
.v-form {
  padding: 0 10px;
}
.gander-group {
  p {
    margin-bottom: 0;
    align-self: center;
    margin-right: 20px;
  }
  .circle {
    width: 45px;
    height: 45px;
    color: #fff;
    border-radius: 50%;
    position: relative;
    margin-right: 7px;
    background-color: rgba($color: #000000, $alpha: 0.3);
    &.active {
      background-color: #1a56be;
    }
    svg {
      top: 50%;
      left: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
