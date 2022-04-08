---
title: Характеристики
weight: 2
seo:
  title: Характеристики
  description: Это страница характеристик
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Features
      keyName: property
    - name: 'og:description'
      value: Это страница характеристик
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: Features
    - name: 'twitter:description'
      value: Это страница характеристик
layout: docs
---

<div class="note">
  <strong>Примечание:</strong> Этот демо-контент только для демонстрации. Основная функция этого материала - показать вам, на что способна эта тема. Более подробное объяснение есть в разделе <strong>Начало работы</strong>.
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

| Имя | Required | Тип | Описание |
| ---- | --- | --- | --- |
| type | Required | `enum` | Тип модели. Должен быть одним из - `page`, `config`, `data`, `object` |
| label | Required | `string` | Ярлык модели |
| описание | | `string` | Описание модели. Используется некоторыми CMS. |
| fields | | `list` of `objects` | Список моделей месторождений |

## Начните использовать тему Libris

Мы оснастили эту тему мощными функциями, которые помогут вам создать потрясающую документацию для вашего текущего или следующего проекта.

<br>

**Почему бы не начать использовать эту тему уже сегодня?**

<a href="https://www.stackbit.com/" class="button">Join Stackbit</a>
