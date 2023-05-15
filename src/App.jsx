import { useState } from 'react'
import Card from './components/card/Card'

function App() {
  const [count, setCount] = useState(0)

  const data1 = {
    imageData: "https://placehold.co/600x400",
    cardTitleData: "This is the title!",
    cardBodyData: "Lorem ipsum etc."
  }
  const data2 = {
    imageData: "https://placehold.co/600x400",
    cardTitleData: "This is the second title!",
    cardBodyData: "NOT Lorem ipsum etc."
  }
  const data3 = {
    imageData: "https://placehold.co/600x400",
    cardTitleData: "This is the third title!",
    cardBodyData: "MaYbE Lorem ipsum etc."
  }

  return (
    <section className='app'>
      <Card data={data1} />
      <Card data={data2} />
      <Card data={data3} />
    </section>
  )
}

export default App
