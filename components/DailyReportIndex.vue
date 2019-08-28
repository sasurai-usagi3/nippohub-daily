<template>
  <div>
    <main-header :currentUser="currentUser"></main-header>
    <div class="l-container" v-if="currentUser != null">
      <form class="u-text-align--right" action="/">
        <span>表示範囲</span>
        <input type="hidden" name="no_link" value="true">
        <input type="date" name="start_at" class="p-oneline-input" :value="firstDate">&nbsp;~&nbsp;<input type="date" name="end_at" class="p-oneline-input" :value="endDate">
        <button type="submit" class="p-submit">検索</button>
      </form>
      <div class="u-mt--3rem">
        <daily-report-form :currentUser="currentUser"></daily-report-form>
      </div>
      <div>
        <h2 class="p-sub-title">{{ firstDate }} ~ {{ endDate }} の日報</h2>
        <daily-report-list :currentUser="currentUser" :start-date="firstDate" :end-date="endDate"></daily-report-list>
        <daily-report-list-link :basis-date="firstDate || new Date()" v-if="$route.query.no_link == null"></daily-report-list-link>
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script src="~/assets/javascripts/components/daily_report_index.js"></script>
<style src="~/assets/stylesheets/sub_title.css"></style>
<style src="~/assets/stylesheets/utility.css"></style>
