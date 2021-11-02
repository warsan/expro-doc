const sourcebit = require('sourcebit');

const sourcebitConfig = require('./sourcebit.js');

sourcebit.fetch(sourcebitConfig);

module.exports = {
    trailingSlash: true,
    devIndicators: {
        autoPrerender: false
    },
    webpack: (config, { webpack }) => {
        // Скажите webpack игнорировать просмотр файлов содержимого в папке content.
        // В противном случае webpack перекомпилирует приложение и обновит всю страницу.
        // Вместо этого в src/pages/[...slug].js используется функция "withRemoteDataUpdates" function to update the content on the page without refreshing the whole page
        //
        //
        config.plugins.push(new webpack.WatchIgnorePlugin([[/\/content\//]]));
        return config;
    }
};
