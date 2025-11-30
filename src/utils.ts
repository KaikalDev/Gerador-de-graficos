export const validateJsonKeyValueNumber = (obj: any) => {
  if (typeof obj !== 'object' || Array.isArray(obj) || obj === null) {
    return 'O JSON deve ser um objeto simples de chave/valor.'
  }

  for (const [key, value] of Object.entries(obj)) {
    if (typeof key !== 'string') {
      return `A chave "${key}" não é uma string.`
    }
    if (typeof value !== 'number') {
      return `O valor de "${key}" deve ser um número.`
    }
  }

  return ''
}
