import React, {useState, useEffect} from 'react';
import './App.css';
import Card from './components/Card';
import Card2 from './components/Card2';
import Logo from './components/Logo';
import Row from './components/Row'
const axios = require('axios')

const endpoint = 'https://gtl-covid-api.herokuapp.com/api/'

function App(props) {
  const [data, setdata] = useState(null)
  const [summary, setSummary] = useState(null)
  useEffect(() => {
    
    axios.get(endpoint).then(response => {
      // let summaryInitial = []
      let totalActiveInitial = 0
      let recoveriesInitial = 0
      let deathInitial = 0
      let totalCaseInitial = 0
      console.log(response)
      const covidData = response.data['Covid 19 Cases']
      
      covidData.forEach((item, index) =>{
        totalActiveInitial = totalActiveInitial + Number(item.Active)
        totalCaseInitial = totalCaseInitial = Number(item.Confirmed)
        recoveriesInitial = recoveriesInitial + Number(item.Recoveries)
        deathInitial = deathInitial = Number(item.Deaths)
      })
      setSummary([{
        title:'Total Active',
        value:totalActiveInitial,
      },
    {
      title:"Recoveries",
      value:recoveriesInitial
    },
    {
      title:'Total Deaths',
      value:deathInitial
      
    },
    {
      title:'Total Cases',
      value:totalCaseInitial
    }])
      console.log(covidData);
      setdata(covidData)

    }).catch(err => console.log(err))
    
  }, [])
  
  return (
    <div>
      <Logo />
      <div style={{display:'flex', left:'23px', postion:'relative', marginTop:'107px', justifyContent:'space-around'}}>
        {summary !== null && summary.map((item, index) => {
          return(

            <Card key={index} title={item.title} value={item.value}/>
          )
        })}
      </div>
      <div style={{display:'flex', flexDirection:'row', marginTop:'40px', marginLeft:'22px', marginRight:'22px'}}>

        <div style={{borderWidth:'1px', borderColor:'#ff0000', borderStyle:'solid', }}>
          <Row backgroundColor="rgba(255,0, 0, 0.1)" country="Country" active="Total Active" Recoveries="Recoveries" deaths="Total Death" totalCases="Confirmed"/>
          {data !== null && data.map((item, index) => {
            return(

              <Row backgroundColor="rgba(255,0, 0, 0.1)" country={item.Country} active={item.Active} Recoveries={item.Recoveries} deaths={item.Deaths} totalCases={item.Confirmed}/>
            )
          })}
        </div>
      <div style={{marginLeft:'20px', paddingRight:'20px'}}>
        <Card2 title="Health Updates" />
        <Card2 title="News Updates"/>
      </div>
    </div>

    </div>
  );
}

export default App;
