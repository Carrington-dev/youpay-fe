import { ArrowRight, Code, Cloud, Shield, Zap, Users, Menu, X, 
  ChevronDown, Building2, Briefcase, TrendingUp, Database,
  Mail, Phone, MapPin, Linkedin, Github, Facebook,
  CheckCircle, Target, Award, Lightbulb
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function MegaMenu(){
    const router = useRouter();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const megaMenuItems = {
    services: [
      { 
        category: 'Development',
        items: [
          { name: 'Custom Software', url: '/services/custom-software', icon: <Code className="w-4 h-4" /> },
          { name: 'Web Applications', url: '/services/web-applications', icon: <Cloud className="w-4 h-4" /> },
          { name: 'Mobile Apps', url: '/services/mobile-apps', icon: <Zap className="w-4 h-4" /> }
        ]
      },
      { 
        category: 'Cloud & Infrastructure',
        items: [
          { name: 'Cloud Migration', url: '/services/cloud-migration', icon: <Cloud className="w-4 h-4" /> },
          { name: 'DevOps Solutions', url: '/services/devops-solutions', icon: <Zap className="w-4 h-4" /> },
          { name: 'Infrastructure Management', url: '/services/infrastructure-management', icon: <Database className="w-4 h-4" /> }
        ]
      },
      { 
        category: 'Security',
        items: [
          { name: 'Cybersecurity', url: '/services/cybersecurity', icon: <Shield className="w-4 h-4" /> },
          { name: 'Compliance', url: '/services/compliance', icon: <CheckCircle className="w-4 h-4" /> },
          { name: 'Risk Assessment', url: '/services/risk-assessment', icon: <Target className="w-4 h-4" /> }
        ]
      }
    ],
    industries: [
      { name: 'Financial Services', icon: <TrendingUp className="w-5 h-5" /> },
      { name: 'Healthcare', icon: <Building2 className="w-5 h-5" /> },
      { name: 'Retail & E-commerce', icon: <Briefcase className="w-5 h-5" /> },
      { name: 'Manufacturing', icon: <Database className="w-5 h-5" /> },
      { name: 'Education', icon: <Lightbulb className="w-5 h-5" /> },
      { name: 'Government', icon: <Building2 className="w-5 h-5" /> }
    ]
  };
    
    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <div className="flex items-center space-x-2">
                    <Image src={`${isScrolled ? '/brand/logo-dark.svg' : '/brand/logo-light.svg'}`}  alt="Khano Logo" width={150} height={200} />
                        
                    {/* <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                    </div>
                    <span className={`text-2xl font-bold ${isScrolled ? 'text-indigo-900' : 'text-white'}`}>
                        Khano<span className="text-pink-400">.</span>
                    </span> */}
                    </div>
                </Link>
                
                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-8">
                <Link href="/about" className={`text-sm font-medium hover:text-pink-500 transition py-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                    ABOUT US
                </Link>

                {/* Services Mega Menu */}
                <div 
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown('services')}
                    onMouseLeave={() => setActiveDropdown(null)}
                >
                    <button className={`text-sm font-medium hover:text-pink-500 transition flex items-center py-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                    SERVICES <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {activeDropdown === 'services' && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2">
                        <div className="w-[800px] bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                        <div className="grid grid-cols-3 gap-8">
                            {megaMenuItems.services.map((category, idx) => (
                            <div key={idx}>
                                <h3 className="font-bold text-indigo-900 mb-4 text-base">{category.category}</h3>
                                <ul className="space-y-3">
                                {category.items.map((item, itemIdx) => (
                                    <li key={itemIdx}>
                                    <Link href={item.url} className="flex items-center space-x-3 text-gray-600 hover:text-pink-500 transition py-2 px-2 rounded-lg hover:bg-pink-50">
                                        <span className="flex-shrink-0">{item.icon}</span>
                                        <span className="text-sm">{item.name}</span>
                                    </Link>
                                    </li>
                                ))}
                                </ul>
                            </div>
                            ))}
                        </div>
                        </div>
                    </div>
                    )}
                </div>

                {/* Industries Mega Menu */}
                <div 
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown('industries')}
                    onMouseLeave={() => setActiveDropdown(null)}
                >
                    <button className={`text-sm font-medium hover:text-pink-500 transition flex items-center py-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                    INDUSTRIES <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {activeDropdown === 'industries' && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2">
                        <div className="w-[600px] bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                        <div className="grid grid-cols-2 gap-3">
                            {megaMenuItems.industries.map((industry, idx) => (
                            <Link 
                                key={idx} 
                                href={`/industries/${industry.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                                className="flex items-center space-x-3 p-4 rounded-xl hover:bg-pink-50 transition group/item"
                            >
                                <div className="text-pink-500 group-hover/item:scale-110 transition-transform flex-shrink-0">
                                {industry.icon}
                                </div>
                                <span className="text-gray-700 group-hover/item:text-pink-500 transition font-medium">
                                {industry.name}
                                </span>
                            </Link>
                            ))}
                        </div>
                        </div>
                    </div>
                    )}
                </div>

                <Link href="/work" className={`text-sm font-medium hover:text-pink-500 transition py-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                    OUR WORK
                </Link>
                <Link href="/partners" className={`text-sm font-medium hover:text-pink-500 transition py-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                    PARTNERS
                </Link>
                <Link href="/contact-us" className={`text-sm font-medium hover:text-pink-500 transition py-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                    CONTACT US
                </Link>
                </div>

                {/* CTA Button */}
                <button onClick={ () => router.push("/lets-work-together") }  className="hidden lg:block bg-pink-500 hover:bg-pink-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition shadow-lg hover:shadow-xl">
                Let's Work Together
                </button>

                {/* Mobile Menu Button */}
                <button 
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                {isMenuOpen ? (
                    <X className={isScrolled ? 'text-gray-700' : 'text-white'} />
                ) : (
                    <Menu className={isScrolled ? 'text-gray-700' : 'text-white'} />
                )}
                </button>
            </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl">
                <div className="px-4 py-6 space-y-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
                <Link href="/about" className="block text-gray-700 hover:text-pink-500 font-medium">ABOUT US</Link>
                
                <div className="space-y-2">
                    <p className="font-bold text-indigo-900">SERVICES</p>
                    {megaMenuItems.services.map((category, idx) => (
                    <div key={idx} className="pl-4 space-y-1">
                        <p className="text-sm font-semibold text-gray-600">{category.category}</p>
                        {category.items.map((item, itemIdx) => (
                        <Link key={itemIdx} href={item.url} className="block text-sm text-gray-600 hover:text-pink-500 pl-4">
                            {item.name}
                        </Link>
                        ))}
                    </div>
                    ))}
                </div>

                <div className="space-y-2">
                    <p className="font-bold text-indigo-900">INDUSTRIES</p>
                    {megaMenuItems.industries.map((industry, idx) => (
                    <Link key={idx} href={`/industries/${industry.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}  className="block text-sm text-gray-600 hover:text-pink-500 pl-4">
                        {industry.name}
                    </Link>
                    ))}
                </div>

                <Link href="/work" className="block text-gray-700 hover:text-pink-500 font-medium">OUR WORK</Link>
                <Link href="/partners" className="block text-gray-700 hover:text-pink-500 font-medium">PARTNERS</Link>
                <Link href="/contact-us" className="block text-gray-700 hover:text-pink-500 font-medium">CONTACT US</Link>

                <button onClick={() => router.push("/lets-work-together") } className="w-full bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-sm font-medium transition">
                    Let's Work Together
                </button>
                </div>
            </div>
            )}
        </nav>
    )
}