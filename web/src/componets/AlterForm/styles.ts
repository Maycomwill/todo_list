import styled from "styled-components";
import { TemaPadrao } from "../../styles/global";
import { darken, lighten } from "polished";

export const Container = styled.form`
    width: 55%;
    height: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: ${TemaPadrao.tarefaBackground};
    border-radius: 12px;
    padding: 24px 12px;
    input{
        border: none;
        outline: none;
        border-radius: 4px;
        font-size: 16px;
        accent-color: ${TemaPadrao.primary};
        background-color: ${lighten(.55, TemaPadrao.background)};
        color: ${darken(.1, TemaPadrao.background)};

        ::placeholder{
            color: ${darken(.15, TemaPadrao.text)};  
        }
    }

    #check-input{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;

        input{
            width: fit-content;
        }

    }

    .input-wrapper{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        input{
            width: 85%;
        }
    }

    .update-btn{
        width: 30%;
    }

`