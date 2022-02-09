---
title: Управление контентом
excerpt: >-
  В этом разделе вы узнаете, как добавить подсветку синтаксиса, примеры, выноски
  и многое другое.
seo:
  title: Manage Content
  description: Это страница управления содержимым
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Manage Content
      keyName: property
    - name: 'og:description'
      value: Это страница управления содержимым
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: Manage Content
    - name: 'twitter:description'
      value: Это страница управления содержимым
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

В этой теме доступны два типа выносок: **примечание** и **важное**. Чтобы добавить призыв к действию в документацию, просто добавьте следующий код `html` с классом `important` или `note`. Как в приведенном ниже примере.

### Пример HTML

Скопируйте код и измените эти блоки в соответствии с вашими потребностями.

```
<div class="important">
  <strong>Важно:</strong> 
  Это "Важно" блок текста для вызова.
  Этот блок обозначает предупреждение или предостережение. 
  Используйте его для важного сообщения. 
</div>
```

```
<div class="note">
  <strong>Примечание:</strong> 
  Это "Примечание" блок текста для вызова. 
  Этот блок обозначает общее примечание.
</div>
```

### Живой пример

<div class="important">
  <strong>Важно:</strong> 
  Это "Важно" блок текста для вызова. 
  Этот блок обозначает предупреждение или предостережение.
  Используйте его для важного сообщения. 
</div>

<div class="note">
  <strong>Примечание:</strong> 
  Это "Примечание" блок текста для вызова. 
  Этот блок обозначает общее примечание.
</div>

## Таблицы

Вы можете создавать таблицы с помощью markdown, чтобы помочь вам организовать информацию. Чтобы добавить таблицу, используйте три или более дефиса (---) для создания заголовка каждой колонки, а также используйте трубы (|) для разделения каждой колонки, как в примере ниже.

| Title | Title |
| ------| ----- |
| Text  | Text  |
| Text  | Text  |
