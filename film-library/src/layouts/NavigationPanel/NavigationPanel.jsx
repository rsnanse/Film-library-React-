import './NavigationPanel.css';
function NavigationPanel() {
    return (
        <div className="nav-container">
            <div className="logo">
                <img src="/logo.svg" alt="Логотип" />
            </div>
            <nav>
                <ul className="nav-list">
                    <li className="nav-list_item">
                        <a href="#" className="nav-list_link nav-list_link__active">
                            Поиск фильмов
                        </a>
                    </li>
                    <li className="nav-list_item">
                        <a href="#" className="nav-list_link">
                            Мои фильмы
                        </a>
                        <div className="nav-list_counter">1000</div>
                    </li>
                    <li className="nav-list_item">
                        <a href="#" className="nav-list_link">
                            Войти
                        </a>
                        <img src="/login-icon.svg" alt="Иконка войти" className="nav-list_login-icon" />
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavigationPanel;
