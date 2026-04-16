import { Bell } from "lucide-react";

function getCurrentDate(): string {
  return new Date().toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).replace(/^\w/, (c) => c.toUpperCase());
}

type HeaderProps = {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  hasNotifications?: boolean;
  notificationCount?: number;
}

export default function Header({
  title,
  subtitle,
  actions,
  hasNotifications = false,
  notificationCount = 0,
}: HeaderProps) {
  return (
    <header
      role="banner"
      className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 py-4 border-b border-gray-200 bg-white shadow-sm"
    >
      {/* Titre + date */}
      <div className="flex flex-col gap-1">

        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            {title}
        </h1>

        <div className="flex flex-wrap items-center gap-2">
          {subtitle && (
            <>
              <p className="text-sm text-gray-500">{subtitle}</p>
              <span className="text-gray-300">·</span>
            </>
          )}
          <time
            dateTime={new Date().toISOString()}
            className="text-sm text-gray-400"
          >
            {getCurrentDate()}
          </time>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">

        {/* Bouton notifications */}
        <button
          aria-label={
            hasNotifications
              ? `${notificationCount} nouvelle(s) notification(s)`
              : "Aucune notification"
          }
          className="relative p-2 rounded-xl text-gray-500 hover:bg-gray-200 transition-colors"
        >
          <Bell size={20} aria-hidden="true" />
          {hasNotifications && (
            <span
              aria-hidden="true"
              className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white"
            />
          )}
        </button>

        {actions}
      </div>
    </header>
  );
}