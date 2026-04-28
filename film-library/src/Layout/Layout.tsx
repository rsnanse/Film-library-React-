import { Outlet } from 'react-router-dom';
import '../App.css';
import Background from '../components/Background/Background';
import NavigationPanel from '../layouts/NavigationPanel/NavigationPanel';

function Layout() {
    return (
        <div className="app">
            <div>
                <Background></Background>
                <NavigationPanel></NavigationPanel>
            </div>
            <Outlet></Outlet>
        </div>
    );
}

export default Layout;
