import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Practice from './Practice';
import Counter from './Counter';
import ProfileCard from './ProfileCard';
import DynamicList from './DynamicList';
import CrudOperation from './CrudOperation';
import CheckBox from './checkBox';
import SearchImage from './Axios';
import Books from './components/Books';
import AgeCalculaor from './AgeCalculaor';
import CounterPage from './components/CounterPage';
// import ImageShow from './components/ImageShow';
// import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
const rest = {
  id:"123"
}
root.render(
  <React.StrictMode>
    {/* <Practice/> */}
    {/* <Counter/>  */}
    {/* <App/> */}
    {/* <ProfileCard color={"red"} fontSize={42} border={"2px solid powderblue"} rest={rest}/> */}
    {/* <DynamicList/> */}
    {/* <SearchImage/> */}
    {/* <CrudOperation/>
    <CheckBox/> */}
    {/* <Books/> */}
    <AgeCalculaor/>
    <CounterPage initialCount={0}/>
    {/* <ImageShow/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
