 
import App from './Toastwind.svelte'
import './index.css'
const app = new App({
  target: document.querySelector("body")
})
 
export default app
window.Toast = app;