import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'

import LandingPage from "./pages/LandingPage.tsx";
import SurveyPage from "./pages/SurveyPage.tsx";
import ConsultationPage from "./pages/ConsultationPage.tsx";
import Patient from "./components/consultation/patient/Patient.tsx";
import ChatBot from "./components/consultation/Chatbot/Chat.tsx";
import Doctor from "./components/consultation/Doctor/Doctor.tsx";
import Logout from "./components/consultation/Logout/Logout.tsx";
import Schedule from "./components/consultation/Doctor/Schedule.tsx";
import Room from "./components/consultation/Doctor/Room.tsx";
import PatientDataVisual from "./components/consultation/Doctor/PatientDataVisual.tsx";
import PageNotFound from "./components/consultation/PageNotFound/PageNotFound.tsx";
import RequestConsultation from "./components/consultation/patient/RequestConsulation.tsx";
import UploadReports from "./components/consultation/patient/UploadReports.tsx";
import deferRoleChecking from "./components/consultation/deferRoleChecking";
import deferRoleCheckingAndDoctors from "./components/consultation/deferRoleCheckingAndDoctors";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Analytics } from "@vercel/analytics/react";
import ServicesPage from "./pages/ServicesPage.tsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.tsx";
import TermsOfServicePage from "./pages/TermsOfServicePage.tsx";

const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/survey", element: <SurveyPage /> },
    { path: "/consultation", element: <ConsultationPage /> },
    { path: "/consultation/doctor", element: <Doctor /> },
    { path: "/consultation/patient", element: <Patient /> },

    {
        path: "/consultation/chat_bot",
        element: <ChatBot />,
        loader: deferRoleChecking,
    },
    { path: "/consultation/logout", element: <Logout /> },
    { path: "/consultation/doctor/schedule", element: <Schedule /> },
    { path: "/consultation/doctor/schedule/:id", element: <Room /> },
    {
        path: "/consultation/doctor_data_visualization",
        element: <PatientDataVisual />,
    },
    {
        path: "/consultation/patient_request_consultation",
        element: <RequestConsultation />,
        loader: deferRoleCheckingAndDoctors,
    },
    {
        path: "/consultation/upload_reports",
        element: <UploadReports />,
        loader: deferRoleChecking,
    },
    { path: "/services", element: <ServicesPage/>},
    { path: "/privacy-policy", element: <PrivacyPolicyPage /> },
    { path: "/privacy", element: <PrivacyPolicyPage /> },
    { path: "/terms-of-service", element: <TermsOfServicePage /> },
    { path: "/terms", element: <TermsOfServicePage /> },
    { path: "*", element: <PageNotFound /> },
]);

const googleClientId =
    (import.meta as any).env?.VITE_GOOGLE_CLIENT_ID ||
    "926963252224-8dtmm9acr92712d9amrrqb3of7s28m20.apps.googleusercontent.com";

const isVercel = typeof window !== 'undefined' && window.location.hostname.includes('vercel.app');

function App() {
    return (
        <GoogleOAuthProvider clientId={googleClientId}>
            <RouterProvider router={router} />
            {isVercel && <Analytics />}
        </GoogleOAuthProvider>
    );
}

export default App;