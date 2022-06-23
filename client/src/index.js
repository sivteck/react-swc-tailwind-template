import { App } from './Components/App.js'

const { createRoot } = window.ReactDOM
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />)
