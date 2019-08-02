//importando uma biblioteca
import React from 'react';

//importando um componente
import Botao from '../Botao/Botao';


import'./Contador.css';



class Contador extends React.Component {
    state = {
        contador: 0
    }
    
  aumentar = () => {
    let novoContador = this.state.contador;
    novoContador++;
    this.setState({ contador: novoContador});
  }

  diminuir = () =>{
      let diminuir = this.state.contador;
      diminuir--;
      this.setState({contador:diminuir});
  }
  dividir = () =>{
      let novoContador = this.state.contador;
      novoContador= novoContador / 2;
      this.setState({contador:novoContador});
  }
  zerar = () =>{
      this.setState({contador: 0 });
  }

  multiplicacao = ()=>{
      let novoContador = this.state.contador;
      novoContador = novoContador*4;
      this.setState({contador:novoContador});
  }

    render() {
        return(
            <div>
                <h1> O valor do meu contador é: {this.state.contador} </h1>
                <Botao
                    classe="botao"
                    aoClicar={this.aumentar}
                    titulo="Aumentar"                    
                    
                />
                  <Botao
                    classe="botao2"
                    aoClicar={this.diminuir}
                    titulo="Diminuir"                    
                    
                />  <Botao
                classe="botao3"
                aoClicar={this.dividir}
                titulo="Dividir"                    
                
                 />
                <Botao
                    classe="botao4"
                    aoClicar={this.zerar}
                    titulo="Zerar"                    
                    
                />
                  <Botao
                    classe="botao5"
                    aoClicar={this.multiplicacao}
                    titulo="multiplicacao"                    
                    
                />
                
            </div>
        );
    }
}

export default Contador;