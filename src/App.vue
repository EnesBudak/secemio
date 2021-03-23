<template>
   <Announcement />
  <Header msg="Hello Vue 3 + Vite" />
  <router-view/>
  <Footer/>
</template>

<script setup>
import Header from './components/Header.vue'
import Announcement from './components/smallAnnouncement.vue'
import Footer from './components/Footer.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>

</style>