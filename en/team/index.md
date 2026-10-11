---
title: People
lang: en
section: team
description: MCCI Lab faculty, PhD, Master's, and undergraduate students.
---

# People
{% include section.html %}
## Faculty
<div class="mcci-member-grid">
{% assign instructors = site.members | where: "role", "principal-investigator" %}
{% for person in instructors %}
<article class="mcci-member">
  <img src="{{ person.image | default: 'images/avatar-default.svg' | relative_url }}" class="mcci-member-avatar" alt="Default avatar" loading="lazy">
  <h3>{{ person.name }}</h3>
  <p class="mcci-member-meta">Professor</p>
  <p class="mcci-member-detail">Information Retrieval and Recommendation, Social Media Analysis, Multimedia Systems</p>
  <p class="mcci-member-contact">jason.zy.cheng@gmail.com</p>
</article>
{% endfor %}
</div>
{% include section.html %}
## PhD Students
{% assign members_sorted = site.members | where: "role", "phd" | sort: "member_order" %}
{% assign current_year = site.time | date: "%Y" | plus: 0 %}
{% for year in (2023..current_year) %}
<h3 class="mcci-cohort-title">Class of {{ year }}</h3>
<div class="mcci-member-grid">
{% for person in members_sorted %}
{% if person.cohort == year %}
<article class="mcci-member">
  <img src="{{ person.image | default: 'images/avatar-default.svg' | relative_url }}" class="mcci-member-avatar" alt="Default avatar" loading="lazy">
  <h3>{{ site.data.member_names_en[person.display_name] | default: person.display_name | default: person.name }}</h3>
  <p class="mcci-member-detail">{% if person.research_en %}{{ person.research_en }}{% elsif person.research == "推荐系统、推荐公平性" %}Recommender Systems, Fairness in Recommendation{% else %}Research interests to be added{% endif %}</p>
  <p class="mcci-member-contact">{{ person.email | default: "Email to be added" }}</p>
</article>
{% endif %}
{% endfor %}
</div>
{% endfor %}

{% include section.html %}
## Master's Students
{% assign members_sorted = site.members | where: "role", "masters" | sort: "member_order" %}
{% assign current_year = site.time | date: "%Y" | plus: 0 %}
{% for year in (2024..current_year) %}
<h3 class="mcci-cohort-title">Class of {{ year }}</h3>
<div class="mcci-member-grid">
{% for person in members_sorted %}
{% if person.cohort == year %}
<article class="mcci-member">
  <img src="{{ person.image | default: 'images/avatar-default.svg' | relative_url }}" class="mcci-member-avatar" alt="Default avatar" loading="lazy">
  <h3>{{ site.data.member_names_en[person.display_name] | default: person.display_name | default: person.name }}</h3>
  <p class="mcci-member-detail">{% if person.research_en %}{{ person.research_en }}{% elsif person.research == "推荐系统、推荐公平性" %}Recommender Systems, Fairness in Recommendation{% else %}Research interests to be added{% endif %}</p>
  <p class="mcci-member-contact">{{ person.email | default: "Email to be added" }}</p>
</article>
{% endif %}
{% endfor %}
</div>
{% endfor %}

{% include section.html %}
## Undergraduate Students
<div class="mcci-member-grid">
{% assign undergraduates = site.members | where: "role", "undergraduate" | sort: "member_order" %}
{% for person in undergraduates %}
<article class="mcci-member">
  <img src="{{ person.image | default: 'images/avatar-default.svg' | relative_url }}" class="mcci-member-avatar" alt="Default avatar" loading="lazy">
  <h3>{{ site.data.member_names_en[person.display_name] | default: person.display_name | default: person.name }}</h3>
  <p class="mcci-member-detail">{% if person.research_en %}{{ person.research_en }}{% elsif person.research == "推荐系统、推荐公平性" %}Recommender Systems, Fairness in Recommendation{% else %}Research interests to be added{% endif %}</p>
  <p class="mcci-member-contact">{{ person.email | default: "Email to be added" }}</p>
</article>
{% endfor %}
</div>
