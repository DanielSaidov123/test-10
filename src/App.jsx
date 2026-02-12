import { useState } from "react";
import "./App.css";
import data from "../terrorists_data.json";
import Table from "./components/table";
import Input from "./components/input";
import Butten from "./components/Butten";

function App() {
  const [datat, setData] = useState(data);

  const [filteredData, setFilteredData] = useState();

  function searchByName(e) {
    setData(datat.filter((d) => d.name === e.target.value));
  }

    function serchNumberofattacks(e) {
    setData(datat.filter((d) => +d.attacksCount  === +e.target.value));
  }
    function filteractiv() {
 
    setData(datat.filter((d) => d.status  === 'active'));
  }
   function filterq() {
 
    setData(datat.filter((d) => d.status  === 'quiet'));
  }
     function filterd() {
 
    setData(datat.filter((d) => d.status  === 'dead'));
  }
       function filterA() {
 
    setData(datat.filter((d) => d.status  === 'agent'));
  }
  return (
    <>
      <Input setInput={setFilteredData} data={datat} onChnage={searchByName} namee="name" />
      <Input setInput={setFilteredData} data={datat} onChnage={serchNumberofattacks} namee="number"/>
      <Butten setInput={setFilteredData} data={datat} onClick={filteractiv} namee="active"/>
      <Butten setInput={setFilteredData} data={datat} onClick={filterq} namee="quiet"/>
      <Butten setInput={setFilteredData} data={datat} onClick={filterd} namee="dead"/>
      <Butten setInput={setFilteredData} data={datat} onClick={filterA} namee="agent"/>
      <Table data={datat} />
    </>
  );
}

export default App;
