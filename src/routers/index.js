import Loadable from "react-loadable"
import home from './home'

let config = [
    ...(home(Loadable))
]

export default config