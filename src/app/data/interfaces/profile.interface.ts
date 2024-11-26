export interface Profile {
    id: number;
    username: string;
    avatarUrl: string;
    subscribersAmount: number; // Actualizat de la 'subscribtionsAmount'
    firstName: string;
    lastName: string;
    isActive: boolean;
    stack: string[];
    city: string;
    description?: string; // Adăugat pentru câmpul 'description'
  }