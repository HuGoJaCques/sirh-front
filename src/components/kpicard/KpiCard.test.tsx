import { render, screen } from "@testing-library/react";
import { Users } from "lucide-react";
import KpiCard from "./KpiCard";

describe("KpiCard", () => {

  // 1. Affichage de base
  test("affiche la valeur et le label", () => {
    render(
      <KpiCard
        icon={<Users size={24} />}
        badge="+2 ce mois"
        badgeColor="blue"
        value={48}
        label="Collaborateurs actifs"
      />
    );
    expect(screen.getByText("48")).toBeInTheDocument();
    expect(screen.getByText("Collaborateurs actifs")).toBeInTheDocument();
  });

  // 2. Le badge s'affiche avec le bon texte
  test("affiche le badge avec le bon texte", () => {
    render(
      <KpiCard
        icon={<Users size={24} />}
        badge="Urgent"
        badgeColor="orange"
        value={7}
        label="Demandes en attente"
      />
    );
    expect(screen.getByText("Urgent")).toBeInTheDocument();
  });

  // 3. Chaque couleur de badge applique la bonne classe CSS
  test.each([
    ["blue",   "text-blue-500",   "bg-blue-50"],
    ["orange", "text-orange-500", "bg-orange-50"],
    ["green",  "text-green-500",  "bg-green-50"],
    ["red",    "text-red-500",    "bg-red-50"],
  ])("badgeColor '%s' applique les classes %s et %s", (color, textClass, bgClass) => {
    render(
      <KpiCard
        icon={<Users size={24} />}
        badge="mon-badge"
        badgeColor={color as "blue" | "orange" | "green" | "red"}
        value={0}
        label="mon-label"
      />
    );
    const badge = screen.getByText("mon-badge");
    expect(badge).toHaveClass(textClass);
    expect(badge).toHaveClass(bgClass);
  });

  // 4. La valeur peut être un string (ex: "2 840€")
  test("affiche une valeur de type string", () => {
    render(
      <KpiCard
        icon={<Users size={24} />}
        badge="3 urgents"
        badgeColor="red"
        value="2 840€"
        label="Frais à rembourser"
      />
    );
    expect(screen.getByText("2 840€")).toBeInTheDocument();
  });

  // 5. La valeur peut être zéro
  test("affiche la valeur 0 correctement", () => {
    render(
      <KpiCard
        icon={<Users size={24} />}
        badge="Aucun"
        badgeColor="green"
        value={0}
        label="Absents aujourd'hui"
      />
    );
    expect(screen.getByText("0")).toBeInTheDocument();
  });

});