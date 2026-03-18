import { Car, Recycle, Droplets, Sun, Wind, Puzzle } from "lucide-react";

export const vcfData = [
  {
    id: "vcf-ev",
    icon: Car,
    title: "VCF for Electric Vehicles",
    description: "Leveraging land value increments from EV charging hubs and multi-modal transit corridors to finance large-scale fleet electrification.",
    solutions: [
      "Transit-oriented development (TOD) around charging hubs",
      "Dynamic congestion pricing linked to EV infrastructure",
      "Public-private value sharing agreements",
      "Charging station betterment levies"
    ],
    applications: [
      "Public transit corridors",
      "Smart city mobility hubs",
      "Inter-state highway electrification"
    ],
    benefits: [
      { title: "Revenue Diversification", description: "Adds non-fare box revenue streams." },
      { title: "Urban Density", description: "Encourages concentrated EV-centric development." },
      { title: "Cost Recovery", description: "Accelerates ROI on charging assets." }
    ]
  },
  {
    id: "vcf-waste-to-energy",
    icon: Recycle,
    title: "VCF for Waste-to-Energy",
    description: "Financing waste treatment plants by capturing the value of reclaimed land and improved neighborhood hygiene in industrial clusters.",
    solutions: [
      "Special assessment districts for industrial waste clusters",
      "Land value capture from reclaimed landfills",
      "Sale of air rights above integrated waste facilities",
      "Cluster-based infrastructure levies"
    ],
    applications: [
      "Municipal solid waste management",
      "Industrial hazardous waste clusters",
      "Urban landfill reclamation projects"
    ],
    benefits: [
      { title: "Circular Economy", description: "Finances closed-loop waste systems." },
      { title: "Value Creation", description: "Turns liability (waste) into asset (energy/land)." },
      { title: "Health Spillovers", description: "Monetizes public health improvements." }
    ]
  },
  {
    id: "vcf-water",
    icon: Droplets,
    title: "VCF for Water Purification",
    description: "Structuring financing based on increased property values in areas with newly accessible, high-quality potable water infrastructure.",
    solutions: [
      "Connection fee-based infrastructure financing",
      "Property tax increments from water-secured zones",
      "Blue bond structures with value capture link",
      "Industrial water-security betterment levies"
    ],
    applications: [
      "Desalination plant surroundings",
      "Arid region water corridors",
      "Smart-city water treatment networks"
    ],
    benefits: [
      { title: "Social Equity", description: "Finances water access in underserved areas." },
      { title: "Asset Longevity", description: "Provides sustained funding for O&M." },
      { title: "Resilience", description: "Builds climate-resilient water supplies." }
    ]
  },
  {
    id: "vcf-agri-solar",
    icon: Sun,
    title: "VCF for Agri-Solar",
    description: "Financing dual-use land systems by capturing agricultural yield improvements and solar energy revenue through shared infrastructure.",
    solutions: [
      "Grid-linkage fee sharing between farmers and developers",
      "Agricultural productivity-linked financing",
      "Shared infrastructure levies for rural microgrids",
      "Co-location value sharing agreements"
    ],
    applications: [
      "Greenhouse solar integration",
      "Precision farming energy networks",
      "Rural electrification cooperatives"
    ],
    benefits: [
      { title: "Dual Revenue", description: "Energy generation plus crop yield." },
      { title: "Land Efficiency", description: "Optimizes land use for food and energy." },
      { title: "Rural Prosperity", description: "Direct capital injection into agri-corridors." }
    ]
  },
  {
    id: "vcf-wind",
    icon: Wind,
    title: "VCF for Wind Energy",
    description: "Capturing value from community-level infrastructure development and regional transmission improvements near wind farm clusters.",
    solutions: [
      "Transmission corridor value capture",
      "Community benefit agreements with equity links",
      "Regional development levies for wind hubs",
      "Infrastructure-linked PPA structures"
    ],
    applications: [
      "Offshore wind transmission hubs",
      "Remote coastal energy zones",
      "Grid-edge industrial wind clusters"
    ],
    benefits: [
      { title: "Scalability", description: "Supports large-scale offshore and onshore hubs." },
      { title: "Local Buy-in", description: "Ensures community participates in value upside." },
      { title: "Grid Stability", description: "Finances essential transmission upgrades." }
    ]
  },
  {
    id: "vcf-integrated",
    icon: Puzzle,
    title: "Integrated VCF for Climate Projects",
    description: "Master-structuring multiple climate interventions into a single value-capture framework for smart-city and industrial-hub developments.",
    solutions: [
      "Cross-sectoral infrastructure financing frameworks",
      "Climate-resilient district value capture",
      "Aggregated green-field financing models",
      "Master-developer value sharing agreements"
    ],
    applications: [
      "Eco-industrial park developments",
      "Net-zero urban district planning",
      "Special climate economic zones"
    ],
    benefits: [
      { title: "Holistic Impact", description: "Coordinates multiple climate goals." },
      { title: "Risk Mitigation", description: "Diversifies revenue sources across sectors." },
      { title: "Policy Alignment", description: "Fits within national Net Zero roadmaps." }
    ]
  }
];
