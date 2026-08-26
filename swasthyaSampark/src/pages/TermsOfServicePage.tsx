import React, { useEffect } from 'react';
import { NavBar } from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';
import { FileText, AlertTriangle, Stethoscope, ShieldAlert, Cpu, UserCheck, Mail } from 'lucide-react';

const TermsOfServicePage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-[#F6F4F2]">
            <NavBar />
            <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-12">
                    {/* Header */}
                    <div className="border-b border-gray-200 pb-8 mb-8 text-center sm:text-left">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full mb-4">
                            <FileText className="w-4 h-4" />
                            <span>Legal Terms & Conditions</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                            Terms of Service
                        </h1>
                        <p className="mt-2 text-sm text-gray-500">
                            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>
                    </div>

                    {/* Critical Medical Disclaimer Banner */}
                    <div className="mb-8 p-5 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl">
                        <div className="flex items-start">
                            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                            <div className="ml-3 text-sm text-amber-800">
                                <h3 className="font-bold text-amber-900 mb-1">EMERGENCY MEDICAL DISCLAIMER</h3>
                                <p>
                                    Swasthya Sampark is NOT an emergency medical response service. If you are experiencing a life-threatening medical emergency (such as severe chest pain, shortness of breath, heavy bleeding, or loss of consciousness), please immediately call your local emergency services (e.g., 911, 112, 102) or proceed to the nearest hospital emergency department.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                                <UserCheck className="w-5 h-5 text-emerald-600" />
                                1. Acceptance of Terms
                            </h2>
                            <p>
                                By accessing, browsing, or using <strong>Swasthya Sampark</strong> ("Platform", "we", "our"), you acknowledge that you have read, understood, and agreed to be bound by these Terms of Service and our Privacy Policy. If you do not agree with any part of these terms, you must discontinue use of the platform immediately.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                                <Stethoscope className="w-5 h-5 text-emerald-600" />
                                2. Scope of Services
                            </h2>
                            <p className="mb-2">
                                Swasthya Sampark is an AI-powered healthcare enablement platform that provides:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>AI Symptom Checker:</strong> Machine learning algorithms that evaluate symptom inputs to suggest potential conditions and recommended specialist categories.</li>
                                <li><strong>HealthGPT Chatbot:</strong> An AI conversational tool providing general medical information and health query guidance.</li>
                                <li><strong>Doctor Consultation Management:</strong> Scheduling, video call connectivity (via ZEGOCLOUD), and communication portals connecting patients with licensed healthcare professionals.</li>
                                <li><strong>Medical Report Summarization:</strong> OCR text extraction and AI report summarization tools.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                                <Cpu className="w-5 h-5 text-emerald-600" />
                                3. AI Insights & Non-Diagnostic Purpose
                            </h2>
                            <p>
                                All outputs generated by our AI engines (including Gemini LLM and statistical Machine Learning models) are intended solely for <strong>informational, educational, and triage guidance</strong>. The AI does NOT constitute formal medical diagnosis, official prescriptions, or definitive treatment plans. AI outputs should always be confirmed with a licensed medical professional before taking medical action.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                                <ShieldAlert className="w-5 h-5 text-emerald-600" />
                                4. User Responsibilities & Conduct
                            </h2>
                            <p className="mb-2">When using Swasthya Sampark, you agree to:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Provide truthful, accurate, and up-to-date health and contact information.</li>
                                <li>Maintain the confidentiality of your login account and credentials.</li>
                                <li>Not misuse, reverse-engineer, overload, or disrupt any microservices or server infrastructure.</li>
                                <li>Treat medical professionals with dignity, respect, and professionalism during consultations.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                                <FileText className="w-5 h-5 text-emerald-600" />
                                5. Limitation of Liability
                            </h2>
                            <p>
                                To the maximum extent permitted by applicable law, Swasthya Sampark and its creators shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our platform, reliance on AI-generated suggestions, or interactions between patients and healthcare providers.
                            </p>
                        </section>

                        <section className="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
                            <h2 className="text-lg font-bold text-emerald-900 flex items-center gap-2 mb-2">
                                <Mail className="w-5 h-5 text-emerald-700" />
                                6. Inquiries & Contact
                            </h2>
                            <p className="text-emerald-800 text-sm">
                                For inquiries or legal notices regarding these Terms of Service, please contact us at:
                                <br />
                                <strong className="mt-1 inline-block">Email: tramakrisha3012@gmail.com</strong>
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TermsOfServicePage;
