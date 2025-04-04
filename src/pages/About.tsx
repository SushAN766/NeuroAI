
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-medical-800 mb-6">About BrainScan</h1>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-medical-700 mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                BrainScan is dedicated to improving early detection of brain tumors through the application of 
                cutting-edge artificial intelligence and machine learning technologies. Our goal is to provide 
                accessible tools that can assist medical professionals in making faster, more accurate diagnoses.
              </p>
              <p className="text-gray-700">
                By leveraging deep learning and computer vision, we aim to reduce diagnostic delays and improve 
                patient outcomes worldwide, particularly in regions with limited access to specialized radiologists.
              </p>
            </CardContent>
          </Card>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-medical-700 mb-4">The Technology</h2>
              <p className="text-gray-700 mb-4">
                Our neural network architecture is built on a modified ResNet backbone with additional specialized 
                layers for medical image analysis. The model has been trained on over 10,000 annotated MRI scans 
                from diverse patient populations to ensure high accuracy across different demographic groups.
              </p>
              <p className="text-gray-700 mb-4">
                Key technical features include:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                <li>Convolutional neural networks optimized for medical imaging</li>
                <li>Transfer learning techniques to maximize performance with limited training data</li>
                <li>Segmentation capabilities to outline tumor boundaries</li>
                <li>Multi-class classification to identify different tumor types</li>
                <li>Uncertainty quantification to highlight areas requiring human expert attention</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-medical-700 mb-4">Data Privacy & Security</h2>
              <p className="text-gray-700 mb-4">
                We take data privacy extremely seriously. All images processed by our system are:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                <li>Encrypted in transit and at rest</li>
                <li>Processed locally when possible to minimize data transmission</li>
                <li>Never stored without explicit consent</li>
                <li>De-identified and anonymized when used for model improvement</li>
              </ul>
              <p className="text-gray-700">
                Our systems comply with healthcare data regulations and best practices for medical technology.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-medical-700 mb-4">Research Team</h2>
              <p className="text-gray-700 mb-4">
                BrainScan was developed by a multidisciplinary team of researchers, including:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Neuroradiologists with expertise in tumor diagnosis</li>
                <li>Computer vision researchers specializing in medical imaging</li>
                <li>Machine learning engineers focused on healthcare applications</li>
                <li>Clinical partners providing real-world validation and feedback</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
