export interface MortgageCalculation {
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

export interface LoanProgram {
  id: string;
  name: string;
  description: string;
  minDownPayment: number;
  maxLoanAmount: number;
  interestRate: number;
  benefits: string[];
  requirements: string[];
}

export const loanPrograms: LoanProgram[] = [
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

export interface MortgageInputs {
  homePrice: number;
  downPayment: number;
  interestRate: number;
  loanTerm: number;
  propertyTax: number;
  insurance: number;
  hoa: number;
}

export function calculateMortgage(inputs: MortgageInputs): MortgageCalculation {
  const { homePrice, downPayment, interestRate, loanTerm, propertyTax, insurance, hoa } = inputs;
  const principal = homePrice - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;

  const monthlyPayment =
    (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  const totalInterest = monthlyPayment * numberOfPayments - principal;
  const totalPayment = monthlyPayment * numberOfPayments + downPayment;

  return {
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
}
