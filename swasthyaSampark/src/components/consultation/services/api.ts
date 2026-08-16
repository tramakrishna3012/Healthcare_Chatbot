
const metaEnv = (import.meta as any).env || {};
const isDev = metaEnv.DEV;

const BACKEND_URL = (typeof metaEnv.VITE_BACKEND_URL === 'string' && metaEnv.VITE_BACKEND_URL.trim() !== '')
    ? metaEnv.VITE_BACKEND_URL
    : (isDev ? 'http://localhost:3001' : '');

const ML_URL = (typeof metaEnv.VITE_ML_URL === 'string' && metaEnv.VITE_ML_URL.trim() !== '')
    ? metaEnv.VITE_ML_URL
    : (isDev ? 'http://127.0.0.1:8000' : '');

export {
    BACKEND_URL,
    ML_URL,
};
