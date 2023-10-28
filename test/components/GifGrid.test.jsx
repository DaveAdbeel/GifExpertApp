/* eslint-disable no-undef */
import GifGrid from "../../src/components/GifGrid"
import {screen, render} from "@testing-library/react"
import useFetchGifs from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en el componente <GifGrid/>', () => { 
    const category = "One Punch"
    test('Debe de mostrar un loading y el titulo de la categoria cuando se monte el componente', (done) => { 
        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true,
        })
        render(<GifGrid category={category}/>)
        expect(screen.getByText("Cargando..."))
        expect(screen.getByText(category))
        done()
        
    })
    
    test('Debe de mostrar gifs, despues de hacer el fetch', (done) => { 
        const gifs = [
            {
                id: '123',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '456',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
            
        ] 
        useFetchGifs.mockReturnValue({
            gifs: gifs,
            isLoading: false,
        })
        render(<GifGrid category={category}/>)
        
        expect(screen.getAllByRole("img")).toHaveLength(2)
        done()
        
    })
 })