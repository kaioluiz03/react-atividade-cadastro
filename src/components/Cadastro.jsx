import React from "react";
import Image from './image/thumb-news.png'
import './Cadastro.css'

export default function Cadastro(){

    return(
        <div className='container'>
            
            <div className='backgroud-white'>
                <form className='form'>
                    
                    <div className='title-container'>
                        <h1>Cadastro</h1>
                        <p>Preencha os dados abaixo para começar.</p>
                    </div>

                    <div className='inputs-container'>
                        <input type="text" name='nome' placeholder='Nome' />
                        <input type="text" name='sobrenome' placeholder='Sobrenome' />
                        <input type="email" name='email' placeholder='E-mail' />
                        <input type="password" name='senha' placeholder='Senha' />
                    </div>

                    <div className='button-container'>
                        <button className='botao'>Concluir cadastro</button>
                    </div>

                </form>
            </div>

            <div className='backgroud-purple'>
                <div>
                    <img src={Image} alt="Imagem de conexão" />
                </div>
            </div>

        </div>
    );
}