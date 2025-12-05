export interface Service {
  id: string;
  name: string;
  description: string;
  duration_minutes: number;
  price_pence: number;
  sort_order?: number;
  active?: boolean;
}

export interface PackageService {
  service_id: string;
  name: string;
  duration_minutes: number;
}

export interface Package {
  id: string;
  name: string;
  sessions: number;
  price_pence: number;
  savings?: string;
  active?: boolean;
  services?: PackageService[];
}

export interface AvailabilitySlot {
  id: string;
  start_time: string;
  end_time: string;
  booked?: boolean;
}

export interface Client {
  id: string;
  email: string;
  name: string;
  phone: string;
  address: string;
  postcode: string;
}

export interface MedicalHistory {
  id: string;
  client_id: string;
  conditions: string[];
  medications?: string;
  allergies?: string;
  injuries?: string;
  updated_at?: string;
}

export interface Booking {
  id: string;
  client_id: string;
  service_id?: string;
  package_id?: string;
  slot_id: string;
  status: "pending" | "confirmed" | "cancelled" | "completed";
  price_paid_pence?: number;
  payment_intent_id?: string;
}

export interface AdminNotification {
  id: string;
  message: string;
  read: boolean;
  created_at: string;
  booking_id?: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
  created_at?: string;
}
