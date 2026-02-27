import { 
  Menu, 
  Target, 
  Smartphone, 
  Camera, 
  Mic2, 
  ArrowUpNarrowWide, 
  AudioWaveform, 
  Search,
  Share2,
  Globe,
  UserPlus,
  Quote, 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin,
  Github,
  Star,
  Check,
  X
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    console.log('Attempting to send email...');

    emailjs.sendForm(
      'service_7t29wcb',
      'template_wwn6p28',
      formRef.current
    )
      .then((result) => {
          console.log('EmailJS Success:', result.text);
          setSubmitStatus('success');
          formRef.current?.reset();
          setTimeout(() => setSubmitStatus('idle'), 5000);
      }, (error) => {
          console.error('EmailJS Error Details:', error);
          setSubmitStatus('error');
          setTimeout(() => setSubmitStatus('idle'), 5000);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Initialize EmailJS with your public key
    emailjs.init('_GZH0QbLwIOJdvoiW');
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="antialiased overflow-x-hidden selection:bg-[#e81d25] selection:text-white font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-white/5 px-6 md:px-12 py-5 flex items-center justify-between backdrop-blur-md ${isScrolled ? 'bg-black/80' : 'bg-black/50'}`}>
        <a href="#" className="flex items-center gap-4 group">
          <div className="w-10 h-10 bg-[#e81d25] flex items-center justify-center rounded-sm rotate-45 group-hover:rotate-0 transition-transform duration-500">
            <span className="text-white font-bold text-xl -rotate-45 group-hover:rotate-0 transition-transform duration-500">V</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="uppercase text-lg font-bold text-white tracking-tight">Vaistnav</span>
            <span className="text-[0.6rem] font-bold tracking-[0.25em] text-[#e81d25]">KUMAR</span>
          </div>
        </a>
        
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8 text-xs font-medium tracking-widest uppercase">
            <a href="#about" className="hover:text-[#e81d25] transition-colors">About Us</a>
            <a href="#services" className="hover:text-[#e81d25] transition-colors">Expertise</a>
            <a href="#work" className="hover:text-[#e81d25] transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-[#e81d25] transition-colors">Contact</a>
          </div>
          <div className="w-px h-4 bg-white/20"></div>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/vaistnavkumar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#e81d25] transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href="https://github.com/vaistnavkumar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#e81d25] transition-colors"><Github className="w-4 h-4" /></a>
          </div>
        </div>
        
        <button 
          className="md:hidden text-white hover:text-[#e81d25] z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-40 transition-transform duration-500 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 text-xl font-bold uppercase tracking-widest">
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#e81d25] transition-colors">About Us</a>
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#e81d25] transition-colors">Expertise</a>
          <a href="#work" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#e81d25] transition-colors">Portfolio</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#e81d25] transition-colors">Contact</a>
          <div className="flex gap-6 mt-4">
            <a href="https://www.linkedin.com/in/vaistnavkumar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#e81d25] transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href="https://github.com/vaistnavkumar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#e81d25] transition-colors"><Github className="w-6 h-6" /></a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex items-center px-6 md:px-12 pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-[#e81d25] rounded-full blur-[180px] opacity-[0.15]"></div>
          <div className="blur-[150px] bg-blue-900 opacity-[0.1] w-[30rem] h-[30rem] rounded-full absolute bottom-[-10%] left-[-10%]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#e81d25] animate-pulse"></span>
              <span className="text-xs font-medium tracking-wider uppercase text-gray-300">Strategic Vision & Creativity</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-semibold text-white tracking-tight">
              DIGITAL <br /> MARKETING <br /> 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-[#e81d25]">THAT DELIVERS</span>
            </h1>
            
            <p className="leading-relaxed text-lg font-light text-gray-400 max-w-xl border-[#e81d25] border-l pl-6">
              Strategic, data-driven marketing to boost your traffic and increase sales.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <a href="#contact" className="uppercase bg-white text-black text-sm font-semibold tracking-wider px-8 py-4 hover:bg-[#e81d25] hover:text-white transition-colors duration-300">
                Start a Project
              </a>
              <a href="#work" className="uppercase border border-white/20 text-white text-sm font-semibold tracking-wider px-8 py-4 hover:border-white hover:bg-white/5 transition-colors duration-300">
                View Portfolio
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full"
          >
            <div className="relative w-full h-full rounded-sm overflow-hidden border border-white/10 group bg-[#111] flex items-center justify-center">
              <img 
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fb1e2a60-7211-4eff-8f08-c2bc3a8bec44_800w.webp" 
                alt="VaistnavKumar" 
                className="w-full h-full object-cover object-center transition-all duration-700 opacity-100 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <section className="px-6 md:px-12 bg-[#0a0a0a] border-t border-white/5 py-24" id="about">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-sm font-bold text-[#e81d25] uppercase tracking-widest">About Me</h2>
            <h3 className="text-3xl md:text-5xl leading-tight font-medium tracking-tight">
              Hi, I'm <span className="text-white">VaistnavKumar</span>.
            </h3>
            <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
              I'm a passionate <span className="text-[#e81d25]">Digital Marketer</span> dedicated to helping online businesses thrive in the digital landscape.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8 font-light leading-relaxed text-lg text-gray-400"
          >
            <p>
              My mission is to boost website traffic and increase sales through strategic, data-driven marketing approaches.
            </p>
            <p>
              With expertise spanning SEO, Meta Ads, Social Media Marketing, and Email Marketing, I create comprehensive solutions that deliver measurable results for my clients.
            </p>
            
            <div className="p-8 bg-[#111] border border-white/5 rounded-sm">
              <h4 className="text-[#e81d25] font-bold uppercase tracking-wider text-sm mb-4">Education</h4>
              <div className="space-y-1">
                <p className="text-white font-medium">B.Sc IT</p>
                <p className="text-gray-400 text-sm">Emeralds Degree College Affiliated with S.V University, Tirupati (2021–2024)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 md:px-12 py-24 relative overflow-hidden" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {[
              { 
                icon: <Target className="w-6 h-6 text-[#e81d25]" />, 
                title: "Meta Ads", 
                desc: "Scale your business with highly targeted campaigns on Facebook and Instagram." 
              },
              { 
                icon: <Search className="w-6 h-6 text-[#e81d25]" />, 
                title: "SEO", 
                desc: "Dominate search results and drive organic traffic with advanced optimization techniques." 
              },
              { 
                icon: <Share2 className="w-6 h-6 text-[#e81d25]" />, 
                title: "Social Media Marketing", 
                desc: "Build a loyal community and increase brand awareness across all social platforms." 
              },
              { 
                icon: <Globe className="w-6 h-6 text-[#e81d25]" />, 
                title: "Google Ads", 
                desc: "Get in front of customers at the exact moment they are searching for what you offer." 
              },
              { 
                icon: <UserPlus className="w-6 h-6 text-[#e81d25]" />, 
                title: "Lead Generation", 
                desc: "Convert high-quality prospects into loyal customers with proven conversion strategies." 
              },
              { 
                icon: <Mail className="w-6 h-6 text-[#e81d25]" />, 
                title: "Email Marketing", 
                desc: "Nurture leads and drive repeat sales with personalized, automated email campaigns." 
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-[#050505] hover:bg-[#e81d25] transition-colors duration-500 cursor-default p-8 relative"
              >
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium text-white mb-4">{service.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400 group-hover:text-white/90">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="px-6 md:px-12 py-24 bg-[#050505] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#111] p-12 md:p-16 rounded-sm border border-white/5 relative overflow-hidden"
          >
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#e81d25] rounded-full blur-[120px] opacity-[0.05] -mr-32 -mt-32"></div>
            
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-12 text-center">
              Why Choose <span className="text-[#e81d25]">Me?</span>
            </h2>
            
            <div className="space-y-8 max-w-2xl mx-auto">
              {[
                "Proven track record with real results",
                "Comprehensive digital marketing expertise",
                "Personalized strategies for your business",
                "Data-driven approach to maximize ROI",
                "Dedicated support and communication"
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-6 h-6 rounded-full bg-[#e81d25]/10 flex items-center justify-center shrink-0 mt-1 group-hover:bg-[#e81d25] transition-colors duration-300">
                    <Check className="w-4 h-4 text-[#e81d25] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="text-xl font-light text-gray-300 group-hover:text-white transition-colors duration-300">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y-4 bg-[#e81d25] border-black py-8 rotate-1 scale-105">
        <div className="whitespace-nowrap flex gap-8 animate-marquee">
          {[1, 2, 3, 4].map((_, i) => (
            <span key={i} className="uppercase text-4xl font-bold text-black tracking-tighter">
              Strategy • Creativity • Digital Marketing • SEO • Meta Ads • Social Media • Lead Generation • Email Marketing • Advertising •
            </span>
          ))}
        </div>
      </div>

      {/* Portfolio Section */}
      <section className="px-6 md:px-12 bg-[#050505] py-32" id="work">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-semibold text-white tracking-wide my-6">Let the results speak.</h2>
            <p className="text-lg font-light text-gray-400">
              A selection of projects where creativity and strategy meet to generate success.
            </p>
          </div>
        </div>

        <div className="space-y-32">
          {[
            {
              num: "01",
              cat: "SEO",
              title: "Local Gym SEO Success",
              desc: "Helped a local gym rank on the 1st page for 'best gym near me' using comprehensive on-page and off-page SEO strategies.",
              result: "1st page ranking for key local searches",
              tags: ["SEO", "Local Marketing", "On-page", "Off-page"],
              img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80"
            },
            {
              num: "02",
              cat: "META ADS",
              title: "Fresh Fuel Facebook Campaign",
              desc: "Created and managed a successful Facebook ad campaign for Fresh Fuel, a health juice brand, driving engagement and sales.",
              result: "Exceeded campaign expectations",
              tags: ["Meta Ads", "Facebook", "Health & Wellness", "Campaign Management"],
              img: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?w=1600&q=80",
              reverse: true
            },
            {
              num: "03",
              cat: "SOCIAL MEDIA",
              title: "Fashion Startup Content Calendar",
              desc: "Developed a comprehensive 30-day Instagram content calendar for a fashion startup, including creative Canva designs.",
              result: "30-day strategic content plan",
              tags: ["Social Media", "Instagram", "Content Creation", "Canva Design"],
              img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&q=80"
            },
            {
              num: "04",
              cat: "EMAIL MARKETING",
              title: "Ecommerce Email Funnels",
              desc: "Set up automated email funnels for an ecommerce business to recover abandoned carts and implement upselling strategies.",
              result: "Increased cart recovery and upsells",
              tags: ["Email Marketing", "Automation", "Ecommerce", "Sales Funnel"],
              img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&q=80",
              reverse: true
            }
          ].map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${project.reverse ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`lg:col-span-7 overflow-hidden rounded-sm relative ${project.reverse ? 'lg:order-2' : ''}`}>
                <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-all"></div>
                <img 
                  src={project.img} 
                  className="w-full h-[60vh] object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-700" 
                  alt={project.title} 
                />
              </div>
              <div className={`lg:col-span-5 space-y-6 ${project.reverse ? 'lg:pr-12 lg:order-1' : 'lg:pl-12'}`}>
                <span className="text-xs text-[#e81d25] font-mono">{project.num} / {project.cat}</span>
                <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight group-hover:text-[#e81d25] transition-colors">
                  {project.title}
                </h3>
                <div className="space-y-4">
                  <p className="leading-relaxed font-light text-gray-400">
                    {project.desc}
                  </p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-[#e81d25] font-medium">
                      Result: <span className="text-white font-light">{project.result}</span>
                    </p>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-3 text-xs font-mono uppercase text-gray-500">
                  {project.tags.map((tag, i) => (
                    <li key={i} className="border border-white/10 rounded-full px-3 py-1">{tag}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Marquee Section */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5 overflow-hidden">
        <div className="px-6 md:px-12 mb-16">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">Client Feedback</h2>
        </div>
        
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee flex gap-8 whitespace-nowrap py-4">
            {[
              {
                name: "Ravi",
                role: "Gym Owner",
                text: "VaistnavKumar's SEO work helped our gym rank on the first page of Google for key local searches. His expertise truly boosted our visibility and brought in more clients.",
                stars: 5
              },
              {
                name: "Anitha",
                role: "Marketing Manager",
                text: "The Meta Ads campaign for our health juice brand exceeded expectations. VaistnavKumar managed everything professionally and delivered great results.",
                stars: 5
              },
              {
                name: "Padma",
                role: "Startup Founder",
                text: "Creating a 30-day Instagram content calendar was a game changer for our fashion startup. VaistnavKumar's Canva designs were creative and on-brand.",
                stars: 5
              },
              {
                name: "Ganesh",
                role: "Ecommerce Owner",
                text: "Thanks to the email marketing funnels set up by VaistnavKumar, we saw a noticeable increase in recovered sales from abandoned carts. Highly recommended!",
                stars: 5
              },
              {
                name: "Arjun",
                role: "Blogger",
                text: "His blog writing on SEO was clear, practical, and helped me understand how to improve traffic. VaistnavKumar is a great communicator.",
                stars: 5
              },
              {
                name: "Raju",
                role: "Business Owner",
                text: "VaistnavKumar's lead generation strategies helped us attract quality leads consistently. His work has positively impacted our business growth.",
                stars: 5
              }
            ].concat([
              {
                name: "Ravi",
                role: "Gym Owner",
                text: "VaistnavKumar's SEO work helped our gym rank on the first page of Google for key local searches. His expertise truly boosted our visibility and brought in more clients.",
                stars: 5
              },
              {
                name: "Anitha",
                role: "Marketing Manager",
                text: "The Meta Ads campaign for our health juice brand exceeded expectations. VaistnavKumar managed everything professionally and delivered great results.",
                stars: 5
              },
              {
                name: "Padma",
                role: "Startup Founder",
                text: "Creating a 30-day Instagram content calendar was a game changer for our fashion startup. VaistnavKumar's Canva designs were creative and on-brand.",
                stars: 5
              },
              {
                name: "Ganesh",
                role: "Ecommerce Owner",
                text: "Thanks to the email marketing funnels set up by VaistnavKumar, we saw a noticeable increase in recovered sales from abandoned carts. Highly recommended!",
                stars: 5
              },
              {
                name: "Arjun",
                role: "Blogger",
                text: "His blog writing on SEO was clear, practical, and helped me understand how to improve traffic. VaistnavKumar is a great communicator.",
                stars: 5
              },
              {
                name: "Raju",
                role: "Business Owner",
                text: "VaistnavKumar's lead generation strategies helped us attract quality leads consistently. His work has positively impacted our business growth.",
                stars: 5
              }
            ]).map((t, i) => (
              <div key={i} className="inline-block w-[350px] md:w-[450px] bg-[#111] p-8 border border-white/5 rounded-sm whitespace-normal shrink-0">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#e81d25] text-[#e81d25]" />
                  ))}
                </div>
                <p className="text-gray-300 font-light leading-relaxed mb-8 italic">
                  "{t.text}"
                </p>
                <div className="pt-6 border-t border-white/10">
                  <h4 className="text-white font-bold uppercase tracking-wider text-sm">{t.name}</h4>
                  <p className="text-xs text-gray-500 mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 md:px-12 bg-black py-24 relative overflow-hidden" id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <h2 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter mb-8">
              Have a <br /> <span className="text-[#e81d25]">Project</span> in mind?
            </h2>
            <p className="text-lg font-light text-gray-400 max-w-md mb-12">
              I am the right partner to transform ideas into concrete growth tools.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e81d25]/10 flex items-center justify-center text-[#e81d25] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <p className="text-sm text-gray-400">Tirupati, Andhra Pradesh, India</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e81d25]/10 flex items-center justify-center text-[#e81d25] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Write to me</h4>
                  <a href="mailto:vaistdigital@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors">vaistdigital@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e81d25]/10 flex items-center justify-center text-[#e81d25] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Call me</h4>
                  <a href="tel:+917989064889" className="text-sm text-gray-400 hover:text-white transition-colors">+91 79890 64889</a>
                </div>
              </div>
            </div>
          </div>

          <motion.form 
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#111] p-8 md:p-12 rounded-sm border border-white/5 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-wider text-gray-500">Name</label>
                <input name="from_name" required type="text" className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-[#e81d25] transition-colors rounded-sm" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold tracking-wider text-gray-500">Company</label>
                <input name="company" type="text" className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-[#e81d25] transition-colors rounded-sm" placeholder="Company Name" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-wider text-gray-500">Email</label>
              <input name="from_email" required type="email" className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-[#e81d25] transition-colors rounded-sm" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold tracking-wider text-gray-500">Project Details</label>
              <textarea name="message" required className="w-full bg-black border border-white/10 p-4 text-white focus:outline-none focus:border-[#e81d25] transition-colors h-32 rounded-sm" placeholder="Tell us about your needs..."></textarea>
            </div>
            
            {submitStatus === 'success' && (
              <p className="text-green-500 text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-[#e81d25] text-sm font-medium">Failed to send message. Please try again or email me directly.</p>
            )}

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full py-4 bg-[#e81d25] text-white font-bold uppercase tracking-widest hover:bg-red-700 transition-colors rounded-sm flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 bg-black border-t border-white/10 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#e81d25] flex items-center justify-center rounded-sm rotate-45">
              <span className="text-white font-bold text-xl -rotate-45">V</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="uppercase text-lg font-bold text-white tracking-tight">Vaistnav</span>
              <span className="text-[0.6rem] font-bold tracking-[0.25em] text-[#e81d25]">KUMAR</span>
            </div>
          </div>
          
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/vaistnavkumar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#e81d25] transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="https://github.com/vaistnavkumar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#e81d25] transition-colors"><Github className="w-5 h-5" /></a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between text-xs text-gray-500">
          <p>© 2026 VaistnavKumar. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
