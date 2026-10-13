---
title: 主页
section: home
nav:
  order: 0
  tooltip: 实验室主页
---
<div class="mcci-intro">
<div class="mcci-home-lockup">
  <img class="mcci-home-logo" src="{{ '/images/mcci-logo-full-clean.svg' | relative_url }}" alt="MCCI Lab — Multimodal Computing and Cognitive Intelligence" fetchpriority="high">
  <h1 class="mcci-home-subtitle">多模态计算与认知智能实验室</h1>
</div>
<p class="mcci-intro-copy">MCCI Lab 依托合肥工业大学计算机与信息学院，以多模态计算为基础，聚焦个性化推荐、语言情感理解与可信智能，探索个性化智能体、社会认知及其安全与可信机制的理论和方法。</p>
</div>
<div class="mcci-recruit-note"><strong>招生与交流：</strong>欢迎对信息检索、推荐系统、多模态智能、个性化智能体与社会模拟感兴趣的同学关注实验室。具体招生安排以学校及导师通知为准。 <a href="{{ '/join/' | relative_url }}">加入我们 →</a></div>

{% include section.html %}
<h2 class="mcci-feature-heading">研究方向</h2>
<div class="mcci-area-grid">
<article class="mcci-area-card"><div class="mcci-area-graphic"><svg class="mcci-area-icon" viewBox="0 0 48 48" aria-hidden="true"><circle cx="21" cy="20" r="12"/><path d="m30 29 10 10M15 20h12M21 14v12"/></svg></div><h3>信息检索与推荐</h3><p>用户建模、个性化推荐、多模态推荐与推荐公平性。</p></article>
<article class="mcci-area-card"><div class="mcci-area-graphic"><svg class="mcci-area-icon" viewBox="0 0 48 48" aria-hidden="true"><rect x="5" y="9" width="25" height="24" rx="5"/><rect x="18" y="15" width="25" height="24" rx="5"/><circle cx="17" cy="20" r="3"/><path d="m23 30 7-8 9 11"/></svg></div><h3>多模态与语言智能</h3><p>多源信息理解、语言与情感计算、跨模态表示学习。</p></article>
<article class="mcci-area-card"><div class="mcci-area-graphic"><svg class="mcci-area-icon" viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="14" r="7"/><path d="M11 39c0-8 5-14 13-14s13 6 13 14M11 22a6 6 0 1 1 0-12M6 38c-2-6 0-11 6-13M37 22a6 6 0 1 0 0-12M42 38c2-6 0-11-6-13"/></svg></div><h3>智能体与社会计算</h3><p>个性化智能体、社会认知、多智能体交互与社会模拟。</p></article>
<article class="mcci-area-card"><div class="mcci-area-graphic"><svg class="mcci-area-icon" viewBox="0 0 48 48" aria-hidden="true"><path d="m24 5 16 6v12c0 11-7 18-16 21C15 41 8 34 8 23V11Z"/><path d="m16 24 6 6 11-13"/></svg></div><h3>可信智能</h3><p>安全性、鲁棒性、公平性、可信推理与人机交互。</p></article>
</div>

{% include section.html %}
<h2 class="mcci-feature-heading">最新动态</h2>
<div class="mcci-feature-news" aria-label="最新动态">
{% for item in site.data.news %}
  <article class="mcci-feature-news-item">
    <div class="mcci-feature-news-meta">
      <time datetime="{{ item.date | default: item.year }}">{{ item.date | default: item.year }}</time>
      <span class="mcci-feature-news-tag">{% if forloop.first %}实验室{% else %}论文成果{% endif %}</span>
    </div>
    <div class="mcci-feature-news-main">
      <h3>{{ item.title }}</h3>
      {% if item.summary %}<p>{{ item.summary }}</p>{% endif %}
    </div>
    <div class="mcci-feature-news-action">{% unless forloop.first %}<a href="{{ '/publications/' | relative_url }}" aria-label="查看相关论文 →">查看相关论文 →</a>{% endunless %}</div>
  </article>
{% endfor %}
</div>

{% include section.html %}
<div class="mcci-feature-team">
  <div class="mcci-feature-team-content">
    <h2 class="mcci-feature-team-title">实验室团队</h2>
    <p>实验室师生围绕推荐系统、多模态计算、智能体和可信智能等方向开展研究与交流。</p>
    <a href="{{ '/team/' | relative_url }}" class="mcci-feature-team-link">认识团队成员 →</a>
  </div>
  <img src="{{ '/images/mcci-team-illustration.svg' | relative_url }}" class="mcci-feature-team-art" alt="科研团队合作交流插画" loading="lazy">
</div>
