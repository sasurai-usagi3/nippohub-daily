import AccessKeyRepository from '~/assets/javascripts/repositories/access_key_repository';
import DailyReportRepository from '~/assets/javascripts/repositories/daily_report_repository';

export default {
  props: ['currentUserId', 'dailyReportId', 'initAccessKey'],
  data: function() {
    return {accessKey: null}
  },
  methods: {
    generateAccessKey: function() {
      const accessKeyRepository = new AccessKeyRepository();
      const dailyReportRepository = new DailyReportRepository();

      if(this.currentUserId == null || this.accessKey != null) {
        return; // TODO: ユーザがいない時の処理
      }

      // TODO: トランザクション張る
      accessKeyRepository.create(this.currentUserId, this.dailyReportId).then(accessKey => {
        this.accessKey = accessKey;

        return dailyReportRepository.updateAccessKey(this.currentUserId, this.dailyReportId, accessKey);
      }).catch(() => {
        // TODO: 更新失敗時の処理
        console.fatal('更新に失敗しました');
      });
    },
    dismissAccessKey: function() {
      const accessKeyRepository = new AccessKeyRepository();
      const dailyReportRepository = new DailyReportRepository();

      if(this.currentUserId == null || this.accessKey == null) {
        return; // TODO: ユーザがいない時の処理
      }

      // TODO: トランザクション張る
      dailyReportRepository.updateAccessKey(this.currentUserId, this.dailyReportId, null).then(() => {
        const accessKey = this.accessKey;
        this.accessKey = null;

        return accessKeyRepository.delete(accessKey);
      }).catch(() => {
        // TODO: 更新失敗時の処理
        console.fatal('更新に失敗しました');
      });
    }
  },
  mounted: function() {
    this.accessKey = this.initAccessKey;
  }
}
