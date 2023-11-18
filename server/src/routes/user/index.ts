import { Request, Response, Router } from "express";
import { api } from "../../lib/api";
import bodyParser from "body-parser";

const userRouter = Router();
const parser = bodyParser.json();

userRouter.get("/users", async (req: Request, res: Response) => {
  const usuarios = await api.usuario.findMany();

  res.status(200).send(usuarios);
});

userRouter.get("/user/:userId", async (req: Request, res: Response) => {
  const { userId } = req.params;

  const usuario = await api.usuario.findUnique({
    where: {
      id: userId,
    },
  });

  res.status(200).send(usuario);
});

userRouter.post("/user", parser, async (req: Request, res: Response) => {
  const data = req.body;

  const usuario = await api.usuario.create({
    data: {
      email: data.email,
      nome: data.nome,
      sobrenome: data.sobrenome,
    },
  });

  res.status(201).send({ message: "Usuário criado", usuario: usuario });
});

userRouter.put("/user/:userId", parser, async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { nome, sobrenome, email } = req.body;

  const usuario = await api.usuario.update({
    where: {
      id: userId,
    },
    data: {
      email,
      nome,
      sobrenome,
    },
  });

  res.status(200).send(usuario);
});

userRouter.delete(
  "/user/:userId",
  parser,
  async (req: Request, res: Response) => {
    const { userId } = req.params;

    await api.usuario.delete({
      where: {
        id: userId,
      },
    });

    res.status(200).send("Usuário deletado");
  }
);

export default userRouter;
