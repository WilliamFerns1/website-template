import {Outlet} from 'react-router-dom';
import Header from "./Header"

export default function Layout() {
    return (
        <div
            style={{width:"100vw"}}
        >
            <Header/>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
