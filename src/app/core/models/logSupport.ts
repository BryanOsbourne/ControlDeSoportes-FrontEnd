import { Agent } from "./agent";
import { Customer } from "./customer";
import { Support } from "./support";

export interface LogSupport {
   id: number;
   startDate: Date;
   startTime: string,
   agent: Agent;
   customer: Customer;
   supportType: string;
   contact: string;
   phone: string;
   detail: string;
   observation: string;
   endDate: Date;
   endTime: string,
   state: string;
   supports: Support[];
}