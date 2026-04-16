import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {

    test("affiche le titre et le sous-titre", () => {
        render(<Header title="Tableau de bord" subtitle="Vue d'ensemble de vos ressources humaines" />);
        expect(screen.getByText("Tableau de bord")).toBeInTheDocument();
        expect(screen.getByText("Vue d'ensemble de vos ressources humaines")).toBeInTheDocument();
    });

    test("n'affiche pas le sous-titre si non fourni", () => {
        render(<Header title="Tableau de bord" />);
        expect(screen.queryByText("Vue d'ensemble de vos ressources humaines")).not.toBeInTheDocument();
    });

    test("affiche les notifications", () => {
        render(<Header title="Tableau de bord" hasNotifications={true} notificationCount={3} />);
        expect(screen.getByLabelText("3 nouvelle(s) notification(s)")).toBeInTheDocument();
    });

    test("n'affiche pas les notifications si hasNotifications est false", () => {
        render(<Header title="Tableau de bord" hasNotifications={false} notificationCount={3} />);
        expect(screen.queryByLabelText("3 nouvelle(s) notification(s)")).not.toBeInTheDocument();
    });

    test("affiche le bon aria-label pour les notifications", () => {
        render(<Header title="Tableau de bord" hasNotifications={true} notificationCount={5} />);
        expect(screen.getByLabelText("5 nouvelle(s) notification(s)")).toBeInTheDocument();
    });

    test("affiche les actions passées en props", () => {
        render(
            <Header 
                title="Tableau de bord" 
                actions={
                    <button className="test-action-button">Action</button>
                } 
            />
        );
        expect(screen.getByText("Action")).toBeInTheDocument();
    });


});
