<style>
  /* === 深灰度/复古学院风 配色 === */

  .pub-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 2px 0px 15px;
    font-size: 24px;
    font-weight: bold;
    color: #1a293b; 
  }

  .pub-tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 25px;
  }

  .pub-tab-btn {
    padding: 8px 20px;
    border: none;
    border-radius: 9999px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    background-color: #e2e8f0;
    color: #475569;
  }

  .pub-tab-btn:hover {
    background-color: #cbd5e1;
  }

  /* 选中按钮：深藏青色 */
  .pub-tab-btn.active {
    background-color: #2b4c6f; 
    color: white;
    box-shadow: 0 4px 6px rgba(43, 76, 111, 0.2);
  }

  .pub-tab-content {
    display: none;
  }

  .pub-tab-content.active {
    display: block;
    animation: fadeInOpacity 0.3s ease-in-out;
  }

  @keyframes fadeInOpacity {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .custom-bibliography {
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
  }

  .pub-item {
    display: flex;
    flex-direction: row;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px dotted #cbd5e1;
  }

  /* 左侧栏布局 */
  .pub-badge-col {
    flex: 0 0 105px; 
    display: flex;
    justify-content: flex-start;
    padding-top: 4px;
  }

  /* 最左侧会议短名：深砖红色 (Brick Red) */
  .pub-ccf-badge {
    background-color: #a34141; 
    color: #fff;
    width: 90px;
    padding: 5px 0px; 
    border-radius: 6px; 
    font-weight: 800;
    font-size: 13px; 
    letter-spacing: 0.5px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(163, 65, 65, 0.25);
    height: fit-content;
    line-height: 1.2;
  }

  .pub-content-col {
    flex: 1;
    padding-left: 10px;
  }

  .pub-title {
    font-size: 18px;
    font-weight: 700;
    color: #1e293b; 
    margin-bottom: 6px;
    line-height: 1.35;
  }

  .pub-title a {
    color: #1e293b;
    text-decoration: none;
    transition: color 0.2s;
  }

  .pub-title a:hover {
    color: #2b4c6f; 
  }

  .pub-authors {
    font-size: 15px;
    color: #475569; 
    margin-bottom: 4px; 
    line-height: 1.5;
  }

  .pub-venue-full {
    font-size: 14.5px;
    color: #64748b; 
    margin-bottom: 10px;
    line-height: 1.4;
  }

  /* 奖项高亮：古典红 */
  .pub-award {
    color: #b91c1c; 
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .pub-tags-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    margin-bottom: 10px;
  }

  /* ================= 动态标签配色库 ================= */
  .pub-badge-type, .pub-badge-ccf {
    padding: 3px 12px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 700;
    color: white;
    letter-spacing: 0.5px;
  }

  /* 论文类型分类 */
  .type-conf { background-color: #55799d; }    /* 会议：复古钢蓝 (Steel Blue) */
  .type-journal { background-color: #55876d; } /* 期刊：复古松绿 (Sage Green) */

  /* CCF评级分类 */
  .ccf-ccfa { background-color: #c99a3c; } /* CCF A：琉璃金 (Rich Gold) */
  .ccf-ccfb { background-color: #c26e53; } /* CCF B：赤陶色 (Terra Cotta) */
  .ccf-ccfc { background-color: #8b738c; } /* CCF C：绛紫色 (Muted Plum) */

  /* 关键词标签：实线灰框 */
  .pub-keyword-badge {
    border: 1px solid #94a3b8;
    color: #475569;
    padding: 2px 10px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 500;
  }

  /* 底部链接区 */
  .pub-links {
    margin-top: 8px;
  }

  .pub-links a {
    font-size: 13.5px;
    color: #3b5a7a; 
    margin-right: 14px;
    text-decoration: none;
    font-weight: 600;
    position: relative;
  }

  .pub-links a:hover {
    text-decoration: underline;
  }
</style>

<h2 id="publications" class="pub-header">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#21409a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
  Publications
</h2>

<div class="pub-tabs">
  <button class="pub-tab-btn active" onclick="switchPubTab(event, 'tab-selected')">Selected Publications</button>
  <button class="pub-tab-btn" onclick="switchPubTab(event, 'tab-all')">All Publications</button>
</div>

<div id="tab-selected" class="pub-tab-content active">
  <ul class="custom-bibliography">
    {% for link in site.data.publications_selected.main %}
    <li class="pub-item">
      <div class="pub-badge-col">
        {% if link.conference_short %}<div class="pub-ccf-badge">{{ link.conference_short }}</div>{% endif %}
      </div>
      <div class="pub-content-col">
        <div class="pub-title">
          {% if link.pdf %}<a href="{{ link.pdf }}" target="_blank">{{ link.title }}</a>{% else %}{{ link.title }}{% endif %}
        </div>
        <div class="pub-authors">{{ link.authors }}</div>

        {% if link.conference %}
        <div class="pub-venue-full">
          <em>{{ link.conference }}</em>{% if link.year %}, <strong>{{ link.year }}</strong>{% endif %}
        </div>
        {% endif %}
    
        {% if link.award %}
        <div class="pub-award">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b91c1c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
            <path d="M4 22h16"></path>
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"></path>
          </svg>
          {{ link.award }}
        </div>
        {% endif %}
    
        <div class="pub-tags-row">
          {% assign vtype = link.type | default: "CONFERENCE" | upcase %}
          {% if vtype == "JOURNAL" %}
            <span class="pub-badge-type type-journal">JOURNAL</span>
          {% else %}
            <span class="pub-badge-type type-conf">CONFERENCE</span>
          {% endif %}
          
          {% if link.notes %}
            {% assign ccf_class = link.notes | downcase | remove: " " | remove: "-" %}
            <span class="pub-badge-ccf ccf-{{ ccf_class }}">{{ link.notes | replace: "-", " " }}</span>
          {% endif %}
    
          {% for tag in link.tags %}<span class="pub-keyword-badge">{{ tag }}</span>{% endfor %}
        </div>
        
        <div class="pub-links">
          {% if link.pdf %} <a href="{{ link.pdf }}" target="_blank">[Paper]</a> {% endif %}
          {% if link.doi %} <a href="{{ link.doi }}" target="_blank">[DOI]</a> {% endif %}
          {% if link.dataset %} <a href="{{ link.dataset }}" target="_blank">[Dataset]</a> {% endif %}
          {% if link.hardware %} <a href="{{ link.hardware }}" target="_blank">[Hardware]</a> {% endif %}
          {% if link.slides %} <a href="{{ link.slides }}" target="_blank">[Slides]</a> {% endif %}
          {% if link.video %} <a href="{{ link.video }}" target="_blank">[Video]</a> {% endif %}
          {% if link.code %} <a href="{{ link.code }}" target="_blank">[Code]</a> {% endif %}
          {% if link.page %} <a href="{{ link.page }}" target="_blank">[Project Page]</a> {% endif %}
          {% if link.bibtex %} <a href="{{ link.bibtex }}" target="_blank">[BibTex]</a> {% endif %}
          {% if link.others %} <span style="font-size: 13px; color: #64748b;">{{ link.others }}</span> {% endif %}
        </div>
      </div>
    </li>
    {% endfor %}
  </ul>
</div>

<div id="tab-all" class="pub-tab-content">
  <ul class="custom-bibliography">
    {% for link in site.data.publications_all.main %}
    <li class="pub-item">
      <div class="pub-badge-col">
        {% if link.conference_short %}<div class="pub-ccf-badge">{{ link.conference_short }}</div>{% endif %}
      </div>
      <div class="pub-content-col">
        <div class="pub-title">
          {% if link.pdf %}<a href="{{ link.pdf }}" target="_blank">{{ link.title }}</a>{% else %}{{ link.title }}{% endif %}
        </div>
        <div class="pub-authors">{{ link.authors }}</div>

        {% if link.conference %}
        <div class="pub-venue-full">
          <em>{{ link.conference }}</em>{% if link.year %}, <strong>{{ link.year }}</strong>{% endif %}
        </div>
        {% endif %}
    
        {% if link.award %}
        <div class="pub-award">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b91c1c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
            <path d="M4 22h16"></path>
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"></path>
          </svg>
          {{ link.award }}
        </div>
        {% endif %}
    
        <div class="pub-tags-row">
          {% assign vtype = link.type | default: "CONFERENCE" | upcase %}
          {% if vtype == "JOURNAL" %}
            <span class="pub-badge-type type-journal">JOURNAL</span>
          {% else %}
            <span class="pub-badge-type type-conf">CONFERENCE</span>
          {% endif %}
          
          {% if link.notes %}
            {% assign ccf_class = link.notes | downcase | remove: " " | remove: "-" %}
            <span class="pub-badge-ccf ccf-{{ ccf_class }}">{{ link.notes | replace: "-", " " }}</span>
          {% endif %}
    
          {% for tag in link.tags %}<span class="pub-keyword-badge">{{ tag }}</span>{% endfor %}
        </div>
        
        <div class="pub-links">
          {% if link.pdf %} <a href="{{ link.pdf }}" target="_blank">[Paper]</a> {% endif %}
          {% if link.doi %} <a href="{{ link.doi }}" target="_blank">[DOI]</a> {% endif %}
          {% if link.dataset %} <a href="{{ link.dataset }}" target="_blank">[Dataset]</a> {% endif %}
          {% if link.hardware %} <a href="{{ link.hardware }}" target="_blank">[Hardware]</a> {% endif %}
          {% if link.slides %} <a href="{{ link.slides }}" target="_blank">[Slides]</a> {% endif %}
          {% if link.video %} <a href="{{ link.video }}" target="_blank">[Video]</a> {% endif %}
          {% if link.code %} <a href="{{ link.code }}" target="_blank">[Code]</a> {% endif %}
          {% if link.page %} <a href="{{ link.page }}" target="_blank">[Project Page]</a> {% endif %}
          {% if link.bibtex %} <a href="{{ link.bibtex }}" target="_blank">[BibTex]</a> {% endif %}
          {% if link.others %} <span style="font-size: 13px; color: #64748b;">{{ link.others }}</span> {% endif %}
        </div>
      </div>
    </li>
    {% endfor %}
  </ul>
</div>

<script>
function switchPubTab(evt, tabId) {
  var tabContents = document.getElementsByClassName("pub-tab-content");
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
    tabContents[i].classList.remove("active");
  }

  var tabBtns = document.getElementsByClassName("pub-tab-btn");
  for (var i = 0; i < tabBtns.length; i++) {
    tabBtns[i].className = tabBtns[i].className.replace(" active", "");
  }

  document.getElementById(tabId).style.display = "block";
  document.getElementById(tabId).classList.add("active");
  evt.currentTarget.className += " active";
}
</script>