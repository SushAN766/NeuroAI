
import React from 'react';
import { Brain, Share2, AlertTriangle, FileCheck, ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-medical-800 mb-4 flex items-center">
        <span className="bg-medical-100 text-medical-800 p-1 rounded-md mr-2">
          <Brain className="h-5 w-5" />
        </span>
        About Our Technology
      </h2>
      
      <div className="space-y-4">
        <div className="bg-gradient-to-br from-medical-50 to-medical-100 p-5 rounded-xl border border-medical-200">
          <h3 className="font-medium text-medical-900 text-lg mb-2">How It Works</h3>
          <p className="text-gray-700 mb-4">
            Our brain tumor detection system uses state-of-the-art deep learning models to analyze MRI scans and identify potential abnormalities with high precision.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="w-10 h-10 bg-medical-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-medical-700 font-semibold">1</span>
              </div>
              <h4 className="font-medium text-medical-800 mb-1">Upload</h4>
              <p className="text-sm text-gray-600">Upload your MRI scan</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="w-10 h-10 bg-medical-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-medical-700 font-semibold">2</span>
              </div>
              <h4 className="font-medium text-medical-800 mb-1">Analyze</h4>
              <p className="text-sm text-gray-600">AI processes the image</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="w-10 h-10 bg-medical-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-medical-700 font-semibold">3</span>
              </div>
              <h4 className="font-medium text-medical-800 mb-1">Results</h4>
              <p className="text-sm text-gray-600">Review detailed analysis</p>
            </div>
          </div>
        </div>
        
        <Card className="border-amber-200">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-amber-700 text-lg">
              <AlertTriangle className="mr-2 h-5 w-5" />
              Important Disclaimer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 text-sm">
              This tool is designed to assist medical professionals and should not be used as a replacement for proper medical diagnosis. Always consult healthcare providers.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-medical-200">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-medical-700 text-lg">
              <FileCheck className="mr-2 h-5 w-5" />
              Our Technology
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 text-sm mb-4">
              Our system uses a convolutional neural network (CNN) trained on the BraTS dataset, achieving over 94% accuracy in tumor identification.
            </p>
            
            <div className="flex items-center justify-between text-xs bg-medical-50 p-3 rounded-lg">
              <div className="text-center">
                <div className="font-bold text-medical-700 text-xl mb-1">94.5%</div>
                <div className="text-gray-600">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-medical-700 text-xl mb-1">50K+</div>
                <div className="text-gray-600">Images Trained</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-medical-700 text-xl mb-1">5</div>
                <div className="text-gray-600">Tumor Types</div>
              </div>
            </div>
            
            <a href="#" className="text-medical-600 font-medium text-sm mt-4 inline-flex items-center hover:text-medical-800">
              Read our research paper <ArrowUpRight className="ml-1 h-3 w-3" />
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutSection;
