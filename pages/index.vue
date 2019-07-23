<template>
  <div>
    <main-header :currentUserId="currentUserId"></main-header>
    <div class="l-container" v-if="currentUserId != null">
      <daily-report-form :currentUserId="currentUserId"></daily-report-form>
      <div>
        <h2 class="p-sub-title">{{ firstDate }} ~ {{ endDate }} の日報</h2>
        <daily-report-list :currentUserId="currentUserId" :start-at="$route.query.start_at" :end-at="$route.query.end_at"></daily-report-list>
        <div class="u-mt--2rem" style="display: flex;justify-content: space-between">
          <nuxt-link :to="{path: '/', query: {start_at: firstDateOfPrevMonth, end_at: endDateOfPrevMonth}}">&lt; 先月</nuxt-link>
          <nuxt-link :to="{path: '/', query: {start_at: firstDateOfNextMonth, end_at: endDateOfNextMonth}}">次月 &gt;</nuxt-link>
        </div>
      </div>
      <!--<div class="u-text-align-right u-mt-075">
        <button type="button" class="p-btn" @click="deleteAll">全削除する</button>
      </div>-->
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script src="~/assets/javascripts/pages/index.js"></script>
<style src="~/assets/stylesheets/sub_title.css"></style>
<style src="~/assets/stylesheets/utility.css"></style>
