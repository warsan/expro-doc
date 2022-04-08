const _ = require("lodash");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  plugins: [
    {
      module: require("sourcebit-source-contentful"),
      options: {
        accessToken: process.env["CONTENTFUL_ACCESS_TOKEN"],
        environment: "master",
        spaceId: "1abcdefgh2ij",
      },
    },
    // сглаживание всех данных frontmatter и markdown
    ({ data }) => {
      const objects = data.objects.map((object) => {
        if (_.has(object, "frontmatter")) {
          return {
            __metadata: object.__metadata,
            ...object.frontmatter,
            markdown_content: object.markdown || null,
          };
        }
        return object;
      });

      return {
        ...data,
        objects,
      };
    },
    {
      module: require("sourcebit-target-next"),
      options: {
        liveUpdate: isDev,
        flattenAssetUrls: true,
        pages: [
          {
            path: "/{__metadata.urlPath}",
            predicate: _.matchesProperty("__metadata.modelName", "docs"),
          },
          {
            path: "/{__metadata.urlPath}",
            predicate: _.matchesProperty("__metadata.modelName", "advanced"),
          },
          {
            path: "/{__metadata.urlPath}",
            predicate: _.matchesProperty("__metadata.modelName", "blog"),
          },
          {
            path: "/{__metadata.urlPath}",
            predicate: _.matchesProperty("__metadata.modelName", "page"),
          },
          {
            path: "/{__metadata.urlPath}",
            predicate: _.matchesProperty("__metadata.modelName", "post"),
          },
        ],
        commonProps: {
          pages: {
            predicate: _.matchesProperty("__metadata.modelType", "page"),
          },
          posts: {
            predicate: _.matchesProperty("__metadata.modelName", "post"),
          },
          docs: {
            predicate: _.matchesProperty("__metadata.modelName", "docs"),
          },
          data: {
            single: true,
            predicate: _.matchesProperty(
              "__metadata.id",
              "sourcebit-source-filesystem:data"
            ),
          },
        },
      },
    },
  ],
};
