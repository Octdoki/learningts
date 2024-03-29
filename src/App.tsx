import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Store'
import { Address, Restaurant } from './model/restaurant';
import BestMenu from './BestMenu';

let data:Restaurant ={
  name : '도돌식당',
  category : 'Chinese',
  address : {
    city : 'Incheon',
    detail : 'songdo',
    zipcode : 123456
  },
  menu : [{name : 'zzajang', price : 2500, category : 'noodle'}, {name : 'zzamBbong', category : 'noodle', price : 4500}, {name : 'friedR', price : 5000, category : 'rice'}]

}

const App:React.FC =()=> {
  const [myRest, setMyRest] = useState<Restaurant>(data)
  const changeAddr =(addr : Address)=>{
    setMyRest({...myRest, address:addr})
  }
  const showBestMenu =(name : string) =>{
    return name
  }
  return (
    <div className="App">
      <Store info={myRest} changeAddr={changeAddr}/>
      {/* <BestMenu name="탕수육" category="사이드" price={12000} showBestMenu={showBestMenu}/> */}
      <BestMenu name="탕수육" category="사이드"  showBestMenu={showBestMenu}/>
    </div>
  );
}

export default App;
