<template>
  <header class="p-header">
    <div class="p-header__container">
      <h1 class="p-page-title"><nuxt-link to="/">NippoHub</nuxt-link></h1>
      <nav>
        <ul class="p-auth-links">
          <li class="p-auth-links__item" v-if="currentUser != null" @click="signOut">Sign out</li>
          <template v-else>
            <li class="p-auth-links__item"><nuxt-link to="/sign_in">Sign in</nuxt-link></li>
            <li class="p-auth-links__item"><nuxt-link to="/sign_up">Sign up</nuxt-link></li>
          </template>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script src="~/assets/javascripts/components/main_header.js"></script>
<style src="~/assets/stylesheets/header.css"></style>
