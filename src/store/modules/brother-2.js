const brother2 = {
    namespaced: true,
    state: {
        name: '홍길동',
        nick: '도적'
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

export default brother2