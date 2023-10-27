/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import GifItem from "../../src/components/GifItem";

describe("Pruebas en el componente <GifItem/>", () => {
  const id = "JAy6dD3DI78zozppsp";
  const title = "Fabio Porchat Pergunta GIF by Porta Dos Fundos";
  const url =
    "https://media4.giphy.com/media/JAy6dD3DI78zozppsp/200.gif?cid=31efa263g5mm18disiiyzn3kd77tc8f5gqjekntad7n9n1k7&ep=v1_gifs_search&rid=200.gif&ct=g";

  test("El componente deberia tener en las props el id, title y url", (done) => {
    const component = <GifItem id={id} title={title} url={url} />;
    expect(component.props.id).toBeTruthy();

    render(<GifItem id={id} title={title} url={url} />);
    const { alt, src } = screen.getByRole("img");
    expect(alt).toStrictEqual(title);
    expect(src).toStrictEqual(url);

    done();
  });
  test('El componente debe tener un titulo', (done) => { 
    render(<GifItem id={id} title={title} url={url} />);
    expect(screen.getByTestId('gif-title').textContent).toContain(title)

    done()
})
  test("El componente debe hacer match con su snapshot final", (done) => {
    const { container } = render(<GifItem id={id} title={title} url={url} />);
    expect(container).toMatchSnapshot();

    done();
  });
});
