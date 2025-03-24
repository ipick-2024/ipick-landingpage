import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import '@fontsource/poppins'
import "./assets/ProximaNova-Regular.otf"
import "./assets/ProximaNovaBold.otf"
const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
