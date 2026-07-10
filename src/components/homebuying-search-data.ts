export interface Property {
  id: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  image: string;
  type: string;
  yearBuilt: number;
  features: string[];
  daysOnMarket: number;
  status: "for-sale" | "pending" | "sold";
}

export const mockProperties: Property[] = [
  {
    id: "1",
    address: "123 Main Street, Las Vegas, NV 89101",
    price: 485000,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1850,
    image: "/api/placeholder/400/300",
    type: "Single Family",
    yearBuilt: 2018,
    features: ["Updated Kitchen", "Hardwood Floors", "Two-Car Garage"],
    daysOnMarket: 12,
    status: "for-sale",
  },
  {
    id: "2",
    address: "456 Oak Avenue, Las Vegas, NV 89102",
    price: 325000,
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1200,
    image: "/api/placeholder/400/300",
    type: "Condo",
    yearBuilt: 2020,
    features: ["Modern Appliances", "Balcony", "Pool Access"],
    daysOnMarket: 8,
    status: "for-sale",
  },
  {
    id: "3",
    address: "789 Pine Street, Las Vegas, NV 89103",
    price: 650000,
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 2400,
    image: "/api/placeholder/400/300",
    type: "Single Family",
    yearBuilt: 2015,
    features: ["Master Suite", "Gourmet Kitchen", "Pool"],
    daysOnMarket: 25,
    status: "pending",
  },
];
