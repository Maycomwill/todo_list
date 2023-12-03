import styled from "styled-components";
import { TemaPadrao } from "../../styles/global";
import { lighten } from 'polished'

interface IContainer{
    concluido: boolean
}

function handleConcluido(concluido: boolean){
    if(concluido){
        return TemaPadrao.primary
    }else {
        return TemaPadrao.tarefaBackground
    }
}


export const Container = styled.li<IContainer>`
    width: 360px;
    height: 160px;
    margin-bottom: 12px;
    border-radius: 12px;
    padding: 12px 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({concluido})=> handleConcluido(concluido)};
    transition: background-color .15s cubic-bezier(0.165, 0.84, 0.44, 1);
    &:hover{
        background-color: ${({concluido}) => lighten(.1, handleConcluido(concluido))}; 
    }
    .update-btn{
        width: 50%;
    }
`