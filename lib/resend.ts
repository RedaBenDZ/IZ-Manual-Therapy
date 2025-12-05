import { Resend } from "resend";
import { format } from "date-fns";

const resend = new Resend(process.env.RESEND_API_KEY ?? "");

interface BookingDetails {
  clientName: string;
  clientEmail: string;
  serviceName: string;
  date: Date;
  address: string;
}

export const sendBookingConfirmation = async (to: string, details: BookingDetails) => {
  return resend.emails.send({
    from: "IZ Manual Therapy <noreply@izmanualtherapy.co.uk>",
    to,
    subject: "Your booking is confirmed",
    text: `Thanks ${details.clientName}! Your ${details.serviceName} is booked for ${format(details.date, "d MMMM yyyy, HH:mm")} at ${details.address}.`,
  });
};

export const sendNewBookingAlert = async (details: BookingDetails) => {
  const admin = process.env.ADMIN_EMAIL ?? "";
  if (!admin) return;
  return resend.emails.send({
    from: "IZ Manual Therapy <alerts@izmanualtherapy.co.uk>",
    to: admin,
    subject: "New booking received",
    text: `${details.clientName} booked ${details.serviceName} on ${format(details.date, "d MMM yyyy, HH:mm")}. Address: ${details.address}.`,
  });
};

export const sendCancellationEmail = async (to: string, details: BookingDetails, refundAmount?: number) => {
  const refundText = refundAmount ? ` A refund of £${(refundAmount / 100).toFixed(2)} has been issued.` : "";
  return resend.emails.send({
    from: "IZ Manual Therapy <noreply@izmanualtherapy.co.uk>",
    to,
    subject: "Your appointment was cancelled",
    text: `Your ${details.serviceName} on ${format(details.date, "d MMM yyyy, HH:mm")} has been cancelled.${refundText}`,
  });
};

export const sendRescheduleEmail = async (to: string, oldSlot: Date, newSlot: Date) => {
  return resend.emails.send({
    from: "IZ Manual Therapy <noreply@izmanualtherapy.co.uk>",
    to,
    subject: "Your appointment was rescheduled",
    text: `Your appointment has moved from ${format(oldSlot, "d MMM yyyy, HH:mm")} to ${format(newSlot, "d MMM yyyy, HH:mm")}.`,
  });
};

export const sendAppointmentReminder = async (to: string, details: BookingDetails) => {
  return resend.emails.send({
    from: "IZ Manual Therapy <noreply@izmanualtherapy.co.uk>",
    to,
    subject: "Appointment reminder",
    text: `Reminder: ${details.serviceName} on ${format(details.date, "d MMM yyyy, HH:mm")} at ${details.address}.`,
  });
};
