import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Sidebar from "./Sidebar";

const renderSidebar = () =>
  render(
    <MemoryRouter>
      <Sidebar />
    </MemoryRouter>
  );

describe("Sidebar", () => {

  // 1. Le logo est affiché — "mon" et "RH" sont dans des spans séparés
  test("affiche le logo et le nom de l'utilisateur", () => {
    renderSidebar();
    expect(screen.getByText("mon")).toBeInTheDocument();
    expect(screen.getByText("RH")).toBeInTheDocument();
    expect(screen.getByText("Sophie Admin")).toBeInTheDocument();
    expect(screen.getByText("DRH · Super Admin")).toBeInTheDocument();
  });

  // 2. Les liens de navigation s'affichent
  test("affiche tous les liens de navigation", () => {
    renderSidebar();
    expect(screen.getByText("Accueil")).toBeInTheDocument();
    expect(screen.getByText("Validations")).toBeInTheDocument();
    expect(screen.getByText("Collaborateurs")).toBeInTheDocument();
    expect(screen.getByText("Planning global")).toBeInTheDocument();
    expect(screen.getByText("Reporting")).toBeInTheDocument();
    expect(screen.getByText("Paramètres")).toBeInTheDocument();
    expect(screen.getByText("Rôles & droits")).toBeInTheDocument();
  });

  // 3. Fermeture de la sidebar au clic sur le bouton toggle
  test("ferme la sidebar au clic sur le bouton toggle", async () => {
    renderSidebar();
    const toggleBtn = screen.getByRole("button", { name: "toggle-sidebar" });
    await userEvent.click(toggleBtn);
    const aside = screen.getByRole("complementary"); // <aside> = role complementary
    expect(aside).toHaveClass("w-16");
  });

  // 4. Réouverture de la sidebar
  test("réouvre la sidebar au second clic", async () => {
    renderSidebar();
    const toggleBtn = screen.getByRole("button", { name: "toggle-sidebar" });
    await userEvent.click(toggleBtn); // ferme
    await userEvent.click(toggleBtn); // réouvre
    const aside = screen.getByRole("complementary");
    expect(aside).toHaveClass("w-60");
  });

  // 5. Le bouton déconnexion est présent
  test("affiche le bouton de déconnexion", () => {
    renderSidebar();
    expect(screen.getByText("Déconnexion")).toBeInTheDocument();
  });

});