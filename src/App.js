import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from './homePage'
import AboutPage from './aboutPage'
import ArticleList from './articleList'
import ArticleDetails from './articleDetails'
import MenuBar from './menuBar'
import { data } from "./data"
function App() {

  return (
    <div className="container">
      <div className="row">

        <Router>
          <MenuBar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/articleList' element={<ArticleList />} />
            <Route path='/articleList/:name' element={<ArticleDetails data={data} />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
