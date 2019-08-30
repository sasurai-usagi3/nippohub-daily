<template>
  <div>
    <main-header :currentUser="currentUser"></main-header>
    <div class="l-container" v-if="currentUser != null">
      <daily-report-search-form :start-date="firstDate" :end-date="endDate"></daily-report-search-form>
      <div class="u-mt--3rem">
        <daily-report-form :currentUser="currentUser" v-on:submitted="updateDailyReportListVersion"></daily-report-form>
      </div>
      <div>
        <h2 class="p-sub-title">{{ firstDateStr }} ~ {{ endDateStr }} の日報</h2>
        <daily-report-list :currentUser="currentUser" :start-date="firstDate" :end-date="endDate" :version="dailyReportListVersion"></daily-report-list>
        <daily-report-list-link :basis-date="firstDate" v-if="$route.query.no_link == null"></daily-report-list-link>
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script src="~/assets/javascripts/pages/index.js"></script>
<style src="~/assets/stylesheets/sub_title.css"></style>
<style src="~/assets/stylesheets/utility.css"></style>
