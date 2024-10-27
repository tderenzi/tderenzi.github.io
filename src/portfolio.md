---
layout: layouts/default.liquid
title: Portfolio
---


<div class="container"  style="padding: 0 1em">
<h1 class="title is-3">&nbsp;</h1>

  <div class="columns is-multiline is-8">
    {% assign sorted_projects = collections.projects | sort: 'data.sort-order' %}
    {% for project in sorted_projects %}
      <div class="column is-one-third">
        <div class="card">
          <!-- Project Image -->
          <div class="card-image">
            <figure class="image is-2by1">
            {% if project.data.draft %}
              <img src="/assets/images/{{ project.data.image | url }}" alt="{{ project.data.title }}">
            {% else %}
              <a href="{{ project.url }}">
                <img src="/assets/images/{{ project.data.image | url }}" alt="{{ project.data.title }}">
              </a>
            {% endif %}
            </figure>
          </div>

          <!-- Project Content -->
          <div class="card-content">
            <div class="content">
            {% if project.data.draft %}
                <h2 class="title is-5 has-text-primary ">{{ project.data.title }}</h2>
            {% else %}
<a href="{{ project.url }}">
                <h2 class="title is-5 has-text-primary is-underlined">{{ project.data.title }}</h2>
              </a>
            {% endif %}

              <p>{{ project.data.subtitle }}</p>
            </div>
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</div>
