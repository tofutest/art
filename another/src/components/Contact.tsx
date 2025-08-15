import React from 'react';
import { MailIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
export function Contact() {
  return <section id="contact" className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <p className="mb-8 text-gray-600">
          For inquiries about commissions, exhibitions, or available works,
          please reach out via email or social media.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
          <a href="mailto:alex@example.com" className="flex items-center justify-center gap-2 py-3 px-6 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
            <MailIcon size={20} />
            <span>alex@example.com</span>
          </a>
          <a href="#" className="flex items-center justify-center gap-2 py-3 px-6 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
            <InstagramIcon size={20} />
            <span>@Étienneart</span>
          </a>
          <a href="#" className="flex items-center justify-center gap-2 py-3 px-6 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
            <TwitterIcon size={20} />
            <span>@Étienne</span>
          </a>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-4">
            Subscribe to my newsletter
          </h3>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input type="email" placeholder="Your email address" className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400" required />
            <button type="submit" className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>;
}