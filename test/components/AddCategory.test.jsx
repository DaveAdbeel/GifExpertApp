/* eslint-disable no-undef */
import {fireEvent, render, screen} from "@testing-library/react"
import AddCategory from "../../src/components/AddCategory"

describe('Pruebas en el componente <AddCategory/>', () => { 
    const invalidEmptyValue = "      "
    const invalidShortValue = "ch"
    const normalValue = "works"
    
    test('Debe de cambiar el valor en el input de busqueda de gifs', (done) => { 
        render(<AddCategory onInputSubmit={()=>{}}/>)
        const GifsSearchBar = screen.getByRole("textbox",  {name:"gifs-search-bar"})
        
        fireEvent.input(GifsSearchBar, { target: { value: normalValue } })
        expect(GifsSearchBar.value).toStrictEqual(normalValue)
        done()
    })
    
    test('Al hacer submit de un string vacio o de un solo valor, no deberia resetarse el valor del input', (done) => { 
        const onInputSubmit = jest.fn()
        render(<AddCategory onInputSubmit={onInputSubmit}/>)
        const GifsSearchBar = screen.getByRole("textbox",  {name:"gifs-search-bar"})
        const form = screen.getByRole("form", {name:"form"})
        
        fireEvent.input(GifsSearchBar, { target: { value: invalidEmptyValue }})
        fireEvent.submit(form)
        
        expect(GifsSearchBar.value).toStrictEqual(invalidEmptyValue)
        expect(onInputSubmit).not.toHaveBeenCalled()
        
        done()
    })
    
    test('Al hacer submit de un string de un largo menor a 3, no deberia resetarse el valor del input', (done) => { 
        const onInputSubmit = jest.fn()
        render(<AddCategory onInputSubmit={onInputSubmit}/>)
        
        const GifsSearchBar = screen.getByRole("textbox",  {name:"gifs-search-bar"})
        const form = screen.getByRole("form", {name:"form"})
        
        fireEvent.input(GifsSearchBar, { target: { value: invalidShortValue }})
        fireEvent.submit(form)
        
        expect(GifsSearchBar.value).toStrictEqual(invalidShortValue)
        expect(onInputSubmit).not.toHaveBeenCalled()
        done()
    })
    
    test('Al hacer submit de un string valido, se resetearia el valor del input', (done) => { 
        const onInputSubmit = jest.fn()
        render(<AddCategory onInputSubmit={onInputSubmit}/>)
        const GifsSearchBar = screen.getByRole("textbox",  {name:"gifs-search-bar"})
        const form = screen.getByRole("form", {name:"form"})

        fireEvent.input(GifsSearchBar, { target: { value: normalValue }})
        fireEvent.submit(form)
        
        expect(GifsSearchBar.value).toStrictEqual("")
        expect(onInputSubmit).toHaveBeenCalledTimes(1)
        expect(onInputSubmit).toHaveBeenCalledWith(normalValue)
        done()
     })
 })