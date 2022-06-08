import './App.css';
import { Rest } from './Vebinar6/Rest/Rest'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './Pages/HomePage'
import { NotFoundPage } from './Pages/NotFoundPage'
import { Layout } from './Layout/Layout'
import {SearchImages} from './SearchImages/SearchImages'

function App() {
  return (
    <>

      <div className="App">
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<HomePage />} />
            <Route path='*' element={<NotFoundPage />} />
            <Route path='rest' element={<Rest />} />
            <Route path='searchImages' element={<SearchImages />} />
          </Route>
        </Routes>

      </div>
    </>
  );
}

export default App;
