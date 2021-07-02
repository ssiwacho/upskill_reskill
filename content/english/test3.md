---
bg_image: images/shutterstock_1090844168.png
description: 
draft: false
layout: post
title: กำหนดการฝึกอบรม
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Trirong&display=swap');

body{
  font-family: 'Sarabun', serif;
  color: #333;
}

header h1{
  text-align: center;
  font-weight: bold;
  margin-top: 0;
}
  
 header p{
   text-align: center;
   margin-bottom: 0;
 }


.hexa{
  border: 0px;
  float: left;
  text-align: center;
  height: 35px;
  width: 60px;
  font-size: 20px;
  background: #f0f0f0;
  color: #494755;
  position: relative;
  margin-top: 15px;
}


.hexa:before{
  content: ""; 
  position: absolute; 
  left: 0; 
  width: 0; 
  height: 0;
  border-bottom: 15px solid #494755;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  top: -15px;
}

.hexa:after{
  content: ""; 
  position: absolute; 
  left: 0; 
  width: 0; 
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-top: 15px solid #494755;
  bottom: -15px;
}

.timeline {
  position: relative;
  padding: 0;
  width: 100%;
  margin-top: 20px;
  list-style-type: none;
}

.timeline:before {
  position: absolute;
  left: 50%;
  top: 0;
  content: ' ';
  display: block;
  width: 2px;
  height: 100%;
  margin-left: -1px;
  background: rgb(213,213,213);
  background: -moz-linear-gradient(top, rgba(213,213,213,0) 0%, rgb(213,213,213) 8%, rgb(213,213,213) 92%, rgba(213,213,213,0) 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(30,87,153,1)), color-stop(100%,rgba(125,185,232,1)));
  background: -webkit-linear-gradient(top, rgba(213,213,213,0) 0%, rgb(213,213,213) 8%, rgb(213,213,213) 92%, rgba(213,213,213,0) 100%);
  background: -o-linear-gradient(top, rgba(213,213,213,0) 0%, rgb(213,213,213) 8%, rgb(213,213,213) 92%, rgba(213,213,213,0) 100%);
  background: -ms-linear-gradient(top, rgba(213,213,213,0) 0%, rgb(213,213,213) 8%, rgb(213,213,213) 92%, rgba(213,213,213,0) 100%);
  background: linear-gradient(to bottom, rgba(213,213,213,0) 0%, rgb(213,213,213) 8%, rgb(213,213,213) 92%, rgba(213,213,213,0) 100%);
  z-index: 5;
}

.timeline li {
  padding: 2em 0;
}

.timeline .hexa{
  width: 16px;
  height: 10px;
  position: absolute;
  background: #494755;
  z-index: 5;
  left: 0;
  right: 0;
  margin-left:auto;
  margin-right:auto;
  top: -30px;
  margin-top: 0;
}

.timeline .hexa:before {
  border-bottom: 4px solid #494755;
  border-left-width: 8px;
  border-right-width: 8px;
  top: -4px;
}

.timeline .hexa:after {
  border-left-width: 8px;
  border-right-width: 8px;
  border-top: 4px solid #494755;
  bottom: -4px;
}

.direction-l,
.direction-r {
  float: none;
  width: 100%;
  text-align: center;
}

.flag-wrapper {
  text-align: auto;
  position: relative;
}

.flag {
  position: relative;
  display: inline;
  background: rgb(255,255,255);
  font-weight: 600;
  z-index: 15;
  padding: 1.5px 10px;
  text-align: left;
  border-radius: 5px;
}

.direction-l .flag:after,
.direction-r .flag:after {
  content: "";
  position: absolute;
  left: 50%;
  top: -15px;
  height: 0;
  width: 0;
  margin-left: -8px;
  border: solid transparent;
  border-bottom-color: rgb(255,255,255);
  border-width: 8px;
  pointer-events: none;
}

.direction-l .flag {
  -webkit-box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
  -moz-box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
  box-shadow: -1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
}

.direction-r .flag {
  -webkit-box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
  -moz-box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
  box-shadow: 1px 1px 1px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.15);
}

.time-wrapper {
  display: block;
  position: relative;
  margin: 4px 0 0 0;
  z-index: 14;
  line-height: 1em;
  vertical-align: middle;
  color: #fff;
}

.direction-l .time-wrapper {
  float: none;
}

.direction-r .time-wrapper {
  float: none;
}

.time {
  background: #494755;
  display: inline-block;
  padding: 8px;
}

.desc {
  position: relative;
  margin: 1em 0 0 0;
  padding: 1em;
  background: rgb(254,254,254);
  -webkit-box-shadow: 0 0 1px rgba(0,0,0,0.20);
  -moz-box-shadow: 0 0 1px rgba(0,0,0,0.20);
  box-shadow: 0 0 1px rgba(0,0,0,0.20);
  z-index: 15;
}

