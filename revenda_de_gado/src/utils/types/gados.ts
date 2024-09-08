import { RacaI } from "./racas";

export interface GadoI {
  id: number;
  tipo: string;
  idade: string;
  preco: number;
  peso: number;
  destaque: Boolean;
<<<<<<< HEAD
  informacoes: string;
=======
>>>>>>> e3fde6d222bb3cb5930985faa38bc60390da5147
  foto: string;
  createdAt: Date;
  updatedAt: Date;
  sexo: string;
  racas: RacaI;
  racasId: number;
}
