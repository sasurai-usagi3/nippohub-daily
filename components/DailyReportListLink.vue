<template>
  <div class="u-mt--2rem" style="display: flex;justify-content: space-between">
    <nuxt-link :to="{path: '/', query: {start_at: firstDateOfPrevMonth, end_at: endDateOfPrevMonth}}">&lt; 先月</nuxt-link>
    <nuxt-link :to="{path: '/', query: {start_at: firstDateOfNextMonth, end_at: endDateOfNextMonth}}">次月 &gt;</nuxt-link>
  </div>
</template>

<script src="~/assets/javascripts/components/daily_report_list_link.js"></script>
<style src="~/assets/stylesheets/utility.css"></style>
