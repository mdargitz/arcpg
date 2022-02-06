<template>
  <div>
    <h3>Configure your Doll</h3>
    <p>Select Body Size:</p>
    <div v-for="thisBodySize in bodySizes" :key="thisBodySize.id">
      <input type="radio" :id="thisBodySize.id" name="body size" :value="thisBodySize.id" v-model="bodySize">
      <label :for="thisBodySize.id">{{thisBodySize.label}}</label>
    </div>

    <p>Select Ear Type:</p>
    <div v-for="thisEarType in earTypes" :key="thisEarType.id">
      <input type="radio" :id="thisEarType.id" name="ear type" :value="thisEarType.id" v-model="earType">
      <label :for="thisEarType.id">{{thisEarType.label}}</label>
    </div>

    <p>Select Hairstyle:</p>
    <div v-for="thisHairstyle in hairstyles" :key="thisHairstyle.id">
      <input type="radio" :id="thisHairstyle.id" name="hair style" :value="thisHairstyle.id" v-model="hairstyle">
      <label :for="thisHairstyle.id">{{thisHairstyle.label}}</label>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => {
    return {
      bodySizes: [
        {id: 'small', label: 'Small Creature'},
        {id: 'medium', label: 'Medium Creature'},
        {id: 'large', label: 'Large Creature'}
      ],
      hairstyles: [
        {id: 'short', label: 'Short Hair'},
        {id: 'long', label: 'Long Hair'},
        {id: 'braid', label: 'Braided Hair'}
      ],
      earTypes: [
        {id: 'pointy', label: 'Pointy'},
        {id: 'round', label: 'Round'}
      ]
    }
  },
  computed: {
    bodySize: {
      get () {
      return this.$store.state.bodySize
      },
      set (value) {
        this.$store.commit('updateBodySize', { bodySize: value})
      }
    },
    earType: {
      get () {
      return this.$store.state.earType
      },
      set (value) {
        this.$store.commit('updateEarType', { earType: value})
      }
    },
    hairstyle: {
      get () {
      return this.$store.state.hairstyle
      },
      set (value) {
        this.$store.commit('updateHairstyle', { hairstyle: value})
      }
    }
  },
}
</script>