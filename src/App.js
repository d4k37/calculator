import {useState} from 'react'


function App() {
  //estados pra receber os valores
const [setembro, setSetembro] = useState(0)
const [outubro, setOutubro] = useState(0)
const [novembro, setNovembro] = useState(0)
const [dezembro, setDezembro] = useState(0)
//estados para salvar os resultados
let [rsetembro, setRsetembro] = useState(0)
let [routubro, setRoutubro] = useState(0)
let [rnovembro, setRnovembro] = useState(0)
let [rdezembro, setRdezembro] = useState(0)
let [calc, setCalc] = useState(0)
let [resultado, setResultado] = useState(0);
//estado pra salvar o consumo sugerido
let [ssetembro, setSsetembro] = useState(0)
let [soutubro, setSoutubro] = useState(0)
let [snovembro, setSnovembro] = useState(0)
let [sdezembro, setSdezembro] = useState(0)



const calcular = () =>{
  
  //retirar a porcentagem
  setRsetembro = (setembro * (calc/100))
  document.querySelector("#setembror").innerText = setRsetembro;

  setRoutubro = (outubro * (calc/100))
  document.querySelector("#outubror").innerText = setRoutubro;

  setRnovembro = (novembro * (calc/100))
  document.querySelector("#novembror").innerText = setRnovembro;

  setRdezembro = (dezembro * (calc/100))
  document.querySelector("#dezembror").innerText = setRdezembro;

  //pegar o consumo sugerido
  setSsetembro = (setembro - setRsetembro)
  document.querySelector("#setembros").innerText = setSsetembro;

  setSoutubro = (outubro - setRoutubro)
  document.querySelector("#outubros").innerText = setSoutubro;

  setSnovembro = (novembro - setRnovembro)
  document.querySelector("#novembros").innerText = setSnovembro;

  setSdezembro = (dezembro - setRdezembro)
  document.querySelector("#dezembros").innerText = setSdezembro;


  
}


  return (
   <>
  
   <div className="inputum">
   <button onClick={calcular}>Calcular</button>
   <span id="resposta"/>

   <p>Digite a sua meta de redução</p>
   <input type="number" value={calc} onChange={event => setCalc(+event.target.value)} />
    <p>Consumo informado(kwh)</p>
   <p>Setembro</p>
   <input type="number" value={setembro} onChange={event => setSetembro(+event.target.value)} />

   <p>Outubro</p>
   <input type="number" value={outubro} onChange={event => setOutubro(+event.target.value)} />

   <p>Novembro</p>
   <input type="number" value={novembro} onChange={event => setNovembro(+event.target.value)} />

   <p>Dezembro</p>
   <input type="number" value={dezembro} onChange={event => setDezembro(+event.target.value)} />
   </div>
    <p>Consumo simulado(kwh)</p>
    <p>Setembro</p>
    <span id="setembros"/>

    <span id="setembror"/>

    <p>Outubro</p>
    <span id="outubros"/>

    <span id="outubror"/>

    <p>Novembro</p>
    <span id="novembros"/>

    <span id="novembror"/>

    <p>Dezembro</p>
    <span id="dezembros"/>

    <span id="dezembror"/>
   </>
  );
}

export default App;