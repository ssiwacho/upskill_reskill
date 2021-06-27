---
bg_image: images/stock-vector-horizontal-banner-with-hands-typing-on-computer-and-various-office-supplies-drawn-with-contour-1090844168.jpg
description: 
draft: false
layout: post
menu:
  main:
    parent: More
    name: "กำหนดการ"
    weight: 3
title: กำหนดการเปิดการฝึกอบรม
---


<style>
/*************************
 * GRID SCHEDULE LAYOUT
 *************************/
@media screen and (min-width:700px) {
  .schedule {
    display: grid;
    grid-gap: 1em;
    grid-template-rows:
      [tracks] auto
      [time-0900] auto
      [time-0905] auto
      [time-0920] auto
      [time-0935] auto
      [time-0950] auto
      [time-1000] auto
      [time-1010] auto;
      /* Note 1:
      Use 24hr time for gridline names for simplicity

      Note 2: Use "auto" instead of "1fr" for a more compact schedule where height of a slot is not proportional to the session length. Implementing a "compact" shortcode attribute might make sense for this!
      Try 0.5fr for more compact equal rows. I don't quite understand how that works :)
      */
    
    grid-template-columns:
      [times] 4em
      [track-1-start] 1fr
      [track-1-end track-2-start] 1fr
      [track-2-end track-3-start] 1fr
      [track-3-end track-4-start] 1fr
      [track-4-end];
  }
}

.time-slot {
  grid-column: times;
}

.track-slot {
  display: none; /* hidden on small screens and browsers without grid support */
}

@supports( display:grid ) {
  @media screen and (min-width:700px) {
    .track-slot {
      display: block;
      padding: 10px 5px 5px;
      position: sticky;
      top: 0;
      z-index: 1000;
      background-color: rgba(255,255,255,.9);
    }
  }
}

/* Small-screen & fallback styles */
.session {
  margin-bottom:  1em;
}

@supports( display:grid ) {
  @media screen and (min-width: 700px) {
    .session {
      margin: 0;
    } 
  }
}

/*************************
 * VISUAL STYLES
 * Design-y stuff ot particularly important to the demo
 *************************/
body {
  padding: 50px;
  max-width: auto;
  margin: 0 auto;
  line-height: 1.5;
}

.session {
  padding: .5em;
  border-radius: 2px;
  font-size: 14px;
  box-shadow:
    rgba(255,255,255,.6) 1px 1px 0,
    rgba(0,0,0,.3) 4px 4px 0;
}

.session-title,
.session-time,
.session-track,
.session-presenter {
  display: block;
}

.session-title,
.time-slot {
  margin: 0;
  font-size: 1em;
}

.session-title a {
  color: #fff;
  text-decoration-style: dotted;
  
  &:hover {
    font-style: italic;
  }
  
  &:focus {
    outline: 2px dotted rgba(255,255,255,.8);
  }
}

.track-slot,
.time-slot {
  font-weight: bold;
  font-size:.75em;
}

.track-1 {
  background-color: #202C39;
  color: #fff;
}

.track-2 {
  background-color: #6F1D1B;
  color: #fff;
}

.track-3 {
  background-color: #A9B18F;
  color: #fff;
}

.track-4 {
  background-color: #888098;
  color: #fff;
}

.track-all {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #C17C74;
  color: #000;
  box-shadow: none;
}

.text {
  max-width: auto;
  font-size: 18px;
  margin: 0 auto 50px;
}

.meta {
  color: #555;
  font-style: italic;
}

.meta a {
  color: #555;
}

hr {
  margin: 40px 0;
}
</style>


### หลักสูตรการคิดออกแบบ การโค้ชชิ่ง และการจัดชั้นเรียนนวัตกรรม เพื่อสร้างและยกระดับทักษะ   การทำงานของบุคลากรทางการศึกษาสำหรับการเรียนรู้ออนไลน์และออฟไลน์

วันอาทิตย์ที่ 4 กรกฎาคม พ.ศ. 2564  

