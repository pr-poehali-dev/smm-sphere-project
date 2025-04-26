import { useState } from 'react';
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarTrigger, 
  SidebarHeader, 
  SidebarContent, 
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel
} from '../components/ui/sidebar';
import { UserRound, LayoutDashboard, ShoppingCart, Settings, BarChart2, Package, Users, Mail, LogOut } from 'lucide-react';
import DashboardHome from '../components/dashboard/DashboardHome';

type DashboardTab = 'home' | 'orders' | 'services' | 'users' | 'stats' | 'settings' | 'support';

const Dashboard = () => {
  const [currentTab, setCurrentTab] = useState<DashboardTab>('home');
  
  const renderContent = () => {
    switch (currentTab) {
      case 'home':
        return <DashboardHome />;
      case 'orders':
        return <div className="p-6">Управление заказами</div>;
      case 'services':
        return <div className="p-6">Управление услугами</div>;
      case 'users':
        return <div className="p-6">Управление пользователями</div>;
      case 'stats':
        return <div className="p-6">Статистика</div>;
      case 'settings':
        return <div className="p-6">Настройки</div>;
      case 'support':
        return <div className="p-6">Поддержка</div>;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <SidebarProvider>
      <Sidebar variant="sidebar" collapsible="icon">
        <SidebarHeader>
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                SMMsphere
              </span>
            </div>
            <SidebarTrigger />
          </div>
        </SidebarHeader>
        
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Основное меню</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={currentTab === 'home'} 
                  onClick={() => setCurrentTab('home')}
                  tooltip="Главная"
                >
                  <LayoutDashboard className="size-4" />
                  <span>Главная</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={currentTab === 'orders'} 
                  onClick={() => setCurrentTab('orders')}
                  tooltip="Заказы"
                >
                  <ShoppingCart className="size-4" />
                  <span>Заказы</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={currentTab === 'services'} 
                  onClick={() => setCurrentTab('services')}
                  tooltip="Услуги"
                >
                  <Package className="size-4" />
                  <span>Услуги</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={currentTab === 'users'} 
                  onClick={() => setCurrentTab('users')}
                  tooltip="Пользователи"
                >
                  <Users className="size-4" />
                  <span>Пользователи</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={currentTab === 'stats'} 
                  onClick={() => setCurrentTab('stats')}
                  tooltip="Статистика"
                >
                  <BarChart2 className="size-4" />
                  <span>Статистика</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
          
          <SidebarGroup>
            <SidebarGroupLabel>Настройки</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={currentTab === 'settings'} 
                  onClick={() => setCurrentTab('settings')}
                  tooltip="Настройки"
                >
                  <Settings className="size-4" />
                  <span>Настройки</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={currentTab === 'support'} 
                  onClick={() => setCurrentTab('support')}
                  tooltip="Поддержка"
                >
                  <Mail className="size-4" />
                  <span>Поддержка</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        
        <SidebarFooter>
          <div className="p-2">
            <div className="flex items-center gap-2 rounded-md p-2 hover:bg-sidebar-accent">
              <UserRound className="size-5" />
              <div className="flex flex-col">
                <span className="text-sm font-medium">Администратор</span>
                <span className="text-xs text-sidebar-foreground/70">admin@smmsphere.com</span>
              </div>
            </div>
            
            <button className="flex w-full items-center gap-2 rounded-md mt-2 p-2 text-sm text-red-500 hover:bg-red-500/10">
              <LogOut className="size-4" />
              <span>Выйти</span>
            </button>
          </div>
        </SidebarFooter>
      </Sidebar>
      
      <SidebarInset>
        <div className="flex min-h-screen flex-col bg-gray-50">
          <header className="bg-white border-b border-gray-200 shadow-sm">
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-800">
                  {currentTab === 'home' && 'Панель управления'}
                  {currentTab === 'orders' && 'Управление заказами'}
                  {currentTab === 'services' && 'Управление услугами'}
                  {currentTab === 'users' && 'Управление пользователями'}
                  {currentTab === 'stats' && 'Статистика'}
                  {currentTab === 'settings' && 'Настройки'}
                  {currentTab === 'support' && 'Поддержка'}
                </h1>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">Последнее обновление: 26 апреля 2025</span>
                </div>
              </div>
            </div>
          </header>
          
          <main className="flex-1 p-6">
            {renderContent()}
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Dashboard;
