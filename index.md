---
title: 主页
nav:
  order: 0
  tooltip: 实验室主页
---
<div class="mcci-intro">
<h1 class="mcci-intro-title">MCCI Lab</h1>
<p class="mcci-intro-en">多模态计算与认知智能实验室 · Multimodal Computing and Cognitive Intelligence Lab</p>
<p class="mcci-intro-copy">MCCI Lab 依托合肥工业大学计算机与信息学院，以多模态计算为基础，聚焦个性化推荐、语言情感理解与可信智能，探索个性化智能体、社会认知及其安全与可信机制的理论和方法。</p>
</div>
<div class="mcci-recruit-note"><strong>招生与交流：</strong>欢迎对信息检索、推荐系统、多模态智能、个性化智能体与社会模拟感兴趣的同学关注实验室。具体招生安排以学校及导师通知为准。 <a href="{{ '/join/' | relative_url }}">加入我们 →</a></div>

{% include section.html %}

## 新闻资讯
<div class="mcci-news-list">
{% for item in site.data.news %}
<div class="mcci-news-row"><time class="mcci-news-date" datetime="{{ item.date | default: item.year }}">{{ item.date | default: item.year }}</time><div class="mcci-news-entry">{{ item.title }}</div></div>
{% endfor %}
</div>
