import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { Clock, Phone, Mail } from 'lucide-react';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  education: string;
  passingYear: string;
  message: string;
};

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Here you would typically send the form data to your backend
    alert('Form submitted successfully!');
    reset();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-center mb-12"
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Contact Us
        </motion.h2>
        <motion.div variants={itemVariants} className="w-20 h-1 bg-blue-600 mx-auto mb-6"></motion.div>
        <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
          Get in touch with us for more information about our courses and services
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="flex items-start">
            <div className="flex-shrink-0">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Walk-in Inquiry Hours</h3>
              <p className="mt-1 text-gray-600">7 days a week (09:30 AM - 06:00 PM)</p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-start">
            <div className="flex-shrink-0">
              <Phone className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Phone</h3>
              <p className="mt-1 text-gray-600">+91 93461 52382</p>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-start">
            <div className="flex-shrink-0">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Email</h3>
              <p className="mt-1 text-gray-600">info@ionsemiconductors.com</p>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    {...register('firstName', { required: 'First name is required' })}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    {...register('lastName', { required: 'Last name is required' })}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.lastName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone (+91) *
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone', { 
                    required: 'Phone number is required',
                    pattern: {
                      value: /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/,
                      message: 'Please enter a valid Indian phone number'
                    }
                  })}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="+91"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                    Education Qualification *
                  </label>
                  <input
                    type="text"
                    id="education"
                    {...register('education', { required: 'Education qualification is required' })}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.education ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.education && (
                    <p className="mt-1 text-sm text-red-600">{errors.education.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="passingYear" className="block text-sm font-medium text-gray-700 mb-1">
                    Year of Passing *
                  </label>
                  <input
                    type="text"
                    id="passingYear"
                    {...register('passingYear', { 
                      required: 'Year of passing is required',
                      pattern: {
                        value: /^(19|20)\d{2}$/,
                        message: 'Please enter a valid year'
                      }
                    })}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.passingYear ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="YYYY"
                  />
                  {errors.passingYear && (
                    <p className="mt-1 text-sm text-red-600">{errors.passingYear.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register('message', { required: 'Message is required' })}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>
              
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-transform hover:-translate-y-1"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => reset()}
                  className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-transform hover:-translate-y-1"
                >
                  Clear
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;