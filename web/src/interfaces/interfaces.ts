export interface UsuariosProps {
    id: string;
    nome: string;
    sobrenome: string;
    criadoEm: string;
    email: string;
}

export interface TarefasProps {
    id: string;
    nome: string;
    descricao: string;
    concluido: boolean;
    criadoEm: string;
    usuarioId: string;
}