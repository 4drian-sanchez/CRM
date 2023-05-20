import { Outlet, Link, useLocation } from "react-router-dom";

export const Layout = () => {

    const { pathname } = useLocation();
    
    return (
        <div className="md:flex md:min-h-screen">

            <aside className="md:w-2/5 lg:w-1/4 bg-blue-900 px-5 py-10">
                <h1 className="text-3xl text-center text-white font-bold">CRM de clientes</h1>

                <nav className="mt-10">

                    <Link 
                        className={`${pathname === '/' ? 'text-blue-300' : 'text-white'} block text-2xl mb-1 transition-colors hover:text-blue-300`}
                         to='/'>
                    Clientes
                    </Link>

                    <Link 
                        className={`${pathname === '/clientes/nuevo' ? 'text-blue-300' : 'text-white'} block text-2xl mb-1 transition-colors hover:text-blue-300`}
                        to='/clientes/nuevo'>
                    Nuevo cliente
                    </Link>

                </nav>
            </aside>
            <main 
                className="md:w-3/5 lg:w-3/4 p-10 md:min-h-screen md:overflow-y-scroll"
            >
            <Outlet />
            </main>
            
        </div>
    )
}
