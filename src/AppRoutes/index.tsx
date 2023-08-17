import { createRoot } from 'react-dom/client'
import App from '../App'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import OGEmailEditor from '../Pages/OGEmailEditor'
import Pdfeditor from '../Pages/PDFEditor'

export const AppRoutes = () => <Routes>
  <Route path='email' element={<OGEmailEditor />} />
  <Route path='pdf' element={<Pdfeditor />} />
</Routes>
