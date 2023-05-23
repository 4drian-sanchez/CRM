import { useRouteError } from "react-router-dom";

export const IndexErrorPage = () => {

    const {message, statusText} = useRouteError();
    
  return (
    <div className="space-y-8 text-center">
        <h1 className="font-extrabold text-4xl text-blue-900"> CRM - Clientes</h1>
        <p className="text-2xl">Error:</p>
        <p className="">{ statusText || message }</p>
    </div>
  )
}
