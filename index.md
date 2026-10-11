---
title: 首页
nav:
  order: 0
  tooltip: 返回首页
---
<div class="mcci-intro">
  <p class="mcci-overline">HEFEI UNIVERSITY OF TECHNOLOGY · 合肥工业大学</p>
  <h1 class="mcci-intro-title">多模态计算与认知智能实验室</h1>
  <p class="mcci-intro-en">Multimodal Computing and Cognitive Intelligence Lab (MCCI Lab)</p>
  <p class="mcci-intro-copy"><strong>MCCI Lab</strong> 以多模态计算为基础，聚焦个性化推荐、语言情感理解与可信智能，探索个性化智能体、社会认知及其安全与可信机制的理论和方法。研究领域涵盖信息检索与推荐、多模态学习、自然语言理解、智能体社会模拟和安全可信人工智能。</p>
  <p class="mcci-intro-link">实验室依托合肥工业大学。<a href="https://sites.google.com/view/zycheng">程志勇教授个人主页 ↗</a></p>
</div>

<div class="mcci-recruit-note">📣 <strong>加入我们：</strong>欢迎对推荐系统、多模态智能与大模型智能体感兴趣的同学关注实验室。具体招生名额以当年学校和导师通知为准。 <a href="{{ '/join/' | relative_url }}">了解详情 →</a></div>

{% include section.html %}

## 新闻资讯

<div class="mcci-news-list">
{% for item in site.data.news limit:6 %}
  <div class="mcci-news-row"><span class="mcci-news-date">{{ item.year }}</span><span class="mcci-news-pill">{{ item.venue }}</span><div><a href="{{ item.link | relative_url }}">{{ item.title }}</a></div></div>
{% endfor %}
</div>

[查看更多新闻 →]({{ '/blog/' | relative_url }})

{% include section.html %}

## 研究方向

<div class="mcci-grid">
  <a class="mcci-card" href="{{ '/research/' | relative_url }}"><div class="mcci-card-icon">MULTIMODAL COMPUTING</div><h3>多模态计算</h3><p>多模态表征、跨模态检索与多源信息融合。</p></a>
  <a class="mcci-card" href="{{ '/research/' | relative_url }}"><div class="mcci-card-icon">RETRIEVAL & RECOMMENDATION</div><h3>信息检索与个性化推荐</h3><p>用户兴趣建模、多行为推荐、多模态推荐与公平推荐。</p></a>
  <a class="mcci-card" href="{{ '/research/' | relative_url }}"><div class="mcci-card-icon">LANGUAGE & EMOTION</div><h3>语言与情感理解</h3><p>语言理解、情感分析与智能交互。</p></a>
  <a class="mcci-card" href="{{ '/research/' | relative_url }}"><div class="mcci-card-icon">AGENTS & SOCIETY</div><h3>个性化智能体与社会认知</h3><p>个体决策、智能体社会模拟与群体行为演化。</p></a>
  <a class="mcci-card" href="{{ '/research/' | relative_url }}"><div class="mcci-card-icon">TRUSTWORTHY INTELLIGENCE</div><h3>安全与可信智能</h3><p>公平性、可靠性、可信推理与智能体安全。</p></a>
</div>

{% include section.html %}

## 代表性论文

<div class="mcci-pub"><span class="mcci-venue">SIGIR 2026</span><div><strong>Post-hoc Provider Fairness Adaptation via Hierarchical Exposure Alignment</strong><p>Jingzhi Li, Zhiyong Cheng, Richang Hong, Meng Wang</p><div class="mcci-pub-links"><a href="https://arxiv.org/pdf/2605.01524">PDF ↗</a><a href="https://github.com/Tam-JQK/Post-train">Code ↗</a><a href="https://doi.org/10.1145/3805712.3809597">DOI ↗</a></div></div></div>
<div class="mcci-pub"><span class="mcci-venue">WWW 2026</span><div><strong>Modeling Stage-wise Evolution of User Interests for News Recommendation</strong><p>Zhiyong Cheng, Yike Jin, Zhijie Zhang, Huilin Chen, Zhangling Duan, Meng Wang</p></div></div>
<div class="mcci-pub"><span class="mcci-venue">ACM MM 2025</span><div><strong>I³-MRec: Invariant Learning with Information Bottleneck for Incomplete Modality Recommendation</strong><p>Huilin Chen, Miaomiao Cai, Fan Liu, Zhiyong Cheng, Richang Hong, Meng Wang</p></div></div>

[完整论文列表 →]({{ '/publications/' | relative_url }})

{% include section.html %}

## 实验室团队

由**程志勇教授**指导，围绕信息检索与推荐、多模态智能、智能体及社会认知开展科研工作。实验室成员页面按博士生、硕士生与入学年级分类展示。

[查看团队成员 →]({{ '/team/' | relative_url }})
