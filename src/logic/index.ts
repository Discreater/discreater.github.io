export * from './dark';

export const isDev = import.meta.env.DEV;

export const enabelEditor = isDev || import.meta.env.VITE_ENABLE_EDITOR;
