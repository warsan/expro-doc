# ✨ Libris Nextjs Theme ✨

Это "Libris" Стэкбита. тема, построенная с использованием [Next.js](https://nextjs.org/) и
на основе содержимого, хранящегося в файлах.

Нажмите на кнопку ниже, чтобы создать новый сайт на основе этой темы с помощью Stackbit:

<p align="center">
  <a href="https://app.stackbit.com/create?theme=https://github.com/stackbit-themes/libris-nextjs&utm_source=theme-readme&utm_medium=referral&utm_campaign=stackbit_themes"><img alt="Create with Stackbit" src="https://assets.stackbit.com/badge/create-with-stackbit.svg"/></a>
</p>

[Живая демонстрация сайта](https://themes.stackbit.com/demos/libris/)

<img src="https://themes.stackbit.com/images/libris-demo-1024x768.png" width="600">

Тема может быть использована для создания статического веб-сайта, который размещается на платформе бессерверного развертывания, например [Netlify](https://www.netlify.com). 
Содержимое сайта хранится в git вместе с остальным кодом сайта.

При развертывании сайта [Sourcebit](https://github.com/stackbithq/sourcebit) считывает содержимое сайта из файлов и предоставляет его Next.js. Как только Next.js завершает генерацию статического веб-сайта, [Netlify](https://www.netlify.com) размещает статические файлы в своей CDN.

[Sourcebit](https://github.com/stackbithq/sourcebit) и его плагины, в частности [`sourcebit-source-filesystem`](https://github.com/stackbithq/sourcebit-source-filesystem) и [`sourcebit-target-next`](https://github.com/stackbithq/sourcebit-target-next), используются для чтения содержимого сайта из файлов, его нормализации и предоставления страницам Next.js. 
Он также устанавливает живые обновления в режиме разработки, позволяя вам обновлять файлы контента и мгновенно видеть обновления в браузере.


## Быстрый старт 🏎

[Создать сайт](https://app.stackbit.com/create?theme=https://github.com/stackbit-themes/libris-nextjs&utm_source=theme-readme&utm_medium=referral&utm_campaign=stackbit_themes) из этой темы с помощью Stackbit.

Stackbit выполнит для вас следующие действия

- Создаст новый репозиторий GitHub с содержимым этого репозитория.
- Создаст сайт [Netlify](https://www.netlify.com), подключенный к репозиторию GitHub
- Развернёт сайт Netlify.
- Создаст "фиксацию" webhook в GitHub, который будет запускать развертывание Netlify, как только новый коммит будет опубликован на GitHub.
- Создайте проект Stackbit, который позволит вам редактировать ваш сайт с помощью визуального редактирования на странице. 


## Editing Content 📝

Once Stackbit creates a site, you can start editing the content using the free
on-page editing experience provided by the [Stackbit Studio](https://stackbit.com?utm_source=project-readme&utm_medium=referral&utm_campaign=user_themes).

[![](https://i3.ytimg.com/vi/zd9lGRLVDm4/hqdefault.jpg)](https://stackbit.link/project-readme-lead-video)

Here's a few resources to get you started:

- 📺 &nbsp; [Editing Content](https://stackbit.link/project-readme-editing-video)
- 📺 &nbsp; [Adding, Reordering and Deleting Items](https://stackbit.link/project-readme-adding-video)
- 📺 &nbsp; [Collaboration](https://stackbit.link/project-readme-collaboration-video)
- 📺 &nbsp; [Publishing](https://stackbit.link/project-readme-publishing-video)
- 📚 &nbsp; [Stackbit Documentation](https://stackbit.link/project-readme-documentation)

If you need a hand, make sure to check the [Stackbit support page](https://stackbit.link/project-readme-support).


## Develop Locally

1. [Create a site](https://app.stackbit.com/create?theme=https://github.com/stackbit-themes/libris-nextjs&utm_source=theme-readme&utm_medium=referral&utm_campaign=stackbit_themes) from this theme using Stackbit.

1. Once finished, you will be redirected to Stackbit Studio where you will be
   able to edit the content using the free on-page editing experience, and
   publish new versions of your site.

1. To further develop your site, clone the generated repository.

1. Install dependencies

       npm install
       
1. Start the Next.js local development server:

        npm run develop

1. Open [http://localhost:3000/](http://localhost:3000/) in the browser to see
   your site. You can now edit the site contents, and the browser will
   live-update your changes. 🎉


## Building for production 🏗

To build a static site for production, or test locally how it works, run the
following command:

    npm run build

The exported site will be written to `out` folder. The contents of this folder 
can be deployed by serverless deployment platform such as [Netlify](https://www.netlify.com).
You can start a local server serving the static files from the `out` folder, for
example by installing and running `http-server`:

    npm install http-server -g
    http-server out
