---
title: 首页
nav:
  order: 0
  tooltip: 返回实验室首页
---
<div class="mcci-hero">
  <div class="mcci-eyebrow">HEFEI UNIVERSITY OF TECHNOLOGY · 合肥工业大学</div>
  <div class="mcci-brand"><img src="{{ '/images/logo.svg' | relative_url }}" alt="MCCI Lab 标识" class="mcci-brand-mark"><div><div class="mcci-brand-name">MCCI <span>LAB</span></div><div class="mcci-brand-full">多模态计算与认知智能实验室</div></div></div>
  <p class="mcci-hero-lead">面向多模态信息、个性化智能与社会认知，探索安全可信的智能计算方法。</p>
  <div class="mcci-hero-actions">
    <a class="mcci-action primary" href="{{ '/research/' | relative_url }}">研究方向 →</a>
    <a class="mcci-action secondary" href="{{ '/team/' | relative_url }}">团队成员 ↗</a>
  </div>
</div>

{% include section.html %}

## 关于我们

**多模态计算与认知智能实验室（Multimodal Computing and Cognitive Intelligence Lab，MCCI Lab）** 依托合肥工业大学，以**多模态计算**为基础，聚焦**个性化推荐、语言情感理解与可信智能**，探索个性化智能体、社会认知及其安全与可信机制的理论和方法。

实验室关注如何从多模态数据理解信息与用户，如何利用检索与推荐帮助用户获取有价值的信息，以及智能体的认知、决策和交互如何影响群体行为。

<div class="mcci-topics"><span>信息检索与推荐</span><span>多模态计算</span><span>语言与情感理解</span><span>个性化智能体</span><span>社会模拟</span><span>可信人工智能</span></div>

<div class="mcci-join-banner"><div><strong>加入我们 · Join Us</strong><p>欢迎对信息检索、推荐系统、多模态学习、大模型智能体与社会模拟等研究方向感兴趣的同学了解团队。招生政策与名额请以学校和导师正式信息为准。</p></div><a href="{{ '/join/' | relative_url }}">了解申请与联系信息 →</a></div>

{% include section.html %}

## 新闻资讯

<div class="mcci-news-list">
{% for item in site.data.news limit:6 %}
  <div class="mcci-news-row"><span class="mcci-news-date">{{ item.year }}</span><span class="mcci-news-pill">{{ item.venue }}</span><div><a href="{{ item.link | relative_url }}">{{ item.title }}</a></div></div>
{% endfor %}
</div>

[查看全部动态 →]({{ '/blog/' | relative_url }})

{% include section.html %}

## 研究方向

<div class="mcci-grid">
<a class="mcci-card" href="{{ '/research/' | relative_url }}"><div class="mcci-card-icon">01 / MULTIMODAL</div><h3>多模态计算</h3><p>多模态表征、跨模态检索与多源信息融合。</p></a>
<a class="mcci-card" href="{{ '/research/' | relative_url }}"><div class="mcci-card-icon">02 / RETRIEVAL & RECOMMENDATION</div><h3>信息检索与个性化推荐</h3><p>用户建模、多行为与多模态推荐、推荐公平性。</p></a>
<a class="mcci-card" href="{{ '/research/' | relative_url }}"><div class="mcci-card-icon">03 / LANGUAGE</div><h3>语言与情感理解</h3><p>语言理解、情感分析与面向人的智能交互。</p></a>
<a class="mcci-card" href="{{ '/research/' | relative_url }}"><div class="mcci-card-icon">04 / SOCIAL AGENTS</div><h3>个性化智能体与社会认知</h3><p>个体决策、智能体社会模拟与群体行为演化。</p></a>
<a class="mcci-card" href="{{ '/research/' | relative_url }}"><div class="mcci-card-icon">05 / TRUSTWORTHY AI</div><h3>安全与可信智能</h3><p>公平性、可靠性、可信推理与智能体安全。</p></a>
</div>

{% include section.html %}

## 代表论文

<div class="mcci-pub"><span class="mcci-venue">SIGIR 2026</span><div><strong>Post-hoc Provider Fairness Adaptation via Hierarchical Exposure Alignment</strong><p>Jingzhi Li, Zhiyong Cheng, Richang Hong, Meng Wang</p><div class="mcci-pub-links"><a href="https://arxiv.org/pdf/2605.01524">PDF ↗</a><a href="https://github.com/Tam-JQK/Post-train">Code ↗</a><a href="https://doi.org/10.1145/3805712.3809597">DOI ↗</a></div></div></div>
<div class="mcci-pub"><span class="mcci-venue">WWW 2026</span><div><strong>Modeling Stage-wise Evolution of User Interests for News Recommendation</strong><p>Zhiyong Cheng, Yike Jin, Zhijie Zhang, Huilin Chen, Zhangling Duan, Meng Wang</p></div></div>
<div class="mcci-pub"><span class="mcci-venue">ACM MM 2025</span><div><strong>I³-MRec: Invariant Learning with Information Bottleneck for Incomplete Modality Recommendation</strong><p>Huilin Chen, Miaomiao Cai, Fan Liu, Zhiyong Cheng, Richang Hong, Meng Wang</p></div></div>

[查看论文列表 →]({{ '/publications/' | relative_url }})

{% include section.html %}

## 实验室成员与学术交流

实验室教师为**程志勇教授**，研究兴趣涵盖信息检索与推荐、社交媒体分析、多媒体系统。团队成员按照博士生、硕士生与入学年级展示，并持续完善成员档案。

[认识实验室成员 →]({{ '/team/' | relative_url }}) · [程志勇教授个人主页 ↗](https://sites.google.com/view/zycheng)

<div class="mcci-photo-note">团队活动与科研生活照片将在获得授权素材后补充，不使用其他实验室的活动图片。</div>
