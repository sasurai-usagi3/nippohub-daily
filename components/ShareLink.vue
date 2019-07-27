<template>
  <div>
    <div class="p-share-link" v-if="accessKey != null">
      <span>共有URL:&nbsp;</span>
      <input type="text" readonly class="p-share-link__url p-oneline-input" :value="`https://nippohub.com/daily_reports/public/${accessKey}`">
      <button type="button" class="p-share-link__disable-btn p-submit" @click="dismissAccessKey">プライベートにする</button>
    </div>
    <button type="button" class="p-submit" v-else @click="generateAccessKey">共有する</button>
  </div>
</template>

<script src="~/assets/javascripts/components/share_link.js"></script>
<style src="~/assets/stylesheets/share_link.css"></style>
<style src="~/assets/stylesheets/oneline_input.css"></style>
<style src="~/assets/stylesheets/submit.css"></style>
