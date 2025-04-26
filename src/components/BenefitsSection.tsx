import { Clock, ShieldCheck, Lock, MessageCircle } from 'lucide-react';

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-white to-light">
      <div className="container">
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Изобилие выбора</h2>
              <p className="text-gray-600 mb-4">
                Наша платформа позволит Вам добиться желаемых показателей за счёт повышения 
                активности и увеличения охвата в самые короткие сроки. Огромный спектр услуг 
                на любой вкус.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=1974"
                alt="SMM сервисы" 
                className="rounded-lg shadow-lg max-w-full"
              />
            </div>
          </div>
        </div>

        <div className="section-title section-title--center">
          <h2>Почему нас выбирают</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
            <div className="flex flex-col items-center text-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Скорость</h3>
            </div>
            <p className="text-gray-600 text-center">
              Быстрое выполнение заказов любой сложности и объема.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
            <div className="flex flex-col items-center text-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Безопасность</h3>
            </div>
            <p className="text-gray-600 text-center">
              Используем только проверенные инструменты для защиты данных.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
            <div className="flex flex-col items-center text-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Надежность</h3>
            </div>
            <p className="text-gray-600 text-center">
              Гарантированное выполенние заказа в установленный срок.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:translate-y-[-5px]">
            <div className="flex flex-col items-center text-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Поддержка</h3>
            </div>
            <p className="text-gray-600 text-center">
              Мы всегда на связи и готовы ответить на любые вопросы.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Наша партнерская программа</h2>
              <p className="text-gray-600 mb-4">
                Мы предлагаем выгодные условия для наших партнеров. Приглашайте друзей и знакомых 
                и получайте бонусные средства для ваших будущих заказов. Вы получите 5% с каждого 
                заказа, совершенного по вашей реферальной ссылке.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=1974"
                alt="Партнерская программа" 
                className="rounded-lg shadow-lg max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
