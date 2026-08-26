// components/Footer.jsx
import Logo from '../../../public/logo/Logo.tsx';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:pt-36">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Logo/>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-black"></span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
                        <li>
                            <Link to="/services" className="hover:underline me-4 md:me-6 text-gray-700">Services</Link>
                        </li>
                        <li>
                            <Link to="/privacy-policy" className="hover:underline me-4 md:me-6 text-black font-medium">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/terms-of-service" className="hover:underline me-4 md:me-6 text-gray-700">Terms of Service</Link>
                        </li>
                        <li>
                            <a href="mailto:tramakrisha3012@gmail.com" className="hover:underline text-black">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-700 sm:text-center">
                    © {new Date().getFullYear()} <Link to="/" className="hover:underline text-black">Swasthya Sampark™</Link>. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}

export default Footer;