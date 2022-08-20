<template>
  <div>
    <v-app-bar color="primary" dense flat dark>
      <v-toolbar-title>Register</v-toolbar-title>
    </v-app-bar>
    <v-container class="pt-0 pb-0">
      <v-row>
        <v-col cols="12">
          <div class="mt-8 text-primary text-title text-center">
            Step 2 of 2
          </div>
        </v-col>
        <v-col class="12">
          <v-form>
            <p class="text-center text-main mb-4 mt-4 ">Tell us more  a bit</p>
            <v-text-field
              v-model="form.email"
              label="Email"
              type="email"
              :rules="emailRules"
              dense
            ></v-text-field>
            <v-text-field
              v-model="form.phone"
              label="Phone"
              :rules="phoneRules"
              @keypress="onlyNumber($event,10)"
              dense
            ></v-text-field>
             <!-- <v-text-field
              v-model="form.birthday"
              label="Birthday"
              dense
            ></v-text-field> -->
            <v-dialog
        ref="dialog"
        v-model="modal"

        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="form.birthday"
            label="Birthday"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
            class="birthday-icon"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="form.birthday"
          :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="modal = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.dialog.save(form.birthday)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-dialog>
            <p class="text-center text-main mb-4 mt-4">Work Profile</p>
             <v-text-field
              v-model="form.company"
              label="Company Name"
              dense
            ></v-text-field>
            <v-text-field
              v-model="form.position"
              label="Position"
              dense
            ></v-text-field>
             <div class="text-center">
              <v-btn rounded color="primary" dark block class="mt-9 text-btn" @click="onRegister">
                Register
              </v-btn>
            </div>
            <div class="w-100 text-center text-btn text-primary" @click="onBack">Back</div>
          </v-form>
        </v-col>
      </v-row>
    </v-container>



  </div>
</template>
<script>
const REGEX_EMAIL=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
const REGEX_PHONE=/^[0]([0-9]{9})*$/
const REGEX_NUMBER=/^[0-9]*$/
export default {
  data() {
    return {
      form:{
        email:'',
        phone:'',
        birthday:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        company:'',
        position:''
      },
      modal: false,
      emailvalidated:false,
      phonevalidated:false,
      emailRules:[value => this.emailVaridator(value)],
      phoneRules:[value => this.phoneValidator(value)]
    }
  },
  methods:{
    emailVaridator(value){
      this.emailvalidated = false;
      if(!value){
        return "E-mail is required";
      }
      if (REGEX_EMAIL.test(value)) {
        this.emailvalidated = true;
        return true
      }
      return "E-mail must be valid";
    },
    phoneValidator(value){
      this.phonevalidated = false;
      if(!value){
        return "Phone is required";
      }
      if (REGEX_PHONE.test(value) && value.length==10) {
        this.phonevalidated = true;
        return true
      }
      return "pls input phonenumber 10"
    },
    onlyNumber(event,max){
      if (event.target.value.length==0) {
        if(event.key !=0){
          return event.preventDefault();
        }
      }else{
        if(!REGEX_NUMBER.test(event.key)||event.target.value.length==max){
        return event.preventDefault();
        }
      }

    },
    validate(){
        let validated = true
        const errors =[]
        const validatorField =[
          'email',
          'phone',
          'company',
          'position'
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
    onRegister(){
       if(this.validate()){
        console.log('success');
       }

    },
    onBack(){
      this.$router.push('/register')
    }
  },

}
</script>

<style lang="scss" scoped>
.v-form{
  padding: 0 10px;
}
.birthday-icon{
  position: relative;
 ::v-deep .v-input__prepend-outer{
  position: absolute;
  right:0;
 }
}
</style>
