import { Calculator, DollarSign } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface MaravillaMortgageFormProps {
  homePrice: number;
  onHomePriceChange: (value: number) => void;
  downPayment: number;
  onDownPaymentChange: (value: number) => void;
  downPaymentPercent: number;
  onDownPaymentPercentChange: (value: number) => void;
  interestRate: number;
  onInterestRateChange: (value: number) => void;
  loanTerm: number;
  onLoanTermChange: (value: number) => void;
  propertyTax: number;
  onPropertyTaxChange: (value: number) => void;
  insurance: number;
  onInsuranceChange: (value: number) => void;
  hoa: number;
  onHoaChange: (value: number) => void;
}

export function MaravillaMortgageForm({
  homePrice,
  onHomePriceChange,
  downPayment,
  onDownPaymentChange,
  downPaymentPercent,
  onDownPaymentPercentChange,
  interestRate,
  onInterestRateChange,
  loanTerm,
  onLoanTermChange,
  propertyTax,
  onPropertyTaxChange,
  insurance,
  onInsuranceChange,
  hoa,
  onHoaChange,
}: MaravillaMortgageFormProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calculator className="mr-2 h-5 w-5 text-green-600" />
          Mortgage Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="homePrice">Home Price</Label>
          <div className="flex items-center space-x-2">
            <DollarSign className="h-4 w-4 text-gray-500" />
            <Input
              id="homePrice"
              type="number"
              value={homePrice}
              onChange={(e) => onHomePriceChange(Number(e.target.value))}
              className="text-lg font-semibold"
            />
          </div>
        </div>

        <div className="space-y-4">
          <Label>Down Payment</Label>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-4 w-4 text-gray-500" />
              <Input
                type="number"
                value={downPayment}
                onChange={(e) => onDownPaymentChange(Number(e.target.value))}
                className="text-lg font-semibold"
              />
            </div>
            <div className="space-y-2">
              <Label>Down Payment Percentage: {downPaymentPercent}%</Label>
              <Slider
                value={[downPaymentPercent]}
                onValueChange={(value) => onDownPaymentPercentChange(value[0])}
                max={50}
                min={0}
                step={1}
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Interest Rate: {interestRate}%</Label>
          <Slider
            value={[interestRate]}
            onValueChange={(value) => onInterestRateChange(value[0])}
            max={10}
            min={2}
            step={0.1}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label>Loan Term: {loanTerm} years</Label>
          <Slider
            value={[loanTerm]}
            onValueChange={(value) => onLoanTermChange(value[0])}
            max={30}
            min={15}
            step={5}
            className="w-full"
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="propertyTax">Property Tax</Label>
            <div className="flex items-center space-x-1">
              <DollarSign className="h-3 w-3 text-gray-500" />
              <Input
                id="propertyTax"
                type="number"
                value={propertyTax}
                onChange={(e) => onPropertyTaxChange(Number(e.target.value))}
                className="text-sm"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="insurance">Insurance</Label>
            <div className="flex items-center space-x-1">
              <DollarSign className="h-3 w-3 text-gray-500" />
              <Input
                id="insurance"
                type="number"
                value={insurance}
                onChange={(e) => onInsuranceChange(Number(e.target.value))}
                className="text-sm"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="hoa">HOA</Label>
            <div className="flex items-center space-x-1">
              <DollarSign className="h-3 w-3 text-gray-500" />
              <Input
                id="hoa"
                type="number"
                value={hoa}
                onChange={(e) => onHoaChange(Number(e.target.value))}
                className="text-sm"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
