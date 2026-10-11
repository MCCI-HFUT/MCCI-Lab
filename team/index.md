---
title: 成员
nav:
  order: 1
  tooltip: 实验室成员
---
# 成员

实验室成员按照教师、博士生和硕士生分类展示。博士生、硕士生从 2023 级开始统计，入学年份显示在个人信息中。

{% include section.html %}
## 教师

<div class="mcci-member-grid">
{% for person in site.members %}
{% if person.role == "principal-investigator" %}
<article class="mcci-member">
<img src="{{ person.image | default: 'images/avatar-default.svg' | relative_url }}" class="mcci-member-avatar" alt="默认成员头像" loading="lazy">
<h3><a href="{{ person.links.home-page | default: person.url }}">{{ person.display_name | default: person.name }}</a></h3>
<p class="mcci-member-subtitle">{{ person.name }}</p>
<p class="mcci-member-meta">教授 · 合肥工业大学</p>
<p class="mcci-member-detail">信息检索与推荐 · 社交媒体分析 · 多媒体系统</p>
<p class="mcci-member-contact"><a href="mailto:jason.zy.cheng@gmail.com">邮箱 ↗</a></p>
</article>
{% endif %}
{% endfor %}
</div>

{% include section.html %}
## 博士生

<div class="mcci-member-grid">
{% assign members_sorted = site.members | sort: "cohort" %}
{% for person in members_sorted %}
{% if person.role == "phd" and person.cohort >= 2023 %}
<article class="mcci-member">
<img src="{{ person.image | default: 'images/avatar-default.svg' | relative_url }}" class="mcci-member-avatar" alt="默认成员头像" loading="lazy">
<h3>{{ person.display_name | default: person.name }}</h3>
<p class="mcci-member-meta">{{ person.cohort }} 级博士研究生</p>
{% if person.research %}<p class="mcci-member-detail">{{ person.research }}</p>{% endif %}
{% if person.email %}<p class="mcci-member-contact"><a href="mailto:{{ person.email }}">邮箱 ↗</a></p>{% endif %}
</article>
{% endif %}
{% endfor %}
</div>

{% include section.html %}
## 硕士生

<div class="mcci-member-grid">
{% assign count_masters = 0 %}
{% for person in members_sorted %}
{% if person.role == "masters" and person.cohort >= 2023 %}
{% assign count_masters = count_masters | plus: 1 %}
<article class="mcci-member">
<img src="{{ person.image | default: 'images/avatar-default.svg' | relative_url }}" class="mcci-member-avatar" alt="默认成员头像" loading="lazy">
<h3>{{ person.display_name | default: person.name }}</h3>
<p class="mcci-member-meta">{{ person.cohort }} 级硕士研究生</p>
{% if person.research %}<p class="mcci-member-detail">{{ person.research }}</p>{% endif %}
{% if person.email %}<p class="mcci-member-contact"><a href="mailto:{{ person.email }}">邮箱 ↗</a></p>{% endif %}
</article>
{% endif %}
{% endfor %}
{% if count_masters == 0 %}<p class="mcci-member-placeholder">硕士生名单正在整理中，待确认后更新。</p>{% endif %}
</div>
