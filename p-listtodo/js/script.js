const containerGeral = document.getElementById('container__geral')
const containerLista = document.getElementById('container__lista')
const formulario = document.getElementById('formulario')
const listaTarefas = document.getElementById('lista__tarefas')
const opcoes = document.getElementById('seletor__etiqueta')

const erro = document.getElementById('msg__erro')

const botoes = document.getElementById('botoes')
const botaoRemover = document.createElement('button')
const botaoFeitos = document.createElement('button')
const botaoExlcuiCheck = document.createElement('button')

let dragging 

botoes.appendChild(botaoFeitos)
botoes.appendChild(botaoRemover)
botoes.appendChild(botaoExlcuiCheck)

botaoFeitos.classList.add('botao__feitos')
botaoRemover.classList.add('botao__remover')
botaoExlcuiCheck.classList.add('botao__feitos')

botaoFeitos.textContent= 'Marcar lidos'
botaoRemover.textContent= 'Excluir todos' 
botaoExlcuiCheck.textContent= 'Exluir concluídos'

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()   
          
    const inputUsuario= document.getElementById('input__usuario')
    const itemLista = inputUsuario.value
                       
    if(itemLista.trim()===''){
        erro.classList.add('erro')
        erro.textContent= 'Digite uma tarefa, irmã'
    } else {
        erro.classList.remove('erro')
        erro.textContent=''
       
        let lista = document.createElement('li')
        listaTarefas.appendChild(lista)
        lista.classList.add('linha') 
        lista.textContent= itemLista

        // lista.addEventListener('dblclick', function(){
        //     lista.setAttribute('contenteditable', true)
        // })
       

        let opcoesEtiqueta = document.createElement('span')
        lista.appendChild(opcoesEtiqueta)
        opcoesEtiqueta.textContent= opcoes.value
        opcoesEtiqueta.classList.add('opcoes')

        const botaoX = document.createElement('button')
        lista.appendChild(botaoX)
        botaoX.textContent= 'x'
        botaoX.classList.add('botao__x')
        botaoX.addEventListener('click', function(){
        listaTarefas.removeChild(lista)       
        })   

        let corEtiqueta = opcoes.value
        switch(corEtiqueta){
            case 'Mercado': opcoesEtiqueta.classList.add('mercado');
            break;
            case 'Farmácia': opcoesEtiqueta.classList.add('farmacia');
            break;
            case 'Home': opcoesEtiqueta.classList.add('home');
            break;
            case 'Outros': opcoesEtiqueta.classList.add('outros');
            break;
        }

        lista.addEventListener('click', function(){
            if(lista.classList.contains('check__tarefa')){
                lista.classList.remove('check__tarefa')
            } else{
                lista.classList.add('check__tarefa')
            }        
        })            
        
        botaoRemover.addEventListener('click', function(){
           lista.remove()                   
        })    

        botaoExlcuiCheck.addEventListener('click', function(){
            if(lista.classList.contains('check__tarefa') || listaTarefas.classList.contains('check__tarefa') ){
                lista.remove()
            }
        })
        
        containerLista.setAttribute('draggable', true)
        listaTarefas.setAttribute('draggable', true)
        lista.setAttribute('draggable', true)

        listaTarefas.addEventListener('dragstart', function(ev){
            dragging = ev.target.closest('.linha')
        })

        listaTarefas.addEventListener('dragover', function(ev){
            ev.preventDefault()
            const node = ev.target.closest('.linha')
            this.insertBefore(dragging, node)
        })

        listaTarefas.addEventListener('dragend', function(ev){
            dragging=null
        }) 

    }

    formulario.reset()        
})

   
botaoFeitos.addEventListener('click', function(){    
        if(listaTarefas.classList.contains('check__tarefa')){
            listaTarefas.classList.remove("check__tarefa") 
            botaoFeitos.textContent= 'Marcar todos como lidos'
        }else{
            listaTarefas.classList.add("check__tarefa")
            botaoFeitos.textContent="Desfazer"
        }     
})





