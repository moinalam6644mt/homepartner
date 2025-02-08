"use client"
import {
  Wrench,
  Sparkles,
  Home,
  Tv,
  PaintBucket,
  Building2,
  Truck,
  Camera,
  PartyPopper,
  User,
  Dog,
  MoreHorizontal,
} from "lucide-react";
import Link from "next/link";

const SERVICES = [
  { Icon: Wrench, label: "Home Maintenance & Repair", href: "#maintenance" },
  { Icon: Sparkles, label: "Cleaning Services", href: "#cleaning" },
  { Icon: Home, label: "Pest Control & Fumigation", href: "#pest-control" },
  { Icon: Tv, label: "Electronic & Appliance", href: "#electronics" },
  { Icon: PaintBucket, label: "Interior Design & Renovation", href: "#interior" },
  { Icon: Building2, label: "Construction & Architecture", href: "#construction" },
  { Icon: Truck, label: "Moving & Storage", href: "#moving" },
  { Icon: Camera, label: "Photography", href: "#photography" },
  { Icon: PartyPopper, label: "Event & Party Planning", href: "#events" },
  { Icon: User, label: "Personal & Lifestyle Services", href: "#lifestyle" },
  { Icon: Dog, label: "Pet Services", href: "#pets" },
  { Icon: MoreHorizontal, label: "Others", href: "#others" },
];

export default function ServiceSidebar() {
  return (
    <nav className="list-group">
      {SERVICES.map(({ Icon, label, href }) => (
        <Link
          key={label}
          href={href}
          className="list-group-item list-group-item-action d-flex align-items-center gap-3"
        >
          <Icon className="me-2" size={20} />
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  );
}
