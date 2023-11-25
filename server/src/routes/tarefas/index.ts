import { Request, Response, Router } from "express";
import { api } from "../../lib/api";
import bodyParser from "body-parser";

const tarefasRouter = Router();
const parser = bodyParser.json();

tarefasRouter.get("/tarefas", async (req: Request, res: Response) => {
  const tarefas = await api.tarefas.findMany();

  res.status(200).send(tarefas);
});

tarefasRouter.get(
  "/tarefas/:tarefaId",
  parser,
  async (req: Request, res: Response) => {
    const { tarefaId } = req.params;
    const tarefa = await api.tarefas.findUnique({
      where: {
        id: tarefaId,
      },
    });

    res.status(200).send(tarefa);
  }
);

tarefasRouter.post("/tarefas", parser, async (req: Request, res: Response) => {
  const { nome, descricao, concluido, usuarioId } = req.body;

  const usuario = await api.tarefas.create({
    data: {
      nome,
      descricao,
      concluido,
      usuarioId,
    },
  });

  res.status(201).send(usuario);
});

tarefasRouter.put(
    "/tarefas/:tarefaId",
  parser,
  async (req: Request, res: Response) => {
    const { tarefaId } = req.params;
    const { nome, descricao, concluido, usuarioId } = req.body;

    const tarefa = await api.tarefas.update({
      where: {
        id: tarefaId,
      },
      data: {
        nome,
        descricao,
        concluido,
        usuarioId,
      },
    });

    res.status(200).send(tarefa);
  }
);

tarefasRouter.delete(
  "/tarefas/:tarefaId",
  parser,
  async (req: Request, res: Response) => {
    const { tarefaId } = req.params;
    await api.tarefas.delete({
      where: {
        id: tarefaId,
      },
    });

    res.status(200).send("Tarefa deletada com sucesso");
  }
);

export default tarefasRouter;
