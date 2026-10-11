---
title: Home
lang: en
section: home
description: Multimodal Computing and Cognitive Intelligence Lab at Hefei University of Technology.
---

<div class="mcci-intro">
<div class="mcci-home-lockup">
  <img class="mcci-home-logo" src="{{ '/images/mcci-logo-full-clean.svg' | relative_url }}" alt="MCCI Lab — Multimodal Computing and Cognitive Intelligence" fetchpriority="high">
  <h1 class="mcci-home-subtitle" lang="zh-CN">多模态计算与认知智能实验室</h1>
</div>
<p class="mcci-intro-copy">MCCI Lab is based in the School of Computer Science and Information Engineering at Hefei University of Technology. Building on multimodal computing, we focus on personalized recommendation, language and emotion understanding, and trustworthy intelligence. We explore the theories and methods of personalized AI agents, social cognition, and the safety and trustworthiness of intelligent systems.</p>
</div>
<div class="mcci-recruit-note"><strong>Research opportunities:</strong> We welcome students interested in information retrieval, recommender systems, multimodal intelligence, personalized agents, and social simulation. For application details, please consult official university and faculty announcements. <a href="{{ '/en/join/' | relative_url }}">Join Us →</a></div>

{% include section.html %}

<h2 class="mcci-news-heading">News</h2>
<div class="mcci-news-list">
{% for item in site.data.news_en %}
<div class="mcci-news-row"><time class="mcci-news-date" datetime="{{ item.date | default: item.year }}">{{ item.date | default: item.year }}</time><div class="mcci-news-entry">{{ item.title }}</div></div>
{% endfor %}
</div>
