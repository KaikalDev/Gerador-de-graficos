import Grafico from '../Components/Grafico'
import JsonBox from '../Components/JsonBox'

const mockData = {
  Janeiro: 12,
  Fevereiro: 20,
  Março: 15,
  Abril: 30
}

const Page = () => {
  return (
    <main>
      <h1>Gerador de Gráficos</h1>
      <JsonBox />
      <Grafico data={mockData} />
    </main>
  )
}

export default Page
