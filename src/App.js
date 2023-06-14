import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Search from './components/kw_search/Search';
import Table from './components/kw_search/Table';
import Pagination from './components/kw_search/Pagination';
import Sort from './components/kw_search/Sort';
import Genre from './components/kw_search/Category';
import QuestionBar from './components/nl_search/QuestionBar';
import Chat from './components/nl_search/Chat';

const baseUrl = process.env.REACT_APP_API_URL
const llmUrl = process.env.REACT_APP_FLASK_API_URL

function App() {
  const [obj, setObj] = useState({})
  const [sort, setSort] = useState({sort: "rating", order: "desc"})
  const [filterCategory, setFilterCategory] = useState([])
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [nlQuestion, setNlQuestion] = useState("")
  const [NLAnswerObj, setNLAnswerObj] = useState({})

  useEffect(() => {
    console.log(baseUrl)
    const getAllProducts = async () => {
      try {
        const url = `${baseUrl}?page=${page}&sort=${sort.sort}&order=${sort.order}&category=${filterCategory.toString()}&search=${search}`
        const { data } = await axios.get(url)
        setObj(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }

    

    getAllProducts()
  }, [sort, filterCategory, page, search])

  
  const askLLM = async () => {
    console.log(llmUrl)
    console.log("LLM input: " + nlQuestion)
    const request = {
      "question": nlQuestion
    }

    try {
      const { data } = await axios.post(
        llmUrl, 
        request, 
        {headers: {"Content-Type": "application/json"}}
      )
      setNLAnswerObj(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  // useEffect(() => {
  //   // Update chat text when obj changes
  //   setChatAnswerObj(NLAnswerObj ? NLAnswerObj["answer"] : "");
  // }, [NLAnswerObj]);


  return (
    <div className='wrapper'>
      <div className='navbar'>
        <img src='https://dome-marketplace.eu/wp-content/assets/images/logo/logo-white.svg' alt='logo' className='logo ' />
        <div  className='navlink_container'>
          <Link to={'/'} className='navlink'>Search</Link>
          <Link to={'/nlsearch'} className='navlink'>NL Search</Link>
        </div>
      </div>
      <div className='body'>
        <Routes>

          {/* KW SEARCH */}
          <Route path='/' element={
            <>
              <div className='filter_container'>
                <Search setSearch={(search) => setSearch(search)} />
                <Sort sort={sort} setSort={(sort) => setSort(sort)}/>
                <Genre filterCategory={filterCategory} setFilterCategory={(category) => setFilterCategory(category)} categories={obj.categories ? obj.categories : []}/>
              </div>
              <div className='table_container'>
                <Table products={obj.products ? obj.products : []}/>
                <Pagination 
                  page={page}
                  limit={obj.limit ? obj.limit : 0} 
                  total={obj.total ? obj.total : 0}
                  setPage={(page) => setPage(page)}
                />
              </div>
            </>
          } />

          {/* NL SEARCH */}
          <Route path='/nlsearch' element={
            <div className='chat_container'>
              <Chat answerObj={NLAnswerObj ? NLAnswerObj : undefined} />
              <QuestionBar setNlQuestion={(question) => setNlQuestion(question)} askLLM={(question) => askLLM(question)}/>
            </div> 
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
