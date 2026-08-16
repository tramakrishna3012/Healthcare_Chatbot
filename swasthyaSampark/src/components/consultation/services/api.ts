
const BACKEND_URL = (import.meta.env.VITE_BACKEND_URL as string) || `http://localhost:3001`;
const ML_URL = (import.meta.env.VITE_ML_URL as string) || "http://127.0.0.1:8000";

export {
    BACKEND_URL,
    ML_URL,
};
