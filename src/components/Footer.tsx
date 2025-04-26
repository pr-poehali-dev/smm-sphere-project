import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-light py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent block mb-4">
              SMMsphere
            </Link>
            <p className="text-sm text-gray-500 mb-6">
              *продукт компании Meta - признано экстремисткой организацией и запрещено в России.
            </p>
            <a 
              href="https://t.me/smmsphere" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white/50 rounded-lg shadow-sm hover:shadow transition-shadow"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-[#0088cc] rounded-full">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.665 3.717L2.93497 10.554C1.72497 11.04 1.73197 11.715 2.71297 12.016L7.26497 13.436L17.797 6.791C18.295 6.488 18.75 6.651 18.376 6.983L9.84297 14.684H9.84097L9.84297 14.685L9.52897 19.377C9.98897 19.377 10.192 19.166 10.45 18.917L12.661 16.767L17.26 20.164C18.108 20.631 18.717 20.391 18.928 19.379L21.947 5.151C22.256 3.912 21.474 3.351 20.665 3.717Z" fill="white"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold text-dark">
                  Подпишись на наш канал в Телеграм
                </div>
                <p className="text-sm text-gray-600">
                  Актуальные промокоды, акции и новости
                </p>
              </div>
            </a>
          </div>

          <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">Навигация</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-600 hover:text-primary">Главная</Link></li>
                  <li><Link to="/services" className="text-gray-600 hover:text-primary">Услуги</Link></li>
                  <li><Link to="/reviews" className="text-gray-600 hover:text-primary">Отзывы</Link></li>
                  <li><Link to="/contacts" className="text-gray-600 hover:text-primary">Контакты</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Документы</h3>
                <ul className="space-y-2">
                  <li><Link to="/cookie" className="text-gray-600 hover:text-primary">Политика cookies</Link></li>
                  <li><Link to="/offer" className="text-gray-600 hover:text-primary">Публичная оферта</Link></li>
                  <li><Link to="/privacy" className="text-gray-600 hover:text-primary">Политика конфиденциальности</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Принимаем к оплате</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-2 rounded shadow-sm">
                    <svg width="48" height="16" viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M33.2 0H14.8C6.626 0 0 3.582 0 8C0 12.418 6.626 16 14.8 16H33.2C41.374 16 48 12.418 48 8C48 3.582 41.374 0 33.2 0Z" fill="#F5F5F5"/>
                      <path d="M18.966 5.333H17.466V10.667H18.966V5.333Z" fill="#142688"/>
                      <path d="M24.333 5.333L23.099 8.809L21.865 5.333H20.366L22.366 10.667H23.833L25.833 5.333H24.333Z" fill="#142688"/>
                      <path d="M26.966 10.667H30.366V9.467H28.466V8.533H30.266V7.333H28.466V6.533H30.366V5.333H26.966V10.667Z" fill="#142688"/>
                    </svg>
                  </div>
                  <div className="bg-white p-2 rounded shadow-sm">
                    <svg width="48" height="16" viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M44 0H4C1.791 0 0 1.791 0 4V12C0 14.209 1.791 16 4 16H44C46.209 16 48 14.209 48 12V4C48 1.791 46.209 0 44 0Z" fill="#F5F5F5"/>
                      <path d="M16.5 5L15 11H17L18.5 5H16.5Z" fill="#142688"/>
                      <path d="M21.5 5H19.5L18 11H20L20.5 9H22L22.5 11H24.5L23 5H21.5ZM20.75 7.5L21 6.5H21.25L21.5 7.5H20.75Z" fill="#142688"/>
                      <path d="M29 5H25V11H29V9.5H27V8.5H28.5V7H27V6.5H29V5Z" fill="#142688"/>
                      <path d="M32 5H30V11H32C34 11 35 9 35 8C35 7 34 5 32 5ZM32 9.5H31.5V6.5H32C33 6.5 33.5 7.5 33.5 8C33.5 8.5 33 9.5 32 9.5Z" fill="#142688"/>
                    </svg>
                  </div>
                  <div className="bg-white p-2 rounded shadow-sm">
                    <svg width="48" height="16" viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M44 0H4C1.791 0 0 1.791 0 4V12C0 14.209 1.791 16 4 16H44C46.209 16 48 14.209 48 12V4C48 1.791 46.209 0 44 0Z" fill="#F5F5F5"/>
                      <path d="M24 4C19.582 4 16 6.686 16 10C16 13.314 19.582 16 24 16C28.418 16 32 13.314 32 10C32 6.686 28.418 4 24 4ZM24 14C20.686 14 18 12.209 18 10C18 7.791 20.686 6 24 6C27.314 6 30 7.791 30 10C30 12.209 27.314 14 24 14Z" fill="#3D95CE"/>
                      <path d="M24 6C20.686 6 18 7.791 18 10C18 12.209 20.686 14 24 14C27.314 14 30 12.209 30 10C30 7.791 27.314 6 24 6ZM24 12C21.791 12 20 11.105 20 10C20 8.895 21.791 8 24 8C26.209 8 28 8.895 28 10C28 11.105 26.209 12 24 12Z" fill="#FFAD00"/>
                    </svg>
                  </div>
                  <div className="bg-white p-2 rounded shadow-sm">
                    <svg width="48" height="16" viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M44 0H4C1.791 0 0 1.791 0 4V12C0 14.209 1.791 16 4 16H44C46.209 16 48 14.209 48 12V4C48 1.791 46.209 0 44 0Z" fill="#F5F5F5"/>
                      <path d="M13 6H15L17 10H15L13 6Z" fill="#ED1C24"/>
                      <path d="M18 6H20L18 10H16L18 6Z" fill="#F7941E"/>
                      <path d="M21 6H23L25 10H23L21 6Z" fill="#006838"/>
                      <path d="M26 6H28L26 10H24L26 6Z" fill="#0054A4"/>
                      <path d="M29 6H31L33 10H31L29 6Z" fill="#662D91"/>
                      <path d="M34 6H36L34 10H32L34 6Z" fill="#A0218C"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600 text-sm">
          © 2022 - 2025 Все права защищены
        </div>
      </div>
    </footer>
  );
};

export default Footer;
