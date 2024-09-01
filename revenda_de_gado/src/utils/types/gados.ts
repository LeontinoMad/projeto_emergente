import { RacaI } from "./racas";

export interface GadoI {
  id: number;
  tipo: string;
  idade: string;
  preco: number;
  peso: number;
  destaque: Boolean;
  foto: string;
  createdAt: Date;
  updatedAt: Date;
  sexo: string;
  racas: RacaI;
  racasId: number;
}
