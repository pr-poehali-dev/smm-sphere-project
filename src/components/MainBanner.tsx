import { Link } from 'react-router-dom';
import { PlayIcon } from 'lucide-react';

const MainBanner = () => {
  const scrollToQuickOrder = () => {
    const element = document.getElementById('quick-order');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-white to-light">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 animate-fade-in">
            <div className="flex items-center gap-2 mb-6 bg-white/70 p-2 rounded-full w-fit">
              <div className="bg-primary/10 p-1 rounded-full">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13L9 17L19 7" stroke="#7874FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-sm font-medium">Качественно</div>
              <div className="text-sm font-medium">Быстро</div>
              <div className="text-sm font-medium">Надёжно</div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Продвижение в социальных сетях и мессенджерах
            </h1>
            <p className="text-gray-600 mb-8 max-w-xl">
              Наш сервис предлагает широкий спектр услуг для продвижения всех популярных соц. сетей и мессенджеров. 
              Подписчики, лайки, комментарии и многое другое по выгодным ценам.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/signup" className="btn btn-primary">
                Регистрация
              </Link>
              <button onClick={scrollToQuickOrder} className="btn btn-outline flex items-center gap-2">
                <PlayIcon size={16} /> Быстрый заказ
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=1974"
              alt="SMM продвижение" 
              className="max-w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
