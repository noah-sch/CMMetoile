import type { EncocheSubsection } from "./encocheSubsection";

export interface EncocheSection {
    name: string;
    iconPath?: string;
    subsections: EncocheSubsection[];
}