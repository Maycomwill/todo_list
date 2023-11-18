import { Request, Response, Router } from "express";
import { api } from "../../lib/api";
import bodyParser from "body-parser";

const tarefasRouter = Router();
const parser = bodyParser.json();

export default tarefasRouter;