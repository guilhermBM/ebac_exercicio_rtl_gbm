import { fireEvent, render, screen } from "@testing-library/react"
import PostComment from "."

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />)
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  //aqui eu tive um pequeno problema com o fechamento de chaves e me quebrou muito a cabeça, mas resolvi e entendi como funcionou o teste.
  it('Deve adicionar os comentarios', () => {
    const { debug } = render(<PostComment />)

    fireEvent.change(screen.getByTestId('area-text'), {
      target: {
        value: 'primeiro comentario',
        }
    })
    fireEvent.click(screen.getByTestId('button-test'));

    fireEvent.change(screen.getByTestId('area-text'), {
      target: {
        value: 'segundo comentario',
        }
    })
    fireEvent.click(screen.getByTestId('button-test'));
    debug()

    expect(screen.getAllByTestId('test-comment')).toHaveLength(2);
  })
  
});
