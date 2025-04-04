
import React from 'react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Activity, Users, BarChart2, PieChart } from 'lucide-react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart as ReChartPie, Pie, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const Dashboard = () => {
  const { toast } = useToast();

  // Sample data for demonstration
  const stats = [
    { id: 1, title: 'Total Scans', value: '1,246', icon: Brain, change: '+12.5%', color: 'bg-blue-100 text-blue-700' },
    { id: 2, title: 'Detection Rate', value: '94.3%', icon: Activity, change: '+2.1%', color: 'bg-green-100 text-green-700' },
    { id: 3, title: 'Active Users', value: '328', icon: Users, change: '+18.7%', color: 'bg-purple-100 text-purple-700' },
    { id: 4, title: 'Weekly Results', value: '156', icon: BarChart2, change: '+5.3%', color: 'bg-amber-100 text-amber-700' },
  ];

  // Sample chart data
  const scanActivityData = [
    { month: 'Jan', scans: 45, detections: 18 },
    { month: 'Feb', scans: 52, detections: 22 },
    { month: 'Mar', scans: 61, detections: 25 },
    { month: 'Apr', scans: 67, detections: 30 },
    { month: 'May', scans: 85, detections: 37 },
    { month: 'Jun', scans: 91, detections: 41 },
    { month: 'Jul', scans: 101, detections: 46 },
    { month: 'Aug', scans: 110, detections: 52 },
    { month: 'Sep', scans: 115, detections: 55 },
    { month: 'Oct', scans: 129, detections: 59 },
    { month: 'Nov', scans: 135, detections: 64 },
    { month: 'Dec', scans: 144, detections: 68 },
  ];

  // Chart configuration
  const chartConfig = {
    scans: {
      label: "Total Scans",
      theme: {
        light: "#4338ca",
        dark: "#818cf8",
      },
    },
    detections: {
      label: "Detections",
      theme: {
        light: "#ea580c",
        dark: "#fb923c",
      },
    },
  };
  
  // Accuracy by region data
  const accuracyData = [
    { name: 'Frontal', accuracy: 96 },
    { name: 'Temporal', accuracy: 92 },
    { name: 'Parietal', accuracy: 88 },
    { name: 'Occipital', accuracy: 94 },
    { name: 'Cerebellum', accuracy: 90 },
  ];

  // Tumor type distribution data
  const tumorDistributionData = [
    { name: 'Glioma', value: 42, color: '#ef4444' },
    { name: 'Meningioma', value: 28, color: '#f59e0b' },
    { name: 'Pituitary', value: 19, color: '#8b5cf6' },
    { name: 'No Tumor', value: 11, color: '#10b981' },
  ];

  // Recent detection data with specific tumor types
  const recentDetections = [
    { id: 1, patientId: Math.floor(Math.random() * 10000), tumorType: 'glioma', timeAgo: '2h ago', confidence: 97 },
    { id: 2, patientId: Math.floor(Math.random() * 10000), tumorType: 'meningioma', timeAgo: '4h ago', confidence: 92 },
    { id: 3, patientId: Math.floor(Math.random() * 10000), tumorType: 'pituitary', timeAgo: '6h ago', confidence: 96 },
    { id: 4, patientId: Math.floor(Math.random() * 10000), tumorType: 'notumor', timeAgo: '12h ago', confidence: 99 },
  ];

  // Color mapping for tumor types (same as in ResultsDisplay)
  const tumorColorMap = {
    pituitary: 'bg-purple-100 text-purple-700',
    meningioma: 'bg-amber-100 text-amber-700',
    glioma: 'bg-red-100 text-red-700',
    notumor: 'bg-green-100 text-green-700',
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-medical-600 to-medical-800 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Dashboard</h1>
            <p className="text-medical-100">Monitor and analyze your brain scan detection metrics</p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <section className="mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <Card key={stat.id} className="border border-gray-100 shadow-sm hover:shadow transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg font-medium text-gray-700">{stat.title}</CardTitle>
                      <div className={`p-2 rounded-lg ${stat.color}`}>
                        <stat.icon className="h-5 w-5" />
                      </div>
                    </div>
                    <CardDescription className="text-gray-500">Last 30 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline justify-between">
                      <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
                      <span className="text-sm font-medium text-green-600">{stat.change}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <Card className="lg:col-span-2 border border-gray-100 shadow-sm">
              <CardHeader>
                <CardTitle>Scan Activity</CardTitle>
                <CardDescription>Brain scan analysis over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer className="h-80" config={chartConfig}>
                  <AreaChart data={scanActivityData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorScans" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-scans)" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="var(--color-scans)" stopOpacity={0.1}/>
                      </linearGradient>
                      <linearGradient id="colorDetections" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--color-detections)" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="var(--color-detections)" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area 
                      type="monotone" 
                      dataKey="scans" 
                      stroke="var(--color-scans)" 
                      fillOpacity={1} 
                      fill="url(#colorScans)" 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="detections" 
                      stroke="var(--color-detections)" 
                      fillOpacity={1} 
                      fill="url(#colorDetections)" 
                    />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-100 shadow-sm">
              <CardHeader>
                <CardTitle>Tumor Type Distribution</CardTitle>
                <CardDescription>Cases by tumor classification</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <ReChartPie>
                      <Pie
                        data={tumorDistributionData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {tumorDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value} cases`, 'Frequency']} />
                    </ReChartPie>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </section>
          
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2 border border-gray-100 shadow-sm">
              <CardHeader>
                <CardTitle>Detection Accuracy by Brain Region</CardTitle>
                <CardDescription>Performance metrics across different areas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={accuracyData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis domain={[70, 100]} />
                      <Tooltip />
                      <Legend />
                      <Bar 
                        dataKey="accuracy" 
                        name="Accuracy %" 
                        fill="#8884d8" 
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-100 shadow-sm">
              <CardHeader>
                <CardTitle>Recent Detections</CardTitle>
                <CardDescription>Latest tumor classifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentDetections.map((detection) => (
                    <div key={detection.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className={`h-10 w-10 rounded-full ${tumorColorMap[detection.tumorType as keyof typeof tumorColorMap]} flex items-center justify-center mr-3`}>
                        <Brain className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Patient #{detection.patientId}</p>
                        <p className="text-xs text-gray-500">{detection.timeAgo}</p>
                      </div>
                      <div className="ml-auto flex flex-col items-end">
                        <span className={`text-xs font-medium px-2 py-1 rounded-full capitalize ${tumorColorMap[detection.tumorType as keyof typeof tumorColorMap]}`}>
                          {detection.tumorType === 'notumor' ? 'No Tumor' : detection.tumorType}
                        </span>
                        <span className="text-xs text-gray-500 mt-1">{detection.confidence}% conf.</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
