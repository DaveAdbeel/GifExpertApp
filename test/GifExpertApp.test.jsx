/* eslint-disable no-undef */

import { screen, render } from "@testing-library/react";
import GifExpertApp from "../src/GifExpertApp";

describe("Pruebas en nuestra app <GidExpertApp/>", () => {
    const titleApp = "GifExpertApp";
    test("Al montar la App tiene que hacer match con el snapshot", (done) => {
        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
        done();
    });

    test("Al montar la App debe tener el titulo 'GifExpertApp' ", (done) => {
        render(<GifExpertApp />);
        expect(screen.getByText(titleApp));
        done();
    });

    test("Al montar la App debe tener el formulario para buscar gifs", (done) => {
        render(<GifExpertApp />);
        expect(screen.getByRole("form", { name: "form" }));
        done();
    });
   
    test("Al montar la App debe haber una lista vacia, esperando por los gifs", (done) => {
        render(<GifExpertApp />)
        expect(screen.getByRole("list", {name: "gif-list"}));
        done();
    });
});
