<template>
  <div>
    <div v-if="didFind">
      <share-link :current-user="currentUser" :daily-report-id="dailyReportId" :init-access-key="accessKey"></share-link>
      <article>
        <h1>{{ title }}</h1>
        <main v-html="content"></main>
      </article>
      <DailyReportCommentForm :current-user="currentUser" :daily-report-id="dailyReportId" v-on:submitted="updateDailyReportCommentVersion"></DailyReportCommentForm>
      <DailyReportCommentList :daily-report-id="dailyReportId" :version="dailyReportCommentVersion"></DailyReportCommentList>
    </div>
  </div>
</template>

<script src="~/assets/javascripts/components/daily_report_detail.js">