เวลา 09.00-10.00 น. 

พิธีเปิดจัดผ่านระบบออนไลน์ ผู้เรียน/ผู้สนใจ สามารถเข้าร่วมได้โดยคลิ้กที่ช่องทางด้านล่าง

<a href=""><btn-main class="btn-main button1">เข้าร่วมพิธีเปิดการฝึกอบรม</button></a>


<div class="text">
  

  <hr>
  
</div>

<div class="schedule" aria-labelledby="schedule-heading">
  
 
  <h2 class="time-slot" style="grid-row: time-0900;">9:00am</h2>

  <div class="session session-1 track-1" style="grid-column: track-1-start / track-4-end; grid-row: time-0900 / time-0905;">
    <h3 class="session-title"><a href="#">การกล่าวรายงานฝึกอบรมตามหลักสูตร</a></h3>
    <span class="session-time">9:00 - 9:05</span>
    <span class="session-presenter">โดย คณบดีคณะครุศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย</br> รองศาสตราจารย์ ดร.ศิริเดช สุชีวะ</span>
  </div>
  

  <h2 class="time-slot" style="grid-row: time-0905;">9:05am</h2>
  
  <div class="session session-2 track-2" style="grid-column: track-1-start / track-4-end; grid-row: time-0905 / time-0920;">
    <h3 class="session-title">โครงการบัณฑิตพันธุ์ใหม่และกำลังคนที่มีสมรรถนะ </br> เพื่อตอบโจทย์ภาคการผลิตตามนโยบายการปฏิรูปการอุดมศึกษาไทย</h3>
    <span class="session-time">9:00 - 9:20</span>
    <span class="session-track">โดย ประธานคณะอนุกรรมการบริหารโครงการบัณฑิตพันธุ์ใหม่เพื่อสร้างกำลังคนที่มีสมรรถนะสูงฯ</span>
    <span class="session-presenter">โดย รองศาสตราจารย์ ดร.บัณฑิต ทิพากร</span>
  </div>
  
  <h2 class="time-slot" style="grid-row: time-0920;">09:20am</h2>
  
  <div class="session session-3 track-3" style="grid-column: track-1-start / track-4-end; grid-row: time-0920 / time-0935;">
    <h3 class="session-title"><a href="#">การสร้างและยกระดับทักษะการทำงานของครูและบุคลากรทางการศึกษา </br> ที่เน้นทักษะในศตวรรษที่ 21 สำหรับการจัดการเรียนรู้</a></h3>
    <span class="session-time">10:30 - 11:30</span>
    <span class="session-track">โดย ปลัดกระทรวงศึกษาธิการ</span>
    <span class="session-presenter">นายสุภัทร จำปาทอง</span>
  </div>
  

  
  <h2 class="time-slot" style="grid-row: time-0935;">09:35am</h2>
  
  <div class="session session-4 track-4" style="grid-column: track-1-start / track-4-end; grid-row: time-0935 / time-0950;">
    <h3 class="session-title"><a href="#">พันธกิจของจุฬาลงกรณ์มหาวิทยาลัยในการพัฒนาครูและบุคลากรทางการศึกษา ตามนโยบายการปฏิรูปการอุดมศึกษาไทย</a></h3>
    <span class="session-time">09:35-09:50</span>
    <span class="session-track">โดย รองอธิการบดี ด้านวิชาการและการเชื่อมโยงกับสังคม </span>
    <span class="session-presenter">ศาสตราจารย์ ดร. ปาริชาติ สถาปิตานนท์ </span>
  </div>
  
  <h2 class="time-slot" style="grid-row: time-0950;">09:50am</h2>
  
  <div class="session session-5 track-all" style="grid-column: track-1-start / track-4-end; grid-row: time-0950 / time-1000;">
    <h3 class="session-title"><a href="#">ประธานในพิธีกล่าวเปิดงาน</a></h3>

  </div>
  
</div>
{{< auth >}}


