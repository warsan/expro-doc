---
title: Добро пожаловать в Libris
seo:
  title: Welcome to Libris
  description: This is the documentation page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Welcome to Libris
      keyName: property
    - name: 'og:description'
      value: This is the documentation page
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: Welcome to Libris
    - name: 'twitter:description'
      value: This is the documentation page
layout: docs
---
> Примечание переводчика: в данной справке множество ссылок, которые выглядят вот так: 
> [ссылка](https://customizer.github.io/svg.js-ru/overview.htm#) .\
> При наведении на неё курсора мышки появится всплывающая подсказка. При клике левой кнопкой мышки на ней либо появится ещё одна всплывающая подсказка, либо будет сделан переход в другое место данной справки или на какое-нибудь место в сети Интернет.\
> Проект перевода на 
> [github.com](https://github.com/customizer/svg.js-ru) .

***

**svg.js** - это легковесная JavaScript библиотека для управления и анимации векторной графики в формате SVG.

### Почему стоит выбрать SVG.js?

SVG.js не имеет никаких зависимостей и стремится стать как можно меньше по размеру, при этом обеспечивая почти полное покрытие спецификации SVG. Если вы еще не убедились в этом, вот несколько основных моментов.  
SVG.js экономный  
SVG.js легковесен. Цифры не лгут, вот он в сравнении с конкурентами:  
    <div><script async src="//jsfiddle.net/warsand/a9qrsj3w/embed/result/"></script></div>  

Примечание: Чем меньше тем лучше.  
Помните, SVG.js делает все тоже самое, но почти вполовину меньшим кодом!  
SVG.js быстрый.  
SVG.js работает очень быстро. Конечно, он не быстрее vanilla js, но намного быстрее конкурентов:  
    <script async src="//jsfiddle.net/wout/xutwzmg5/embed/result/"></script>  
Указатели:  
rects - создание 10000 прямоугольников  
fill - создание 10000 прямоугольников и заливка их цветом  
gradient - создание 10000 прямоугольников и заполнение их градиентом  
Чем меньше тем лучше. Протестировано на Intel Core m5 - 1,2 ГГц.  

SVG.js предоставляет более краткий и легко читаемый синтаксис. Делаем то же, что и в примере выше с ванильным JS:

```
// SVG.js
var draw = SVG('drawing')
  , rect = draw.rect(100, 100).fill('#f06')
```

Это всего лишь две строки кода вместо десяти! И намного меньше повторений.  
Сногсшибательные анимации:
<script async src="//jsfiddle.net/wout/7wL1uv8n/embed/result/"></script>

И кое-что ещё...
<div class="note">
<a href="animating.htm" onmouseover="show('Анимация')" onmouseout="hide()">анимация</a> по размеру, положению, преобразованиям, цвету, ...  

<a href="extending.htm" onmouseover="show('Расширение')" onmouseout="hide()"> безболезненное расширение</a> благодаря модульной структуре
доступны различные <a href="plugins.htm" onmouseover="show('Плагины')" onmouseout="hide()">полезные плагины</a>  
унифицированный API между типами форм с <a href="/docs/3.0/manipulating/#move">перемещением</a> (move), <a href="/docs/3.0/manipulating/#resizing">размером</a> (size), <a href="/docs/3.0/manipulating/#center">центром</a> (center), ...  
<a href="/docs/3.0/events">привязка событий</font></font></a> к элементам  
полная поддержка масок непрозрачности и обтравочных контуров  
текстовые пути , даже анимированные
группы элементов  
динамические градиенты и узоры  
полная документация (кстати, сейчас вы смотрите её :-)
</div>