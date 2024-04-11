import './App.css';
import BDN_ClassComp from './components/BDN_ClassComp';
import BDN_FuncDemo from './components/BDN_FuncDemo';

function App() {

  //khai bao bien doi tuong
  const users = {
    userName:"k22cnt3",
    passwork:"123456@",
    fistName:"Bùi Đức",
    lastName:"Nguyên"
  }

  // khai bao doi tuong ham
  function formatName(user){
    return <h2>Xin Chào, {user.fistName} {user.lastName} </h2>
  }
  return (
    <div className="App">
      <div>
        <p>FullName: {users.fullName} {users.lastName}</p>
        {formatName(users)}
      </div>
      <div>
        <BDN_FuncDemo />
        <BDN_FuncDemo userName="BDN" fullName="Bùi Đức Nguyên" age="20"/>
         <div>

          <BDN_ClassComp />
          <BDN_ClassComp company="Fit-NTU - K22CNT3" course="ReacJs" />
          <BDN_ClassComp company="Fit-NTU - K22CNT4" course="ReacJs 1" />
          <BDN_ClassComp company="Fit-NTU - K22CNT5" course="ReacJs 2" />
          <BDN_ClassComp company="Fit-NTU - K22CNT6" course="ReacJs 3" />
          
         </div>
      </div>
      
    </div>
  );
}

export default App;
