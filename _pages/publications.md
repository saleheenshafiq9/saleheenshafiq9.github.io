---
layout: archive
title: "Research."
eyebrow: "Ideas, questions & investigations"
intro: "My current research examines the security of autonomous and cyber-physical systems, particularly UAVs. I develop techniques for analyzing and testing drone software through fuzzing, reverse engineering, binary analysis, and patch analysis. I'm motivated by finding vulnerabilities because software defects in these systems can have direct physical consequences."
permalink: /publications/
---

{% if site.author.googlescholar %}
<p class="page-intro">You can also find my articles on <a href="{{ site.author.googlescholar }}">Google Scholar</a>.</p>
{% endif %}
{% include academic-search.html count=site.publications.size label="research projects" note="Most recent first" %}
<div class="research-list" data-search-list>
{% assign research = site.publications | sort: 'date' | reverse %}
{% for post in research %}
<article class="research-card" data-search-item>
  <time class="research-year" datetime="{% if post.date_precision == 'year' %}{{ post.date | date: '%Y' }}{% else %}{{ post.date | date_to_xmlschema }}{% endif %}">{{ post.date | date: '%Y' }}</time>
  <div>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p class="card-meta">{{ post.venue }}{% if post.venue_context %}<br>{{ post.venue_context | escape }}{% endif %}</p>
    <div class="card-excerpt">{{ post.excerpt | markdownify }}</div>
    {% if post.publication_status %}<p class="publication-status">{{ post.publication_status | escape }}</p>{% endif %}
    <div class="card-links"><a href="{{ post.url | relative_url }}">{{ post.link_label | default: 'Read project' }} {% include link-icon.html name="forward" %}</a>{% if post.paperurl %}<a href="{% if post.paperurl contains '://' %}{{ post.paperurl }}{% else %}{{ post.paperurl | relative_url }}{% endif %}">Report {% include link-icon.html name="document" %}</a>{% endif %}{% if post.slidesurl %}<a href="{% if post.slidesurl contains '://' %}{{ post.slidesurl }}{% else %}{{ post.slidesurl | relative_url }}{% endif %}">{% if post.slidesurl contains 'github.com' %}Code{% else %}Slides{% endif %} {% include link-icon.html name="external" %}</a>{% endif %}</div>
    {% if post.citation %}<p class="citation">Recommended citation: {{ post.citation }}</p>{% endif %}
  </div>
</article>
{% endfor %}
</div>
