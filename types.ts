
export type View = 'citizen' | 'official';

export enum IssueStatus {
  Submitted = 'Submitted',
  InProgress = 'In Progress',
  Resolved = 'Resolved',
}

export interface AIAnalysis {
  category: string;
  department: string;
  title: string;
  severity: 'Low' | 'Medium' | 'High';
}

export interface Issue {
  id: string;
  userNote: string;
  photoBase64: string;
  photoMimeType: string;
  location: GeolocationCoordinates;
  status: IssueStatus;
  analysis: AIAnalysis;
  timestamp: string;
}
