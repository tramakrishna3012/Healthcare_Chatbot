import { Link } from "react-router-dom";
import HealthLogo from "../../../../public/logo/HealthLogo.jsx";

function Footer() {
    return (
        <footer className="bg-gray-100 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center space-x-3">
                        <Link to="/" className="flex items-center space-x-2">
                            <HealthLogo className="h-8 w-auto" />
                            <span className="text-sm font-semibold text-gray-800">Swasthya Sampark</span>
                        </Link>
                    </div>

                    <div className="text-xs sm:text-sm text-gray-500">
                        © {new Date().getFullYear()} Swasthya Sampark™. All Rights Reserved.
                    </div>

                    <nav className="flex items-center space-x-4">
                        <Link to="/services" className="text-xs sm:text-sm text-gray-600 hover:text-gray-900">Services</Link>
                        <Link to="/privacy-policy" className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 font-medium">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="text-xs sm:text-sm text-gray-600 hover:text-gray-900">Terms</Link>
                        <a href="mailto:tramakrisha3012@gmail.com" className="text-xs sm:text-sm text-gray-600 hover:text-gray-900">Contact</a>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;