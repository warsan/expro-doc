---
title: Обзор
weight: 1
seo:
  title: Overview
  description: This is the overview page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Overview
      keyName: property
    - name: 'og:description'
      value: This is the overview page
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: Overview
    - name: 'twitter:description'
      value: This is the overview page
layout: docs
---  
<div class="note">
  <strong>Примечание переводчика:</strong> 
   в данной справке множество ссылок, которые выглядят вот так: 
       <span onclick="showClick('ссылка')"><a href="#" onclick="return false" onblur="hideClick()" onmouseover="show('ссылка')" onmouseout="hide()">ссылка</a></span>.  
   При наведении на неё курсора мышки появится всплывающая подсказка. При клике левой кнопкой мышки на ней либо появится ещё одна всплывающая подсказка, либо будет сделан переход в другое место данной справки или на какое-нибудь место в сети Интернет.  
Проект перевода на  <a href="https://github.com/customizer/svg.js-ru">github.com</a>.
</div>

<hr>

## Начало

Начало

### Подготовка

Создайте базовую разметку Html и включите скрипт svg.js:

 ```html
<!DOCTYPE html>
<html>
<head>
<title>SVG.js</title>
<script src="https://cdn.jsdelivr.net/npm/@svgdotjs/svg.js@3.0/dist/svg.min.js">
</script>
</head>
<body>

</body>
</html>
```

Или просто импортируйте svg.js в свое приложение javascript:

```js
import { SVG } from '@svgdotjs/svg.js'
```

<div class="note">
  <strong>Примечание:</strong>
  Все свойства, которые ранее были доступны для глобального объекта SVG, теперь необходимо импортировать, см. Пример ниже:
</div>

```js
import { SVG, extend as SVGextend, Element as SVGElement } from '@svgdotjs/svg.js'
```

### Создать документ SVG

Затем используйте SVG()функцию, чтобы создать документ SVG и добавить его на страницу html:

```js
var draw = SVG().addTo('body').size(300, 300)
var rect = draw.rect(100, 100).attr({ fill: '#f06' })
```

Вы можете передать любой селектор CSS `addTo` или просто узел.

```js
<body>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" 
       xmlns:xlink="http://www.w3.org/1999/xlink" width="300" height="300">
    <rect width="100" height="100" fill="#f06"></rect>
  </svg>
</body>
```

SVG.js не устанавливает размер документа автоматически. Поэтому убедитесь, что звоните size()с соответствующими значениями.  
Например, чтобы установить размер в соответствии с размерами его родителя, используйте это:

```html
var draw = SVG().addTo('#someId').size('100%', '100%')```

<hr>

## Кодовые блоки

Вы можете создавать простые блоки кода, размещая тройные обратные знаки <code>```</code> до и после блока кода. Чтобы сделать блок кода более читаемым, мы рекомендуем помещать пустую строку перед и после блоков кода.

<pre>
```
if (condition) {
  код для выполнения, если условие истинно
} else {
  запустите вместо этого другой код
}
```
</pre>

```js
if (condition) {
  код для выполнения, если условие истинно
} else {
  запустите вместо этого другой код
}
```



<hr>

## Таблицы

Вы можете создавать таблицы с помощью markdown, чтобы помочь вам организовать информацию. Чтобы добавить таблицу, используйте три или более дефиса (---) для создания заголовка каждой колонки, а также используйте трубы (|) для разделения каждой колонки, как в примере ниже.

<pre>
| Title | Title |
| ------| ----- |
| Text  | Text  |
| Text  | Text  |
</pre>

| Title | Title |
| ------| ----- |
| Text  | Text  |
| Text  | Text  |

<div class="note">
  <strong>Примечание:</strong> 
  Создание таблиц с дефисами и трубами может занять много времени. Чтобы ускорить процесс, попробуйте использовать <a href="http://www.tablesgenerator.com/markdown_tables" >Markdown Tables Generator</a>.
</div>

<hr>

## Начните использовать тему Libris

Мы оснастили эту тему мощными функциями, которые помогут вам создать потрясающую документацию для вашего текущего или следующего проекта.<br>

**Почему бы не начать использовать эту тему уже сегодня?**

<a href="https://www.stackbit.com/" class="button">Join Stackbit</a>
