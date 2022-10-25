export function isString(str: any): str is string {
  return (typeof str === 'string') || (str instanceof String)
}

export function isObject(obj: any): obj is Record<string, any> {
  return (typeof obj === 'object' && (obj instanceof Object))
}

export function toString(obj: any): string {
  if (!isObject(obj))
    return `${obj}`

  const parts = []
  for (const member in obj)
    parts.push(`${member}: ${toString(obj[member])}`)
  return parts.join(', ')
}
