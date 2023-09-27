
import './App.css'
import Card from './components/Card'

function App() {
  const item1 = {
    nome: 'Naruto',
    imagemUrl:'https://tm.ibxk.com.br/2021/10/05/05091846887061.jpg'
  }
  const item2 = {
    nome: 'One Piece',
    imagemUrl: 'https://tm.ibxk.com.br/2022/11/03/03095855664065.jpg'
  }
  const item3 = {
    nome: 'Demon Slayer',
    imagemUrl: 'https://tm.ibxk.com.br/2021/04/15/15130752762166.jpg'
  }
  const item4 = {
    nome: 'Hunter x Hunter',
    imagemUrl: 'https://tm.ibxk.com.br/2018/11/12/12084324945033.jpg'
  }
  const item5 = {
    nome: 'Jujutsu Kaisen',
    imagemUrl:'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F08%2Fjujutsu-kaisen-fortnite-collaboration-teaser-info-00.jpg?w=960&cbr=1&q=90&fit=max'
  }
  const itens = [item1, item2, item3, item4, item5]
  return (
    <>
    {itens.map(function (item) {
      return <Card item={item}/>
    })}
    
    
    </>
  )
}

export default App
