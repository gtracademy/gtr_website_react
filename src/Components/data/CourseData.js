import {
  FaDatabase,
  FaUserTie,
  FaMicrochip,
  FaPython,
  FaChartLine,
} from "react-icons/fa";
import { BsDatabaseFillX } from "react-icons/bs";


export const coursesData = [
  { title: "SAP ABAP S/4 HANA", slug: "sap-abap-s4hana", category: ["SAP Technical"], icon: FaDatabase },
  { title: "SAP BTP", slug: "sap-btp", category: ["SAP Technical"], icon: FaDatabase },
  { title: "SAP BW4 HANA", slug: "sap-bw4-hana", category: ["SAP Technical"], icon: FaDatabase },
  { title: "SAP UI5 FIORI S/4HANA", slug: "sap-ui5-fiori-s4hana", category: ["SAP Technical"], icon: FaMicrochip },
  { title: "SAP CPI", slug: "sap-cpi", category: ["SAP Technical"], icon: FaMicrochip },
  { title: "SAP DATA MIGRATION & BODS", slug: "sap-data-migration-bods", category: ["SAP Technical"], icon: FaMicrochip },
  { title: "SAP BASIS S/4HANA", slug: "sap-basis-s4hana", category: ["SAP Technical"], icon: FaMicrochip },
  { title: "SAP DATASPHERE S/4HANA", slug: "sap-datasphere-s4hana", category: ["SAP Technical"], icon: FaDatabase },

  { title: "SAP FICO S/4HANA", slug: "sap-fico-s4hana", category: ["SAP Functional"], icon: BsDatabaseFillX },
  { title: "SAP VIM", slug: "sap-vim", category: ["SAP Functional"], icon: BsDatabaseFillX },
  { title: "SAP EWM S/4HANA", slug: "sap-ewm-s4hana", category: ["SAP Functional"], icon: BsDatabaseFillX },
  { title: "SAP MM S/4HANA", slug: "sap-mm-s4hana", category: ["SAP Functional"], icon: BsDatabaseFillX },
  { title: "SAP SD S/4HANA", slug: "sap-sd-s4hana", category: ["SAP Functional"], icon: BsDatabaseFillX },
  { title: "SAP TM S/4HANA", slug: "sap-tm-s4hana", category: ["SAP Functional"], icon: BsDatabaseFillX },
  { title: "SAP HCM", slug: "sap-hcm", category: ["SAP Functional"], icon: BsDatabaseFillX },
  { title: "SAP ARIBA", slug: "sap-ariba", category: ["SAP Functional"], icon: BsDatabaseFillX },
  { title: "SAP PP S/4HANA", slug: "sap-pp-s4hana", category: ["SAP Functional"], icon: BsDatabaseFillX },
  { title: "SAP WM", slug: "sap-wm", category: ["SAP Functional"], icon: BsDatabaseFillX },
  { title: "SAP PM/EAM S/4HANA", slug: "sap-pm-eam-s4hana", category: ["SAP Functional"], icon: BsDatabaseFillX },

  { title: "Generative AI", slug: "generative-ai", category: ["Data Science"], icon: FaChartLine },
  { title: "Data Science AI", slug: "data-science-ai", category: ["Data Science"], icon: FaChartLine },
  { title: "Data Analyst", slug: "data-analyst", category: ["Data Science"], icon: FaChartLine },
  { title: "Advanced Excel", slug: "advanced-excel", category: ["Data Science"], icon: FaChartLine },
  { title: "Power BI with AI", slug: "power-bi-ai", category: ["Data Science"], icon: FaChartLine },

  { title: "Python with Fast API", slug: "python-with-fast-api", category: ["Python with Fast API"], icon: FaPython },

  { title: "VLSI", slug: "vlsi", category: ["VLSI"], icon: FaMicrochip },

  { title: "SAP Success Factors Onboarding 2.0 and Recruiting", slug: "SAP-Success-Factors-Onboarding-2.0-Recruiting", category: ["HR Courses"], icon: FaUserTie },
  { title: "SAP Success Factors EC Payroll", slug: "SAP-Success-Factors-EC-Payroll", category: ["HR Courses"], icon: FaUserTie },
];
