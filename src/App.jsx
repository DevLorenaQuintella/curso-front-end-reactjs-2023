
import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'


function App() {
  const [itens, setItens] = useState ([])
//useState tras duas coisas:
//1. O estado contendo o valor
//2. A função que atualiza o valor do estado
//Quando executada, a função também renderiza o componente automaticamente

  async function carregarDadosApi (){

    const response = await fetch ("https://rickandmortyapi.com/api/character/")

    const json = await response.json()

    const results = json.results

    setItens(results)

  }
  //1.Função contendo o efeito que será protegido pelo useEffect
  //2.Dependências que controlam e executam do useEffect. Array vazio para executar apenas 1 vez.

  useEffect(
    function() {
    carregarDadosApi()
  }, [])
  
  return (
    <>
    {itens.map(function (item, index) {
    return <Card item={item} key={`card_char_${index}`}/>
    })}
    
    
    </>
  )
}

export default App
