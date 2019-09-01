<template>
  <div>
    <template v-if="didFind">
      <article>
        <h1>{{ title }}</h1>
        <main v-html="content"></main>
      </article>
      <DailyReportCommentList :daily-report-id="dailyReportId"></DailyReportCommentList>
    </template>
    <div v-else>
      日報が見つかりませんでした
    </div>
  </div>
</template>

<script src="~/assets/javascripts/components/daily_report_public_detail.js">
