---
title: Home
lang: en
section: home
description: Multimodal Computing and Cognitive Intelligence Lab at Hefei University of Technology.
---

<div class="mcci-intro">
<div class="mcci-home-lockup">
  <img class="mcci-home-logo" src="{{ '/images/mcci-logo-full-clean.svg' | relative_url }}" alt="MCCI Lab — Multimodal Computing and Cognitive Intelligence" fetchpriority="high">
  <h1 class="mcci-home-subtitle" lang="en">Multimodal Computing and Cognitive Intelligence Lab</h1>
</div>
<p class="mcci-intro-copy">MCCI Lab is based in the School of Computer Science and Information Engineering at Hefei University of Technology. Building on multimodal computing, we focus on personalized recommendation, language and emotion understanding, and trustworthy intelligence. We explore the theories and methods of personalized AI agents, social cognition, and the safety and trustworthiness of intelligent systems. MCCI Lab is also affiliated with the Multimedia Computing Laboratory.</p>
</div>
<div class="mcci-recruit-note" style="text-align: left !important;">
  <div style="text-align: left !important;"><strong>Student recruitment:</strong> MCCI Lab welcomes applications on an ongoing basis from master’s and PhD students, undergraduate interns, and postdoctoral researchers interested in information retrieval, recommender systems, multimodal intelligence, personalized AI agents, and social simulation. <a href="{{ '/en/join/' | relative_url }}">Join Us →</a></div>
  <div style="text-align: left !important;"><strong>Faculty recruitment:</strong> MCCI Lab welcomes applications on an ongoing basis from professors, associate professors, and lecturers who share our research aspirations. Please contact <a href="mailto:jason.zy.cheng@gmail.com">jason.zy.cheng@gmail.com</a> directly.</div>
</div>

{% include section.html %}

<h2 class="mcci-news-heading">News</h2>
<div class="mcci-news-list">
{% for item in site.data.news_en %}
<div class="mcci-news-row" style="text-align: left !important;"><time class="mcci-news-date" datetime="{{ item.date | default: item.year }}">{{ item.date | default: item.year }}</time><div class="mcci-news-entry" style="text-align: left !important;">{{ item.title }}</div></div>
{% endfor %}
</div>
