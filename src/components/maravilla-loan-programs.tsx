import { CreditCard, CheckCircle } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { loanPrograms } from "./maravilla-mortgage-data";

interface MaravillaLoanProgramsProps {
  selectedProgram: string;
  onSelectedProgramChange: (programId: string) => void;
}

export function MaravillaLoanPrograms({ selectedProgram, onSelectedProgramChange }: MaravillaLoanProgramsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <CreditCard className="mr-2 h-5 w-5 text-green-600" />
          Loan Programs
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={selectedProgram} onValueChange={onSelectedProgramChange}>
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
                    {program.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center">
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
  );
}
