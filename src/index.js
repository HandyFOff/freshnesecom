import React from 'react'
import { createRoot } from 'react-dom/client'
import './sass/style.scss'
import App from './App.js'

const root = document.getElementById('root');
const app = createRoot(root)
app.render(<App/>)