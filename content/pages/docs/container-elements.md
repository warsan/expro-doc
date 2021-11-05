---
title: Новая страница
excerpt: >-
  В этом разделе вы найдёте основную информацию о svg.js и о том, как его использовать
seo:
label: Новая
  title: Новая страница
  description: В этом разделе вы найдёте основную информацию о svg.js и о том, как его
  использовать
  robots: []
  extra: 
      - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Новая
      keyName: property
    - name: 'og:description'
      value: Основная информация о svg.js
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: Новая
    - name: 'twitter:description'
      value: Основная информация о svg.js

---

# Родительские элементы

## SVG.Parent

Класс SVG.Parent является базовой оболочкой для всех элементов, которые могут содержать другие элементы. SVG.Parent наследуется непосредственно от самого нижнего уровня всех классов SVG.js: SVG.Element. 

## SVG.Container

Класс SVG.Container является базовой обёрткой для всех элементов, которые могут содержать другие элементы.

Наследственный стёк - это:  
SVG.Base > SVG.EventTarget > SVG.Dom > SVG.Element > SVG.Container.

Если `SVG.Parent` предоставляет некоторые низкоуровневые методы, такие как `add()`, `remove()` и `has()`, то при желании `SVG.Container` можно и нужно использовать под свои собственные методы. Таким образом, прототип `SVG.Parent` остаётся чистым.
 SVG.Container может и должен использоваться для добавления своих собственных методов. Таким образом, прототип SVG.Parent остается чистым. При реализации своих собственных родительских элементов, они всегда должны наследоваться от `SVG.Container`.
