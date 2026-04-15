export default function SidebarText({ children, isOpen }: any) {
  return (
    <span
      className={`whitespace-nowrap overflow-hidden transition-all duration-300
      ${isOpen ? "w-auto opacity-100 ml-1" : "w-0 opacity-0"}
    `}
    >
      {children}
    </span>
  );
}