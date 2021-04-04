const scholl = {
    namespaced: true,
    state: {
        grade: 3,
        class: 2,
    },
    mutations: {
        updateData (state, payload) {
            state.grade = payload.grade || state.grade;
            state.class = payload.class || state.class;
        }
    },
    actions: {
        updateData ({ commit }, payload) {
            commit('updateData', payload);
        }
    }
}

export default scholl