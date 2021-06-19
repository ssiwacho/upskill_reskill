---
bg_image: images/stock-vector-horizontal-banner-with-hands-typing-on-computer-and-various-office-supplies-drawn-with-contour-1090844168.jpg
description: 
draft: false
layout: post
menu:
  main:
    parent: More
    name: "ตารางการฝึกอบรม"
    weight: 3
title: ตารางการฝึกอบรม
---


<style>
/*
!!!!
This pen is being refactored
!!!!
*/

/*
=====
DEPENDENCES
=====
*/

.r-title{
  margin-top: var(--rTitleMarginTop, 0) !important;
  margin-bottom: var(--rTitleMarginBottom, 0) !important;
}


p:not([class]){
  line-height: var(--cssTypographyLineHeight, 1.78);
  margin-top: var(--cssTypographyBasicMargin, 1em);
  margin-bottom: 0;
}

p:not([class]):first-child{
  margin-top: 0;
}

/*
text component
*/

.text{
  display: var(--textDisplay, inline-flex);
  font-size: var(--textFontSize, 1rem);  
}

/*
time component
*/

/*
core styles
*/

.time{
  display: var(--timeDisplay, inline-flex);
}

/*
extensions
*/

.time__month{
  margin-left: var(--timelineMounthMarginLeft, .25em);
}

/*
skin
*/

