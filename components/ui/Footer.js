import { 
  ArrowRight, Code, Cloud, Shield, Zap, Users, Menu, X, 
  ChevronDown, Building2, Briefcase, TrendingUp, Database,
  Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook,
  CheckCircle, Target, Award, Lightbulb, Heart, Rocket, 
  Globe, Star, TrendingUpIcon
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  NEXT_PUBLIC_ADDRESS,
  NEXT_PUBLIC_PHONE,
  NEXT_PUBLIC_SUPPORT_EMAIL
} from '../../../app/initials';
import Image from 'next/image';


const MegaFooter = () => {
  const router = useRouter();
    return (
         <footer className="bg-gradient-to-br from-indigo-950 via-purple-950 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div onClick={() => router.push('/')} className="flex items-center space-x-2 mb-6">
                <Image src={'/brand/logo-light.svg'}  alt="Khano Logo" width={150} height={200} />
                {/* <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                </div>
                <span className="text-2xl font-bold">
                  Khano<span className="text-pink-400">.</span>
                </span> */}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transforming businesses through innovative IT solutions. We deliver excellence in software development, cloud services, and digital transformation.
              </p>
              <div className="flex space-x-4">
                <Link href="/" className="w-10 h-10 bg-white/10 hover:bg-pink-500 rounded-full flex items-center justify-center transition">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="/" className="w-10 h-10 bg-white/10 hover:bg-pink-500 rounded-full flex items-center justify-center transition">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="/" className="w-10 h-10 bg-white/10 hover:bg-pink-500 rounded-full flex items-center justify-center transition">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href="/" className="w-10 h-10 bg-white/10 hover:bg-pink-500 rounded-full flex items-center justify-center transition">
                  <Facebook className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-6">Services</h4>
              <ul className="space-y-3">
                <li><Link href="/services/custom-software" className="text-gray-300 hover:text-pink-400 transition">Custom Development</Link></li>
                <li><Link href="/services/devops-solutions" className="text-gray-300 hover:text-pink-400 transition">DevOps Solutions</Link></li>
                <li><Link href="/services/cloud-solutions" className="text-gray-300 hover:text-pink-400 transition">Cloud Solutions</Link></li>
                <li><Link href="/services/cybersecurity" className="text-gray-300 hover:text-pink-400 transition">Cybersecurity</Link></li>
                <li><Link href="/services/data-analytics" className="text-gray-300 hover:text-pink-400 transition">Data Analytics</Link></li>
                <li><Link href="/services/ai-integration" className="text-gray-300 hover:text-pink-400 transition">AI Integration</Link></li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="font-bold text-lg mb-6">Industries</h4>
              <ul className="space-y-3">
                <li><Link href="/industries/financial-services" className="text-gray-300 hover:text-pink-400 transition">Financial Services</Link></li>
                <li><Link href="/industries/retail-e-commerce" className="text-gray-300 hover:text-pink-400 transition">Retail & E-commerce</Link></li>
                <li><Link href="/industries/healthcare" className="text-gray-300 hover:text-pink-400 transition">Healthcare</Link></li>
                <li><Link href="/industries/manufacturing" className="text-gray-300 hover:text-pink-400 transition">Manufacturing</Link></li>
                <li><Link href="/industries/education" className="text-gray-300 hover:text-pink-400 transition">Education</Link></li>
                <li><Link href="/industries/government" className="text-gray-300 hover:text-pink-400 transition">Government</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{`${NEXT_PUBLIC_ADDRESS}`}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-pink-400 flex-shrink-0" />
                  <span className="text-gray-300">{`${NEXT_PUBLIC_PHONE}`}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-pink-400 flex-shrink-0" />
                  <span className="text-gray-300">{`${NEXT_PUBLIC_SUPPORT_EMAIL}`}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="border-t border-white/10 pt-8 mb-8">
            <div className="max-w-2xl mx-auto text-center">
              <h4 className="font-bold text-xl mb-4">Stay Updated</h4>
              <p className="text-gray-300 mb-6">Subscribe to our newsletter for the latest insights and updates.</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-pink-400 transition"
                />
                <button className="bg-pink-500 hover:bg-pink-600 px-8 py-3 rounded-full font-medium transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Khano (Pty) Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-pink-400 transition">Privacy Policy</Link>
              <Link href="/tcs" className="text-gray-400 hover:text-pink-400 transition">Terms of Service</Link>
              <Link href="/cookies" className="text-gray-400 hover:text-pink-400 transition">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    );
}
export default MegaFooter;