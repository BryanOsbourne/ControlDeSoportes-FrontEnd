import { Agent } from "./agent";

export interface AuthenticationResponse {
    token: string;
    agent: Agent;
}