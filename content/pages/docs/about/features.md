---
title: Характеристики
weight: 2
seo:
  title: Features
  description: This is the features page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Features
      keyName: property
    - name: 'og:description'
      value: This is the features page
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: Features
    - name: 'twitter:description'
      value: This is the features page
layout: docs
---

<div class="note">
  <strong>Примечание:</strong> Это демо-контент только для демонстрации. Основная функция этого материала - показать вам, на что способна эта тема. Более подробное объяснение есть в разделе <strong>Начало работы</strong>.
</div>

## Блоки кода

Блоки кода либо огораживаются `строками с тремя обратными знаками`, либо отступают на четыре пробела.

<pre>
```
body {
  background: #fff;
  color: #666;
  line-height: 1.66667; }

a {
  color: #d4a259;
  text-decoration: underline;
  -webkit-transition: background .3s ease, color .3s ease;
  transition: background .3s ease, color .3s ease; }

a:hover {
  color: #1d1d1d;
  text-decoration: none; }
```
</pre>

Отрисованный результат выглядит следующим образом:

```
body {
  background: #fff;
  color: #666;
  line-height: 1.66667; }

a {
  color: #d4a259;
  text-decoration: underline;
  -webkit-transition: background .3s ease, color .3s ease;
  transition: background .3s ease, color .3s ease; }

a:hover {
  color: #1d1d1d;
  text-decoration: none; }
```

## Вызовы

В этой теме доступны два типа выносок: **важно** и **примечание**.

<div class="important">
  <strong>Важно:</strong> 
  Это "Важно" блок текста для вызова. 
  Этот блок обозначает предупреждение или предостережение. 
  Используйте его для важного сообщения. 
</div>

<div class="note">
  <strong>Примечание:</strong> 
  Это "Примечание" блок текста для вызова. 
  Этот блок обозначает общее примечание или совет. 
</div>

## Таблицы

Вы можете создавать таблицы с помощью markdown, чтобы помочь вам организовать информацию. Чтобы добавить таблицу, используйте три или более дефиса (---) для создания заголовка каждой колонки, а также используйте трубы (|) для разделения каждой колонки, как в примере ниже.

| Name | Required | Type | Description |
| ---- | --- | --- | --- |
| type | Required | `enum` | The type of the model. Must be one of - `page`, `config`, `data`, `object` |
| label | Required | `string` | The label of the model |
| description | | `string` | Description of the model. Used by some CMS. |
| fields | | `list` of `objects` | List of Field Models |

## Начните использовать тему Libris

We’ve packed this theme with powerful features to help you have awesome documentation for your current or next project.

<br>

**Why not start using this theme today?**

<a href="https://www.stackbit.com/" class="button">Join Stackbit</a>
