import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqItems: FaqItem[] = [
    {
      question: 'Как быстро выполняется заказ?',
      answer: 'Время выполнения напрямую зависит от выбранной услуги и объема заказа, от нескольких минут до 1 дня. В случае невыполнения заказа денежные средства будут возвращены на Ваш баланс личного кабинета.'
    },
    {
      question: 'Мой профиль должен быть открытым?',
      answer: 'Да. Для выполнения заказа Ваши профиль/сообщество/публикация должны быть общедоступными.'
    },
    {
      question: 'Ввели неправильную ссылку при оформлении заказа?',
      answer: 'Заказ не будет выполнен, если Вы указали недействительную ссылку, в таком случае средства будут возвращены на Ваш баланс личного кабинета. Однако, если указанная ссылка окажется действительной - заказ будет автоматически выполнен, возврат средств за такой заказ невозможен.'
    },
    {
      question: 'Как следить за выполнением заказа?',
      answer: 'Отслеживать выполнение заказа Вы сможете в разделе "Мои заказы" личного кабинета. При оформлении заказа на вашу почту был отправлен пароль.'
    },
    {
      question: 'Наш сервис безопасен?',
      answer: 'Использование нашего сервиса абсолютно безопасно. Мы используем исключительно легальные инструменты продвижения для выполнения заказов.'
    }
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="section-title section-title--center">
          <div className="text-primary font-semibold mb-2">FAQ</div>
          <h2>Справка сайта и ответы на вопросы</h2>
        </div>

        <div className="max-w-3xl mx-auto mt-8">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="border-b border-gray-200 py-4"
            >
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
              >
                <h3 className="text-lg font-medium">{item.question}</h3>
                <ChevronDown 
                  className={`h-5 w-5 text-primary transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              {activeIndex === index && (
                <div className="mt-2 text-gray-600 animate-fade-in">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
