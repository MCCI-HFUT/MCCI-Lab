---
title: 成员
nav:
  order: 1
  tooltip: 实验室成员
---
# 实验室成员

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
  <p class="mcci-member-detail">{{ person.research | default: "研究方向待补充" }}</p>
  <p class="mcci-member-contact">{{ person.email | default: "邮箱待补充" }}</p>
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
  <p class="mcci-member-detail">{{ person.research | default: "研究方向待补充" }}</p>
  <p class="mcci-member-contact">{{ person.email | default: "邮箱待补充" }}</p>
</article>
{% endif %}
{% endfor %}
</div>
{% endfor %}

{% include section.html %}
## 本科生

<div class="mcci-member-grid">
{% assign undergraduates = site.members | where: "role", "undergraduate" | sort: "member_order" %}
{% for person in undergraduates %}
<article class="mcci-member">
  <img src="{{ person.image | default: 'images/avatar-default.svg' | relative_url }}" class="mcci-member-avatar" alt="{{ person.display_name | default: person.name }}的默认头像" loading="lazy">
  <h3>{{ person.display_name | default: person.name }}</h3>
  <p class="mcci-member-detail">{{ person.research | default: "研究方向待补充" }}</p>
  <p class="mcci-member-contact">{{ person.email | default: "邮箱待补充" }}</p>
</article>
{% endfor %}
</div>
