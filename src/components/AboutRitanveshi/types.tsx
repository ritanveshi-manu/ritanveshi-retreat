export interface Section {
    title: string;
    content: string;
    icon: string;
  }
  
  export interface AboutRetreatProps {
    title: string;
    text: string;
    sections: Section[];
    images?: string[];
    id: string;
  }