---
title: Home
lang: en
section: home
description: Multimodal Computing and Cognitive Intelligence Lab at Hefei University of Technology.
---

<div class="mcci-intro">
<h1 class="mcci-intro-title"><span class="mcci-title-main">MCCI</span> <span class="mcci-title-accent">Lab</span></h1>
<p class="mcci-intro-en">Multimodal Computing and Cognitive Intelligence Lab</p>
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
