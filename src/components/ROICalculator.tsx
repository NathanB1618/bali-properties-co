
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  HomeIcon, 
  CalendarDaysIcon, 
  BanknoteIcon, 
  BarChart3Icon, 
  WrenchIcon, 
  PieChartIcon,
  CalculatorIcon,
  DollarSignIcon,
  TrendingUpIcon,
  CheckCircleIcon,
  TrophyIcon
} from "lucide-react";

interface CalculationResult {
  annualGrossIncome: number;
  annualExpenses: number;
  netAnnualReturn: number;
  rentalYield: number;
  estimatedCapitalGrowth: number;
  total5YearReturn: number;
}

const ROICalculator = () => {
  const [propertyValue, setPropertyValue] = useState<number>(350000);
  const [personalUseDays, setPersonalUseDays] = useState<number>(30);
  const [nightlyRate, setNightlyRate] = useState<number>(250);
  const [managementFee, setManagementFee] = useState<number>(15);
  const [occupancyRate, setOccupancyRate] = useState<number>(70);
  const [maintenanceFee, setMaintenanceFee] = useState<number>(2);
  const [results, setResults] = useState<CalculationResult | null>(null);

  const handleCalculate = () => {
    // Calculate available rental days (accounting for personal use)
    const availableRentalDays = 365 - personalUseDays;
    
    // Calculate expected occupied days based on occupancy rate
    const occupiedDays = Math.floor(availableRentalDays * (occupancyRate / 100));
    
    // Calculate annual gross income
    const annualGrossIncome = occupiedDays * nightlyRate;
    
    // Calculate management expenses
    const managementExpenses = annualGrossIncome * (managementFee / 100);
    
    // Calculate maintenance expenses
    const maintenanceExpenses = propertyValue * (maintenanceFee / 100);
    
    // Calculate total annual expenses
    const annualExpenses = managementExpenses + maintenanceExpenses;
    
    // Calculate net annual return
    const netAnnualReturn = annualGrossIncome - annualExpenses;
    
    // Calculate rental yield
    const rentalYield = (netAnnualReturn / propertyValue) * 100;
    
    // Estimate 5-year capital growth (assuming 10% annual growth in Bali's prime areas)
    const annualCapitalGrowthRate = 0.10; 
    const estimatedCapitalGrowth = propertyValue * Math.pow(1 + annualCapitalGrowthRate, 5) - propertyValue;
    
    // Calculate total 5-year return (net rental income over 5 years + capital growth)
    const total5YearReturn = (netAnnualReturn * 5) + estimatedCapitalGrowth;
    
    // Update results state
    setResults({
      annualGrossIncome,
      annualExpenses,
      netAnnualReturn,
      rentalYield,
      estimatedCapitalGrowth,
      total5YearReturn
    });
  };

  // Format currency for display
  const formatCurrency = (amount: number): string => {
    return `AUD $${Math.round(amount).toLocaleString()}`;
  };

  return (
    <section id="calculator" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-bali-deep font-poppins flex items-center justify-center gap-2">
            <DollarSignIcon className="text-bali-gold" />
            Calculate Your Potential Returns
            <DollarSignIcon className="text-bali-gold" />
          </h2>
          <p className="text-xl text-gray-600 mt-3 max-w-3xl mx-auto">
            Use our calculator to estimate your investment returns based on real Bali property data
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <label className="block">
                <div className="flex items-center gap-2 text-bali-deep font-medium mb-1.5">
                  <HomeIcon className="text-bali-teal" size={18} />
                  Property Value (AUD)
                </div>
                <Input 
                  type="number" 
                  value={propertyValue} 
                  onChange={(e) => setPropertyValue(Number(e.target.value))}
                  className="border-gray-300"
                />
              </label>
              
              <label className="block">
                <div className="flex items-center gap-2 text-bali-deep font-medium mb-1.5">
                  <BanknoteIcon className="text-bali-teal" size={18} />
                  Nightly Rental Rate (AUD)
                </div>
                <Input 
                  type="number" 
                  value={nightlyRate} 
                  onChange={(e) => setNightlyRate(Number(e.target.value))}
                  className="border-gray-300"
                />
              </label>
              
              <label className="block">
                <div className="flex items-center gap-2 text-bali-deep font-medium mb-1.5">
                  <BarChart3Icon className="text-bali-teal" size={18} />
                  Expected Occupancy Rate (%)
                </div>
                <Input 
                  type="number" 
                  value={occupancyRate} 
                  onChange={(e) => setOccupancyRate(Number(e.target.value))}
                  min={0}
                  max={100}
                  className="border-gray-300"
                />
              </label>
            </div>
            
            <div className="space-y-4">
              <label className="block">
                <div className="flex items-center gap-2 text-bali-deep font-medium mb-1.5">
                  <CalendarDaysIcon className="text-bali-teal" size={18} />
                  Personal Use Days Per Year
                </div>
                <Input 
                  type="number" 
                  value={personalUseDays} 
                  onChange={(e) => setPersonalUseDays(Number(e.target.value))}
                  min={0}
                  max={365}
                  className="border-gray-300"
                />
              </label>
              
              <label className="block">
                <div className="flex items-center gap-2 text-bali-deep font-medium mb-1.5">
                  <WrenchIcon className="text-bali-teal" size={18} />
                  Management Fee (%)
                </div>
                <Input 
                  type="number" 
                  value={managementFee} 
                  onChange={(e) => setManagementFee(Number(e.target.value))}
                  min={0}
                  max={100}
                  className="border-gray-300"
                />
              </label>
              
              <label className="block">
                <div className="flex items-center gap-2 text-bali-deep font-medium mb-1.5">
                  <PieChartIcon className="text-bali-teal" size={18} />
                  Annual Maintenance (%)
                </div>
                <Input 
                  type="number" 
                  value={maintenanceFee} 
                  onChange={(e) => setMaintenanceFee(Number(e.target.value))}
                  min={0}
                  max={100}
                  className="border-gray-300"
                />
              </label>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Button 
              onClick={handleCalculate}
              className="bg-bali-gold hover:bg-bali-orange text-bali-deep font-medium px-8 py-6 text-lg h-auto"
            >
              <CalculatorIcon className="mr-2" />
              Calculate Returns
            </Button>
          </div>

          {results && (
            <div className="mt-10 bg-soft-green rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-green-200">
                  <div className="flex items-center gap-2">
                    <DollarSignIcon className="text-bali-teal" size={18} />
                    <span className="font-medium">Annual Gross Income:</span>
                  </div>
                  <span className="font-semibold">{formatCurrency(results.annualGrossIncome)}</span>
                </div>
                
                <div className="flex justify-between items-center pb-2 border-b border-green-200">
                  <div className="flex items-center gap-2">
                    <DollarSignIcon className="text-bali-teal" size={18} />
                    <span className="font-medium">Annual Expenses:</span>
                  </div>
                  <span className="font-semibold">{formatCurrency(results.annualExpenses)}</span>
                </div>
                
                <div className="flex justify-between items-center pb-2 border-b border-green-200">
                  <div className="flex items-center gap-2">
                    <DollarSignIcon className="text-bali-gold" size={18} />
                    <span className="font-medium">Net Annual Return:</span>
                  </div>
                  <span className="font-semibold">{formatCurrency(results.netAnnualReturn)}</span>
                </div>
                
                <div className="flex justify-between items-center pb-2 border-b border-green-200">
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="text-green-600" size={18} />
                    <span className="font-medium">Rental Yield:</span>
                  </div>
                  <span className="font-semibold">{results.rentalYield.toFixed(1)}%</span>
                </div>
                
                <div className="flex justify-between items-center pb-2 border-b border-green-200">
                  <div className="flex items-center gap-2">
                    <TrendingUpIcon className="text-blue-600" size={18} />
                    <span className="font-medium">Estimated 5-Year Capital Growth:</span>
                  </div>
                  <span className="font-semibold">{formatCurrency(results.estimatedCapitalGrowth)}</span>
                </div>
                
                <div className="flex justify-between items-center pt-2">
                  <div className="flex items-center gap-2">
                    <TrophyIcon className="text-bali-gold" size={20} />
                    <span className="font-bold text-lg">Total 5-Year Return:</span>
                  </div>
                  <span className="font-bold text-bali-teal text-lg">{formatCurrency(results.total5YearReturn)}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
