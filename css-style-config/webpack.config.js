
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
              //aqui van los loaders 
      {
        //test: que tipo de archivo quiero reconocer (en regex)
        //use: que loader se va a encargar del tipo de extension de archivo
        test: /\.css$/,
        // use: [
        //   { loader: "style-loader" }, // Agrega el css al DOM en un <style>
        //   { loader: "css-loader" }, // interpreta los archivos css en js via import
        // ]
        //primero se ejecuta el css loader y luego style loader
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}