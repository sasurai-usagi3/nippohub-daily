<template>
  <div>
    <main-header :currentUser="currentUser"></main-header>
    <div class="l-container">
      <DailyReportDetail :daily-report-id="$route.params.id" :current-user="currentUser" v-if="currentUser != null"></DailyReportDetail>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script src="~/assets/javascripts/pages/daily_report.js">
