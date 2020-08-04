import Vue from 'vue'
import Vuex from  'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
state: {
    users: [{
        name: 'hwney'
    }],

},
mutations: {
    setUser: (state, user) => {
        state.users = user;
    }
},
actions: {
    async getUserDetails({commit}, {vueApp}) {
        let request = await vueApp.$get("http://localhost:3000/api/v1/users/get-users", {});
        console.log(request)
        commit("setUser", request.data.users);
    }
},
getters: {

}
})