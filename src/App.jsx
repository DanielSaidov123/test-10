import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from '../terrorists_data.json'
import Table from './components/table'

function App() {
  const [datat, setData] = useState(data)
  
  return (
    <>
    <Table key={1000} name="name" attacksCount='attacksCount' img='img' organization='organization' summary='summary'  status= 'status'/>
    {datat.map((s,i)=><Table key={i} name={s.name} attacksCount={s.attacksCount} img={s.imageUrl?s.imageUrl:"https://picsum.photos/400/400?random=3"} organization={s.organization} summary={s.relationToIsraelSummary} status={s.status}/>)}
    </>
  )
}

export default App
