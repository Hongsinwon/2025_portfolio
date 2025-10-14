export interface ProjectData {
  id: number;
  imageUrl: String;
  period: string;
  title: string;
  content: string;
  position: string;
  personnel: string;
  linkUrl: [
    {
      url: string;
      text: string;
    },
  ];
  skill: [string];
  info?: string;
}
