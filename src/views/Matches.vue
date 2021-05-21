<template>
  <div class="matches py-8">

    <div class="text-4xl">
      Your matches
    </div>

    <hr class="border-t my-4 mx-8">

    <transition name="slide-fade" mode="in-out">
      <div v-if="this.cats.length > 0" class="mb-12">
        <div v-for="(catEl, index) in cats" :key="index" @click.stop="profileClicked(index)">
          <div class="text-left mx-8 my-4 flex rounded shadow border-l-2 border-red-600 ring-red-600">
            <img :src="`https://loremflickr.com/512/512/cat?lock=` + catEl.id" class="w-16 rounded">
            <p class="h-full w-full align-middle my-auto mx-4">{{ catEl.name }}</p>
          </div>

          <transition name="slide-fade" mode="out-in">
            <div v-if="profileIndex === index" class="bg-green-200 p-2 mx-8 rounded shadow border-l-2 border-black">
              <h2 class="text-sm text-gray-700"><span class="font-bold text-xl">“</span> {{ catEl.description }} <span class="font-bold text-xl">”</span></h2>
              <h3 class="text-left text-xs text-gray-500">― {{ catEl.gender }}, {{ catEl.color }}, #{{ catEl.id }}</h3>
            </div>
          </transition>

        </div>
      </div>
    </transition>

    <div v-if="this.cats.length === 0">
      <ion-icon class="animate-pulse text-6xl" name="compass"></ion-icon>
      <hr class="border-t my-2 mx-8">
      <p class="my-4 text-gray-400">You haven't matched with a cat yet.</p>
    </div>

    <navbar active-tab="chat"></navbar>
  </div>
</template>

<script>

//  import { mapState, mapMutations, mapGetters } from 'vuex'
import navbar from '@/components/Navbar.vue'

export default {
  name: 'Matches',

  data () {
    return {
      cats: {},
      profileIndex: null
    }
  },

  created () {
    this.cats = this.$store.getters.getLikes
  },

  methods: {
    profileClicked (index) {
      this.profileIndex = this.profileIndex === index ? null : index
    }
  },

  components: {
    navbar
  }
}
</script>

<style lang="css">
  .h-screen-for-real {
    height: 64vh;
  }

  #nav {
    padding: 0;
  }

  /* Enter and leave animations can use different */
  /* durations and timing functions.              */
  .slide-fade-enter-active {
    transition: all .2s ease;
  }
  .slide-fade-leave-active {
    transition: all .2s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(16px);
    opacity: 0;
  }
</style>
