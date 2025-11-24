import React, { useState } from 'react';
import { Mail, ArrowRight, Send, User, Building, MessageCircle, Calendar, Users, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    timeline: '',
    budget: '',
    participants: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const result = await emailjs.send(
        'mail.privateemail.com',
        'template_qxe650e',
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          project_type: formData.projectType,
          timeline: formData.timeline,
          budget: formData.budget,
          participants: formData.participants,
          message: formData.message,
          to_email: 'hello@youngatheartcurators.com',
          date: new Date().toLocaleDateString()
        },
        'YOUR_PUBLIC_KEY_HERE' // Replace with your Public Key
      );

      if (result.status === 200) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: '',
          timeline: '',
          budget: '',
          participants: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setError('Sorry, there was an error sending your message. Please try again or email us directly at hello@youngatheartcurators.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    'Corporate Team Building',
    'Leadership Development',
    'Product Launch Experience',
    'Brand Activation Event',
    'Art & Cultural Exhibition',
    'Museum/Gallery Installation',
    'Conference/Summit Activation',
    'Training & Development Program',
    'Marketing Campaign',
    'Other'
  ];

  const timelines = [
    'Urgent (Within 2 weeks)',
    'Soon (1-2 months)',
    'Planning (3-6 months)',
    'Future (6+ months)',
    'Just exploring'
  ];

  const budgetRanges = [
    'Under €5,000',
    '€5,000 - €15,000',
    '€15,000 - €30,000',
    '€30,000 - €50,000',
    '€50,000+',
    'To be discussed'
  ];

  return (
    <div className="min-h-screen w-full flex items-start md:items-center justify-start md:justify-center relative overflow-auto py-16 md:py-0 px-6 md:px-8">
      <div className="max-w-4xl mx-auto w-full mt-8 md:mt-0">
        
        {!isRevealed ? (
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-900/20 border border-green-900/50 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] font-bold tracking-widest text-green-500 uppercase">Ready to Create</span>
            </div>

            <h2 className="font-display text-3xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter mb-6 md:mb-8 leading-tight">
              LET'S CREATE <br />
              <span className="text-neutral-700">TOGETHER.</span>
            </h2>

            <p className="text-neutral-400 text-lg mb-12 max-w-2xl mx-auto">
              Tell us about your vision and we'll craft an immersive experience that brings it to life.
            </p>

            <button 
              onClick={() => setIsRevealed(true)}
              className="group relative px-6 py-3 md:px-8 md:py-4 bg-white text-black font-bold text-sm tracking-widest overflow-hidden rounded-sm transition-all hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                START YOUR PROJECT <ArrowRight size={16} />
              </span>
              <div className="absolute inset-0 bg-neutral-300 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
            </button>
          </div>
        ) : isSubmitted ? (
          <div className="text-center max-w-md mx-auto">
            <div className="bg-green-900/20 border border-green-900/50 rounded-lg p-8 mb-6">
              <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send size={24} className="text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Project Inquiry Sent!</h3>
              <p className="text-neutral-400 text-sm mb-2">
                Thank you, <strong>{formData.name}</strong>. We're excited about your {formData.projectType.toLowerCase()} project.
              </p>
              <p className="text-neutral-400 text-sm">
                We'll review your details and contact you at <strong>{formData.email}</strong> within 24 hours.
              </p>
            </div>
            <button 
              onClick={() => {
                setIsRevealed(false);
                setIsSubmitted(false);
              }}
              className="text-neutral-500 hover:text-white transition-colors text-sm"
            >
              Submit another inquiry
            </button>
          </div>
        ) : (
          <div className="w-full max-w-4xl mx-auto">
            {error && (
              <div className="bg-red-900/20 border border-red-900/50 rounded-lg p-4 mb-6">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}
            
            <h2 className="font-display text-2xl md:text-4xl font-bold text-white tracking-tighter mb-8">
              TELL US ABOUT YOUR VISION
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-8 text-left">
              {/* Personal Information */}
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
                  placeholder="Your company or organization name"
                />
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-neutral-400 text-sm font-medium flex items-center gap-2">
                    <MessageCircle size={14} />
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-neutral-600 transition-colors"
                  >
                    <option value="">What type of experience?</option>
                    {projectTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-neutral-400 text-sm font-medium flex items-center gap-2">
                    <Calendar size={14} />
                    Timeline *
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-neutral-600 transition-colors"
                  >
                    <option value="">When do you need this?</option>
                    {timelines.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-neutral-400 text-sm font-medium flex items-center gap-2">
                    <MapPin size={14} />
                    Budget Range *
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-neutral-600 transition-colors"
                  >
                    <option value="">What's your budget range?</option>
                    {budgetRanges.map(range => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-neutral-400 text-sm font-medium flex items-center gap-2">
                    <Users size={14} />
                    Expected Participants
                  </label>
                  <input
                    type="text"
                    name="participants"
                    value={formData.participants}
                    onChange={handleInputChange}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-sm px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors"
                    placeholder="e.g., 50 people, entire company, public event"
                  />
                </div>
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
                  rows={6}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-sm px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600 transition-colors resize-none"
                  placeholder="Describe your project goals, target audience, desired outcomes, location requirements, and any specific ideas or inspiration..."
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
                    Sending to our team...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    SEND PROJECT INQUIRY
                  </>
                )}
              </button>

              <div className="text-center space-y-2">
                <p className="text-neutral-600 text-xs">
                  This inquiry will be sent directly to hello@youngatheartcurators.com
                </p>
                <p className="text-neutral-500 text-xs">
                  Based in Stockholm • Available worldwide
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;