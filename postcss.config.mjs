import autoprefixer from 'autoprefixer'
import postNested from 'postcss-nested'

export default {
  plugins: [
    autoprefixer(),
    postNested(),
  ],
}
