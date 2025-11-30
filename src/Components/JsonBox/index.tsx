import React, { useEffect, useState } from 'react'
import { JsonBoxContainer } from './styles'
import Editor, { useMonaco } from '@monaco-editor/react'
import { Colors } from '../../styles'

const JsonBox = () => {
  const [jsonText, setJsonText] = useState('{\n\n}')
  const [error, setError] = useState('')
  const monaco = useMonaco()

  useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme('github-dark', {
        base: 'vs-dark',
        inherit: true,
        rules: [
          { token: '', foreground: 'c9d1d9' },
          { token: 'string', foreground: 'a5d6ff' },
          { token: 'number', foreground: 'ffa657' },
          { token: 'keyword', foreground: 'ff7b72' },
          { token: 'operator', foreground: '79c0ff' },
          { token: 'delimiter', foreground: 'c9d1d9' },
          { token: 'comment', foreground: '8b949e' }
        ],
        colors: {
          'editor.background': Colors.bg_code,
          'editor.border': Colors.border,
          'editor.foreground': '#c9d1d9',
          'editorCursor.foreground': '#58a6ff',
          'editor.lineHighlightBackground': '#161b22',
          'editorLineNumber.foreground': '#6e7681',
          'editorLineNumber.activeForeground': '#c9d1d9',
          'editor.selectionBackground': 'rgba(56,139,253,0.4)'
        }
      })

      monaco.editor.setTheme('github-dark')
    }
  }, [monaco])

  const handleEditorChange = (value: string | undefined) => {
    const text = value ?? ''
    setJsonText(text)

    try {
      JSON.parse(text)
      setError('')
    } catch (err: any) {
      setError(err.message)
    }
  }

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (!file.name.endsWith('.json')) {
      setError('O arquivo deve ser um .json')
      return
    }
    const reader = new FileReader()
    reader.onload = (event: ProgressEvent<FileReader>) => {
      const result = event.target?.result

      if (typeof result !== 'string') {
        setError('O arquivo não contém texto válido.')
        return
      }

      try {
        JSON.parse(result)
        setError('')
        setJsonText(result)
      } catch (err: any) {
        setError('JSON inválido no arquivo: ' + err.message)
      }
    }
    reader.readAsText(file)
  }

  return (
    <JsonBoxContainer>
      <input type="file" accept="application/json" onChange={handleUpload} />

      <Editor
        height="300px"
        defaultLanguage="json"
        value={jsonText}
        onChange={handleEditorChange}
        theme="vs-Dark"
        options={{
          minimap: { enabled: false },
          automaticLayout: true,
          tabSize: 2
        }}
      />

      {error && <p className="Error">Erro: {error}</p>}
    </JsonBoxContainer>
  )
}

export default JsonBox
