---
title: 学术论文
section: publications
nav:
  order: 2
  tooltip: 研究成果
---
# 学术论文

<div class="mcci-papers-simple">
{% assign publication_years = "2026,2025,2024,2023" | split: "," %}
{% for year in publication_years %}
  <h2 class="mcci-paper-year">{{ year }}</h2>
  <div class="mcci-paper-year-list">
    {% assign year_pubs = site.data.publications | where: "year", year %}
    {% for paper in year_pubs %}
    <article class="mcci-paper-entry">
      <div class="mcci-paper-venue"><span>{{ paper.venue }}</span></div>
      <div class="mcci-paper-info">
        <div class="mcci-paper-title">{{ paper.title }}</div>
        <div class="mcci-paper-authors">{{ paper.authors }}</div>
        <div class="mcci-paper-source">{% if paper.status == "accepted" %}ACM {{ paper.venue }} · Accepted{% else %}{% unless paper.is_journal %}In {% endunless %}{{ paper.venue }}, {{ paper.year }}{% endif %}</div>
      </div>
    </article>
    {% endfor %}
  </div>
{% endfor %}
</div>
