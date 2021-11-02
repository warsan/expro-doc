# Родительские элементы

## SVG.Parent

Класс SVG.Parent является базовой оболочкой для всех элементов, которые могут содержать другие элементы. SVG.Parent наследуется непосредственно от самого нижнего уровня всех классов SVG.js: SVG.Element. 

## SVG.Container
SVG.Container добавляет в стек родительского наследования ещё один уровень. Куда `SVG.Parent` привносит некоторые низкоуровневые методы, такие как `add()`, `remove()` и `has()` Where `SVG.Parent` brings some low level methods like `add()`, `remove()` and `has()` to name a few, `SVG.Container` can and should be used if you want to add your own methods. That way the `SVG.Parent` prototype remains clean. SVG.Container может и должен использоваться для добавления своих собственных методов. Таким образом, прототип SVG.Parent остается чистым. При реализации своих собственных родительских элементов, они всегда должны наследовать от SVG.Container.