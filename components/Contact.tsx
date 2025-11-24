import React, { useState } from 'react';
import { Mail, ArrowRight, Send, User, Building, MessageCircle } from 'lucide-react';

// You'll need to install: npm install emailjs-com

const Contact: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // This will be your EmailJS integration
      // For now, we'll simulate success
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // TODO: Replace with actual EmailJS send
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   formData,
      //   'YOUR_PUBLIC_KEY'
      // );
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      // Handle error state here
    }
  };

  const projectTypes = [
    'Corporate Team Building',
    'Art & Cultural Exhibition',
    'Product Launch Experience',
    'Brand Activation',
    'Training & Development',
    'Other'
  ];

  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
      
      <div className="max-w-4xl w-full text-center z-10">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-900/20 border border-green-900/50 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-[10px] font-bold tracking-widest text-green-500 uppercase">Ready to Create</span>
        </div>

        <h2 className="font-display text-3xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter mb-6 md:mb-8 leading-tight">
          TELL US ABOUT <br />
          YOUR <span className="text-neutral-700">VISION.</span>
        </h2>

        <div className="flex justify-center">
          {!isRevealed ? (
            <button 
              onClick={() => setIsRevealed(true)}
              className="group relative px-6 py-3 md:px-8 md:py-4 bg-white text-black font-bold text-sm tracking-widest overflow-hidden rounded-sm transition-all hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                START THE CONVERSATION <ArrowRight size={16} />
              </span>
              <div className="absolute inset-0 bg-neutral-300 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
            </button>
          ) : isSubmitted ? (
            <div className="animate-fade-in text-center max-w-md mx-auto">
              <div className="bg-green-900/20 border border-green-900/50 rounded-lg p-8 mb-6">
                <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-neutral-400 text-sm">
                  We've received your message and will get back to you within 24 hours at {formData.email}.
                </p>
              </div>
              <button 
                onClick={() => {
                  setIsRevealed(false);
                  setIsSubmitted(false);
                }}
                className="text-neutral-500 hover:text-white transition-colors text-sm"
              >
                Send another message
              </button>
            </div>
          ) : (
            <div className="animate-fade-in w-full max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-neutral-400 text-sm font-medium flex items-center gap-2">
                      <User size={14} />
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-sm px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-neutral-400 text-sm font-medium flex items-center gap-2">
                      <Mail size={14} />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-sm px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors"
                      placeholder="hello@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-neutral-400 text-sm font-medium flex items-center gap-2">
                    <Building size={14} />
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-sm px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-neutral-400 text-sm font-medium flex items-center gap-2">
                    <MessageCircle size={14} />
                    What are you looking to create? *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-neutral-600 transition-colors"
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-neutral-400 text-sm font-medium">
                    Tell us about your vision *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-sm px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors resize-none"
                    placeholder="Describe your project, goals, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black font-bold py-4 px-6 rounded-sm transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      SEND TO HELLO@YOUNGATHEARTCURATORS.COM
                    </>
                  )}
                </button>

                <p className="text-neutral-600 text-xs text-center">
                  This message will be sent directly to our team
                </p>
              </form>
            </div>
          )}
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[100px]"></div>
      </div>
    </div>
  );
};

export default Contact;