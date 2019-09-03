<template>
  <form class="p-daily-report-form" @submit.prevent="post">
    <div class="u-mt-075" style="line-height: 1">
      <textarea class="p-daily-report-form__content-form" name="content" v-model="content" placeholder="コメント"></textarea>
    </div>
    <div class="u-text-align-right u-mt-075">
      <button class="p-submit" type="submit">送信</button>
    </div>
  </form>
</template>

<script src="~/assets/javascripts/components/daily_report_comment_form.js"></script>
<style src="~/assets/stylesheets/oneline_input.css"></style>
<style src="~/assets/stylesheets/submit.css"></style>
<style src="~/assets/stylesheets/daily_report_form.css"></style>
<style src="~/assets/stylesheets/utility.css"></style>
