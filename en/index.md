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
<p class="mcci-intro-copy">MCCI Lab is based in the School of Computer Science and Information Engineering at Hefei University of Technology. Building on multimodal computing, we focus on personalized recommendation, language and emotion understanding, and trustworthy intelligence. We explore the theories and methods of personalized AI agents, social cognition, and the safety and trustworthiness of intelligent systems.</p>
</div>
<div class="mcci-recruit-note"><strong>Research opportunities:</strong> We welcome students interested in information retrieval, recommender systems, multimodal intelligence, personalized agents, and social simulation. For application details, please consult official university and faculty announcements. <a href="{{ '/en/join/' | relative_url }}">Join Us →</a></div>

{% include section.html %}
<h2 class="mcci-feature-heading">Research Areas</h2>
<div class="mcci-area-grid">
<article class="mcci-area-card"><div class="mcci-area-graphic"><svg class="mcci-area-icon" viewBox="0 0 48 48" aria-hidden="true"><circle cx="21" cy="20" r="12"/><path d="m30 29 10 10M15 20h12M21 14v12"/></svg></div><h3>Information Retrieval & Recommendation</h3><p>User modeling, personalized and multimodal recommendation, and fairness.</p></article>
<article class="mcci-area-card"><div class="mcci-area-graphic"><svg class="mcci-area-icon" viewBox="0 0 48 48" aria-hidden="true"><rect x="5" y="9" width="25" height="24" rx="5"/><rect x="18" y="15" width="25" height="24" rx="5"/><circle cx="17" cy="20" r="3"/><path d="m23 30 7-8 9 11"/></svg></div><h3>Multimodal & Language Intelligence</h3><p>Multimodal understanding, language and emotion computing, and representation learning.</p></article>
<article class="mcci-area-card"><div class="mcci-area-graphic"><svg class="mcci-area-icon" viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="14" r="7"/><path d="M11 39c0-8 5-14 13-14s13 6 13 14M11 22a6 6 0 1 1 0-12M6 38c-2-6 0-11 6-13M37 22a6 6 0 1 0 0-12M42 38c2-6 0-11-6-13"/></svg></div><h3>AI Agents & Social Computing</h3><p>Personalized agents, social cognition, multi-agent interactions, and simulation.</p></article>
<article class="mcci-area-card"><div class="mcci-area-graphic"><svg class="mcci-area-icon" viewBox="0 0 48 48" aria-hidden="true"><path d="m24 5 16 6v12c0 11-7 18-16 21C15 41 8 34 8 23V11Z"/><path d="m16 24 6 6 11-13"/></svg></div><h3>Trustworthy Intelligence</h3><p>Safety, robustness, fairness, trustworthy reasoning, and human–AI interaction.</p></article>
</div>

{% include section.html %}
<h2 class="mcci-feature-heading">Latest News</h2>
<div class="mcci-feature-news" aria-label="Latest News">
{% for item in site.data.news_en %}
  <article class="mcci-feature-news-item">
    <div class="mcci-feature-news-meta">
      <time datetime="{{ item.date | default: item.year }}">{{ item.date | default: item.year }}</time>
      <span class="mcci-feature-news-tag">{% if forloop.first %}Lab{% else %}Research{% endif %}</span>
    </div>
    <div class="mcci-feature-news-main">
      <h3>{{ item.title }}</h3>
      {% if item.summary %}<p>{{ item.summary }}</p>{% endif %}
    </div>
    <div class="mcci-feature-news-action">{% unless forloop.first %}<a href="{{ '/en/publications/' | relative_url }}" aria-label="View publications →">View publications →</a>{% endunless %}</div>
  </article>
{% endfor %}
</div>

{% include section.html %}
<div class="mcci-feature-team">
  <div class="mcci-feature-team-content">
    <h2 class="mcci-feature-team-title">Our Team</h2>
    <p>Our faculty and students explore research questions together across recommendation, multimodal computing, agents, and trustworthy AI.</p>
    <a href="{{ '/en/team/' | relative_url }}" class="mcci-feature-team-link">Meet Our People →</a>
  </div>
  <img src="{{ '/images/mcci-team-illustration.svg' | relative_url }}" class="mcci-feature-team-art" alt="Illustration of a collaborative research group" loading="lazy">
</div>
