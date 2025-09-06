import { screen, render } from "@testing-library/react"

import Post from "."

describe("Teste para o componente Post", () => {
    it('Deve renderizar corretamente', () => {
    render(<Post imageUrl={"https://via.placeholder.com/200x200"}>
        imagem </Post>
    )
    expect(screen.getByText("imagem")).toBeInTheDocument();
    })
})
//nessa parte achei que era pra renderizar os comentarios aqui, mais ai vi que no repositorio do professor tinha uma ajudinha e la percebi o meu erro :)