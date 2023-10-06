const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
 
module.exports = env => {
  return {
    plugins: [
      new Dotenv({
        path: `./.env${env.file ? `.${env.file}` : ''}`
      })
    ]
  }
}
