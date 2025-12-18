import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const services = [
    {
      icon: 'Scale',
      title: 'Гражданское право',
      description: 'Защита имущественных и личных неимущественных прав',
      features: ['Договоры', 'Наследство', 'Недвижимость']
    },
    {
      icon: 'Building2',
      title: 'Корпоративное право',
      description: 'Юридическое сопровождение бизнеса',
      features: ['Регистрация', 'Реорганизация', 'M&A сделки']
    },
    {
      icon: 'Briefcase',
      title: 'Арбитражные споры',
      description: 'Представительство в судах всех инстанций',
      features: ['Иски', 'Апелляции', 'Банкротство']
    },
    {
      icon: 'FileText',
      title: 'Договорное право',
      description: 'Разработка и экспертиза договоров',
      features: ['Подготовка', 'Анализ', 'Сопровождение']
    },
    {
      icon: 'Users',
      title: 'Трудовое право',
      description: 'Защита прав работников и работодателей',
      features: ['Споры', 'Консультации', 'Документы']
    },
    {
      icon: 'Home',
      title: 'Семейное право',
      description: 'Решение семейных правовых вопросов',
      features: ['Развод', 'Алименты', 'Опека']
    }
  ];

  const workSteps = [
    {
      number: '01',
      title: 'Консультация',
      description: 'Бесплатный анализ вашей ситуации и оценка перспектив'
    },
    {
      number: '02',
      title: 'Стратегия',
      description: 'Разработка оптимального плана действий с учетом всех нюансов'
    },
    {
      number: '03',
      title: 'Реализация',
      description: 'Профессиональное выполнение всех необходимых юридических действий'
    },
    {
      number: '04',
      title: 'Результат',
      description: 'Достижение поставленных целей и защита ваших интересов'
    }
  ];

  const bots = [
    {
      icon: 'MessageSquare',
      title: 'Юрист-консультант',
      description: 'Отвечает на вопросы 24/7',
      status: 'Онлайн'
    },
    {
      icon: 'FileCheck',
      title: 'Проверка документов',
      description: 'Автоматический анализ договоров',
      status: 'Доступно'
    },
    {
      icon: 'Calculator',
      title: 'Калькулятор расходов',
      description: 'Расчет судебных издержек',
      status: 'Бета'
    }
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      company: 'ООО "ТехноПром"',
      text: 'Команда юристов помогла нам выиграть сложный арбитражный спор. Профессионализм на высшем уровне!',
      rating: 5
    },
    {
      name: 'Михаил Соколов',
      company: 'Предприниматель',
      text: 'Отличное сопровождение сделки по покупке недвижимости. Все документы подготовлены безупречно.',
      rating: 5
    },
    {
      name: 'Елена Иванова',
      company: 'Частное лицо',
      text: 'Помогли решить семейный спор. Благодарна за чуткость и профессионализм.',
      rating: 5
    }
  ];

  const cases = [
    {
      title: 'Взыскание 15 млн рублей',
      category: 'Арбитраж',
      description: 'Успешно представили интересы клиента в споре о невыполнении обязательств по контракту',
      result: 'Победа в суде первой инстанции'
    },
    {
      title: 'Регистрация холдинга',
      category: 'Корпоративное право',
      description: 'Полное юридическое сопровождение создания холдинговой структуры',
      result: 'Структура создана за 2 недели'
    },
    {
      title: 'Защита прав собственности',
      category: 'Недвижимость',
      description: 'Оспаривание незаконной сделки и возврат недвижимости законному владельцу',
      result: 'Имущество возвращено клиенту'
    }
  ];

  const blogPosts = [
    {
      title: 'Новые изменения в Гражданском кодексе РФ',
      date: '15 декабря 2024',
      category: 'Законодательство',
      excerpt: 'Обзор ключевых изменений, которые вступили в силу с 1 декабря 2024 года...'
    },
    {
      title: 'Как правильно составить договор купли-продажи',
      date: '10 декабря 2024',
      category: 'Практика',
      excerpt: 'Пошаговая инструкция и важные моменты, на которые стоит обратить внимание...'
    },
    {
      title: 'Защита бизнеса: топ-5 юридических рисков',
      date: '5 декабря 2024',
      category: 'Бизнес',
      excerpt: 'Рассказываем о самых распространенных ошибках предпринимателей...'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Scale" className="h-8 w-8 text-accent" />
            <span className="text-2xl font-bold">ЮрЭксперт</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-sm font-medium hover:text-accent transition-colors">Услуги</a>
            <a href="#how-we-work" className="text-sm font-medium hover:text-accent transition-colors">Как мы работаем</a>
            <a href="#bots" className="text-sm font-medium hover:text-accent transition-colors">Наши боты</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-accent transition-colors">Отзывы</a>
            <a href="#cases" className="text-sm font-medium hover:text-accent transition-colors">Кейсы</a>
            <a href="#blog" className="text-sm font-medium hover:text-accent transition-colors">Блог</a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">Контакты</a>
          </nav>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Icon name="Phone" className="mr-2 h-4 w-4" />
            +7 (495) 123-45-67
          </Button>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90 -z-10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30 -z-10" />
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground animate-fade-in">
            <Badge className="mb-4 bg-accent text-accent-foreground">Юридические услуги премиум-класса</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Решение юридических вопросов любой сложности
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Мы обеспечим вам безупречные документы, экспертные консультации и полную защиту ваших прав
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg">
                <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 text-lg">
                <Icon name="FileText" className="mr-2 h-5 w-5" />
                Наши услуги
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent">15+</div>
                <div className="text-sm text-primary-foreground/80">лет опыта</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent">98%</div>
                <div className="text-sm text-primary-foreground/80">выигранных дел</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent">500+</div>
                <div className="text-sm text-primary-foreground/80">довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Наши услуги</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Комплексная юридическая поддержка</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Профессиональная помощь в решении любых правовых вопросов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Icon name="Check" className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how-we-work" className="py-20">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Процесс работы</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Как мы работаем</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Прозрачный и эффективный процесс решения ваших задач
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-accent/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < workSteps.length - 1 && (
                  <Icon name="ArrowRight" className="hidden lg:block absolute top-8 -right-4 h-6 w-6 text-accent/50" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="bots" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Цифровые помощники</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши боты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Современные технологии для вашего удобства
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {bots.map((bot, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={bot.icon} className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle>{bot.title}</CardTitle>
                  <CardDescription>{bot.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">{bot.status}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Отзывы клиентов</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Что говорят о нас</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Реальные отзывы наших довольных клиентов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Наши достижения</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Успешные кейсы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Примеры решенных дел наших клиентов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((caseItem, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <Badge className="w-fit mb-2" variant="outline">{caseItem.category}</Badge>
                  <CardTitle className="text-xl">{caseItem.title}</CardTitle>
                  <CardDescription>{caseItem.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-accent/10 border-l-4 border-accent p-3 rounded">
                    <p className="text-sm font-medium text-accent-foreground">
                      <Icon name="Trophy" className="inline h-4 w-4 mr-1" />
                      {caseItem.result}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4">Блог</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Полезные статьи</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Актуальная информация о законодательстве и юридической практике
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <Badge className="w-fit mb-2" variant="secondary">{post.category}</Badge>
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Icon name="Calendar" className="h-4 w-4" />
                    {post.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                  <Button variant="link" className="p-0 mt-4 text-accent">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4 bg-accent text-accent-foreground">Свяжитесь с нами</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Получите бесплатную консультацию</h2>
              <p className="text-lg text-primary-foreground/90">
                Оставьте заявку, и мы свяжемся с вами в течение 15 минут
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-primary-foreground/10 border-primary-foreground/20">
                <CardHeader>
                  <CardTitle className="text-primary-foreground">Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-primary-foreground/90">
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="h-5 w-5 mt-1 text-accent" />
                    <div>
                      <p className="font-medium">Телефон</p>
                      <p>+7 (495) 123-45-67</p>
                      <p>+7 (495) 123-45-68</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="h-5 w-5 mt-1 text-accent" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p>info@jurexpert.ru</p>
                      <p>support@jurexpert.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="h-5 w-5 mt-1 text-accent" />
                    <div>
                      <p className="font-medium">Адрес</p>
                      <p>Москва, ул. Тверская, д. 10, офис 501</p>
                      <p>Пн-Пт: 9:00 - 19:00, Сб: 10:00 - 16:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Форма обратной связи</CardTitle>
                  <CardDescription>Заполните форму и мы вам перезвоним</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder="Телефон"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Опишите вашу ситуацию"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      <Icon name="Send" className="mr-2 h-4 w-4" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Scale" className="h-6 w-6 text-accent" />
                <span className="text-xl font-bold">ЮрЭксперт</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональные юридические услуги с гарантией результата
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Гражданское право</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Корпоративное право</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Арбитражные споры</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Договорное право</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Команда</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors">
                  <Icon name="Phone" className="h-5 w-5 text-accent" />
                </a>
                <a href="#" className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors">
                  <Icon name="Mail" className="h-5 w-5 text-accent" />
                </a>
                <a href="#" className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors">
                  <Icon name="MessageCircle" className="h-5 w-5 text-accent" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 ЮрЭксперт. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
