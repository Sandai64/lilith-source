<template>
  <div class="settings py-8">

    <div class="text-4xl">
      About
    </div>
      <hr class="border-t my-4 mx-8">

      <div class="px-8 text-left text-sm dark:text-white">
        <p>
          Do you want to match with kittens worldwide just to chat ? <br>
          Or maybe you want to find that love story you're dreaming of ? <br>
          We do. And that's why we made Lilith, the new dating app made for you.
        </p>
      </div>

      <hr class="border-t my-4 mb-0 mx-8">

      <div class="px-8">
        <img src="@/assets/img/banner.png" class="p-12 w-96 mx-auto">
        <p class="text-gray-500">Lilith, made with <ion-icon name="heart" class="align-middle"></ion-icon> and <ion-icon name="cafe" class="align-middle"></ion-icon> in Besançon.</p>
        <p class="text-gray-500">By Erwan E. (v1.0.0)</p>
      </div>
    <navbar active-tab="settings"></navbar>
  </div>
</template>

<script>

// import { mapState, mapMutations, mapGetters } from 'vuex'
import navbar from '@/components/Navbar.vue'

export default {
  name: 'Matches',

  data () {
    return {

    }
  },

  created () {

  },

  methods: {

  },

  components: {
    navbar
  }
}
</script>

<style>
  .h-screen-for-real {
    height: 64vh;
  }

  #nav {
    padding: 0;
  }

</style>
