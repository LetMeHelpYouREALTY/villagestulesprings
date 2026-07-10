"use client";
/* eslint-disable max-lines -- large generated marketing section; candidate for future decomposition */

import { useState, useEffect } from "react";

import {
  Calculator,
  DollarSign,
  Percent,
  Calendar,
  TrendingUp,
  TrendingDown,
  Home,
  CreditCard,
  PieChart,
  Download,
  Share2,
  Mail,
  Phone,
  CheckCircle,
  Info,
  AlertCircle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MortgageCalculation {
  principal: number;
  interestRate: number;
  loanTerm: number;
  downPayment: number;
  homePrice: number;
  monthlyPayment: number;
  totalInterest: number;
  totalPayment: number;
  propertyTax: number;
  insurance: number;
  hoa: number;
  totalMonthlyPayment: number;
}

interface LoanProgram {
  id: string;
  name: string;
  description: string;
  minDownPayment: number;
  maxLoanAmount: number;
  interestRate: number;
  benefits: string[];
  requirements: string[];
}

const loanPrograms: LoanProgram[] = [
  {
    id: "conventional",
    name: "Conventional Loan",
    description: "Traditional mortgage with competitive rates",
    minDownPayment: 5,
    maxLoanAmount: 766550,
    interestRate: 6.5,
    benefits: ["Low down payment", "Competitive rates", "No PMI with 20% down"],
    requirements: ["Good credit score", "Stable income", "Debt-to-income ratio < 43%"],
  },
  {
    id: "fha",
    name: "FHA Loan",
    description: "Government-backed loan with low down payment",
    minDownPayment: 3.5,
    maxLoanAmount: 498257,
    interestRate: 6.25,
    benefits: ["Low down payment", "Flexible credit requirements", "Lower closing costs"],
    requirements: ["Credit score 580+", "Primary residence", "Mortgage insurance required"],
  },
  {
    id: "va",
    name: "VA Loan",
    description: "Zero down payment for eligible veterans",
    minDownPayment: 0,
    maxLoanAmount: 766550,
    interestRate: 6.0,
    benefits: ["No down payment", "No PMI", "Lower closing costs"],
    requirements: ["Military service", "Certificate of Eligibility", "Primary residence"],
  },
  {
    id: "usda",
    name: "USDA Loan",
    description: "Rural development loan with zero down payment",
    minDownPayment: 0,
    maxLoanAmount: 498257,
    interestRate: 6.0,
    benefits: ["No down payment", "Low interest rates", "Rural areas"],
    requirements: ["Rural location", "Income limits", "Primary residence"],
  },
];

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
  const [calculation, setCalculation] = useState<MortgageCalculation | null>(null);

  const calculateMortgage = () => {
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const monthlyPayment =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalInterest = monthlyPayment * numberOfPayments - principal;
    const totalPayment = monthlyPayment * numberOfPayments + downPayment;

    const calc: MortgageCalculation = {
      principal,
      interestRate,
      loanTerm,
      downPayment,
      homePrice,
      monthlyPayment,
      totalInterest,
      totalPayment,
      propertyTax,
      insurance,
      hoa,
      totalMonthlyPayment: monthlyPayment + propertyTax + insurance + hoa,
    };

    setCalculation(calc);
  };

  useEffect(() => {
    calculateMortgage();
  }, [homePrice, downPayment, interestRate, loanTerm, propertyTax, insurance, hoa]);

  useEffect(() => {
    const newDownPayment = Math.round(homePrice * (downPaymentPercent / 100));
    setDownPayment(newDownPayment);
  }, [homePrice, downPaymentPercent]);

  const selectedLoanProgram = loanPrograms.find((p) => p.id === selectedProgram);

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
          {/* Calculator */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="mr-2 h-5 w-5 text-green-600" />
                  Mortgage Calculator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Home Price */}
                <div className="space-y-2">
                  <Label htmlFor="homePrice">Home Price</Label>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-gray-500" />
                    <Input
                      id="homePrice"
                      type="number"
                      value={homePrice}
                      onChange={(e) => setHomePrice(Number(e.target.value))}
                      className="text-lg font-semibold"
                    />
                  </div>
                </div>

                {/* Down Payment */}
                <div className="space-y-4">
                  <Label>Down Payment</Label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-gray-500" />
                      <Input
                        type="number"
                        value={downPayment}
                        onChange={(e) => setDownPayment(Number(e.target.value))}
                        className="text-lg font-semibold"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Down Payment Percentage: {downPaymentPercent}%</Label>
                      <Slider
                        value={[downPaymentPercent]}
                        onValueChange={(value) => setDownPaymentPercent(value[0])}
                        max={50}
                        min={0}
                        step={1}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Interest Rate */}
                <div className="space-y-2">
                  <Label>Interest Rate: {interestRate}%</Label>
                  <Slider
                    value={[interestRate]}
                    onValueChange={(value) => setInterestRate(value[0])}
                    max={10}
                    min={2}
                    step={0.1}
                    className="w-full"
                  />
                </div>

                {/* Loan Term */}
                <div className="space-y-2">
                  <Label>Loan Term: {loanTerm} years</Label>
                  <Slider
                    value={[loanTerm]}
                    onValueChange={(value) => setLoanTerm(value[0])}
                    max={30}
                    min={15}
                    step={5}
                    className="w-full"
                  />
                </div>

                {/* Additional Costs */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="propertyTax">Property Tax</Label>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-3 w-3 text-gray-500" />
                      <Input
                        id="propertyTax"
                        type="number"
                        value={propertyTax}
                        onChange={(e) => setPropertyTax(Number(e.target.value))}
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
                        onChange={(e) => setInsurance(Number(e.target.value))}
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
                        onChange={(e) => setHoa(Number(e.target.value))}
                        className="text-sm"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Loan Programs */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="mr-2 h-5 w-5 text-green-600" />
                  Loan Programs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs value={selectedProgram} onValueChange={setSelectedProgram}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="conventional">Conventional</TabsTrigger>
                    <TabsTrigger value="fha">FHA</TabsTrigger>
                    <TabsTrigger value="va">VA</TabsTrigger>
                    <TabsTrigger value="usda">USDA</TabsTrigger>
                  </TabsList>

                  {loanPrograms.map((program) => (
                    <TabsContent key={program.id} value={program.id}>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900">{program.name}</h4>
                          <p className="text-sm text-gray-600">{program.description}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Min Down Payment:</span>
                            <div className="font-semibold">{program.minDownPayment}%</div>
                          </div>
                          <div>
                            <span className="text-gray-600">Interest Rate:</span>
                            <div className="font-semibold">{program.interestRate}%</div>
                          </div>
                        </div>

                        <div>
                          <h5 className="mb-2 font-medium text-gray-900">Benefits:</h5>
                          <ul className="space-y-1 text-sm text-gray-600">
                            {program.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-center">
                                <CheckCircle className="mr-2 h-3 w-3 text-green-600" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="space-y-8">
            {calculation && (
              <>
                {/* Payment Summary */}
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-800">
                      <PieChart className="mr-2 h-5 w-5" />
                      Payment Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="mb-2 text-4xl font-bold text-green-600">
                        ${calculation.totalMonthlyPayment.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600">Total Monthly Payment</div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Principal & Interest:</span>
                        <span className="font-semibold">${calculation.monthlyPayment.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Property Tax:</span>
                        <span className="font-semibold">${calculation.propertyTax.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Insurance:</span>
                        <span className="font-semibold">${calculation.insurance.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">HOA:</span>
                        <span className="font-semibold">${calculation.hoa.toLocaleString()}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Loan Details */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5 text-green-600" />
                      Loan Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-600">Loan Amount</div>
                        <div className="text-lg font-semibold">${calculation.principal.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Down Payment</div>
                        <div className="text-lg font-semibold">${calculation.downPayment.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Interest Rate</div>
                        <div className="text-lg font-semibold">{calculation.interestRate}%</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Loan Term</div>
                        <div className="text-lg font-semibold">{calculation.loanTerm} years</div>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="mb-2 flex justify-between">
                        <span className="text-gray-600">Total Interest:</span>
                        <span className="font-semibold">${calculation.totalInterest.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Payment:</span>
                        <span className="font-semibold">${calculation.totalPayment.toLocaleString()}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Actions */}
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900">Ready to Get Pre-Approved?</h4>
                      <p className="text-sm text-gray-600">
                        Get pre-approved for your Maravilla home and lock in today&apos;s rates.
                      </p>
                      <div className="flex flex-col gap-3 sm:flex-row">
                        <Button className="flex-1 bg-green-600 hover:bg-green-700">
                          <Mail className="mr-2 h-4 w-4" />
                          Get Pre-Approved
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Phone className="mr-2 h-4 w-4" />
                          Speak to Lender
                        </Button>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Download className="mr-2 h-4 w-4" />
                          Download Results
                        </Button>
                        <Button size="sm" variant="outline">
                          <Share2 className="mr-2 h-4 w-4" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
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