.time{
  padding: var(--timePadding, .25rem 1.25rem .25rem);
  background-color: var(--timeBackgroundColor, #f0f0f0);

  font-size: var(--timeFontSize, 1.2rem);
  font-weight: var(--timeFontWeight, 700);
  text-transform: var(--timeTextTransform, uppercase);
  color: var(--timeColor, currentColor);
}

/*
card component
*/

/*
core styles
*/

.card{
  padding: var(--timelineCardPadding, 1.5rem 1.5rem 1.25rem);
}

.card__content{
  margin-top: var(--cardContentMarginTop, .5rem);
}

/*
skin
*/

.card{
  border-radius: var(--timelineCardBorderRadius, 2px);
  border-left: var(--timelineCardBorderLeftWidth, 3px) solid var(--timelineCardBorderLeftColor, var(--uiTimelineMainColor));
  box-shadow: var(--timelineCardBoxShadow, 0 1px 3px 0 rgba(0, 0, 0, .12), 0 1px 2px 0 rgba(0, 0, 0, .24));
  background-color: var(--timelineCardBackgroundColor, #fff);
}

/*
extensions
*/

.card__title{
  --rTitleMarginTop: var(--cardTitleMarginTop, 1rem);
  font-size: var(--cardTitleFontSize, 1.25rem);
}

/*
=====
CORE STYLES
=====
*/

.timeline{
  display: var(--timelineDisplay, grid);
  grid-row-gap: var(--timelineGroupsGap, 2rem);
}

/*
1. If timeline__year isn't displaed the gap between it and timeline__cards isn't displayed too
*/

.timeline__year{
  margin-bottom: 1.25rem; /* 1 */
}

.timeline__cards{
  display: var(--timeloneCardsDisplay, grid);
  grid-row-gap: var(--timeloneCardsGap, 1.5rem);
}


/*
=====
SKIN
=====
*/

.timeline{
  --uiTimelineMainColor: var(--timelineMainColor, #004D80);
  --uiTimelineSecondaryColor: var(--timelineSecondaryColor, #fff);

  border-left: var(--timelineLineWidth, 3px) solid var(--timelineLineBackgroundColor, var(--uiTimelineMainColor));
  padding-top: 1rem;
  padding-bottom: 1.5rem;
}

.timeline__year{
  --timePadding: var(--timelineYearPadding, .5rem 1.5rem);
  --timeColor: var(--uiTimelineSecondaryColor);
  --timeBackgroundColor: var(--uiTimelineMainColor);
  --timeFontWeight: var(--timelineYearFontWeight, 500);
  --timeFontSize: var(--timelineYearFontSize, 20);

}

.timeline__card{
  position: relative;
  margin-left: var(--timelineCardLineGap, 1rem);
}

/*
1. Stoping cut box shadow
*/

.timeline__cards{
  overflow: hidden;
  padding-top: .25rem; /* 1 */
  padding-bottom: .25rem; /* 1 */
}

.timeline__card::before{
  content: "";
  width: 100%;
  height: var(--timelineCardLineWidth, 2px);
  background-color: var(--timelineCardLineBackgroundColor, var(--uiTimelineMainColor));

  position: absolute;
  top: var(--timelineCardLineTop, 1rem);
  left: -50%;
  z-index: -1;
}

/*
=====
SETTINGS
=====
*/
/**/
.timeline{
  --timelineMainColor: #494555;
}

/*
=====
DEMO
=====
*/

body{
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans, Ubuntu, Fira Sans, Helvetica Neue, sans-serif;
  color: #222;

  background-color: #fff;
  margin: 0;
  display: flex;
  flex-direction: column;
}

p{
  margin-top: 0;
  margin-bottom: 1rem;
  line-height: 1.5;
  
}

p:last-child{
  margin-bottom: 0;
}

.page{
  max-width: 47rem;
  padding: 5rem 2rem 3rem;
  margin-left: auto;
  margin-right: auto;
}
</style>

<div class="page">
  <div class="timeline">
    <div class="timeline__group">
      <span class="timeline__year time" aria-hidden="true">กรกฎาคม</span>
      <div class="timeline__cards">
       <div class="timeline__card card">
          <header class="card__header">
            <time class="time" datetime="2021-07-02">
              <span class="time__day">2</span>
              <span class="time__month">กรกฎาคม</span>
            </time>
          </header>
          <div class="card__content">
            <p>ครั้งที่ 1</p>
            <a href="/schedule"><p>18:00 - 21:00 น. แนวคิดหลักการของการพัฒนาการเรียนการสอนแนวใหม่</p></a>
          </div>
        </div>
        <div class="timeline__card card">
          <header class="card__header">
            <time class="time" datetime="2021-07-42">
              <span class="time__day">4</span>
              <span class="time__month">กรกฎาคม</span>
            </time>
          </header>
          <div class="card__content">
            <a href="/schedule"><p>10:00น. - พิธีเปิดการฝึกอบรม</p></a>
          </div>
        </div>
        <div class="timeline__cards">
       <div class="timeline__card card">
          <header class="card__header">
            <time class="time" datetime="2021-07-04">
              <span class="time__day">9</span>
              <span class="time__month">กรกฎาคม</span>
            </time>
          </header>
          <div class="card__content">
            <p>ครั้งที่ 2</p>
            <a href="/schedule"><p>18:00 - 21:00 น. สมรรถนะครู โมดูล 1, 2 และ 3 (DCI)</p></a>
          </div>
        </div>
        <div class="timeline__card card">
          <header class="card__header">
            <time class="time" datetime="2008-09-01">
              <span class="time__day">1</span>
              <span class="time__month">Sept</span>
            </time>
            <h3 class="card__title r-title">The part of my life in University of Pennsylvania</h3>
          </header>
          <div class="card__content">
            <p>Started from University of Pennsylvania. This is an important stage of my career. Here I worked in the local magazine. The experience greatly affected me</p>
          </div>
        </div>
      </div>
    </div>
    <div class="timeline__group">
      <span class="timeline__year time" aria-hidden="true">2014</span>
      <div class="timeline__cards">
        <div class="timeline__card card">
          <header class="card__header">
            <time class="time" datetime="2008-07-14">
              <span class="time__day">14</span>
              <span class="time__month">Jul</span>
            </time>
          </header>
          <div class="card__content">
            <p>Travels to France, Italy, Spain, and Peru. After completing fashion editorial in Lima, prolongs stay to make portraits of local people in a daylight studio</p>
          </div>
        </div>
      </div>
    </div>
    <div class="timeline__group">
      <span class="timeline__year time" aria-hidden="true">2016</span>
      <div class="timeline__cards">
        <div class="timeline__card card">
          <header class="card__header">
            <time class="time" datetime="2008-08-18">
              <span class="time__day">28</span>
              <span class="time__month">Aug</span>
            </time>          
          </header>
          <div class="card__content">
            <p>Upon moving to Brooklyn that summer, I began photographing weddings in Chicago</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
