<template>
  <div>
    <main-header :currentUser="currentUser"></main-header>
    <div class="l-container" v-if="currentUser != null">
      <daily-report-form :currentUser="currentUser" :dailyReportId="$route.params.id" v-if="currentUser != null"></daily-report-form>
      <ButtonDeletingDailyReport :currentUser="currentUser" :dailyReportId="$route.params.id"></ButtonDeletingDailyReport>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script src="~/assets/javascripts/pages/daily_report_edit.js"></script>
