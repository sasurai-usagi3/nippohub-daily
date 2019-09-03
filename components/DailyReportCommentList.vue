<template>
  <ul class="p-daily-report-comment-list">
    <li class="p-daily-report-comment-list__item" v-for="dailyReportComment in dailyReportComments">
      <div class="p-daily-report-comment-list__item__date">{{ dateToString(dailyReportComment.postAt) }}</div>
      <div class="p-daily-report-comment-list__item__content" v-html="parseMD(dailyReportComment.content)"></div>
    </li>
  </ul>
</template>

<script src="~/assets/javascripts/components/daily_report_comment_list.js"></script>
<style src="~/assets/stylesheets/daily_report_comment_list.css"></style>
