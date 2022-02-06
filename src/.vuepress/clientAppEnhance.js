import { defineClientAppEnhance } from '@vuepress/client'
import Generator from '../.vuepress/components/Generator.vue'
import ConfigureDoll from '../.vuepress/components/ConfigureDoll.vue'
import DisplayDoll from '../.vuepress/components/DisplayDoll.vue'

import { createStore } from 'vuex'

export default defineClientAppEnhance(({ app }) => {

    // Define components
    app.component('Generator', Generator)
    app.component('ConfigureDoll', ConfigureDoll)
    app.component('DisplayDoll', DisplayDoll)

    // Set up Vuex Store
    const state = {
        bodySize: 'medium',
        earType: 'round',
        hairstyle: 'short'
    }

    const mutations = {
        updateBodySize(state, payload) {
            state.bodySize = payload.bodySize
            console.log('updateBodySize sent with ', payload);
        },
        updateEarType(state, payload) {
            state.earType = payload.earType
            console.log('updatEearType sent with ', payload);
        },
        updateHairstyle(state, payload) {
            state.hairstyle = payload.hairstyle
            console.log('updateHairstyle sent with ', payload);
        },
    }

    const store = createStore({
        state,
        mutations
    })

    app.use(store)
})