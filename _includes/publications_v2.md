<style>
  /* === 莫兰迪色系 (Morandi Palette) 全局配色与样式 === */

  /* 标题与图标：深灰蓝 */
  .pub-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 2px 0px 15px;
    font-size: 24px;
    font-weight: bold;
    color: #2b3a4a; 
  }

  .pub-tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 25px;
  }

  /* 默认按钮：浅灰白 */
  .pub-tab-btn {
    padding: 8px 20px;
    border: none;
    border-radius: 9999px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    background-color: #f0f2f5;
    color: #5c6b79;
  }

  .pub-tab-btn:hover {
    background-color: #e2e6ea;
  }

  /* 选中按钮：雾霾蓝 */
  .pub-tab-btn.active {
    background-color: #6b8299; 
    color: white;
    box-shadow: 0 4px 10px rgba(107, 130, 153, 0.3);
  }

  .pub-tab-content {
    display: none;
  }

  .pub-tab-content.active {
    display: block;
    animation: fadeInOpacity 0.4s ease-in-out;
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
    border-bottom: 1px dashed #dbe0e6; /* 改为更柔和的虚线 */
  }

  /* 左侧栏布局 */
  .pub-badge-col {
    flex: 0 0 105px; 
    display: flex;
    justify-content: flex-start;
    padding-top: 4px;
  }

  /* 核心视觉：左侧会议标签 (莫兰迪藕粉色 + 不对称圆角) */
  .pub-ccf-badge {
    background-color: #d99b95; 
    color: #fff;
    width: 90px;
    padding: 6px 0px; 
    border-radius: 12px 4px 12px 4px; /* 不对称倒角设计，区别于传统方块 */
    font-weight: 700;
    font-size: 13px; 
    letter-spacing: 0.5px;
    text-align: center;
    box-shadow: 0 3px 6px rgba(217, 155, 149, 0.25);
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
    color: #313d4a; /* 深岩灰 */
    margin-bottom: 6px;
    line-height: 1.35;
  }

  .pub-title a {
    color: #313d4a;
    text-decoration: none;
    transition: color 0.2s;
  }

  .pub-title a:hover {
    color: #6b8299; /* 悬停变为雾霾蓝 */
  }

  .pub-authors {
    font-size: 15px;
    color: #798795; /* 暖灰色 */
    margin-bottom: 4px; 
    line-height: 1.5;
  }

  .pub-venue-full {
    font-size: 14.5px;
    color: #647382; /* 中度灰蓝 */
    margin-bottom: 10px;
    line-height: 1.4;
  }

  /* 奖项高亮：莫兰迪赤陶色 */
  .pub-award {
    color: #c47864; 
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
    gap: 8px;
    align-items: center;
    margin-bottom: 10px;
  }

  /* 期刊/会议类型标签：莫兰迪豆绿 */
  .pub-venue-badge {
    background-color: #cbd5c9;
    color: #3f523d; /* 深墨绿 */
    padding: 3px 12px;
    border-radius: 999px; /* 胶囊状 */
    font-size: 11.5px;
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  /* CCF评级标签：莫兰迪米黄 */
  .pub-type-badge {
    background-color: #e5dcc3;
    color: #634d31; /* 暖棕色 */
    padding: 3px 10px;
    border-radius: 4px 10px 4px 10px; /* 轻微不对称圆角 */
    font-size: 11.5px;
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  /* 研究关键词：极简白灰 */
  .pub-keyword-badge {
    border: 1px solid #dbe0e6;
    background-color: transparent;
    color: #8c98a4;
    padding: 2px 10px;
    border-radius: 999px;
    font-size: 11.5px;
    font-weight: 500;
  }

  /* 底部链接区 */
  .pub-links {
    margin-top: 8px;
  }

  .pub-links a {
    font-size: 13.5px;
    color: #6b8299; /* 雾霾蓝 */
    margin-right: 14px;
    text-decoration: none;
    font-weight: 600;
    position: relative;
  }

  /* 链接悬停下划线动画 */
  .pub-links a::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1.5px;
    bottom: -2px;
    left: 0;
    background-color: #6b8299;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  .pub-links a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
</style>

<h2 id="publications" class="pub-header">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2b3a4a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c47864" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
          {% if link.others %} <span style="font-size: 13px; color: #8c98a4;">{{ link.others }}</span> {% endif %}
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
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c47864" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
          {% if link.others %} <span style="font-size: 13px; color: #8c98a4;">{{ link.others }}</span> {% endif %}
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