export interface Job {
  _id: string;
  title: string;
  location: string;
  description?: string;
}

export interface Stats {
  jobs: number;
  applicants: number;
  shortlisted: number;
}