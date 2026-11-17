---
title: People
lang: en
section: team
description: MCCI Lab faculty, PhD, Master's, undergraduate students, and alumni.
---

# People
{% include section.html %}
## Faculty
<div class="mcci-member-grid mcci-faculty-grid">
{% assign instructors = site.members | where: "role", "principal-investigator" %}
{% assign additional_instructors = site.members | where: "role", "faculty" %}
{% assign instructors = instructors | concat: additional_instructors %}
{% for person in instructors %}
<article class="mcci-member">
  <img src="{{ person.image | default: 'images/avatar-default.svg' | relative_url }}" class="mcci-member-avatar" alt="Default avatar" loading="lazy">
  <h3>{{ person.name }}</h3>
  <p class="mcci-member-meta">{{ person.card_title_en | default: "Professor, PhD Supervisor" }}</p>
  <p class="mcci-member-detail">{{ person.research_en | default: "Information Retrieval and Recommendation, Social Media Analysis, Multimedia Systems" }}</p>
  {% include member-outlinks.html person=person lang='en' %}
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
  {% include member-outlinks.html person=person lang='en' %}
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
  {% include member-outlinks.html person=person lang='en' %}
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
  {% include member-outlinks.html person=person lang='en' %}
</article>
{% endfor %}
</div>

{% include section.html %}
## Alumni

<div class="mcci-member-grid mcci-alumni-grid">
{% for alumnus in site.data.alumni %}
<article class="mcci-member">
  <h3>{{ alumnus.name_en }}</h3>
  <p class="mcci-member-meta">{{ alumnus.role_en }}</p>
  {% if alumnus.destination_en %}
  <p class="mcci-member-detail mcci-alumni-destination">{{ alumnus.destination_en }}</p>
  {% endif %}
  {% include member-outlinks.html person=alumnus lang='en' %}
</article>
{% endfor %}
</div>
