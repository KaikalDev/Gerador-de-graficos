import { useMemo, useState } from 'react'
import { Chart } from 'react-google-charts'
import { GraficoContainer } from './styles'
import { FiDownload } from 'react-icons/fi'

interface GraficoProps {
  data: Record<string, number>
}

const COLORS = [
  '#58a6ff',
  '#8b949e',
  '#f0883e',
  '#3fb950',
  '#d2a8ff',
  '#ff7b72'
]

const Grafico = ({ data }: GraficoProps) => {
  const entries = useMemo(() => Object.entries(data), [data])
  const [type, setType] = useState<'bar' | 'pie'>('bar')

  const chartData = useMemo(() => {
    if (type === 'bar') {
      const header: (string | { role: string })[] = [
        'Categoria',
        'Valor',
        { role: 'style' }
      ]
      const rows = entries.map(([label, value], i) => [
        label,
        Number(value),
        COLORS[i % COLORS.length]
      ])
      return [header, ...rows]
    }

    const header = ['Categoria', 'Valor']
    const rows = entries.map(([label, value]) => [label, Number(value)])
    return [header, ...rows]
  }, [type, entries])

  const baseOptions = {
    backgroundColor: 'transparent',
    titleTextStyle: { color: '#c9d1d9' },
    legend: { position: 'bottom', textStyle: { color: '#c9d1d9' } },
    hAxis: { textStyle: { color: '#c9d1d9' }, gridlines: { color: '#22272b' } },
    vAxis: { textStyle: { color: '#c9d1d9' }, gridlines: { color: '#22272b' } },
    chartArea: { width: '85%', height: '70%' },
    colors: COLORS
  } as const

  const options =
    type === 'bar'
      ? {
          ...baseOptions,
          legend: { position: 'none' },
          bar: { groupWidth: '60%' },
          tooltip: { textStyle: { color: '#000' }, showColorCode: true }
        }
      : {
          ...baseOptions
        }

  const chartType = type === 'bar' ? 'ColumnChart' : 'PieChart'
  const height = type === 'bar' ? '360px' : '350px'

  return (
    <GraficoContainer>
      <h2>Gráfico</h2>
      <div>
        <div>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as 'bar' | 'pie')}
          >
            <option value="bar">Barra</option>
            <option value="pie">Pizza</option>
          </select>
          <button>
            <FiDownload />
            Export PNG
          </button>
        </div>
        <Chart
          chartType={chartType}
          width="100%"
          height={height}
          data={chartData}
          options={options}
        />
      </div>
    </GraficoContainer>
  )
}

export default Grafico
