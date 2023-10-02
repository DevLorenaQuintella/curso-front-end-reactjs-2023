
import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import { useEffect } from 'react'

function App() {
  // const item1 = {
  //   nome: 'Naruto',
  //   imagemUrl:'https://tm.ibxk.com.br/2021/10/05/05091846887061.jpg',
  //   tags: ['Origem: Japão']
  // }
  // const item2 = {
  //   nome: 'One Piece',
  //   imagemUrl: 'https://tm.ibxk.com.br/2022/11/03/03095855664065.jpg',
  //   tags:['Origem: Japão']
  // }
  // const item3 = {
  //   nome: 'Demon Slayer',
  //   imagemUrl: 'https://tm.ibxk.com.br/2021/04/15/15130752762166.jpg'
  // }
  // const item4 = {
  //   nome: 'Hunter x Hunter',
  //   imagemUrl: 'https://tm.ibxk.com.br/2018/11/12/12084324945033.jpg'
  // }
  // const item5 = {
  //   nome: 'Jujutsu Kaisen',
  //   imagemUrl:'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F08%2Fjujutsu-kaisen-fortnite-collaboration-teaser-info-00.jpg?w=960&cbr=1&q=90&fit=max'
  // }
  // const itens = [item1, item2, item3, item4, item5]
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


  useEffect(function() {
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
