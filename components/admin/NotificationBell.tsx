"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Card from "@/components/ui/Card";

interface AdminNotification {
  id: string;
  message: string;
  read: boolean;
  created_at?: string;
  booking_id?: string;
}

const NotificationBell = () => {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState<AdminNotification[]>([]);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/admin/notifications");
      const json = await res.json();
      setNotifications(json.data ?? []);
    };
    load();
  }, []);

  const unread = notifications.filter((n) => !n.read).length;

  return (
    <div className="relative">
      <button className="relative" onClick={() => setOpen((v) => !v)} aria-label="Notifications">
        🔔
        {unread > 0 && (
          <span className="absolute -right-2 -top-2 rounded-full bg-error px-2 py-0.5 text-xs text-white">{unread}</span>
        )}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-72">
          <Card>
            <h3 className="text-lg font-semibold">Notifications</h3>
            <ul className="mt-2 space-y-2 text-sm">
              {notifications.length === 0 && <li>No notifications</li>}
              {notifications.map((notification) => (
                <li key={notification.id} className="border-b border-foreground/10 pb-2 last:border-none">
                  <p>{notification.message}</p>
                  {notification.booking_id && (
                    <Link className="text-cta underline" href={`/admin/bookings/${notification.booking_id}`}>
                      View booking
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
