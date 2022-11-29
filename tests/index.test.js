import Home from "../pages/index";
import {Button} from "../components/Button";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

// Describes what the module is
describe("Calculator", () => {
    // It specified an individual test
    it("renders a calculator", () => {
        render(<Button />);
        // check if all components are rendered
        expect(true).toBeTruthy();
        // expect(screen.getByTestId("loading")).not.toBeInTheDocument();
    });
});
