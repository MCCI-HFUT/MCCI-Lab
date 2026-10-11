---
title: 新闻资讯
nav:
  order: 5
  tooltip: 论文与学术动态
---

# 新闻资讯

这里汇总与 MCCI Lab 研究方向相关的部分公开学术成果。信息依据[程志勇教授的学术主页](https://sites.google.com/view/zycheng)整理，目前仅标注已核实的年份，不人为补充具体发布日期。

{% include section.html %}

<div class="mcci-news-list">
{% for item in site.data.news %}
  <div class="mcci-news-row"><span class="mcci-news-date">{{ item.year }}</span><span class="mcci-news-pill">{{ item.venue }}</span><div><a href="{{ item.link | relative_url }}">{{ item.title }}</a></div></div>
{% endfor %}
</div>

{% include section.html %}

后续将补充经过确认的论文录用、学术报告、交流活动、科研项目和团队荣誉等动态。

[查看代表论文 →]({{ '/publications/' | relative_url }})
