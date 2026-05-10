import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/15555550123?text=Hi%20Rackyweb"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full gradient-emerald blur-xl opacity-60 group-hover:opacity-90 transition" />
      <span className="relative grid place-items-center h-14 w-14 rounded-full gradient-emerald text-white shadow-luxe ring-1 ring-white/20 hover:scale-105 transition">
        <MessageCircle size={22} />
      </span>
    </a>
  );
}
