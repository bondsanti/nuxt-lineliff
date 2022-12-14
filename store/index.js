export const state = () => ({
  dialog:{
    isShow : false,
    message:''
  },
  register :{
    Firstname:'',
    Lastname:'',
    gender:1,
    email:'',
    phone:'',
    birthday:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    company:'',
    position:''
  }
})

export const getters = {
  getRegister(state){
    return state.register
  },
  getDialog(state){
    return state.dialog
  }
}

export const mutations = {
  SET_REGISTER(state, data){
    state.register = {
      ...state.register,
      ...data
    }
  },
  SET_DIALOG(state,data){
    state.dialog = {
      ...state.dialog,
      ...data
    }
  }
}

export const actions = {
  setRegister({ commit }, data){
    commit('SET_REGISTER', data)
  },
  setDialog({ commit }, data){
    commit('SET_DIALOG', data)
  },
}