.direction-l .desc,
.direction-r .desc {
  position: relative;
  margin: 1em 1em 0 1em;
  padding: 1em;
  z-index: 15;
}

@media(min-width: 768px){
  .timeline {
    width: 660px;
    margin: 0 auto;
    margin-top: 20px;
  }

  .timeline li:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  
  .timeline .hexa {
    left: -28px;
    right: auto;
    top: 8px;
  }

  .timeline .direction-l .hexa {
    left: auto;
    right: -28px;
  }

  .direction-l {
    position: relative;
    width: 310px;
    float: left;
    text-align: right;
  }

  .direction-r {
    position: relative;
    width: 310px;
    float: right;
    text-align: left;
  }

  .flag-wrapper {
    display: inline-block;
  }
  
  .flag {
    font-size: 16px;
  }

  .direction-l .flag:after {
    left: auto;
    right: -16px;
    top: 50%;
    margin-top: -8px;
    border: solid transparent;
    border-left-color: rgb(254,254,254);
    border-width: 8px;
  }

  .direction-r .flag:after {
    top: 50%;
    margin-top: -8px;
    border: solid transparent;
    border-right-color: rgb(254,254,254);
    border-width: 8px;
    left: -8px;
  }

  .time-wrapper {
    display: inline;
    vertical-align: middle;
    margin: 0;
  }

  .direction-l .time-wrapper {
    float: left;
  }

  .direction-r .time-wrapper {
    float: right;
  }

  .time {
    padding: 5px 10px;
  }

  .direction-r .desc {
    margin: 1em 0 0 0.75em;
  }
}

@media(min-width: 992px){
  .timeline {
    width: 800px;
    margin: 0 auto;
    margin-top: 20px;
  }

  .direction-l {
    position: relative;
    width: 380px;
    float: left;
    text-align: right;
  }

  .direction-r {
    position: relative;
    width: 380px;
    float: right;
    text-align: left;
  }
}
</style>



<ul class="timeline">
  <!-- Item 1 -->
  <li>
    <div class="direction-l">
      <div class="flag-wrapper">
        <span class="hexa"></span>
        <span class="flag">ปฐมนิเทศ</span>
        <span class="time-wrapper"><span class="time">2 ก.ค. 64</span></span>
      </div>
    <div class="direction-r">
      <div class="desc">18:00 - 21:00 น. </br> ชี้แจงวิธีการเรียน บทบาทของผู้สอน บทบาทของผู้เรียน และวิธีการประเมินผล</br></br>
                        <a href="https://kruroo.com/course/28">- ดาวน์โหลดรายละเอียดโครงการ DCI และทำแบบทดสอบก่อนเรียน (ในระบบ KruRoo)</a></div>
    </div>
  </li>

  <!-- Item 2 -->
  <li>
   <div class="direction-l">
      <div class="flag-wrapper">
        <span class="hexa"></span>
        <span class="flag">พิธีเปิดการฝึกอบรม</span>
        <span class="time-wrapper"><span class="time">4 ก.ค. 64</span></span>
      </div>
    <div class="direction-r">
      <div class="desc">10:00 - 11:00 น. </br></br> <a href="/project/test-1/">- พิธีเปิดจัดผ่านระบบออนไลน์ (โปรแกรม Zoom)</a>
      </div>
    </div>
  </li>

  <!-- Item 3 -->
  <li>
   <div class="direction-r">
      <div class="flag-wrapper">
        <span class="hexa"></span>
        <span class="flag">โมดูล 1 : การโค้ชชิ่ง</span>
      </div>

  </li>
   
   <!-- Item 4 -->
  <li>
   <div class="direction-r">
      <div class="flag-wrapper">
        <span class="hexa"></span>
        <span class="flag">หลักการโค้ชชิ่งเชิงสร้างสรรค์</span>
        <span class="time-wrapper"><span class="time">9 ก.ค. 64</span></span>
      </div>
    <div class="direction-r">
      <div class="desc">โดย ดร.พงศ์ปณต พัสระ</br> 18:00 - 21:00 น.
      </div>
    </div>
  </li>

<!-- Item 5 -->
  <li>
   <div class="direction-r">
      <div class="flag-wrapper">
        <span class="hexa"></span>
        <span class="flag">กระบวนการโค้ชชิ่ง</span>
        <span class="time-wrapper"><span class="time">23 ก.ค. 64</span></span>
      </div>
    <div class="direction-r">
      <div class="desc">โดย ดร.พงศ์ปณต พัสระ</br> 18:00 - 21:00 น.
      </div>
    </div>
  </li>



<!-- Item 6 -->
  <li>
   <div class="direction-l">
      <div class="flag-wrapper">
        <span class="hexa"></span>
        <span class="flag">โมดูล 2 : การคิดออกแบบ (DT)</span>
      </div>
  </li>

