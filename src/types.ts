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
