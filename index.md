---
title: 主页
section: home
nav:
  order: 0
  tooltip: 实验室主页
---
<div class="mcci-intro">
<div class="mcci-home-lockup">
  <img class="mcci-home-logo" src="{{ '/images/mcci-logo-full-clean.svg' | relative_url }}" alt="MCCI Lab — Multimodal Computing and Cognitive Intelligence" fetchpriority="high">
  <h1 class="mcci-home-subtitle">多模态计算与认知智能实验室</h1>
</div>
<p class="mcci-intro-copy">MCCI Lab 依托合肥工业大学计算机与信息学院，以多模态计算为基础，聚焦个性化推荐、语言情感理解与可信智能，探索个性化智能体、社会认知及其安全与可信机制的理论和方法。MCCI Lab 同时也隶属于多媒体计算实验室。</p>
</div>
<div class="mcci-recruit-note">
  <div><strong>研究生招生：</strong>MCCI Lab 长期招募硕士、博士研究生、本科实习生及博士后，欢迎对信息检索、推荐系统、多模态智能、个性化智能体与社会模拟感兴趣的同学及研究人员加入。详情请参考 <a href="{{ '/join/' | relative_url }}">加入我们 →</a></div>
  <div><strong>教职招聘：</strong>MCCI Lab 长期招募教授、副教授、讲师，期待有共同科研志向的科研人员加入我们。具体招聘岗位及申请要求以学校官方公告为准。</div>
</div>

{% include section.html %}

<h2 class="mcci-news-heading">新闻资讯</h2>
<div class="mcci-news-list">
{% for item in site.data.news %}
<div class="mcci-news-row"><time class="mcci-news-date" datetime="{{ item.date | default: item.year }}">{{ item.date | default: item.year }}</time><div class="mcci-news-entry">{{ item.title }}</div></div>
{% endfor %}
</div>
