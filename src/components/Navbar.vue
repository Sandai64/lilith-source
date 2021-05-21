<template>
    <div class="fixed bottom-0 w-full bg-white h-12 flex shadow-inner ring ring-red-600">
      <div class="relative my-auto align-middle justify-evenly w-full flex">

        <router-link to="home">
          <ion-icon :class="'text-3xl ' + this.homeProps" :name="this.homeIcon"></ion-icon>
        </router-link>

        <router-link to="matches">
          <ion-icon :class="'text-3xl ' + this.chatProps" :name="this.chatIcon"></ion-icon>
        </router-link>

        <router-link to="settings">
          <ion-icon :class="'text-3xl ' + this.settingsProps" :name="this.settingsIcon"></ion-icon>
        </router-link>
      </div>
    </div>
</template>

<script>
export default {

  name: 'navbar',

  props: {
    activeTab: {
      type: String,
      default: null
    }
  },

  data () {
    return {
      homeProps: 'text-black',
      homeIcon: 'infinite-outline',
      settingsProps: 'text-black',
      settingsIcon: 'settings-outline',
      chatProps: 'text-black',
      chatIcon: 'chatbubble-ellipses'
    }
  },

  created () {
    switch (this.activeTab) {
      case 'home':
        this.homeProps = 'text-red-600'
        this.homeIcon = 'infinite'
        this.settingsProps = 'text-black'
        this.settingsIcon = 'settings-outline'
        this.chatProps = 'text-black'
        this.chatIcon = 'chatbubble-ellipses-outline'
        break

      case 'settings':
        this.homeProps = 'text-black'
        this.homeIcon = 'infinite-outline'
        this.settingsProps = 'text-red-600'
        this.settingsIcon = 'settings'
        this.chatProps = 'text-black'
        this.chatIcon = 'chatbubble-ellipses-outline'
        break

      case 'chat':
        this.homeProps = 'text-black'
        this.homeIcon = 'infinite-outline'
        this.settingsProps = 'text-black'
        this.settingsIcon = 'settings-outline'
        this.chatProps = 'text-red-600'
        this.chatIcon = 'chatbubble-ellipses'
        break
    }
  }
}
</script>

<style lang="css" scoped>
</style>
