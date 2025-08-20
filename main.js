'use strict'

import produtos from './produtos_atualizados.json' with {type: 'json'}

function criarProdutos(imagem){
    const galeria = document.getElementById('teste')
    const container = document.createElement('div')
    const img = document.createElement('img')
    const nome = document.createElement("h1")
    const descricao = document.createElement("h2")
    const preco = document.createElement("p")
    const categoria = document.createElement("span")

    // cargo.classList.add("imagem")
    // nome.classList.add("imagem")
    // container.classList.add("imagem")

    nome.textContent = imagem.nome
    descricao.textContent = imagem.descricao
    preco.textContent = imagem.preco
    categoria.textContent = imagem.categoria
    img.src = "./img/" + imagem.imagem


    container.appendChild(img, nome, descricao, preco, categoria)
    galeria.appendChild(container)
    
    document.documentElement.style.setProperty("--nome", container.appendChild(nome))
    document.documentElement.style.setProperty("--nome", container.appendChild(descricao))
    document.documentElement.style.setProperty("--nome", container.appendChild(preco))
    document.documentElement.style.setProperty("--nome", container.appendChild(categoria))
}

produtos.forEach(criarProdutos)