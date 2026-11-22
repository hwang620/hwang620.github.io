---
layout: homepage
---

<style>
  /* 标题统一样式，确保和 Publications 的图标垂直居中对齐 */
  .section-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 24px 0px 16px;
    font-size: 24px;
    font-weight: bold;
    color: #031b4e;
  }

  /* Follow the system theme while keeping the existing light palette. */
  html[data-theme="dark"] {
    h2.section-header, h2.pub-header {
      color: #75c8f0;
    }

    h2.section-header svg, h2.pub-header svg {
      stroke: #75c8f0;
    }
  }
  .news-list {
    margin-bottom: 8px;
  }

  .news-extra {
    display: none;
  }

  .news-list.expanded .news-extra {
    display: list-item;
  }

  .news-toggle {
    margin: 0 0 8px 20px;
    padding: 0;
    border: none;
    background: transparent;
    color: #7a7a7a;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.2px;
    cursor: pointer;
  }

  .news-toggle:hover {
    color: #5f5f5f;
    text-decoration: underline;
  }
</style>

<h2 class="section-header">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#21409a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
  About Me
</h2>
Welcome! I am **<font face="Georgia">Han Wang</font>**, a third-year Ph.D. student in the School of Computer Science and Engineering at the [University of Electronic Science and Technology of China (UESTC)](https://en.uestc.edu.cn/), where I am a member of the [Intelligent Computing Systems Laboratory (ICSLab)](https://www.nise.ac.cn/) under the supervision of Prof. [Li Lu](https://www.en.scse.uestc.edu.cn/info/1085/2182.htm). I began my graduate studies at UESTC as a master's student before entering the Ph.D. program. Previously, I received my B.S. in Computer Science and Technology from [Tianjin University](https://en.tju.edu.cn/) in 2022. From 2020 to 2022, I was an undergraduate research assistant at [TankLab](https://tj.teacher.360eol.com/teacherBasic/preview?teacherId=12111), mentored by Associate Professor [Xinyu Tong](https://tjutxy.com/).

<h2 class="section-header">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#21409a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
    <path d="M18 14h-8"></path>
    <path d="M15 18h-5"></path>
    <path d="M10 6h8v4h-8V6Z"></path>
  </svg>
  News
</h2>
<ul id="news-list" class="news-list">
  <li><strong><font color="3A5FCD" face="Georgia">[Nov. 2026]</font></strong> Our paper <strong><em>'Odin'</em></strong> on a distinct design point for uplink communication in LPWANs has been accepted to <strong>MobiCom '27 (acceptance rate: 11.5%)</strong>.</li>
  <li><strong><font color="3A5FCD" face="Georgia">[Oct. 2026]</font></strong> Selected for <strong>CAST Young Science and Technology Talent Cultivation Program - Doctoral Student Special Plan</strong> (中国科协青年科技人才培育工程博士生专项计划) !</li>
  <li><strong><font color="3A5FCD" face="Georgia">[Jul. 2026]</font></strong> Our paper <strong><em>'Hades'</em></strong> on runtime-free energy admission has been accepted to <strong>MICRO '26</strong>.</li>
  <li><strong><font color="3A5FCD" face="Georgia">[Oct. 2025]</font></strong> Our paper <strong><em>'μMan'</em></strong> on device-agnostic energy management for battery-free IoT has been accepted to <strong>SenSys '26</strong>.</li>
  <li><strong><font color="3A5FCD" face="Georgia">[Apr. 2025]</font></strong> Our paper <strong><em>'LEGO+'</em></strong> on comprehensive redundancy removal for IoT sensing systems has been accepted to <strong>MobiSys '25</strong>.</li>
  <li class="news-extra"><strong><font color="3A5FCD" face="Georgia">[Nov. 2024]</font></strong> 🎉 Our paper <strong><em>'RFBus'</em></strong> won the <a href="https://sensys.acm.org/2024/award/">BEST PAPER AWARD</a> at <strong>SenSys '24</strong>! (1 out of 313 submissions).</li>
  <li class="news-extra"><strong><font color="3A5FCD" face="Georgia">[Sep. 2024]</font></strong> Our paper <strong><em>'RFBus'</em></strong> introducing a low-cost IoT system architecture has been accepted to <strong>SenSys '24</strong>.</li>
  <li class="news-extra"><strong><font color="3A5FCD" face="Georgia">[Aug. 2024]</font></strong> Our paper <strong><em>'Sisyphus'</em></strong> on low-power LoRa receivers has been accepted to <strong>MobiCom '24</strong>.</li>
  <li class="news-extra"><strong><font color="3A5FCD" face="Georgia">[Aug. 2024]</font></strong> Website is Live.</li>
</ul>



<button id="news-toggle" class="news-toggle" type="button" aria-expanded="false" aria-controls="news-list">More</button>

<script>
  (function () {
    var newsList = document.getElementById('news-list');
    var toggleButton = document.getElementById('news-toggle');

    if (!newsList || !toggleButton) return;
    
    toggleButton.addEventListener('click', function () {
      var expanded = newsList.classList.toggle('expanded');
      toggleButton.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      toggleButton.textContent = expanded ? 'Less' : 'More';
    });
  })();
</script>

<h2 class="section-header">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#21409a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
  </svg>
  Research Interests
</h2>

**My research goal is to make efficient and dependable computing accessible wherever it is needed, from AI infrastructure to resource-constrained devices.** I am interested in rethinking the interplay between computation, data movement, and communication through hardware-software co-design. My current interests span memory-centric architectures for large language model inference and low-power systems for the Internet of Things (IoT). In particular, my work on wireless systems explores new designs for LPWAN uplinks and ultra-low-power LoRa reception (see [Odin](#pub-odin) and [Sisyphus](#pub-sisyphus)). Beyond connectivity, I investigate how energy-constrained devices can compute reliably and securely, from hardware-based energy admission (see [Hades](#pub-hades)) to trustworthy operation in tiny IoT systems (see [PAuth](#pub-pauth)).

**Research Keywords**

- **AI Infrastructure** *(current exploration)*: LLM inference and serving, hardware-software co-design, 3D-stacked memory, near-memory computing, hybrid digital-analog computing
- **Low-Power IoT** *(past and ongoing research)*: LPWAN, LoRa, backscatter, battery-free devices, intermittent computing, trustworthy computing, wireless and RFIC

{% include_relative _includes/honors.md %} 

{% include_relative _includes/publications_v2.md %}

{% include_relative _includes/services.md %} 


<div style="max-width: 240px; margin: 24px auto; text-align: center;">
  <script type="text/javascript" id="mapmyvisitors" src="https://mapmyvisitors.com/map.js?cl=fbf7f3&amp;w=240&amp;t=tt&amp;d=dZDFRE7T3LbcM9LXXNLvSil6KjVs5AE_jr1S3WX-IXA&amp;co=131479&amp;cmo=980808&amp;cmn=047434"></script>
</div>