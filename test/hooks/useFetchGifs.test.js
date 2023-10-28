import { renderHook, waitFor } from "@testing-library/react"
import useFetchGifs from "../../src/hooks/useFetchGifs"

/* eslint-disable no-undef */
describe('Pruebas en el hooks useFetchGifs', () => {
    const category = 'One Punch'
    test('El hook debe retornar el estado inicial', (done) => {
        const { result } = renderHook(() => useFetchGifs(category))
        const { gifs, isLoading } = result.current
        
        expect(gifs).toHaveLength(0)
        expect(isLoading).toBeTruthy()
        
        done()
    })
    
    test('El hook debe retornar un arreglo de gifs y el isLoading en false', (done) => {
        const { result } = renderHook(() => useFetchGifs(category))
        
        waitFor(() => {
            expect(result.current.gifs.length).toBeGreaterThan(0)
        })
        .then(() => {
            const { gifs, isLoading } = result.current
            expect(gifs.length).toBeGreaterThan(0)
            expect(isLoading).toBeFalsy()
        })
        .catch(error => {throw new Error(error)})
        done()
        
    })
})