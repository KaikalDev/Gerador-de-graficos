import React, { useEffect, useState } from 'react'
import { JsonBoxContainer } from './styles'
import Editor, { useMonaco } from '@monaco-editor/react'
import { Colors } from '../../styles'
import { FiUpload } from 'react-icons/fi'
import { validateJsonKeyValueNumber } from '../../utils'

const JsonBox = () => {
  const [jsonText, setJsonText] = useState('{\n\n}')
  const [error, setError] = useState('')
  const monaco = useMonaco()

  const handleEditorChange = (value: string | undefined) => {
    const text = value ?? ''
    setJsonText(text)

    try {
      const parsed = JSON.parse(text)

      const validationError = validateJsonKeyValueNumber(parsed)
      if (validationError) {
        setError(validationError)
        return
      }

      setError('')
    } catch (err: any) {
      setError(err.message)
    }
  }

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

  return (
    <JsonBoxContainer>
      <div>
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

        <label htmlFor="jsonUpload" className="file-label">
          <FiUpload />
          Carregar JSON
        </label>

        <input
          id="jsonUpload"
          type="file"
          accept="application/json"
          className="file-input"
        />
      </div>
      {error && <p className="Error">Erro: {error}</p>}
    </JsonBoxContainer>
  )
}

export default JsonBox