<!-- Item 7 -->
  <li>
   <div class="direction-l">
      <div class="flag-wrapper">
        <span class="hexa"></span>
        <span class="flag">มโนทัศน์</span>
        <span class="time-wrapper"><span class="time">23 ก.ค. 64</span></span>
      </div>
    <div class="direction-r">
      <div class="desc">- DOE, ผลลัพธ์การเรียนรู้ในหลักสูตรกับการออกแบบชั้นเรียนนวัตกรรม </br>
     <p align="right"> โดย ศ.ดร.สุวิมล ว่องวาณิช</p>
     - การคิดออกแบบทางการศึกษา (5 ขั้น) </br>
     - Designing Thinking: Empathize </br>
     - Designing Thinking: Define problem </br></br>
      <p align="right"> โดย รศ.ดร.ศจีมาจ ณ วิเชียร และคณะ</p>
      <p align="right"> 18:00 - 21:00 น.</p>
      </div>
    </div>
  </li>



<!-- Item 8 -->
  <li>
   <div class="direction-r">
      <div class="flag-wrapper">
        <span class="hexa"></span>
        <span class="flag">Designing Thinking: Ideate</span>
        <span class="time-wrapper"><span class="time">30 ก.ค. 64</span></span>
      </div>
    <div class="direction-r">
      <div class="desc">โดย รศ.ดร.ศจีมาจ ณ วิเชียร และคณะ</br> 18:00 - 21:00 น.
      </div>
    </div>
  </li>


<!-- Item 9 -->
  <li>
   <div class="direction-r">
      <div class="flag-wrapper">
        <span class="hexa"></span>
        <span class="flag">Designing Thinking</span>
        <span class="time-wrapper"><span class="time">6 ส.ค. 64</span></span>
      </div>
    <div class="direction-r">
      <div class="desc">- Designing Thinking: Prototype </br>
                        - Designing Thinking: Test </br>
                        - แนวคิดและหลักการประเมิน </br>
                        - การเรียนรู้ (AOL, AFL, AAL) </br></br>
โดย รศ.ดร.ศจีมาจ ณ วิเชียร และคณะ</br> 18:00 - 21:00 น.
      </div>
    </div>
  </li>
  
  <!-- Item 6 -->
  <li>
   <div class="direction-l">
      <div class="flag-wrapper">
        <span class="hexa"></span>
        <span class="flag">โมดูล 3 :ผลลัพธ์ที่พึงประสงค์ของการศึกษาและการออกแบบชั้นเรียนนวัตกรรม </span>
      </div>
  </li>
  
  <!-- Item 10 -->
  <li>
   <div class="direction-l">
      <div class="flag-wrapper">
        <span class="hexa"></span>
        <span class="flag">การออกแบบชั้นเรียนนวัตกรรม</span>
        <span class="time-wrapper"><span class="time">13 ส.ค. 64</span></span>
      </div>
    <div class="direction-r">
     <div class="direction-l">
      <div class="desc">โดย อ.ธงชัย โรจน์กังสดาล</br> 18:00 - 21:00 น.
      </div>
    </div>
  </li>
    
<!-- Item 11 -->
    
  <li>
   <div class="direction-r">
      <div class="flag-wrapper">
        <span class="hexa"></span>
        <span class="flag">แลกเปลี่ยนเรียนรู้ว่าด้วยนวัตกรรมการเรียนการสอน</span>
        <span class="time-wrapper"><span class="time">20 ส.ค. 64</span></span>
      </div>
    <div class="direction-r">
     <div class="direction-r">
      <div class="desc">โดย ผศ.ดร.ชาริณี ตรีวรัญญู</br> 18:00 - 21:00 น.
      </div>
    </div>
  </li>


<!-- Item 12 -->
    
  <li>
   <div class="direction-l">
      <div class="flag-wrapper">
        <span class="hexa"></span>
        <span class="time-wrapper"><span class="time">27 ส.ค. 64</span></span>
      </div>
    <div class="direction-r">
      <div class="desc">- Co-Curricular Activities (CCA) </br>
                        - Connecting Lessons to Real World </br>
     <p align="right"> โดย ศ.ดร.สุวิมล ว่องวาณิช</p></br>
     - UDL: Universal Design for Learning 
 </br>
      <p align="right"> โดย อ.ดร.วาทินี อมรไพศาลเลิศ</br>18:00 - 21:00 น.</p>
      </div>
    </div>
  </li>
  
  
<!-- Item 13 -->
    
  <li>
   <div class="direction-r">
      <div class="flag-wrapper">
        <span class="hexa"></span>
        <span class="flag">Technology for Offline and Online Learning</span>
        <span class="time-wrapper"><span class="time">3 ก.ย. 64</span></span>
      </div>
    <div class="direction-r">
      <div class="desc">
