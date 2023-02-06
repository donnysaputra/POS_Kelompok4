import { Routes } from 'react-router-dom';
import './App.css';
// import LoginPage from './pages/loginpage';
import routes from "./routes/routes"
function App() {
  return (
   <Routes key={route}>
    {routes.map((val,key)=> {
      return(
        <Route exact path={val.path} element={val.element} key={key}></Route>
        
      )
    })}

   </Routes>
  )
}
export default App;
