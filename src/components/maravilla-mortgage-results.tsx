import { PieChart, TrendingUp, Mail, Phone, Download, Share2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import type { MortgageCalculation } from "./maravilla-mortgage-data";

interface MaravillaMortgageResultsProps {
  calculation: MortgageCalculation;
}

export function MaravillaMortgageResults({ calculation }: MaravillaMortgageResultsProps) {
  return (
    <>
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
  );
}
