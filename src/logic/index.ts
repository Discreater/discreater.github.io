export * from './dark';

export const isDev = import.meta.env.DEV;

export const buildInfo = {
  buildTime: import.meta.env.VITE_BUILD_DATE,
  buildCommitHash: import.meta.env.VITE_BUILD_COMMIT_HASH,
}

