const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  // configureWebpack: {
  //   devtool: "eval-cheap-source-map",
  // },
  // css: {
  //   loaderOptions: {
  //     css: {
  //       url: true,
  //     },
  //   },
  // },
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
});
