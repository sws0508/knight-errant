module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://m.youxiake.com',  //设置跨域的接口的协议 域名 端口
        ws: true, 
        changeOrigin: true,  //开启反向代理
        pathRewrite: {
　　　　　　　　　　　　'^/api': ''  
　　　　　　　　　　}
      }
    }
  }
}