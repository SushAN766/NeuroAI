
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Brain, Upload, BarChart2, FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const GetStarted = () => {
  const steps = [
    {
      id: 1,
      title: 'Prepare Your MRI Scans',
      description: 'Ensure your MRI scans are in a standard format (JPEG, PNG, DICOM). The clearer the scan, the more accurate the results.',
      icon: FileText,
      color: 'bg-blue-100 text-blue-700'
    },
    {
      id: 2,
      title: 'Upload Your Scans',
      description: 'Use our secure uploader to submit your brain MRI scans. All data is encrypted and handled with strict privacy protocols.',
      icon: Upload,
      color: 'bg-green-100 text-green-700'
    },
    {
      id: 3,
      title: 'Get Instant Analysis',
      description: 'Our AI algorithm will process the scan and provide immediate feedback on potential tumor detection with confidence levels.',
      icon: Brain,
      color: 'bg-purple-100 text-purple-700'
    },
    {
      id: 4,
      title: 'Review Detailed Results',
      description: 'Examine comprehensive results including tumor probability, location estimation, and type classification if available.',
      icon: BarChart2,
      color: 'bg-amber-100 text-amber-700'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        <div className="relative bg-gradient-to-r from-medical-600 to-medical-800 text-white py-16">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Started with BrainScan</h1>
              <p className="text-xl text-medical-100 mb-8">
                Begin your journey with our AI-powered brain tumor detection system in just a few simple steps.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-medical-800 hover:bg-gray-100">
                  <Link to="/">
                    Try It Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link to="/about">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform uses advanced deep learning algorithms to analyze brain MRI scans and detect potential tumors with high accuracy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step) => (
              <Card key={step.id} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${step.color} flex items-center justify-center mb-4`}>
                    <step.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">Step {step.id}: {step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-medical-50 rounded-2xl p-8 border border-medical-100 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-medical-800 mb-4">Ready to start detecting tumors?</h3>
                <p className="text-gray-600 mb-6">
                  Our platform is designed for medical professionals to enhance diagnostic capabilities through cutting-edge AI technology.
                </p>
                <Button asChild size="lg" className="bg-medical-600 hover:bg-medical-700">
                  <Link to="/">
                    Upload Your First Scan
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="w-40 h-40 bg-medical-200 rounded-full flex items-center justify-center">
                  <Brain className="h-20 w-20 text-medical-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GetStarted;
