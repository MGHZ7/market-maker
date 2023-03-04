import { fireEvent, screen, render } from "@testing-library/react";
import { InputField } from "./field";

let container: any = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

describe("Input field functionality", () => {

    describe("Basic functionality and state", () => {

        it("Render without crashing", () => {
            render(<InputField defaultValue="Motasem" />, container);
        });

        it("Reflect the default value", () => {
            render(<InputField data-testid="input" defaultValue="Motasem" />, container)
            const element = screen.getByDisplayValue<HTMLInputElement>("Motasem");
            const value = element?.value;
            expect(value).toEqual("Motasem");
        });

        it("Value is changed", () => {

            render(<InputField data-testid="input" defaultValue="Motasem" />, container)
            const element = screen.getByTestId<HTMLInputElement>("input");
            fireEvent.change(element, { target: { value: "New value" } });
            expect(element.value).not.toEqual("Motasem");
            expect(element.value).toEqual("New value");
        })
    })
});
