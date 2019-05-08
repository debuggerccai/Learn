module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
	    ? '/production-sub-path/'
	    : '/',
	// 是否开启 eslint 语法检查
    lintOnSave: process.env.NODE_ENV !== 'production',
    // 是否使用包含运行时编译器的 Vue 构建版本
  	runtimeCompiler: true,
  	// 是否需要 source map, 关闭以加速生产环境构建
  	productionSourceMap: false,
  	// 完整选项查看 https://webpack.js.org/configuration/dev-server/
  	devServer: {
  		host: '0.0.0.0',
  		hotOnly: true,
  		open: true,
  		// 完整选项查看 https://github.com/chimurai/http-proxy-middleware#proxycontext-config
  		proxy: {
  			'/api': {
		        target: 'http://127.0.0.1',
		        // ws: true,
		        // changeOrigin: true
		      },
  		}
  	},
  	css: {
  		modules: false,
  		// 是否将组件中的 CSS 提取至一个独立的 CSS 文件中, 默认生产环境开启, 开发环境关闭
  		extract: process.env.NODE_ENV === 'production',
  		// 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能
  		sourceMap: false,
  		// 向 CSS 相关的 loader 传递选项
  		loaderOptions: {
  			// // 给 less-loader 传递选项
  			less: {
  				// @/ 是 src/ 的别名
        		// 所以这里假设你有 `src/variables.scss` 这个文件
  				data: `@import "~@/assets.less";`
  			}
  		}
  	},
    pages: {
	    index: {
	      // page 的入口
	      entry: 'src/main.js',
	      // 模板来源
	      template: 'public/index.html',
	      // 在 dist/index.html 的输出
	      filename: 'index.html',
	      // 当使用 title 选项时，
	      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
	      title: 'Index Page',
	      // 在这个页面中包含的块，默认情况下会包含
	      // 提取出来的通用 chunk 和 vendor chunk。
	      chunks: ['chunk-vendors', 'chunk-common', 'index']
	    },
	    // 当使用只有入口的字符串格式时，
	    // 模板会被推导为 `public/subpage.html`
	    // 并且如果找不到的话，就回退到 `public/index.html`。
	    // 输出文件名会被推导为 `subpage.html`。
	    // subpage: 'src/main.js'
  	}
}