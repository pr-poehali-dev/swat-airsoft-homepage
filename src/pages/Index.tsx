import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-swat-dark to-swat-DEFAULT">
      {/* Navigation */}
      <nav className="bg-swat-DEFAULT/95 backdrop-blur-sm border-b border-tactical-gray/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" className="text-tactical-orange" size={32} />
              <span className="text-2xl font-bold text-tactical-white">TACTICAL ARENA</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#services" className="text-tactical-white hover:text-tactical-orange transition-colors">Услуги</a>
              <a href="#gallery" className="text-tactical-white hover:text-tactical-orange transition-colors">Галерея</a>
              <a href="#reviews" className="text-tactical-white hover:text-tactical-orange transition-colors">Отзывы</a>
              <a href="#contact" className="text-tactical-white hover:text-tactical-orange transition-colors">Контакты</a>
            </div>
            <Button className="bg-tactical-orange hover:bg-tactical-orange/90 text-tactical-white">
              Забронировать
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold text-tactical-white mb-6 font-mono">
              SWAT
              <span className="text-tactical-orange">ARENA</span>
            </h1>
            <p className="text-xl md:text-2xl text-tactical-gray mb-8 max-w-2xl mx-auto">
              Профессиональная страйкбольная арена для тактических тренировок, корпоративных мероприятий и экстремального отдыха
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-tactical-orange hover:bg-tactical-orange/90 text-tactical-white px-8 py-4 text-lg">
                <Icon name="Calendar" className="mr-2" size={20} />
                Забронировать игру
              </Button>
              <Button size="lg" variant="outline" className="border-tactical-orange text-tactical-orange hover:bg-tactical-orange hover:text-tactical-white px-8 py-4 text-lg">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть видео
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-swat-DEFAULT to-transparent"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tactical-white mb-4">Игровые пакеты</h2>
            <p className="text-xl text-tactical-gray max-w-2xl mx-auto">
              Выберите формат игры, который подходит именно вам
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-swat-light border-tactical-gray/20 hover:border-tactical-orange/50 transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-tactical-orange rounded-full flex items-center justify-center">
                  <Icon name="Users" className="text-tactical-white" size={24} />
                </div>
                <CardTitle className="text-tactical-white text-2xl">Новичок</CardTitle>
                <CardDescription className="text-tactical-gray">
                  Идеально для первого знакомства с страйкболом
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <span className="text-3xl font-bold text-tactical-orange">2500₽</span>
                  <span className="text-tactical-gray">/чел</span>
                </div>
                <ul className="space-y-2 text-tactical-gray">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tactical-orange mr-2" size={16} />
                    Полное снаряжение
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tactical-orange mr-2" size={16} />
                    Инструктаж и обучение
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tactical-orange mr-2" size={16} />
                    2 часа игры
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tactical-orange mr-2" size={16} />
                    Фото- и видеосъемка
                  </li>
                </ul>
                <Button className="w-full bg-tactical-orange hover:bg-tactical-orange/90 text-tactical-white">
                  Выбрать пакет
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-swat-light border-tactical-orange/50 hover:border-tactical-orange transition-all duration-300 transform hover:scale-105 relative">
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-tactical-orange text-tactical-white">
                Популярный
              </Badge>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-tactical-orange rounded-full flex items-center justify-center">
                  <Icon name="Target" className="text-tactical-white" size={24} />
                </div>
                <CardTitle className="text-tactical-white text-2xl">Тактик</CardTitle>
                <CardDescription className="text-tactical-gray">
                  Для опытных игроков и команд
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <span className="text-3xl font-bold text-tactical-orange">4000₽</span>
                  <span className="text-tactical-gray">/чел</span>
                </div>
                <ul className="space-y-2 text-tactical-gray">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tactical-orange mr-2" size={16} />
                    Премиум снаряжение
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tactical-orange mr-2" size={16} />
                    Тактические сценарии
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tactical-orange mr-2" size={16} />
                    4 часа игры
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tactical-orange mr-2" size={16} />
                    Персональный инструктор
                  </li>
                </ul>
                <Button className="w-full bg-tactical-orange hover:bg-tactical-orange/90 text-tactical-white">
                  Выбрать пакет
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-swat-light border-tactical-gray/20 hover:border-tactical-orange/50 transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-tactical-orange rounded-full flex items-center justify-center">
                  <Icon name="Crown" className="text-tactical-white" size={24} />
                </div>
                <CardTitle className="text-tactical-white text-2xl">Элита</CardTitle>
                <CardDescription className="text-tactical-gray">
                  Корпоративные события и VIP-игры
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <span className="text-3xl font-bold text-tactical-orange">6500₽</span>
                  <span className="text-tactical-gray">/чел</span>
                </div>
                <ul className="space-y-2 text-tactical-gray">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tactical-orange mr-2" size={16} />
                    VIP снаряжение
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tactical-orange mr-2" size={16} />
                    Индивидуальные сценарии
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tactical-orange mr-2" size={16} />
                    Весь день
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-tactical-orange mr-2" size={16} />
                    Кейтеринг включен
                  </li>
                </ul>
                <Button className="w-full bg-tactical-orange hover:bg-tactical-orange/90 text-tactical-white">
                  Выбрать пакет
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-swat-light/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tactical-white mb-4">Галерея</h2>
            <p className="text-xl text-tactical-gray max-w-2xl mx-auto">
              Посмотрите, как проходят игры в нашей арене
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="/img/a973ab0b-5edb-4493-a0d7-90ca2cce843f.jpg" 
                alt="Tactical Arena Interior" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-swat-DEFAULT/60 group-hover:bg-swat-DEFAULT/40 transition-colors duration-300 flex items-center justify-center">
                <Icon name="Play" className="text-tactical-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={48} />
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="/img/2e37fba4-5a78-4b68-8317-971f23bb9b52.jpg" 
                alt="SWAT Training" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-swat-DEFAULT/60 group-hover:bg-swat-DEFAULT/40 transition-colors duration-300 flex items-center justify-center">
                <Icon name="Play" className="text-tactical-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={48} />
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="/img/c7dfb1b8-ffee-4677-9859-275e7183dbae.jpg" 
                alt="Tactical Equipment" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-swat-DEFAULT/60 group-hover:bg-swat-DEFAULT/40 transition-colors duration-300 flex items-center justify-center">
                <Icon name="Play" className="text-tactical-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={48} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tactical-white mb-4">Отзывы</h2>
            <p className="text-xl text-tactical-gray max-w-2xl mx-auto">
              Что говорят наши клиенты
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-swat-light border-tactical-gray/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-tactical-orange rounded-full flex items-center justify-center mr-4">
                    <Icon name="User" className="text-tactical-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-tactical-white font-bold">Алексей М.</h4>
                    <p className="text-tactical-gray text-sm">Корпоративный клиент</p>
                  </div>
                </div>
                <p className="text-tactical-gray mb-4">
                  "Отличная организация корпоративного мероприятия! Команда профессионалов, качественное снаряжение, захватывающие сценарии. Все сотрудники остались в восторге!"
                </p>
                <div className="flex text-tactical-orange">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-swat-light border-tactical-gray/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-tactical-orange rounded-full flex items-center justify-center mr-4">
                    <Icon name="User" className="text-tactical-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-tactical-white font-bold">Дмитрий К.</h4>
                    <p className="text-tactical-gray text-sm">Опытный игрок</p>
                  </div>
                </div>
                <p className="text-tactical-gray mb-4">
                  "Лучшая страйкбольная арена в городе! Реалистичные локации, продуманные сценарии, отличное снаряжение. Рекомендую всем любителям тактических игр!"
                </p>
                <div className="flex text-tactical-orange">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-swat-light/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-tactical-white mb-4">Контакты</h2>
            <p className="text-xl text-tactical-gray max-w-2xl mx-auto">
              Свяжитесь с нами для бронирования
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-tactical-orange rounded-full flex items-center justify-center">
                  <Icon name="MapPin" className="text-tactical-white" size={20} />
                </div>
                <div>
                  <h4 className="text-tactical-white font-bold">Адрес</h4>
                  <p className="text-tactical-gray">ул. Тактическая, 15, г. Москва</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-tactical-orange rounded-full flex items-center justify-center">
                  <Icon name="Phone" className="text-tactical-white" size={20} />
                </div>
                <div>
                  <h4 className="text-tactical-white font-bold">Телефон</h4>
                  <p className="text-tactical-gray">+7 (495) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-tactical-orange rounded-full flex items-center justify-center">
                  <Icon name="Clock" className="text-tactical-white" size={20} />
                </div>
                <div>
                  <h4 className="text-tactical-white font-bold">Режим работы</h4>
                  <p className="text-tactical-gray">Пн-Вс: 10:00 - 22:00</p>
                </div>
              </div>
            </div>
            
            <Card className="bg-swat-light border-tactical-gray/20">
              <CardHeader>
                <CardTitle className="text-tactical-white">Забронировать игру</CardTitle>
                <CardDescription className="text-tactical-gray">
                  Оставьте заявку и мы свяжемся с вами
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-tactical-white text-sm">Имя</label>
                  <Input className="bg-swat-dark border-tactical-gray/30 text-tactical-white" placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <label className="text-tactical-white text-sm">Телефон</label>
                  <Input className="bg-swat-dark border-tactical-gray/30 text-tactical-white" placeholder="+7 (999) 123-45-67" />
                </div>
                <div className="space-y-2">
                  <label className="text-tactical-white text-sm">Сообщение</label>
                  <Textarea className="bg-swat-dark border-tactical-gray/30 text-tactical-white" placeholder="Расскажите о ваших предпочтениях..." />
                </div>
                <Button className="w-full bg-tactical-orange hover:bg-tactical-orange/90 text-tactical-white">
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-swat-DEFAULT py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Icon name="Shield" className="text-tactical-orange" size={32} />
              <span className="text-2xl font-bold text-tactical-white">TACTICAL ARENA</span>
            </div>
            <p className="text-tactical-gray mb-6">
              Профессиональная страйкбольная арена для незабываемых впечатлений
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="text-tactical-gray hover:text-tactical-orange transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-tactical-gray hover:text-tactical-orange transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="text-tactical-gray hover:text-tactical-orange transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
            </div>
            <Separator className="bg-tactical-gray/20 mb-6" />
            <p className="text-tactical-gray text-sm">
              © 2024 Tactical Arena. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;