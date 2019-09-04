<!-- 一時的な機能なので雑に実装 -->

<template>
  <div>
    <textarea v-model="jsonComments"></textarea>
    <button @click="submit">送信</button>
  </div>
</template>

<script>
  import firebase from 'firebase';
  import UserRepository from '~/assets/javascripts/repositories/user_repository';
  import DailyReportRepository from '~/assets/javascripts/repositories/daily_report_repository';

  export default {
    data: function() {
      return {jsonComments: null};
    },
    methods: {
      submit: function() {
        new UserRepository().fetch().then(user => {
          const database = firebase.database().ref(`users/${user.id}/daily_reports/`);
          const dailyReports = {};

          return database.once('value').then(res => {
            const rawDailyReportList = res.val();

            for(let dailyReportId in rawDailyReportList) {
              const dailyReport = rawDailyReportList[dailyReportId];

              dailyReports[dailyReport.date] = dailyReportId;
            }

            return dailyReports;
          }).then(dailyReports => {
            const commentMetas = JSON.parse(this.jsonComments);

            for(let commentMeta of commentMetas) {
              const date = commentMeta.date;
              const dailyReportId = dailyReports[date];
              commentMeta.comments.forEach(comment => {
                return firebase.database().ref(`/daily_reports/${dailyReportId}/comments`).push({
                  user_id: user.id,
                  content: comment.content,
                  post_at: comment.created_at,
                  created_at: comment.created_at
                });
              });
            }

            alert('done');
          });
        });
      }
    }
  }
</script>
