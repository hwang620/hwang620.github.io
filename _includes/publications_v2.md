<style>
  /* === 标签页 (Tabs) 样式 === */
  .pub-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 2px 0px 15px;
    font-size: 24px;
    font-weight: bold;
    color: #031b4e;
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
    background-color: #f9fafb;
    color: #374151;
  }

  .pub-tab-btn:hover {
    background-color: #f3f4f6;
  }

  .pub-tab-btn.active {
    background-color: #21409a;
    color: white;
  }

  .pub-tab-content {
    display: none;
  }

  .pub-tab-content.active {
    display: block;
    animation: fadeIn 0.3s;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  /* === 论文列表排版样式 === */
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
    border-bottom: 1px dotted #e5e7eb;
  }

  /* 左侧红底标签栏：固定宽度 */
  .pub-badge-col {
    flex: 0 0 105px; 
    display: flex;
    justify-content: flex-start;
    padding-top: 2px;
  }

  .pub-ccf-badge {
    background-color: #f1404b;
    color: white;
    width: 90px; /* 固定宽度，确保所有红块一样大 */
    padding: 4px 0px; 
    border-radius: 4px;
    font-weight: 800;
    font-size: 12px; 
    text-align: center;
    box-shadow: 0 2px 4px rgba(241, 64, 75, 0.2);
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
    color: #1f2937;
    margin-bottom: 5px;
    line-height: 1.3;
  }

  .pub-title a {
    color: #2c3e50;
    text-decoration: none;
  }

  .pub-title a:hover {
    color: #3b82f6;
  }

  .pub-authors {
    font-size: 15px;
    color: #6b7280;
    margin-bottom: 4px; /* 减小间距，给下方的全称留位置 */
    line-height: 1.5;
  }

  /* 【新增】期刊/会议全称与年份样式 */
  .pub-venue-full {
    font-size: 14.5px;
    color: #4b5563;
    margin-bottom: 10px;
    line-height: 1.4;
  }

  /* === 奖项 (Award) 高亮样式 === */
  .pub-award {
    color: #e11d48;
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .pub-tags-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    margin-bottom: 8px;
  }

  .pub-venue-badge {
    background-color: #e0f8f1;
    color: #0f766e;
    padding: 3px 12px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 700;
  }

  .pub-type-badge {
    background-color: #fef08a;
    color: #854d0e;
    padding: 3px 10px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 700;
  }

  .pub-keyword-badge {
    border: 1px solid #e5e7eb;
    background-color: #fafafa;
    color: #6b7280;
    padding: 2px 12px;
    border-radius: 9999px;
    font-size: 12px;
  }

  .pub-links {
    margin-top: 6px;
  }

  .pub-links a {
    font-size: 13px;
    color: #3b82f6;
    margin-right: 12px;
    text-decoration: none;
    font-weight: 500;
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
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e11d48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
          {% if link.type %}<span class="pub-venue-badge">{{ link.type | upcase }}</span>{% else %}<span class="pub-venue-badge">CONFERENCE</span>{% endif %}
          {% if link.notes %}<span class="pub-type-badge">{{ link.notes | replace: "-", " " }}</span>{% endif %}
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
          {% if link.others %} <span style="font-size: 13px; color: #6b7280;">{{ link.others }}</span> {% endif %}
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
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e11d48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
          {% if link.type %}<span class="pub-venue-badge">{{ link.type | upcase }}</span>{% else %}<span class="pub-venue-badge">CONFERENCE</span>{% endif %}
          {% if link.notes %}<span class="pub-type-badge">{{ link.notes | replace: "-", " " }}</span>{% endif %}
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
          {% if link.others %} <span style="font-size: 13px; color: #6b7280;">{{ link.others }}</span> {% endif %}
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