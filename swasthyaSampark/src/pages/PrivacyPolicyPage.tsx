import React, { useEffect } from 'react';
import { NavBar } from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';
import { ShieldCheck, Lock, Database, Eye, RefreshCw, Mail, UserCheck } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
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
                            <ShieldCheck className="w-4 h-4" />
                            <span>Legal & Compliance</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                            Privacy Policy
                        </h1>
                        <p className="mt-2 text-sm text-gray-500">
                            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>
                    </div>

                    {/* Content */}
                    <div className="space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
                        <section>
                            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                                <Eye className="w-5 h-5 text-emerald-600" />
                                1. Overview & Commitment
                            </h2>
                            <p>
                                Welcome to <strong>Swasthya Sampark</strong> ("we", "our", or "us"). We are dedicated to protecting your personal health information and privacy. This Privacy Policy outlines our practices regarding the collection, use, protection, and disclosure of your personal data when you use our website, AI health assistants, symptom assessment tools, and doctor consultation services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                                <Database className="w-5 h-5 text-emerald-600" />
                                2. Information We Collect
                            </h2>
                            <p className="mb-2">We collect the following categories of information to provide and enhance our services:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    <strong>Account & Authentication Information:</strong> When you log in with Google OAuth, we receive your name, email address, profile picture, and Google account identifier.
                                </li>
                                <li>
                                    <strong>Health & Symptom Data:</strong> Symptoms entered in the Iterative Symptom Checker, queries submitted to HealthGPT, medical history, and uploaded medical report images.
                                </li>
                                <li>
                                    <strong>Consultation & Appointment Data:</strong> Appointment requests, doctor-patient communication logs, and consultation scheduling records.
                                </li>
                                <li>
                                    <strong>Technical & Device Data:</strong> IP address, browser type, operating system, and WebSocket connection metadata for real-time services.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                                <UserCheck className="w-5 h-5 text-emerald-600" />
                                3. How We Use Your Information
                            </h2>
                            <p className="mb-2">Your information is used strictly to:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Deliver real-time, AI-driven symptom triage and potential condition assessment.</li>
                                <li>Facilitate doctor-patient discovery, video consultations, and messaging.</li>
                                <li>Perform OCR text extraction and AI report summarization on uploaded medical records.</li>
                                <li>Send automated email notifications regarding consultation requests and updates.</li>
                                <li>Maintain platform security, authenticate user sessions with JWT, and prevent unauthorized access.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                                <Lock className="w-5 h-5 text-emerald-600" />
                                4. Google User Data & OAuth Policy
                            </h2>
                            <p>
                                When accessing Swasthya Sampark via Google Sign-In, we only request standard profile permissions (name, email, and profile avatar). We <strong>never sell, lease, or transfer</strong> your Google user data to third-party data brokers or advertising platforms. Our usage of Google API information adheres to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline font-medium">Google API Services User Data Policy</a>, including the Limited Use requirements.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                                5. Data Security & Storage
                            </h2>
                            <p>
                                All communications between your browser and our backend microservices are encrypted using industry-standard TLS/HTTPS protocols. User authentication tokens are securely signed using JSON Web Tokens (JWT). Stored database records in MongoDB Atlas are protected with encrypted-at-rest storage and access control barriers. Uploaded report images are processed temporarily for OCR and summarization and are not shared publicly.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-3">
                                <RefreshCw className="w-5 h-5 text-emerald-600" />
                                6. Your Rights & Data Retention
                            </h2>
                            <p>
                                You have the right to access, rectify, or request the deletion of your personal data stored on our platform. To request permanent deletion of your profile, consultation history, or uploaded data, please contact our support team.
                            </p>
                        </section>

                        <section className="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
                            <h2 className="text-lg font-bold text-emerald-900 flex items-center gap-2 mb-2">
                                <Mail className="w-5 h-5 text-emerald-700" />
                                7. Contact Us
                            </h2>
                            <p className="text-emerald-800 text-sm">
                                If you have any questions, concerns, or requests regarding this Privacy Policy or our data handling practices, please contact us at:
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

export default PrivacyPolicyPage;
