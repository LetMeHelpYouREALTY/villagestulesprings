"use client";

import { useState, useMemo } from "react";

import { Calculator, AlertCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import { MaravillaLoanPrograms } from "./maravilla-loan-programs";
import { calculateMortgage } from "./maravilla-mortgage-data";
import { MaravillaMortgageForm } from "./maravilla-mortgage-form";
import { MaravillaMortgageResults } from "./maravilla-mortgage-results";

export function MaravillaMortgageCalculator() {
  const [homePrice, setHomePrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(100000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [propertyTax, setPropertyTax] = useState(500);
  const [insurance, setInsurance] = useState(150);
  const [hoa, setHoa] = useState(200);
  const [selectedProgram, setSelectedProgram] = useState("conventional");

  const handleHomePriceChange = (value: number) => {
    setHomePrice(value);
    setDownPayment(Math.round(value * (downPaymentPercent / 100)));
  };

  const handleDownPaymentPercentChange = (value: number) => {
    setDownPaymentPercent(value);
    setDownPayment(Math.round(homePrice * (value / 100)));
  };

  const calculation = useMemo(
    () => calculateMortgage({ homePrice, downPayment, interestRate, loanTerm, propertyTax, insurance, hoa }),
    [homePrice, downPayment, interestRate, loanTerm, propertyTax, insurance, hoa],
  );

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <Badge variant="secondary" className="mb-4">
            <Calculator className="mr-2 h-4 w-4" />
            Mortgage Calculator
          </Badge>
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Calculate Your Monthly Payment</h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Get an accurate estimate of your monthly mortgage payment and explore different loan programs available for
            Maravilla homes.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <MaravillaMortgageForm
              homePrice={homePrice}
              onHomePriceChange={handleHomePriceChange}
              downPayment={downPayment}
              onDownPaymentChange={setDownPayment}
              downPaymentPercent={downPaymentPercent}
              onDownPaymentPercentChange={handleDownPaymentPercentChange}
              interestRate={interestRate}
              onInterestRateChange={setInterestRate}
              loanTerm={loanTerm}
              onLoanTermChange={setLoanTerm}
              propertyTax={propertyTax}
              onPropertyTaxChange={setPropertyTax}
              insurance={insurance}
              onInsuranceChange={setInsurance}
              hoa={hoa}
              onHoaChange={setHoa}
            />

            <MaravillaLoanPrograms selectedProgram={selectedProgram} onSelectedProgramChange={setSelectedProgram} />
          </div>

          <div className="space-y-8">
            <MaravillaMortgageResults calculation={calculation} />
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16">
          <Card className="border-yellow-200 bg-yellow-50">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="mt-0.5 h-5 w-5 text-yellow-600" />
                <div>
                  <h4 className="mb-2 font-semibold text-yellow-800">Important Disclaimer</h4>
                  <p className="text-sm text-yellow-700">
                    This calculator provides estimates only. Actual rates and terms may vary based on income, and other
                    factors. Contact a qualified lender for personalized mortgage information and pre-approval.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
