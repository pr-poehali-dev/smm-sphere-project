import { useState } from 'react';
import { ChevronDown, ChevronUp, InfoIcon } from 'lucide-react';

interface Platform {
  id: string;
  name: string;
  icon: string;
}

interface ServiceType {
  id: string;
  name: string;
}

interface Tariff {
  id: string;
  name: string;
  minQuantity: number;
  maxQuantity: number;
  rate: number;
  description: string;
  executionTime: string;
}

const QuickOrderForm = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedTariff, setSelectedTariff] = useState<Tariff | null>(null);
  const [quantity, setQuantity] = useState(100);
  const [url, setUrl] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Примерные данные для демонстрации
  const platforms: Platform[] = [
    { id: 'instagram', name: 'Instagram', icon: '📸' },
    { id: 'tiktok', name: 'TikTok', icon: '🎵' },
    { id: 'telegram', name: 'Telegram', icon: '✈️' },
    { id: 'vk', name: 'ВКонтакте', icon: '💬' },
  ];

  const serviceTypes: Record<string, ServiceType[]> = {
    instagram: [
      { id: 'followers', name: 'Подписчики' },
      { id: 'likes', name: 'Лайки' },
      { id: 'views', name: 'Просмотры' },
    ],
    tiktok: [
      { id: 'followers', name: 'Подписчики' },
      { id: 'likes', name: 'Лайки' },
      { id: 'views', name: 'Просмотры' },
    ],
    telegram: [
      { id: 'members', name: 'Участники канала' },
      { id: 'views', name: 'Просмотры постов' },
      { id: 'reactions', name: 'Реакции' },
    ],
    vk: [
      { id: 'friends', name: 'Друзья' },
      { id: 'likes', name: 'Лайки' },
      { id: 'reposts', name: 'Репосты' },
    ],
  };

  const tariffs: Record<string, Record<string, Tariff[]>> = {
    instagram: {
      followers: [
        { 
          id: 'ig-followers-1', 
          name: 'Стандарт', 
          minQuantity: 100,
          maxQuantity: 5000,
          rate: 0.5,
          description: 'Подписчики со стандартным качеством аккаунтов. Могут быть неактивными.',
          executionTime: '1-2 дня'
        },
        { 
          id: 'ig-followers-2', 
          name: 'Премиум', 
          minQuantity: 100,
          maxQuantity: 3000,
          rate: 1.2,
          description: 'Подписчики с аватарками и публикациями. Более высокое качество.',
          executionTime: '1-3 дня'
        },
      ],
    },
  };

  const handlePlatformChange = (platformId: string) => {
    setSelectedPlatform(platformId);
    setSelectedService(null);
    setSelectedTariff(null);
  };

  const handleServiceChange = (serviceId: string) => {
    setSelectedService(serviceId);
    
    // Установим первый тариф по умолчанию, если есть
    if (selectedPlatform && tariffs[selectedPlatform]?.[serviceId]?.[0]) {
      const defaultTariff = tariffs[selectedPlatform][serviceId][0];
      setSelectedTariff(defaultTariff);
      setQuantity(defaultTariff.minQuantity);
    } else {
      setSelectedTariff(null);
    }
  };

  const handleTariffChange = (tariffId: string) => {
    if (selectedPlatform && selectedService) {
      const tariff = tariffs[selectedPlatform][selectedService].find(t => t.id === tariffId);
      if (tariff) {
        setSelectedTariff(tariff);
        setQuantity(tariff.minQuantity);
      }
    }
  };

  const increaseQuantity = () => {
    if (selectedTariff && quantity < selectedTariff.maxQuantity) {
      setQuantity(prev => prev + 10);
    }
  };

  const decreaseQuantity = () => {
    if (selectedTariff && quantity > selectedTariff.minQuantity) {
      setQuantity(prev => prev - 10);
    }
  };

  const activatePromo = () => {
    if (promoCode === 'WELCOME10') {
      setDiscount(10);
      alert('Промокод активирован. Скидка 10%');
    } else {
      alert('Неверный промокод');
    }
  };

  const calculateTotalPrice = () => {
    if (!selectedTariff) return 0;
    
    const basePrice = quantity * selectedTariff.rate;
    const discountAmount = basePrice * (discount / 100);
    return basePrice - discountAmount;
  };

  const createOrder = () => {
    // Здесь была бы логика создания заказа с отправкой на сервер
    alert(`Заказ создан!\nПлатформа: ${selectedPlatform}\nУслуга: ${selectedService}\nТариф: ${selectedTariff?.name}\nКоличество: ${quantity}\nСтоимость: ${calculateTotalPrice().toFixed(2)} ₽`);
  };

  return (
    <section id="quick-order" className="py-12 bg-white">
      <div className="container">
        <div className="section-title section-title--center">
          <h2>Воспользуйтесь быстрым заказом</h2>
          <p>Станьте популярным в пару кликов.<br /> Максимально быстро и без регистрации.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {/* Платформы */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Площадка</h3>
            <div className="grid grid-cols-2 gap-2">
              {platforms.map((platform) => (
                <button
                  key={platform.id}
                  onClick={() => handlePlatformChange(platform.id)}
                  className={`flex items-center gap-2 p-3 rounded-md transition-colors ${
                    selectedPlatform === platform.id 
                      ? 'bg-primary/10 text-primary border border-primary/30' 
                      : 'border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-xl">{platform.icon}</span>
                  <span>{platform.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Услуги */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Услуга</h3>
            {!selectedPlatform ? (
              <div className="text-gray-500 italic">Сначала выберите площадку</div>
            ) : (
              <div className="grid grid-cols-1 gap-2">
                {serviceTypes[selectedPlatform]?.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceChange(service.id)}
                    className={`p-3 rounded-md transition-colors text-left ${
                      selectedService === service.id 
                        ? 'bg-primary/10 text-primary border border-primary/30' 
                        : 'border border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Детали заказа */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Тариф</h3>
              {selectedTariff && (
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="text-sm text-primary flex items-center gap-1"
                >
                  <InfoIcon size={14} /> Подробнее об услуге
                </button>
              )}
            </div>

            {!selectedService ? (
              <div className="text-gray-500 italic mb-4">Сначала выберите услугу</div>
            ) : (
              <div className="mb-4">
                <select 
                  className="w-full p-3 border border-gray-200 rounded-md"
                  onChange={(e) => handleTariffChange(e.target.value)}
                  disabled={!selectedPlatform || !selectedService}
                >
                  {selectedPlatform && selectedService && tariffs[selectedPlatform]?.[selectedService] ? (
                    tariffs[selectedPlatform][selectedService].map((tariff) => (
                      <option key={tariff.id} value={tariff.id}>
                        {tariff.name} ({tariff.rate} ₽ за 1 шт.)
                      </option>
                    ))
                  ) : (
                    <option>Выберите услугу</option>
                  )}
                </select>
              </div>
            )}

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Ссылка</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-200 rounded-md"
                placeholder="https://www.instagram.com/..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Количество</label>
                <div className="flex border border-gray-200 rounded-md">
                  <button 
                    onClick={decreaseQuantity}
                    className="px-3 py-2 bg-gray-100"
                    disabled={!selectedTariff || quantity <= selectedTariff?.minQuantity}
                  >
                    <ChevronDown size={16} />
                  </button>
                  <input
                    type="number"
                    className="w-full text-center border-x border-gray-200"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    min={selectedTariff?.minQuantity}
                    max={selectedTariff?.maxQuantity}
                  />
                  <button 
                    onClick={increaseQuantity}
                    className="px-3 py-2 bg-gray-100"
                    disabled={!selectedTariff || quantity >= selectedTariff?.maxQuantity}
                  >
                    <ChevronUp size={16} />
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Стоимость</label>
                <div className="p-3 border border-gray-200 rounded-md bg-gray-50 text-center font-medium">
                  {calculateTotalPrice().toFixed(2)} ₽
                </div>
              </div>
            </div>

            {selectedTariff && (
              <div className="flex items-center gap-1 text-xs text-gray-500 mb-4">
                <InfoIcon size={14} />
                <span>Лимиты: от {selectedTariff.minQuantity} до {selectedTariff.maxQuantity}</span>
              </div>
            )}

            <div className="mb-6">
              <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-medium">Промокод</label>
                <a 
                  href="https://t.me/smmsphere" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-primary"
                >
                  Промокоды здесь
                </a>
              </div>
              <div className="flex">
                <input
                  type="text"
                  className="flex-1 p-3 border border-r-0 border-gray-200 rounded-l-md"
                  placeholder="Введите промокод"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button 
                  onClick={activatePromo}
                  className="px-4 py-2 bg-primary text-white rounded-r-md"
                >
                  Активировать
                </button>
              </div>
            </div>

            <button 
              onClick={createOrder}
              className="w-full btn btn-primary"
              disabled={!selectedTariff || !url}
            >
              Создать заказ
            </button>
          </div>
        </div>
      </div>

      {/* Модальное окно с деталями услуги */}
      {isModalOpen && selectedTariff && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Описание услуги</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500">
                ✕
              </button>
            </div>
            <div className="mb-4">
              <div className="font-medium">Среднее время выполнения:</div>
              <p>{selectedTariff.executionTime}</p>
            </div>
            <div>
              <div className="font-medium">Описание услуги:</div>
              <p>{selectedTariff.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default QuickOrderForm;
