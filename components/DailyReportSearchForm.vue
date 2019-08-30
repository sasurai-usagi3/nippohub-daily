<template>
  <form class="u-text-align--right" action="/">
    <span>表示範囲</span>
    <input type="hidden" name="no_link" value="true">
    <input type="date" name="start_at" class="p-oneline-input" :value="startDateStr">&nbsp;~&nbsp;<input type="date" name="end_at" class="p-oneline-input" :value="endDateStr">
    <button type="submit" class="p-submit">検索</button>
  </form>
</template>

<script src="~/assets/javascripts/components/daily_report_search_form.js"></script>
<style src="~/assets/stylesheets/utility.css"></style>
