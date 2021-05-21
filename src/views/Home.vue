<template>
  <div class="home">

    <div class="h-screen-for-real w-full flex justify-center">
      <ion-icon class="animate-spin my-auto text-6xl" name="compass"></ion-icon>
    </div>

    <cat-card :cat-name="currentCat.name" :cat-distance="currentCat.distance" :cat-gender="currentCat.gender" :cat-color="currentCat.color" :cat-bio="currentCat.description" :id="currentCat.id" @like="likeEvent" @dislike="dislikeEvent"></cat-card>

    <navbar active-tab="home"></navbar>

  </div>
</template>

<script>

//  import { mapState, mapMutations, mapGetters } from 'vuex'
import catJSON from '@/assets/data/cat-db.json'
import catCard from '@/components/CatCard.vue'
import navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',

  data () {
    return {
      cats: {},
      currentCat: {},
      catLikes: []
    }
  },

  created () {
    this.cats = catJSON ?? {}

    // Generate a first random cat
    this.currentCat = this.getRandomCat()
    console.log(`
      ,gggg,                                      
      d8" "8I         ,dPYb,        I8   ,dPYb,    
      88  ,dP         IP''Yb        I8   IP''Yb    
   8888888P"     gg   I8  8I  gg 88888888I8  8I    
      88         ""   I8  8'  ""    I8   I8  8'    
      88         gg   I8 dP   gg    I8   I8 dPgg,  
 ,aa,_88         88   I8dP    88    I8   I8dP" "8I 
dP" "88P         88   I8P     88   ,I8,  I8P    I8 
Yb,_,d88b,,_   _,88,_,d8b,_ _,88,_,d88b,,d8     I8,
 "Y8P"  "Y888888P""Y88P'"Y888P""Y88P""Y888P     Y8

 ---- F i n d   l o v e ™
      `)
  },

  methods: {
    likeEvent () {
      // User liked cat profile, object will be commited to the store.
      this.$store.commit('addLike', this.currentCat)
      this.currentCat = this.getRandomCat()
    },

    dislikeEvent () {
      this.currentCat = this.getRandomCat()
    },

    getRandomCat () {
      const randomCat = this.cats[Math.floor(Math.random() * this.cats.length)]
      randomCat.distance = this.getRandomDistance()
      return randomCat
    },

    getRandomDistance () {
      let randomDistance = Math.floor(Math.random() * 100)

      if (randomDistance <= 10) {
        return 'Nearby'
      }

      return (randomDistance += ' Km')
    }
  },

  components: {
    catCard,
    navbar
  }
}
</script>

<style>
.h-screen-for-real {
  height: 64vh;
}
</style>
