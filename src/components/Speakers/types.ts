export interface Speaker {
    name: string;
    description: string;
    expertise: string;
    imageUrl: string;
    location: string;
  }
  
  export interface SpeakersProps {
    title: string;
    speakers: Speaker[];
  }