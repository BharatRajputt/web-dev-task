
import './App.css'
import Manager from './TeamMembers/Manager.jsx'
import Developer from './TeamMembers/Developer.jsx'
import Sales from './TeamMembers/Sales.jsx'
import  CompanyDescription  from './CompanyDescription/CompanyDescription.jsx'

function App() {
  return (
    <>
  
  <CompanyDescription/>
    <Manager/>
  <Developer/>
  <Sales/>
    </>
  )
}

export default App
