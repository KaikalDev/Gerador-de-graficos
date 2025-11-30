import { useState } from 'react'
import Grafico from '../Components/Grafico'
import JsonBox from '../Components/JsonBox'
import { validateJsonKeyValueNumber } from '../utils'

const Page = () => {
  const initialState = `
{
  "janeiro": 12,
  "fevereiro": 24,
  "março": 13,
  "maio": 32,
  "junho": 12
}
  `
  const [jsonText, setJsonText] = useState(initialState)

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

  const isValid = (() => {
    try {
      const parsed = JSON.parse(jsonText)
      return validateJsonKeyValueNumber(parsed) === ''
    } catch {
      return false
    }
  })()

  return (
    <main>
      <h1>Gerador de Gráficos</h1>
      <JsonBox jsonText={jsonText} setJsonText={setJsonText} />
      {isValid && <Grafico data={geraData(jsonText)} />}
    </main>
  )
}

export default Page
