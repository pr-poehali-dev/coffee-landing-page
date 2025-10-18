import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const menuItems = [
  { name: 'Эспрессо', price: '120₽', description: 'Классический итальянский кофе' },
  { name: 'Капучино', price: '180₽', description: 'Эспрессо с молочной пеной' },
  { name: 'Латте', price: '200₽', description: 'Нежный кофе с молоком' },
  { name: 'Флэт уайт', price: '190₽', description: 'Двойной эспрессо с бархатной пенкой' },
  { name: 'Раф', price: '210₽', description: 'Сливочный кофе с ванилью' },
  { name: 'Круассан', price: '150₽', description: 'Свежая выпечка каждое утро' },
  { name: 'Чизкейк', price: '250₽', description: 'Домашний десерт дня' },
  { name: 'Тирамису', price: '280₽', description: 'Классический итальянский десерт' },
];

const events = [
  {
    date: '20 окт',
    time: '19:00',
    title: 'Джазовый вечер',
    artist: 'Трио "Moonlight"',
    description: 'Акустический джаз и авторские композиции',
    image: 'https://cdn.poehali.dev/projects/1e242c23-240b-44b3-93b9-0a913c5dc7c4/files/10403d22-8536-42c1-a1db-8252d83be946.jpg'
  },
  {
    date: '23 окт',
    time: '18:30',
    title: 'Поэтический вечер',
    artist: 'Открытый микрофон',
    description: 'Чтение стихов и атмосферные беседы',
    image: 'https://cdn.poehali.dev/projects/1e242c23-240b-44b3-93b9-0a913c5dc7c4/files/a4c2c4e3-0166-48d3-81dc-4c18dfdf4b46.jpg'
  },
  {
    date: '27 окт',
    time: '20:00',
    title: 'Акустический концерт',
    artist: 'Анна Соколова',
    description: 'Инди-фолк и авторские песни',
    image: 'https://cdn.poehali.dev/projects/1e242c23-240b-44b3-93b9-0a913c5dc7c4/files/10403d22-8536-42c1-a1db-8252d83be946.jpg'
  }
];

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', date: '', time: '', guests: '', comment: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen">
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/1e242c23-240b-44b3-93b9-0a913c5dc7c4/files/a4c2c4e3-0166-48d3-81dc-4c18dfdf4b46.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">Кофейня</h1>
          <p className="text-2xl md:text-3xl mb-8 font-light">Место встречи искусства и вкуса</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-foreground font-semibold"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Забронировать столик
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Меню
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white" />
        </div>
      </header>

      <section id="menu" className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 text-foreground">Меню</h2>
            <p className="text-xl text-muted-foreground">Свежеобжаренный кофе и домашняя выпечка</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuItems.map((item, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border"
              >
                <CardHeader>
                  <CardTitle className="text-2xl">{item.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-accent">{item.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 text-foreground">Афиша</h2>
            <p className="text-xl text-muted-foreground">Живая музыка и культурные мероприятия</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div 
                  className="h-48 bg-cover bg-center" 
                  style={{ backgroundImage: `url('${event.image}')` }}
                />
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="bg-accent px-4 py-2 rounded-lg">
                      <p className="font-bold text-foreground text-lg">{event.date}</p>
                      <p className="text-sm text-muted-foreground">{event.time}</p>
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{event.title}</CardTitle>
                  <CardDescription className="text-base font-semibold">{event.artist}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Ticket" size={18} className="mr-2" />
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4 bg-background">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 text-foreground">Бронирование</h2>
            <p className="text-xl text-muted-foreground">Забронируйте столик заранее</p>
          </div>

          <Card className="shadow-lg">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ваше имя" 
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel" 
                    placeholder="+7 (___) ___-__-__" 
                    required 
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Дата</Label>
                    <Input 
                      id="date" 
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      type="date" 
                      required 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Время</Label>
                    <Input 
                      id="time" 
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      type="time" 
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests">Количество гостей</Label>
                  <Input 
                    id="guests" 
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    type="number" 
                    min="1" 
                    placeholder="2" 
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comment">Комментарий</Label>
                  <Textarea 
                    id="comment" 
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    placeholder="Особые пожелания..." 
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="CalendarCheck" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Кофейня</h3>
              <p className="text-primary-foreground/80 mb-4">
                Уютное пространство с живыми выступлениями и культурными мероприятиями
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Контакты</h4>
              <div className="space-y-3 text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>ул. Примерная, 15</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>hello@coffeeshop.ru</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Часы работы</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>Пн-Пт: 8:00 - 23:00</p>
                <p>Сб-Вс: 9:00 - 00:00</p>
                <div className="flex gap-4 mt-6">
                  <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                    <Icon name="Facebook" size={20} />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                    <Icon name="Music" size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
            <p>© 2024 Кофейня. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
