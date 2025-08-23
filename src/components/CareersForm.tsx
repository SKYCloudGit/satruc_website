import React, { useRef, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { User, AtSign, Phone, Briefcase, FileText, Send, Paperclip } from 'lucide-react';

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxpHkBra57lxJtdY3x9YHqMf2mRz9g4E5tgh4SIFY5Nog6Xy3eaDj6xijl_JlPoaechug/exec';

const CareersForm = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting || !formRef.current) return;

    const fileInput = formRef.current['resume'] as HTMLInputElement;
    if (!fileInput.files || fileInput.files.length === 0) {
      toast({ title: 'Resume required', description: 'Please attach your resume file.' });
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('position', formData.position);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('resume', fileInput.files[0]);

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();
      if (result?.status === 'success') {
        toast({
          title: 'Application Sent',
          description: 'Your application has been submitted successfully.',
        });

        setFormData({
          name: '',
          email: '',
          phone: '',
          position: '',
          message: '',
        });

        formRef.current.reset(); // Clear file input
      } else {
        throw new Error(result?.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" encType="multipart/form-data">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Full Name */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center">
            <User size={16} className="mr-2 text-satruc-500" />
            Full Name <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-md border-satruc-200 focus:ring-satruc-accent-600"
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center">
            <AtSign size={16} className="mr-2 text-satruc-500" />
            Email Address <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-md border-satruc-200 focus:ring-satruc-accent-600"
            placeholder="john@example.com"
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center">
            <Phone size={16} className="mr-2 text-satruc-500" />
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-md border-satruc-200 focus:ring-satruc-accent-600"
            placeholder="+91 98765 43210"
          />
        </div>

        {/* Position */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center">
            <Briefcase size={16} className="mr-2 text-satruc-500" />
            Position Applied For <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="text"
            name="position"
            required
            value={formData.position}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-md border-satruc-200 focus:ring-satruc-accent-600"
            placeholder="Frontend Developer"
          />
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label className="text-sm font-medium flex items-center">
          <FileText size={16} className="mr-2 text-satruc-500" />
          Cover Letter / Message
        </label>
        <textarea
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your cover letter or message here..."
          className="w-full px-4 py-3 rounded-md border-satruc-200 resize-none focus:ring-satruc-accent-600"
        />
      </div>

      {/* Resume */}
      <div className="space-y-2">
        <label className="text-sm font-medium flex items-center">
          <Paperclip size={16} className="mr-2 text-satruc-500" />
          Attach Resume <span className="text-red-500 ml-1">*</span>
        </label>
        <input
          type="file"
          name="resume"
          required
          accept=".pdf,.doc,.docx"
          className="block w-full px-4 py-2.5 border rounded-md border-satruc-200 file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-satruc-accent-600 file:text-white file:rounded file:cursor-pointer"
        />
      </div>

      {/* Consent */}
      <div className="flex items-start">
        <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-satruc-300 text-satruc-accent-600" />
        <label className="ml-2 text-sm text-satruc-600">
          I agree to the processing of my data according to the
          <a href="/privacy" className="ml-1 text-satruc-accent-600 hover:underline">Privacy Policy</a>
        </label>
      </div>

      {/* Submit */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "flex items-center justify-center rounded-md text-sm font-medium transition-colors",
            "h-12 px-6 py-3 bg-satruc-accent-600 text-white hover:bg-satruc-accent-700 w-full md:w-auto",
            isSubmitting && "opacity-70 cursor-not-allowed"
          )}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                {/* <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0..." /> */}
              </svg>
              Submitting...
            </>
          ) : (
            <>
              Submit Application <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default CareersForm; 
