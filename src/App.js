import { Navigate } from "react-router-dom";
import {
  Routes,
  Route
  } from "react-router-dom";
import "./styles/globalStyles/App.css"
import Home from "./pages/Home"
import {React,useEffect,useState,memo} from 'react'



//Importaciones de los componentes o vistas de las empresas
import {CompanyAutoboy} from "./companies/Autoboy/CompanyAutoboy"
import  NavbarHomeCell  from "./components/Navbars/NavbarHomeCell";
import  NavBarHomeDesktop  from "./components/Navbars/NavBarHome/NavBarHomeDesktop";
import { TerminosCondiciones } from "./pages/TerminosCondiciones";


const App = () => {


  const [isNarrowScreen, setIsNarrowScreen] = useState(false);
  
  useEffect(() => {
    // set initial value
    const mediaWatcher = window.matchMedia("(max-width: 900px)")
    setIsNarrowScreen(mediaWatcher.matches);

    //watch for updates
    function updateIsNarrowScreen(e) {
      setIsNarrowScreen(e.matches);
    }
    mediaWatcher.addEventListener('change', updateIsNarrowScreen)

    // clean up after ourselves
    return function cleanup() {
      mediaWatcher.removeEventListener('change', updateIsNarrowScreen)
    }
  },[])



  
  //Array con los nombres de url de las empresas y llamado a su componente
  const Companies = [
    {
      id:1,
      companyName:"Autoboy",
      componentName:<CompanyAutoboy/>
    },
    {
      id:2,
      companyName:"Sugamuxi",
      componentName:<CompanyAutoboy/>
    },
    {
      id:3,
      companyName:"Cootransmalaga",
      componentName:<CompanyAutoboy/>
    },
    {
      id:4,
      companyName:"Coomotor",
      componentName:<CompanyAutoboy/>
    }
  ]









  const TL = "Teletiquete"
  return (
    <div className="App">
        {isNarrowScreen ? <NavbarHomeCell/> : <NavBarHomeDesktop/>}
        <Routes>
          <Route path={`/${TL}`} element={<Home/>}/>
          <Route path={`/${TL}/TerminosYCondiciones`} element={<TerminosCondiciones/>}/>
          <Route path={`/${TL}/PoliticasPrivacidad`} element={<TerminosCondiciones/>}/>
          
          {/*recorrido del array ,con las url y los llamado, para crear las rutas  */}
          {Companies.map((values)=>{
            return(
              <Route key={values.id} path={`/${TL}/${values.companyName}`} element={values.componentName}/>
            )
          })}
          <Route path="*" element={<Navigate to={`/${TL}`}/>}/>
        </Routes> 
    </div>
  );
}


export default memo(App);
