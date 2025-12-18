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
      icon: 'Gavel',
      title: 'Судебная защита',
      description: 'Представительство в судах, арбитражные споры, взыскание долгов',
      features: ['Споры по сделкам', 'Принудительное исполнение', 'Ответы налоговой']
    },
    {
      icon: 'FileSignature',
      title: 'Договоры и контрагенты',
      description: 'Проверка юридической чистоты и налоговых оговорок',
      features: ['Правовая экспертиза', 'Аудит контрагентов', 'Налоговые оговорки']
    },
    {
      icon: 'Building2',
      title: 'Регистрация бизнеса',
      description: 'ООО, ИП, НКО, АНО, фонды, ТСЖ, СНТ',
      features: ['Бесплатная регистрация', 'Выбор налоговой системы', 'Полное сопровождение']
    },
    {
      icon: 'Home',
      title: 'Недвижимость',
      description: 'Сопровождение сделок и проверка юридической чистоты',
      features: ['Проверка перед покупкой', 'Аренда и субаренда', 'Налоговые последствия']
    },
    {
      icon: 'Users',
      title: 'Трудовые отношения',
      description: 'Споры с работодателями, смена директоров',
      features: ['Споры с работодателем', 'Зарплатные налоги', 'Смена руководства']
    },
    {
      icon: 'Heart',
      title: 'Семейные споры',
      description: 'Раздел имущества, алименты, лишение родительских прав',
      features: ['Развод', 'Раздел имущества', 'Брачный договор']
    },
    {
      icon: 'Gift',
      title: 'Наследство и дарение',
      description: 'Оформление наследства и дарственных',
      features: ['Оформление наследства', 'Дарственные', 'Налоговые последствия']
    },
    {
      icon: 'ShieldCheck',
      title: 'Защита прав потребителей',
      description: 'Возврат товаров, компенсации, споры с продавцами',
      features: ['Возврат товара', 'Компенсации', 'Судебная защита']
    }
  ];

  const bots = [
    {
      icon: 'Bot',
      title: 'ЕГРН Бот',
      handle: '@EGRN_GlavbuhBot',
      description: 'Мгновенные выписки из реестра недвижимости',
      status: 'Работает 24/7'
    },
    {
      icon: 'Building',
      title: 'ЕГРЮЛ Бот',
      handle: '@GlavbuhVL_BOT',
      description: 'Проверка юридических лиц и ИП в один клик',
      status: 'Работает 24/7'
    }
  ];

  const stats = [
    { value: '10+', label: 'лет опыта', description: 'С 2015 года' },
    { value: '300+', label: 'клиентов', description: 'Довольны результатом' },
    { value: '96%', label: 'успеха', description: 'Выигранных дел' },
    { value: '100%', label: 'гарантия', description: 'Результата' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-xl blur-sm opacity-50" />
              <div className="relative w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">П</span>
              </div>
            </div>
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Пугин и партнеры</div>
              <div className="text-xs text-muted-foreground">С 2015 года • Гарантия результата</div>
            </div>
          </div>
          <nav className="hidden lg:flex gap-8">
            <a href="#services" className="text-sm font-medium text-foreground hover:text-accent transition-colors">Услуги</a>
            <a href="#how-we-work" className="text-sm font-medium text-foreground hover:text-accent transition-colors">Процесс</a>
            <a href="#bots" className="text-sm font-medium text-foreground hover:text-accent transition-colors">Боты</a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">Контакты</a>
          </nav>
          <Button className="bg-gradient-to-r from-accent to-primary hover:opacity-90 text-white shadow-lg">
            Бесплатная консультация
          </Button>
        </div>
      </header>

      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container relative z-10">
          <div className="max-w-4xl animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-8 border border-accent/20">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground">Работаем с 2015 года • 10 лет успешной практики</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Юридические услуги</span>
              <br />
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                с гарантией результата
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl">
              Комплексное юридическое сопровождение бизнеса и частных лиц. Более 300 довольных клиентов
            </p>
            
            <div className="flex flex-wrap gap-4 mb-16">
              <Button size="lg" className="bg-gradient-to-r from-accent to-primary hover:opacity-90 text-white text-lg px-8 shadow-xl shadow-accent/20">
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                +7 (423) 200-10-20
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-accent/30 text-foreground hover:bg-accent/5 text-lg px-8">
                Наши услуги
                <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border/50 hover:border-accent/50 transition-all">
                    <div className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-foreground mb-0.5">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 relative bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mb-16 text-center mx-auto">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Наши услуги</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Полный спектр юридических услуг
            </h2>
            <p className="text-lg text-muted-foreground">
              От регистрации бизнеса до судебных споров — решаем задачи любой сложности
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-primary rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
                <div className="relative h-full bg-card p-6 rounded-2xl border border-border hover:border-accent/50 transition-all duration-300">
                  <div className="flex flex-col h-full">
                    <div className="w-14 h-14 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon name={service.icon} className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">{service.description}</p>
                    <ul className="space-y-1.5">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-xs text-muted-foreground">
                          <Icon name="Check" className="h-3.5 w-3.5 text-accent mr-1.5 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10 px-6 py-4 rounded-2xl border border-accent/20">
              <Icon name="Gift" className="h-6 w-6 text-accent" />
              <span className="font-semibold text-foreground">Специальное предложение:</span>
              <span className="text-muted-foreground">Бесплатная регистрация ИП и ООО</span>
            </div>
          </div>
        </div>
      </section>

      <section id="how-we-work" className="py-24 relative overflow-hidden bg-background">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-10" />
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Как мы работаем</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Простой путь к решению
            </h2>
            <p className="text-lg text-muted-foreground">
              От первого звонка до победы в деле — прозрачный процесс работы
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-accent via-primary to-accent -translate-x-1/2 hidden lg:block" />
            
            <div className="space-y-12">
              {[
                {
                  step: '01',
                  title: 'Консультация',
                  description: 'Бесплатный первичный анализ вашей ситуации. Оцениваем перспективы и разрабатываем стратегию.',
                  icon: 'Phone',
                  position: 'left'
                },
                {
                  step: '02',
                  title: 'Подготовка',
                  description: 'Собираем документы, готовим правовую позицию. Составляем договор с прозрачными условиями.',
                  icon: 'FileText',
                  position: 'right'
                },
                {
                  step: '03',
                  title: 'Действия',
                  description: 'Переговоры, судебные заседания, работа с контрагентами. Держим вас в курсе на каждом этапе.',
                  icon: 'Zap',
                  position: 'left'
                },
                {
                  step: '04',
                  title: 'Результат',
                  description: 'Достигаем поставленной цели. Гарантируем качество и защиту ваших интересов.',
                  icon: 'Trophy',
                  position: 'right'
                }
              ].map((item, index) => (
                <div key={index} className={`relative flex items-center ${item.position === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full items-center justify-center border-4 border-background shadow-xl z-10">
                    <Icon name={item.icon} className="h-7 w-7 text-white" />
                  </div>
                  
                  <div className={`w-full lg:w-[calc(50%-2rem)] ${item.position === 'right' ? 'lg:pl-8' : 'lg:pr-8'}`}>
                    <div className="group relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition duration-500" />
                      <div className="relative bg-card p-8 rounded-2xl border-2 border-border hover:border-accent/50 transition-all shadow-lg">
                        <div className="flex items-start gap-4 lg:hidden mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icon name={item.icon} className="h-6 w-6 text-white" />
                          </div>
                          <div className="text-5xl font-bold text-accent/20">{item.step}</div>
                        </div>
                        <div className="hidden lg:block text-6xl font-bold text-accent/20 mb-4">{item.step}</div>
                        <h3 className="text-2xl font-bold mb-3 text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="bots" className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Telegram боты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Получите документы мгновенно
            </h2>
            <p className="text-lg text-muted-foreground">
              Наши Telegram-боты работают 24/7 для быстрого получения выписок
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {bots.map((bot, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500 animate-gradient bg-[length:200%_auto]" />
                <div className="relative">
                  <Card className="border-2 border-border hover:border-accent/50 transition-all duration-300 overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-accent via-primary to-accent animate-gradient bg-[length:200%_auto]" />
                    <CardHeader className="text-center pb-4">
                      <div className="w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-2xl shadow-accent/20">
                        <Icon name={bot.icon} className="h-12 w-12 text-white" />
                      </div>
                      <CardTitle className="text-2xl text-foreground">{bot.title}</CardTitle>
                      <div className="inline-block bg-muted px-3 py-1 rounded-full text-sm font-mono text-accent my-2">
                        {bot.handle}
                      </div>
                      <CardDescription className="text-base text-muted-foreground">{bot.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center pb-6">
                      <Badge className="bg-green-500/10 text-green-600 border-green-500/30 px-4 py-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                        {bot.status}
                      </Badge>
                      <Button className="w-full mt-4 bg-accent hover:bg-accent/90 text-white">
                        <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
                        Открыть в Telegram
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Свяжитесь с нами</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Бесплатная консультация
              </h2>
              <p className="text-xl text-muted-foreground">
                Оставьте заявку или позвоните — ответим на все вопросы в течение 15 минут
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition" />
                  <Card className="relative border-2 border-border hover:border-accent/50 transition-all">
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center gap-3 text-foreground">
                        <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
                          <Icon name="Phone" className="h-6 w-6 text-white" />
                        </div>
                        Телефон
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <a href="tel:+74232001020" className="text-2xl font-bold text-accent hover:text-primary transition-colors">
                        +7 (423) 200-10-20
                      </a>
                      <p className="text-sm text-muted-foreground mt-2">Звоните в любое время</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition" />
                  <Card className="relative border-2 border-border hover:border-accent/50 transition-all">
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center gap-3 text-foreground">
                        <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
                          <Icon name="Mail" className="h-6 w-6 text-white" />
                        </div>
                        Email
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <a href="mailto:info@puginpartners.ru" className="text-xl font-semibold text-accent hover:text-primary transition-colors">
                        info@puginpartners.ru
                      </a>
                      <p className="text-sm text-muted-foreground mt-2">Ответим в течение часа</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition" />
                  <Card className="relative border-2 border-border hover:border-accent/50 transition-all">
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center gap-3 text-foreground">
                        <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
                          <Icon name="MapPin" className="h-6 w-6 text-white" />
                        </div>
                        Адрес
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      <p className="font-semibold mb-1 text-foreground">г. Владивосток</p>
                      <p>ул. Океанский проспект, 17</p>
                      <p className="text-sm mt-2">Пн-Пт: 9:00 - 19:00, Сб: 10:00 - 16:00</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition" />
                <Card className="relative border-2 border-border shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">Оставьте заявку</CardTitle>
                    <CardDescription className="text-base">Мы перезвоним в течение 15 минут</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Input
                          placeholder="Ваше имя"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="h-12 border-2 focus:border-accent"
                        />
                      </div>
                      <div>
                        <Input
                          type="tel"
                          placeholder="Телефон"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          className="h-12 border-2 focus:border-accent"
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="h-12 border-2 focus:border-accent"
                        />
                      </div>
                      <div>
                        <Textarea
                          placeholder="Опишите вашу ситуацию"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={4}
                          required
                          className="border-2 focus:border-accent"
                        />
                      </div>
                      <Button type="submit" className="w-full h-12 bg-gradient-to-r from-accent to-primary hover:opacity-90 text-white text-lg shadow-xl shadow-accent/20">
                        <Icon name="Send" className="mr-2 h-5 w-5" />
                        Отправить заявку
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border/40 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-lg blur-sm opacity-50" />
                  <div className="relative w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                    <span className="text-xl font-bold text-white">П</span>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-foreground">Пугин и партнеры</div>
                  <div className="text-xs text-muted-foreground">С 2015 года</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Юридические услуги с гарантией результата
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Услуги</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Судебная защита</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Регистрация бизнеса</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Недвижимость</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Семейные споры</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Компания</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Команда</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Telegram боты</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                    <Icon name="Bot" className="h-4 w-4" />
                    @EGRN_GlavbuhBot
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                    <Icon name="Building" className="h-4 w-4" />
                    @GlavbuhVL_BOT
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border/40 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Пугин и партнеры. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
