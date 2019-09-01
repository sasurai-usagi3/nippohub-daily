<template>
  <ul>
    <li v-for="dailyReportComment in dailyReportComments">
      <div>{{ dateToString(dailyReportComment.postAt) }}</div>
      <p v-html="parseMD(dailyReportComment.content)"></p>
    </li>
  </ul>
</template>

<script src="~/assets/javascripts/components/daily_report_comment_list.js">
