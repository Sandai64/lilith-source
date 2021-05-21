<template>
  <div class="img-container h-screen flex flex-col justify-end pb-6 px-3 fixed top-0 left-0 w-full"
    :style="`background-image: url('https://loremflickr.com/512/512/cat?lock=` + id + `')`">
      <div class="flex items-center space-x-3 mb-32">
        <ion-icon @click="$emit('dislike')" name="arrow-undo" class="arrow-anim-left text-4xl text-white"></ion-icon>
        <div class="bg-gray-600 bg-opacity-50 rounded-xl px-4 py-3 flex-grow shadow-xl backdrop-filter backdrop-blur-md grid-rows-5 text-left h-max w-full">
          <h1 class="text-md font-semibold text-gray-100">{{ catName }}</h1>
          <div class="flex items-center">
            <p class="font-semibold text-xs text-gray-300">{{ catDistance }}</p>
            <ion-icon name="compass-outline" class="ml-2 text-xl text-white text-gray-300"></ion-icon>
          </div>
          <hr class="border-gray-300 my-1">
          <h3 class="text-xs text-gray-300">{{ catGender }}, {{ catColor }}</h3>
          <h2 class="text-sm text-gray-200"><span class="font-bold text-xl">“</span> {{ catBio }} <span class="font-bold text-xl">”</span></h2>
        </div>
        <ion-icon @click="$emit('like')" name="arrow-redo" class="arrow-anim-right text-4xl text-white"></ion-icon>
      </div>
    </div>
</template>

<script>

export default {

  name: 'catCard',

  props: {
    catName: {
      type: String,
      default: null
    },
    catDistance: {
      type: String,
      default: null
    },
    catGender: {
      type: String,
      default: null
    },
    catColor: {
      type: String,
      default: null
    },
    catBio: {
      type: String,
      default: null
    },
    id: {
      type: Number,
      default: 0
    }
  },

  data () {
    return {

    }
  }

}

</script>

<style lang="css" scoped>

/* Workaround to avoid having a scroll area on mobile browsers */
.h-screen-for-real {
  height: calc(100vh - 120px);
}

/* Covers the entire container's background */
.img-container {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

/* For when the user */
.img-container.set-origin {
  transition: transform .3s ease;
}

/* Needed for lisibility */
.gradient {
  background: linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(27,27,27,0.4247899843531162) 20%, rgba(27,27,27,0.6824930655856092) 50%, rgba(27,27,27,1) 100%);
}

/* To add some motion to the UI */
.arrow-anim-left {
  animation: pulse 1s infinite alternate ease-in-out;
}

@keyframes pulse {
  0% {
    transform: scale(.8) rotate(12deg);
  }

  100% {
    transform: scale(1.2) rotate(12deg);
  }
}

.arrow-anim-right {
  transform: scale(.8) rotate(-12deg);
  animation: pulse2 1s 1s infinite alternate ease-in-out;
}

@keyframes pulse2 {
  0% {
    transform: scale(.8) rotate(-12deg);
  }

  100% {
    transform: scale(1.2) rotate(-12deg);
  }
}

</style>
