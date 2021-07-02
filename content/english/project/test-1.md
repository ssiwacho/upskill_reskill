---
title: "พิธีเปิด วันที่ 4 กรกฎาคม 2564"
description: "หลักสูตรการคิดออกแบบ การโค้ชชิ่ง และการจัดชั้นเรียนนวัตกรรมเพื่อสร้างและยกระดับทักษะการทำงานของบุคลากรทางการศึกษาสำหรับการเรียนรู้ออนไลน์และออฟไลน์"
draft: false
image : "images/portfolio/poster_chula_040721_3-01.jpg"
bg_image: "images/feature-bg.jpg"
category: "information"
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
      [time-1000] auto
      [time-1005] auto
      [time-1010] auto
      [time-1020] auto
      [time-1035] auto
      [time-1050] auto
      [time-1055] auto;
      [time-1100] auto;

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

.track-5 {
  background-color: #DF7E79;
  color: #fff;
}

.track-6 {
  background-color: #007693;
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

เวลา 10.00-11.00 น. 

พิธีเปิดจัดผ่านระบบออนไลน์ ผู้เรียน/ผู้สนใจ สามารถเข้าร่วมได้โดยคลิ้กที่ช่องทางด้านล่าง

<a href=""><btn-main class="btn-main button1">เข้าร่วมพิธีเปิดการฝึกอบรม</button></a>



<div class="text">
  

  <hr>
  
</div>


<div class="schedule" aria-labelledby="schedule-heading">
  
 
  <h2 class="time-slot" style="grid-row: time-1000;">10:00am</h2>

  <div class="session session-1 track-6" style="grid-column: track-1-start / track-4-end; grid-row: time-1000 / time-1005;">
    <h3 class="session-title"><a href="#">การกล่าวรายงานฝึกอบรมตามหลักสูตร</a></h3>
    <span class="session-time">10:00 - 10:05</span>
    <span class="session-presenter">โดย คณบดีคณะครุศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย</br> รองศาสตราจารย์ ดร.ศิริเดช สุชีวะ</span>
  </div>
  

  <h2 class="time-slot" style="grid-row: time-1005;">10:05am</h2>
  
  <div class="session session-2 track-6" style="grid-column: track-1-start / track-4-end; grid-row: time-1005 / time-1010;">
    <h3 class="session-title">ประธานในพิธีกล่าวเปิดงาน</h3>
    <span class="session-time">10:05 - 10:10</span>
    <span class="session-track">โดย รองอธิการบดี ด้านวิชาการและการเชื่อมโยงกับสังคม</span>
    <span class="session-presenter">โดย ศาสตราจารย์ ดร.ปาริชาต สถาปิตานนท์</span>
  </div>
  
  <h2 class="time-slot" style="grid-row: time-1010;">10:10am</h2>
  
  <div class="session session-3 track-1" style="grid-column: track-1-start / track-4-end; grid-row: time-1010 / time-1020;">
    <h3 class="session-title"><a href="#">การสร้างและยกระดับทักษะการทำงานของครูและบุคลากรทางการศึกษา </br> ที่เน้นทักษะในศตวรรษที่ 21 สำหรับการจัดการเรียนรู้</a></h3>
    <span class="session-time">10:10 - 10:20</span>
    <span class="session-track">โดย ปลัดกระทรวงศึกษาธิการ</span>
    <span class="session-presenter">ดร.สุภัทร จำปาทอง</span>
  </div>
  
  <h2 class="time-slot" style="grid-row: time-1020;">10:20am</h2>
  
  <div class="session session-4 track-2" style="grid-column: track-1-start / track-4-end; grid-row: time-1020 / time-1035;">
    <h3 class="session-title"><a href="#">โครงการบัณฑิตพันธุ์ใหม่และกำลังคนที่มีสมรรถนะ เพื่อตอบโจทย์ภาคการผลิตตามนโยบายการปฏิรูปการอุดมศึกษาไทย</a></h3>
    <span class="session-time">10:20-10:35</span>
    <span class="session-track">โดย ประธานคณะอนุกรรมการบริหารโครงการบัณฑิตพันธุ์ใหม่เพื่อสร้างกำลังคนที่มีสมรรถนะสูงฯ </span>
    <span class="session-presenter">รองศาสตราจารย์ ดร.บัณฑิต ทิพากร</span>
  </div>
  
  <h2 class="time-slot" style="grid-row: time-1035;">10:35am</h2>
  
  <div class="session session-4 track-5" style="grid-column: track-1-start / track-4-end; grid-row: time-1035 / time-1050;">
    <h3 class="session-title"><a href="#">การจัดโครงการให้บรรลุเป้าหมายโดยใช้การประกันคุณภาพหลักสูตรที่นำไปสู่การพัฒนาคุณลักษณะที่พึงประสงค์ของผู้เรียน</a></h3>
    <span class="session-time">10:35-10:50</span>
    <span class="session-track">โดย ที่ปรึกษาด้านมาตรฐานและการประกันคุณภาพการศึกษา สป.ว.</span>
    <span class="session-presenter">คุณนุชนภา รื่นอบเชย</span>
  </div>


  <h2 class="time-slot" style="grid-row: time-1050;">10:50am</h2>
  
  <div class="session session-4 track-6" style="grid-column: track-1-start / track-4-end; grid-row: time-1050 / time-1055;">
    <h3 class="session-title"><a href="#">คณบดีคณะครุศาสตร์กล่าวขอบคุณ</a></h3>
    <span class="session-time">10:50-10:55</span>
  </div>


  <h2 class="time-slot" style="grid-row: time-1055;">10:55am</h2>
  
  <div class="session session-4 track-3" style="grid-column: track-1-start / track-4-end; grid-row: time-1055 / time-1100;">
    <h3 class="session-title"><a href="#">ตอบข้อซักถามเกี่ยวกับหลักสูตร</a></h3>
    <span class="session-time">10:50-10:55</span>
    <span class="session-track">โดย ศาสตราจารย์ ดร.สุวิมล ว่องวาณิช</span>

  </div>

  
</div>




