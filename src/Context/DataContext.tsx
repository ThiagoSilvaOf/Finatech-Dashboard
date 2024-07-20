import React from "react";
import useFetch from "../Hooks/useFetch";

interface IDataContext {
  data: IVenda[] | null;
  loading:boolean;
  error:string | null;
}

interface IVenda {
  id:string;
  nome:string;
  preco:number;
  status:"pago" | "processando" | "falha";
  pagamento:"cartao" | "pix" | "boleto";
  parcelas: number | null;
  data:string;
}

const DataContext = React.createContext<IDataContext | null>(null);

export const useData = () => {
  const context = React.useContext(DataContext);
  if(context === null) throw new Error("useData precisa estar em DataContextProvider");
  return context;
}


export const DataContextProvider = ({children}: React.PropsWithChildren) => {
  const {data, loading, error} = useFetch<IVenda[]>("https://data.origamid.dev/vendas");

  return <DataContext.Provider value={{data, loading, error}}>{children}</DataContext.Provider>
}