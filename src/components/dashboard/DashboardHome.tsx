import { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '../ui/card';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  Legend
} from 'recharts';
import { TrendingUp, Users, ShoppingBag, CreditCard, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const salesData = [
  { name: 'Янв', value: 4000 },
  { name: 'Фев', value: 3000 },
  { name: 'Мар', value: 2000 },
  { name: 'Апр', value: 2780 },
  { name: 'Май', value: 1890 },
  { name: 'Июн', value: 2390 },
  { name: 'Июл', value: 3490 },
];

const userActivityData = [
  { name: 'Пн', активные: 40, новые: 24 },
  { name: 'Вт', активные: 30, новые: 13 },
  { name: 'Ср', активные: 20, новые: 9 },
  { name: 'Чт', активные: 27, новые: 17 },
  { name: 'Пт', активные: 18, новые: 8 },
  { name: 'Сб', активные: 23, новые: 11 },
  { name: 'Вс', активные: 34, новые: 19 },
];

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  change: number;
  icon: React.ReactNode;
}

const StatCard = ({ title, value, description, change, icon }: StatCardProps) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">
        {title}
      </CardTitle>
      <div className="h-8 w-8 rounded-full bg-primary/10 p-1.5 text-primary">
        {icon}
      </div>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className="text-xs text-gray-500 mt-1">{description}</p>
      <div className={`mt-2 inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${change >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
        {change >= 0 ? (
          <ArrowUpRight className="mr-1 h-3 w-3" />
        ) : (
          <ArrowDownRight className="mr-1 h-3 w-3" />
        )}
        {Math.abs(change)}% от прошлого месяца
      </div>
    </CardContent>
  </Card>
);

const DashboardHome = () => {
  const [period, setPeriod] = useState<'day' | 'week' | 'month' | 'year'>('week');
  
  return (
    <div className="space-y-6">
      {/* Статистические карточки */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Общая выручка" 
          value="₽852,438" 
          description="Финансовые показатели"
          change={5.7}
          icon={<TrendingUp className="h-5 w-5" />}
        />
        <StatCard 
          title="Новые пользователи" 
          value="2,845" 
          description="Активные аккаунты"
          change={-3.2}
          icon={<Users className="h-5 w-5" />}
        />
        <StatCard 
          title="Заказы" 
          value="8,623" 
          description="Выполненные заказы"
          change={12.5}
          icon={<ShoppingBag className="h-5 w-5" />}
        />
        <StatCard 
          title="Средний чек" 
          value="₽540" 
          description="На одного пользователя"
          change={1.2}
          icon={<CreditCard className="h-5 w-5" />}
        />
      </div>
      
      {/* График продаж */}
      <Card className="col-span-4">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Динамика продаж</CardTitle>
            <div className="flex items-center space-x-2">
              <select 
                value={period}
                onChange={(e) => setPeriod(e.target.value as any)}
                className="rounded-md border border-gray-300 px-3 py-1 text-sm"
              >
                <option value="day">День</option>
                <option value="week">Неделя</option>
                <option value="month">Месяц</option>
                <option value="year">Год</option>
              </select>
            </div>
          </div>
          <CardDescription>
            Общая сумма продаж за выбранный период
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#7e69ab" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      {/* Дополнительные карточки */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Активность пользователей */}
        <Card>
          <CardHeader>
            <CardTitle>Активность пользователей</CardTitle>
            <CardDescription>
              Количество активных и новых пользователей
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={userActivityData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="активные" stroke="#8b5cf6" strokeWidth={2} />
                  <Line type="monotone" dataKey="новые" stroke="#d946ef" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        {/* Последние заказы */}
        <Card>
          <CardHeader>
            <CardTitle>Последние заказы</CardTitle>
            <CardDescription>
              Недавно размещенные заказы пользователей
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-4 rounded-lg border p-3">
                  <div className="flex-1">
                    <div className="font-medium">Заказ #{Math.floor(Math.random() * 100000)}</div>
                    <div className="text-sm text-gray-500">Instagram подписчики "Премиум"</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">₽{Math.floor(Math.random() * 10000)}</div>
                    <div className="text-sm text-gray-500">26 апр, 2025</div>
                  </div>
                </div>
              ))}
              <button className="w-full rounded-md bg-gray-100 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
                Смотреть все заказы
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHome;
