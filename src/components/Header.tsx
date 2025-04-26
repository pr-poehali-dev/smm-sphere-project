import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 border-b border-gray-100">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              SMMsphere
            </span>
          </Link>

          <div className="relative">
            <div 
              className={`lg:hidden cursor-pointer ${isMenuOpen ? 'z-20' : ''}`} 
              onClick={toggleMenu}
            >
              <div className="flex flex-col space-y-1.5">
                <div className={`w-6 h-0.5 bg-dark transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-dark transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-dark transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
              </div>
            </div>
            
            <nav className={`lg:block ${isMenuOpen ? 'absolute top-10 right-0 bg-white shadow-lg rounded-lg p-4 z-10 w-48' : 'hidden'}`}>
              <ul className="flex lg:flex-row flex-col lg:space-x-8 lg:space-y-0 space-y-3">
                <li>
                  <Link to="/" className="text-dark font-medium hover:text-primary">
                    Главная
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-dark font-medium hover:text-primary">
                    Услуги
                  </Link>
                </li>
                <li>
                  <Link to="/reviews" className="text-dark font-medium hover:text-primary">
                    Отзывы
                  </Link>
                </li>
                <li>
                  <Link to="/contacts" className="text-dark font-medium hover:text-primary">
                    Контакты
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/signin" className="btn btn-gray">
              Войти
            </Link>
            <Link to="/signup" className="btn btn-primary">
              Зарегистироваться
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
