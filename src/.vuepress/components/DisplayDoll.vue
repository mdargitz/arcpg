<template>
  <div>
    <h3>Your Doll</h3>
    <p><b>Body Size:</b> {{bodySize}}</p>
    <p><b>Ear Type:</b> {{earType}}</p>
    <p><b>Hairstyle:</b> {{hairstyle}}</p>
    <!-- <img :src="image"> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
     ...mapState([
       'bodySize',
       'earType',
       'hairstyle'
       ])
    },
}
</script>