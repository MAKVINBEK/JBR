import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import HomePages from './pages/homepages/homepages';
import WhoHelp from './pages/whoHelp/whoHelp';
import { Routes, Route, useLocation } from 'react-router-dom';
import WhoHelpend from './pages/whoHelpend/whoHelpend';
import News from './pages/news/news';
import Contact from './pages/contact/contact';
import PatientDetail from './pages/patiendDetail/patiendDetail';
import WhoHelpendPatient from './pages/whoHelpend/whoHelpendPatient/whoHelpendPatient';
import NewsPage from './pages/news/newsPage';
import PaymentPage from './pages/oplataPage/paymentPage';
import QRGenerator from './pages/QrCodePage/QrGeneration';
import User from './pages/user/User';
import { ToastContainer, toast } from "react-toastify";
import WhoHelpOplata from './pages/whoHelp/whoHelpOplata/whoHelpOplata';
import ScrollToTop from './ScrollTop';

function App() {

  const location = useLocation();
  const hideHeaderRoutes = ["/qrCodePage"];
  return (
    <div className="App">
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
       <ScrollToTop/>
<ToastContainer position="top-right" autoClose={3000} />


      <Routes>
        <Route path='/' element={<HomePages />} />
        <Route path='/whoToHelp' element={<WhoHelp />} />
        <Route path='/whoHelpend' element={<WhoHelpend/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/patient/:id' element={<PatientDetail/>}/>
        <Route path='/patienthelpend/:id' element={<WhoHelpendPatient/>}/>
        <Route path='/newsPage/:id' element={<NewsPage/>}/>
        <Route path='/oplataPage' element={<PaymentPage/>}/>
        <Route path='/qrCodePage' element={<User/>}/> 
        <Route path='/qr' element={<QRGenerator/>}/>
        <Route path='/whoHelpOplata/:name' element={<WhoHelpOplata/>}/>
      </Routes>
      {!hideHeaderRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;

