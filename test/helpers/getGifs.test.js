/* eslint-disable no-undef */
import getGifs from "../../src/helpers/getGifs";

describe('Pruebas en al funcion getGifs()', () => {
    test('Debe de retortnr una array de gifs desde la API Giphy', async () => {
        const gifs = await getGifs("Dragon ball")
        expect(gifs.length).toBeGreaterThan(0)
        expect(gifs[0]).toStrictEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })
})