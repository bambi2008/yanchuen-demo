# 原网站到访与询盘后台审计

审计日期：2026-10-07。范围仅包括公开页面、公开技术线索与 Wix 官方功能文档；未登录甲方 Wix 账号，因此不能确认私有数据量、权限、通知和历史保留情况。

## 结论

原站 `https://www.yanchuen.com/` 使用 Wix 托管资源，首页英文及中文版本均包含询盘表单。Wix 官方说明，网站发布后会自动启用 Wix Analytics；Wix Forms 可在 `Forms & Submissions` 查看提交表，并在 Analytics 中查看表单提交趋势、来源、设备、地区和潜在线索。因此原站在平台层面具备“到访统计 + 询盘记录”后台。

公开前端不能证明：甲方是否仍有管理员权限、历史数据是否完整、表单通知是否送达、Cookie 同意设置是否影响统计、是否另接 Google Analytics / CRM。

## 上线迁移前让甲方完成

1. 登录 Wix，导出 Analytics 报表、Forms & Submissions、Contacts / Leads。
2. 截图或记录现有自动通知、收件人、垃圾邮件过滤和数据保留设置。
3. 确认旧站是否连接 Google Analytics、Google Tag Manager、Meta Pixel 或 CRM。
4. 确认哪些历史询盘允许迁移，以及保存期限和访问人员。

## 新站后台边界

当前 `/admin` 是清楚标注的界面 Demo，使用示例数字，不采集真实访客。正式启用需要数据库绑定、管理员鉴权、统计事件、Cookie/同意管理、隐私说明、数据保留与导出机制。建议正式事件包括 `page_view`、`contact_click`、`whatsapp_click`、`rfq_start` 和 `generate_lead`，且不得把电邮、电话、需求全文或附件名写入分析事件。

## 参考

- 原站：https://www.yanchuen.com/
- Wix Analytics：https://www.wix.com/manage/analytics
- Wix Forms 管理：https://support.wix.com/en/article/wix-forms-managing-your-forms-from-the-dashboard
- Wix 表单提交报表：https://support.wix.com/en/article/wix-analytics-about-your-form-submission-reports
- Wix 行为概览：https://support.wix.com/en/article/wix-analytics-understanding-the-behavior-overview
