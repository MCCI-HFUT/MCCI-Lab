---
title: 成员
nav:
  order: 1
  tooltip: 实验室成员
---
# 实验室成员

实验室成员按指导教师、博士研究生和硕士研究生分类展示，并按入学年份排列。成员照片暂统一使用默认头像；未提供的邮箱和研究方向将在确认后补充。

{% include section.html %}
## 指导教师

<div class="mcci-member-grid">
{% assign instructors = site.members | where: "role", "principal-investigator" %}
{% for person in instructors %}
<article class="mcci-member">
  <img src="{{ person.image | default: 'images/avatar-default.svg' | relative_url }}" class="mcci-member-avatar" alt="{{ person.display_name | default: person.name }}的默认头像" loading="lazy">
  <h3>{{ person.display_name | default: person.name }}</h3>
  <p class="mcci-member-meta">教授</p>
  <p class="mcci-member-detail">信息检索与推荐、社交媒体分析、多媒体系统</p>
  <p class="mcci-member-contact">jason.zy.cheng@gmail.com</p>
</article>
{% endfor %}
</div>

{% include section.html %}
## 博士研究生

{% assign phd_members = site.members | where: "role", "phd" | sort: "member_order" %}
{% assign current_year = site.time | date: "%Y" | plus: 0 %}
{% for year in (2023..current_year) %}
<h3 class="mcci-cohort-title">{{ year }} 级</h3>
<div class="mcci-member-grid">
{% for person in phd_members %}
{% if person.cohort == year %}
<article class="mcci-member">
  <img src="{{ person.image | default: 'images/avatar-default.svg' | relative_url }}" class="mcci-member-avatar" alt="{{ person.display_name | default: person.name }}的默认头像" loading="lazy">
  <h3>{{ person.display_name | default: person.name }}</h3>
  {% if person.name != person.display_name %}<p class="mcci-member-subtitle">{{ person.name }}</p>{% endif %}
  <p class="mcci-member-meta">{{ year }} 级博士生</p>
  <p class="mcci-member-detail"><strong>研究方向：</strong>{{ person.research | default: "待补充" }}</p>
  <p class="mcci-member-contact"><strong>邮箱：</strong>{% if person.email %}<a href="mailto:{{ person.email }}">{{ person.email }}</a>{% else %}待补充{% endif %}</p>
</article>
{% endif %}
{% endfor %}
</div>
{% endfor %}

{% include section.html %}
## 硕士研究生

{% assign master_members = site.members | where: "role", "masters" | sort: "member_order" %}
{% for year in (2024..current_year) %}
<h3 class="mcci-cohort-title">{{ year }} 级</h3>
<div class="mcci-member-grid">
{% for person in master_members %}
{% if person.cohort == year %}
<article class="mcci-member">
  <img src="{{ person.image | default: 'images/avatar-default.svg' | relative_url }}" class="mcci-member-avatar" alt="{{ person.display_name | default: person.name }}的默认头像" loading="lazy">
  <h3>{{ person.display_name | default: person.name }}</h3>
  <p class="mcci-member-meta">{{ year }} 级硕士生</p>
  <p class="mcci-member-detail"><strong>研究方向：</strong>{{ person.research | default: "待补充" }}</p>
  <p class="mcci-member-contact"><strong>邮箱：</strong>{% if person.email %}<a href="mailto:{{ person.email }}">{{ person.email }}</a>{% else %}待补充{% endif %}</p>
</article>
{% endif %}
{% endfor %}
</div>
{% endfor %}
