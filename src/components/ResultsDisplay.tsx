
import React from 'react';
import { Brain, AlertCircle, CheckCircle2, Activity, MapPin, FileType, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { AnalysisResult } from '@/pages/Index';

interface ResultsDisplayProps {
  isAnalyzing: boolean;
  result: AnalysisResult | null;
}

// Color mapping for different tumor types
const tumorColorMap: Record<string, { bg: string, text: string, border: string, light: string }> = {
  pituitary: {
    bg: 'bg-purple-50',
    text: 'text-purple-700',
    border: 'border-purple-200',
    light: 'bg-purple-100'
  },
  meningioma: {
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    border: 'border-amber-200',
    light: 'bg-amber-100'
  },
  glioma: {
    bg: 'bg-red-50',
    text: 'text-red-700',
    border: 'border-red-200',
    light: 'bg-red-100'
  },
  notumor: {
    bg: 'bg-green-50',
    text: 'text-green-700',
    border: 'border-green-200',
    light: 'bg-green-100'
  }
};

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ isAnalyzing, result }) => {
  if (isAnalyzing) {
    return (
      <Card className="w-full border-none shadow-none">
        <CardContent className="p-0">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-50 p-3 rounded-full">
                <Brain className="h-6 w-6 text-blue-500 animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Analyzing MRI Scan</h3>
                <p className="text-gray-500">Our model is processing your image</p>
              </div>
            </div>
            
            <Progress value={result ? 100 : 45} className="h-2 bg-gray-100" />
            
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="flex flex-col items-center p-3 rounded-lg bg-blue-50 text-blue-700">
                <span className="font-medium mb-1">Processing</span>
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-blue-50 text-blue-700">
                <span className="font-medium mb-1">Analyzing</span>
                <Activity className="h-4 w-4 animate-pulse" />
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-gray-50 text-gray-400">
                <span className="font-medium mb-1">Results</span>
                <AlertCircle className="h-4 w-4" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!result) {
    return null;
  }

  const tumorType = result.tumorType || 'notumor';
  const colors = tumorColorMap[tumorType];

  return (
    <Card className="w-full border-none shadow-none overflow-hidden">
      <CardContent className="p-0">
        <div className={`p-6 rounded-xl bg-gradient-to-r ${
          result.hasTumor 
            ? `from-${colors.bg} to-${colors.light} border ${colors.border}`
            : 'from-green-50 to-green-100 border border-green-200'
        }`}>
          <div className="flex items-center space-x-4 mb-6">
            <div className={`p-3 rounded-full ${
              result.hasTumor ? colors.light + ' ' + colors.text : 'bg-green-100 text-green-600'
            }`}>
              {result.hasTumor ? (
                <AlertCircle className="h-6 w-6" />
              ) : (
                <CheckCircle2 className="h-6 w-6" />
              )}
            </div>
            <div>
              <h3 className={`text-lg font-semibold ${
                result.hasTumor ? colors.text : 'text-green-700'
              }`}>
                {result.hasTumor 
                  ? `Detected: ${result.tumorType?.charAt(0).toUpperCase() + result.tumorType?.slice(1)} Tumor` 
                  : 'No Tumor Detected'}
              </h3>
              <p className="text-sm text-gray-600">
                Analysis completed with {result.confidence}% confidence
              </p>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">Confidence Level</span>
              <span className={`text-sm font-bold ${
                result.hasTumor ? colors.text : 'text-green-700'
              }`}>
                {result.confidence}%
              </span>
            </div>
            <Progress 
              value={result.confidence} 
              className={`h-2 ${
                result.hasTumor 
                  ? colors.bg + ' [&>div]:' + colors.text
                  : 'bg-green-100 [&>div]:bg-green-500'
              }`} 
            />
          </div>
          
          <div className="space-y-4">
            {result.hasTumor && (
              <div className="grid grid-cols-2 gap-4">
                {result.tumorType && (
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center space-x-2 mb-1">
                      <FileType className={`h-4 w-4 ${colors.text}`} />
                      <span className="text-sm font-medium text-gray-600">Type</span>
                    </div>
                    <p className="text-sm font-semibold capitalize">{result.tumorType}</p>
                  </div>
                )}
                
                {result.location && (
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center space-x-2 mb-1">
                      <MapPin className={`h-4 w-4 ${colors.text}`} />
                      <span className="text-sm font-medium text-gray-600">Location</span>
                    </div>
                    <p className="text-sm font-semibold">{result.location}</p>
                  </div>
                )}
              </div>
            )}
            
            {result.description && (
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center space-x-2 mb-1">
                  <Info className={`h-4 w-4 ${result.hasTumor ? colors.text : 'text-green-700'}`} />
                  <span className="text-sm font-medium text-gray-600">Description</span>
                </div>
                <p className="text-sm text-gray-700">{result.description}</p>
              </div>
            )}
            
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
              <p className="text-amber-800 text-sm flex items-start">
                <AlertCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Note:</strong> This is a preliminary analysis. Always consult with a qualified medical professional for proper diagnosis and treatment options.
                </span>
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultsDisplay;
