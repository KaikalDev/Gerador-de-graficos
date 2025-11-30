import { useState } from 'react'
import Grafico from '../Components/Grafico'
import JsonBox from '../Components/JsonBox'

const Page = () => {
  const [jsonText, setJsonText] = useState('{\n\n}')

  const geraData = (json: string): Record<string, number> => {
    try {
      const obj = JSON.parse(json)

      const data: Record<string, number> = {}

      Object.entries(obj).forEach(([key, value]) => {
        if (typeof value === 'number') {
          data[key] = value
        }
      })

      return data
    } catch {
      console.error('JSON inválido')
      return {}
    }
  }

  return (
    <main>
      <h1>Gerador de Gráficos</h1>
      <JsonBox jsonText={jsonText} setJsonText={setJsonText} />
      <Grafico data={geraData(jsonText)} />
    </main>
  )
}

export default Page
