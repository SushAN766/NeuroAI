
import React, { useState, useRef } from 'react';
import { Upload, ImageIcon, X, FileImage } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface ImageUploaderProps {
  onImageUpload: (imageFile: File) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    handleFile(file);
  };

  const handleFile = (file?: File) => {
    if (!file) return;

    // Check if file is an image
    if (!file.type.match('image.*')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (JPEG, PNG, etc.)",
        variant: "destructive"
      });
      return;
    }

    // Check file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 5MB",
        variant: "destructive"
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
    onImageUpload(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    handleFile(file);
  };

  const clearImage = () => {
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="w-full">
      {!preview ? (
        <div
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
            isDragging ? 'border-medical-500 bg-medical-50 scale-[1.01]' : 'border-gray-200 hover:border-medical-400'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <div className="bg-medical-50 p-4 rounded-full mb-4">
              <FileImage className="h-10 w-10 text-medical-500" />
            </div>
            <p className="text-lg font-medium text-gray-700 mb-1">Drop your MRI scan here</p>
            <p className="text-sm text-gray-500 mb-6 max-w-xs mx-auto">
              Upload a clear MRI scan in JPG, PNG, or DICOM format for the best analysis results
            </p>
            <Button className="bg-medical-600 text-white hover:bg-medical-700">
              <Upload className="mr-2 h-4 w-4" />
              Select Image
            </Button>
          </div>
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
            ref={fileInputRef}
          />
        </div>
      ) : (
        <div className="relative border border-gray-100 rounded-xl overflow-hidden shadow-sm">
          <Button
            variant="outline"
            size="icon"
            className="absolute top-3 right-3 bg-white rounded-full z-10 shadow-md hover:bg-gray-100"
            onClick={clearImage}
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="flex justify-center bg-gray-50 p-4">
            <img
              src={preview}
              alt="MRI Preview"
              className="max-h-[400px] rounded object-contain"
            />
          </div>
          <div className="bg-white p-4 border-t border-gray-100">
            <p className="text-sm text-gray-500 text-center">
              MRI scan ready for analysis
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
