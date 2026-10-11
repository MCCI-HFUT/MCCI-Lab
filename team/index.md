---
title: 团队成员
nav:
  order: 4
  tooltip: 教师、博士生与硕士生
---
# 团队成员

实验室按**博士生、硕士生**和**入学年级**展示成员。两类研究生均从 **2023 级**开始列出；暂未收集的成员资料不会虚构。

{% include section.html %}
## 指导教师
<div class="mcci-faculty"><div class="mcci-faculty-monogram">ZC</div><div><h3>程志勇（Zhiyong Cheng）</h3><p><strong>教授</strong> · 合肥工业大学计算机与信息学院</p><p><strong>研究方向：</strong>信息检索与推荐、社交媒体分析、多媒体系统</p><p><strong>邮箱：</strong><a href="mailto:jason.zy.cheng@gmail.com">jason.zy.cheng@gmail.com</a></p><p><a href="https://sites.google.com/view/zycheng">教师个人主页 ↗</a></p></div></div>
{% include section.html %}
{% assign year_now = site.time | date: "%Y" | plus: 0 %}
{% assign all_students = site.members | sort: "name" %}
## 博士研究生
{% for year in (2023..year_now) %}
<h3>{{ year }} 级</h3><div class="mcci-people-grid">
{% assign found = false %}
{% for member in all_students %}
{% if member.role == "phd" and member.cohort == year %}
{% assign found = true %}
<article class="mcci-person-card"><img src="{{ member.image | default: 'images/fallback.svg' | relative_url }}" alt="{{ member.name }}" class="mcci-person-photo" loading="lazy"><div class="mcci-person-details"><h4>{{ member.display_name | default: member.name }}</h4><div class="mcci-person-english">{{ member.name }}</div><p><strong>研究方向：</strong>{{ member.research | default: "待补充" }}</p><p><strong>邮箱：</strong>{% if member.email %}<a href="mailto:{{ member.email }}">{{ member.email }}</a>{% else %}待补充{% endif %}</p></div></article>
{% endif %}
{% endfor %}
{% unless found %}<p class="mcci-empty-cohort">该年级成员资料待补充。</p>{% endunless %}
</div>
{% endfor %}
{% include section.html %}
## 硕士研究生
{% for year in (2023..year_now) %}
<h3>{{ year }} 级</h3><div class="mcci-people-grid">
{% assign found = false %}
{% for member in all_students %}
{% if member.role == "masters" and member.cohort == year %}
{% assign found = true %}
<article class="mcci-person-card"><img src="{{ member.image | default: 'images/fallback.svg' | relative_url }}" alt="{{ member.name }}" class="mcci-person-photo" loading="lazy"><div class="mcci-person-details"><h4>{{ member.display_name | default: member.name }}</h4><div class="mcci-person-english">{{ member.name }}</div><p><strong>研究方向：</strong>{{ member.research | default: "待补充" }}</p><p><strong>邮箱：</strong>{% if member.email %}<a href="mailto:{{ member.email }}">{{ member.email }}</a>{% else %}待补充{% endif %}</p></div></article>
{% endif %}
{% endfor %}
{% unless found %}<p class="mcci-empty-cohort">该年级成员资料待补充。</p>{% endunless %}
</div>
{% endfor %}
