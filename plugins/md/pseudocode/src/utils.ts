export function isString(str: any): str is string {
  return typeof str === 'string';
}

export function isObject(obj: any): obj is Record<string, any> {
  return (typeof obj === 'object' && (Object.prototype.toString.call(obj) === '[object Object]'));
}

export function toString(obj: any): string {
  if (!isObject(obj))
    return `${obj}`;

  const parts = [];
  for (const member in obj)
    parts.push(`${member}: ${toString(obj[member])}`);
  return parts.join(', ');
}

export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];
