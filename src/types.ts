import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ProjectData {
  id: number;
  imageUrl: string | StaticImport;
  period: string;
  title: string;
  content: string;
  position: string;
  personnel: string;
  linkData?: { url: string; text: string }[];
  skill: string[];
  info?: string;
}

export interface DetailContentData {
  id: string;
  content: string;
  skill: string[];
  screen: { url: string; text: string }[];
  contribution: { title: string; list: string[] }[];
  recall: string;
}

export interface RenewalList {
  renewalList: { title: string; list: string[] }[];
  proposal: { url: string; id: number }[];
  draft: { url: string; id: number }[];
  recall: string;
}
