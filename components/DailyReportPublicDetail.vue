<template>
  <div>
    <template v-if="didFind">
      <article>
        <h1>{{ title }}</h1>
        <main v-html="content"></main>
      </article>
      <DailyReportCommentForm :current-user="currentUser" :daily-report-id="dailyReportId" v-on:submitted="updateDailyReportCommentVersion"></DailyReportCommentForm>
      <DailyReportCommentList :daily-report-id="dailyReportId" :version="dailyReportCommentVersion"></DailyReportCommentList>
    </template>
    <div v-else>
      日報が見つかりませんでした
    </div>
  </div>
</template>

<script src="~/assets/javascripts/components/daily_report_public_detail.js">