โดย ผศ.ดร.กนิษฐ์ ศรีเคลือบ และ </br>
                      อ.ดร.สิวะโชติ ศรีสุทธิยากร </br>18:00 - 21:00 น.
      </div>
    </div>
  </li>

<!-- Item 14 -->
    
  <li>
   <div class="direction-l">
      <div class="flag-wrapper">
        <span class="hexa"></span>
        <span class="flag">Classroom Discourse กับการส่งเสริมชั้นเรียนนวัตกรรม</span>
        <span class="time-wrapper"><span class="time">3 ก.ย. 64</span></span>
      </div>
    <div class="direction-r">
      <div class="desc">
     <p align="right">อ.ดร.ชยุตม์ ภิรมย์สมบัติ</br>18:00 - 21:00 น.</p>
      </div>
    </div>
  </li>


<!-- Item 15 -->
    
  <li>
   <div class="direction-r">
      <div class="flag-wrapper">
        <span class="hexa"></span>
        <span class="flag">Neuroscience (Cognitive Load) and Innovative Classroom</span>
        <span class="time-wrapper"><span class="time">17 ก.ย. 64</span></span>
      </div>
    <div class="direction-r">
      <div class="desc">
ผศ.ดร.กิตติคุณ วิวัฒน์ภิญโญ</br>18:00 - 21:00 น.
      </div>
    </div>
  </li>
  
  
<!-- Item 16 -->
  <li>
   <div class="direction-l">
      <div class="flag-wrapper">
        <span class="hexa"></span>
        <span class="flag">โมดูล 4 : การประเมินและการให้ข้อมูลป้อนกลับเชิงบวก </span>
      </div>
  </li>
  
<!-- Item 17 -->
    
  <li>
   <div class="direction-l">
      <div class="flag-wrapper">
        <span class="hexa"></span>
        <span class="flag">Assessment tools in innovative classroom</span>
        <span class="time-wrapper"><span class="time">24 ก.ย. 64</span></span>
      </div>
   <div class="direction-r">
      <div class="desc">
     <p align="right"> โดย ผศ.ดร.กนิษฐ์ ศรีเคลือบ และ </br>
                      อ.ดร.สิวะโชติ ศรีสุทธิยากร </br>18:00 - 21:00 น.</p>
      </div>
    </div>
  </li>


<!-- Item 18 -->
  <li>
   <div class="direction-r">
      <div class="flag-wrapper">
        <span class="hexa"></span>
        <span class="flag">โมดูล 5 : การวิจัยการออกแบบชั้นเรียนนวัตกรรมโดยใช้การคิดออกแบบ </span>
      </div>
  </li>
  
<!-- Item 19 -->
    
  <li>
   <div class="direction-r">
      <div class="flag-wrapper">
        <span class="hexa"></span>
        <span class="flag">Research for Innovation Development</span>
        <span class="time-wrapper"><span class="time">1 ต.ค. 64</span></span>
      </div>
   <div class="direction-r">
      <div class="desc">โดย ศ.ดร.สุวิมล ว่องวาณิช</br> 18:00 - 21:00 น.
      </div>
    </div>
  </li>
  
<!-- Item 20 -->
    
  <li>
   <div class="direction-r">
      <div class="flag-wrapper">
        <span class="hexa"></span>
        <span class="flag">Presentation Techniques and Tools</span>
        <span class="time-wrapper"><span class="time">8 ต.ค. 64</span></span>
      </div>
   <div class="direction-r">
      <div class="desc">โดย อ.ดร.สิวะโชติ ศรีสุทธิยากร</br> 18:00 - 21:00 น.
      </div>
    </div>
  </li>
  

<!-- Item 21 -->
    
  <li>
   <div class="direction-r">
      <div class="flag-wrapper">
        <span class="hexa"></span>
        <span class="flag">Class Presentation</span>
        <span class="time-wrapper"><span class="time">15 ต.ค. 64</span></span>
      </div>
   <div class="direction-r">
      <div class="desc">ผู้เข้าอบรมนำเสนอและร่วมแลกเปลี่ยนเรียนรู้</br> 18:00 - 21:00 น.
      </div>
    </div>
  </li>
  
<!-- Item 22 -->
    
  <li>
   <div class="direction-l">
      <div class="flag-wrapper">
        <span class="hexa"></span>
        <span class="flag">ปิดโครงการ</span>
        <span class="time-wrapper"><span class="time">22 ต.ค. 64</span></span>
      </div>
   <div class="direction-r">
      <div class="desc">- Relection, Project Close </br>
                        - Online Testing </br>
       <p align="right">                 18:00 - 21:00 น.</p>
      </div>
    </div>
  </li>
  
{{< auth >}}
