---
title: 学术论文
nav:
  order: 2
  tooltip: 研究成果
---
# 学术论文

<div class="mcci-papers">
{% assign publication_years = "2026,2025,2024,2023" | split: "," %}
{% for year in publication_years %}
  <h2 class="mcci-bib-year">{{ year }}</h2>
  <ol class="mcci-bib-list">
  {% assign year_pubs = site.data.publications | where: "year", year %}
  {% for paper in year_pubs %}
    <li class="mcci-bib-item">
      <div class="mcci-bib-side"><span class="mcci-bib-venue">{{ paper.venue }}</span></div>
      <div class="mcci-bib-main">
        <div class="mcci-bib-title">{{ paper.title }}</div>
        <div class="mcci-bib-authors">{{ paper.authors }}</div>
        <div class="mcci-bib-periodical">{% unless paper.is_journal %}In {% endunless %}{{ paper.venue }}, {{ paper.year }}</div>
        <div class="mcci-bib-controls">
          {% if paper.bibtex %}<details class="mcci-bib-detail"><summary>Bib</summary><pre>{{ paper.bibtex | escape }}</pre></details>{% endif %}
          {% if paper.pdf %}<a href="{{ paper.pdf }}" target="_blank" rel="noopener noreferrer">PDF</a>{% endif %}
          {% if paper.code %}<a href="{{ paper.code }}" target="_blank" rel="noopener noreferrer">Code</a>{% endif %}
          {% if paper.doi %}<a href="{{ paper.doi }}" target="_blank" rel="noopener noreferrer">DOI</a>{% endif %}
        </div>
      </div>
    </li>
  {% endfor %}
  </ol>
{% endfor %}
</div>
