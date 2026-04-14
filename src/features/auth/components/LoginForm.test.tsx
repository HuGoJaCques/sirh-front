import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

describe("LoginForm", () => {

  // 1. Le formulaire s'affiche correctement
  test("affiche les champs email et mot de passe", () => {
    render(<LoginForm />);
    expect(screen.getByPlaceholderText("john.doe@entreprise.fr")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("••••••••••")).toBeInTheDocument();
    expect(screen.getByText("Se connecter")).toBeInTheDocument();
  });

  // 2. L'utilisateur peut saisir dans les champs
  test("permet la saisie dans les champs", async () => {
    render(<LoginForm />);
    const emailInput = screen.getByPlaceholderText("john.doe@entreprise.fr");
    await userEvent.type(emailInput, "test@entreprise.fr");
    expect(emailInput).toHaveValue("test@entreprise.fr");
  });

  // 3. La checkbox "Se souvenir de moi" fonctionne
  test("coche la case se souvenir de moi", async () => {
    render(<LoginForm />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  // 4. Le bouton soumet le formulaire
  test("soumet le formulaire au clic", async () => {
    render(<LoginForm />);
    await userEvent.type(screen.getByPlaceholderText("john.doe@entreprise.fr"), "test@test.fr");
    await userEvent.type(screen.getByPlaceholderText("••••••••••"), "motdepasse");
    await userEvent.click(screen.getByText("Se connecter"));
    // vérifier que la soumission s'est bien passée
  });

});

