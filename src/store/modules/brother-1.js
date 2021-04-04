const brother1 = {
    namespaced: true,
    state: {
        name: '이순신',
        nick: '거북선'
    },
    mutations: {
        updateData (state, payload) {
            state.name = payload.name || state.name;
            state.nick = payload.nick || state.nick;
        }
    },
    actions: {
        updateData ({ commit }, payload) {
            commit('updateData', payload);
        }
    }
}

export default brother1