import { useState } from 'react';
import './App.css'
import ButtonNumero from './Components/ButtonNumero/index'
import ButtonIgual from './Components/ButtonIgual/index'
import ButtonOperacoes from './Components/ButtonOperacoes/index'
import ButtonEspeciais from './Components/ButtonEspeciais/index'

function App() {
   const [result, setResult] = useState('')
   const [oldResult, setOldResult] = useState('')
   const [operador, setOperador] = useState('')

   function clickHandle(e) {
    if(result === 0){
      setResult(e.target.value)
    }else{
      setResult(result + e.target.value)
    }
   }

   function clear(){
    setResult(0)
    setOldResult('')
    setOperador('')
   }

   function porcentagem(){
    setResult(result / 100)
   } 

   function changeSign(){
    if(result > 0 ){
      setResult(-result)
    }else{
      setResult(Math.abs(result))
    }
   }

   function operadorHandler(e){
    setOperador(e.target.value)
    setOldResult(result)
    setResult(0)
   }

   function calcular(){
    if(operador === "/"){
      setResult(parseFloat(oldResult) / parseFloat(result))
      setOperador('')
      setOldResult('')
    }else if(operador === "*"){
      setResult(parseFloat(oldResult) * parseFloat(result))
      setOperador('')
      setOldResult('')
    }else if(operador === "-"){
      setResult(parseFloat(oldResult) - parseFloat(result))
      setOperador('')
      setOldResult('')
    }else if(operador === "+"){
      setResult(parseFloat(oldResult) + parseFloat(result))
      setOperador('')
      setOldResult('')
    }
   }


  return (
    <>
      <body id='Container-Primario'>
        <div id="Container-Principal">
          <header id='Container-Resultado-Historico'>
            <p className="historico" id="historico-resultado">{oldResult} {operador}</p>
            <p className="resultado" id="historico-resultado">{result} </p>
          </header>
          <main id='Container-butoes'>
            <div className='Container-Numeros' id='Primeiro-Container'>
              <ButtonEspeciais
                Numero={"AC"}
                onClick={clear}
              />
              <ButtonEspeciais
                Numero={"+/-"}
                onClick={changeSign}
              />
              <ButtonEspeciais
                Numero={"%"}
                onClick={porcentagem}
              />
              <ButtonOperacoes
                value="/"
                Numero={"/"}
                onClick={operadorHandler}
              />
            </div>
            <div className='Container-Numeros' id='Segundo-Container'>
              <ButtonNumero
                value="7"
                Numero={"7"}
                onClick={clickHandle}
              />
              <ButtonNumero
                value="8"
                Numero={"8"}
                onClick={clickHandle}
              />
              <ButtonNumero
                value="9"
                Numero={"9"}
                onClick={clickHandle}
              />
              <ButtonOperacoes
                value="*"
                Numero={"X"}
                onClick={operadorHandler}
              />
            </div>
            <div className='Container-Numeros' id='Terceiro-Container'>
              <ButtonNumero
                value="4"
                Numero={"4"}
                onClick={clickHandle}
              />
              <ButtonNumero
                value="5"
                Numero={"5"}
                onClick={clickHandle}
              />
              <ButtonNumero
                value="6"
                Numero={"6"}
                onClick={clickHandle}
              />
              <ButtonOperacoes
                value="-"
                Numero={"-"}
                onClick={operadorHandler}
              />
            </div>
            <div className='Container-Numeros' id='Quarto-Container'>
              <ButtonNumero
                value="1"
                Numero={"1"}
                onClick={clickHandle}
              />
              <ButtonNumero
                value="2"
                Numero={"2"}
                onClick={clickHandle}
              />
              <ButtonNumero
                value="3"
                Numero={"3"}
                onClick={clickHandle}
              />
              <ButtonOperacoes
                value="+"
                Numero={"+"}
                onClick={operadorHandler}
              />
            </div>
            <div className='Container-Numeros' id='Quinto-Container'>
              <ButtonNumero
                value="0"
                Numero={"0"}
                onClick={clickHandle}
              />
              <ButtonNumero
                Numero={","}
              />
              <ButtonIgual
                Numero={"="}
                onClick={calcular}
              />
              
            </div>
          </main>
        </div>
        <h1 id='titulo'>Calculadora</h1>
      </body>
    </>
  );
}

export default App;
