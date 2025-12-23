import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const Index = () => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "ЮрПро",
      "description": "Комплексные юридические услуги для бизнеса: судебная защита, регистрация ООО/ИП, проверка контрагентов, налоговое право",
      "url": "https://yoursite.ru",
      "logo": "https://yoursite.ru/logo.png",
      "image": "https://yoursite.ru/og-image.jpg",
      "telephone": "+79143408445",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "RU",
        "addressLocality": "Владивосток",
        "streetAddress": "Запорожская ул., 77, офис 634"
      },
      "priceRange": "$$",
      "foundingDate": "2026",
      "slogan": "Защищаем интересы вашего бизнеса",
      "areaServed": {
        "@type": "Country",
        "name": "Россия"
      },
      "serviceType": [
        "Судебная защита",
        "Регистрация бизнеса",
        "Проверка контрагентов",
        "Налоговое право",
        "Договоры и сделки"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Юридические услуги",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Судебная защита",
              "description": "Представительство в судах, арбитражные споры, взыскание долгов"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Регистрация бизнеса",
              "description": "ООО, ИП, НКО, АНО, фонды, ТСЖ, СНТ"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Проверка контрагентов",
              "description": "Правовая экспертиза, аудит контрагентов, налоговые оговорки"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "300",
        "bestRating": "5",
        "worstRating": "1"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [consultationDialogOpen, setConsultationDialogOpen] = useState(false);
  const [casesDialogOpen, setCasesDialogOpen] = useState(false);
  const [servicesDialogOpen, setServicesDialogOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
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
    setConsultationDialogOpen(false);
  };

  const handleServiceClick = (title: string) => {
    setSelectedService(title);
    setConsultationDialogOpen(true);
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
      link: 'https://t.me/EGRN_GlavbuhBot',
      description: 'Мгновенные выписки из реестра недвижимости',
      status: 'Работает 24/7'
    },
    {
      icon: 'Building',
      title: 'ЕГРЮЛ Бот',
      handle: '@GlavbuhVL_BOT',
      link: 'https://t.me/GlavbuhVL_BOT',
      description: 'Проверка юридических лиц и ИП в один клик',
      status: 'Работает 24/7'
    }
  ];

  const stats = [
    { value: '1+', label: 'год опыта', description: 'С 2026 года' },
    { value: '300+', label: 'клиентов', description: 'Довольны результатом' },
    { value: '96%', label: 'успеха', description: 'Выигранных дел' },
    { value: '100%', label: 'гарантия', description: 'Результата' }
  ];

  const cases = [
    {
      title: 'Взыскание долга 8,5 млн ₽',
      category: 'Арбитражные споры',
      description: 'Успешно взыскали задолженность по договору поставки через арбитражный суд',
      result: 'Полное взыскание + проценты',
      icon: 'CircleDollarSign',
      amount: '8,5 млн ₽'
    },
    {
      title: 'Защита от банкротства',
      category: 'Корпоративное право',
      description: 'Отстояли интересы собственника при попытке рейдерского захвата через процедуру банкротства',
      result: 'Бизнес сохранен',
      icon: 'Shield',
      amount: '120 млн ₽ активов'
    },
    {
      title: 'Раздел имущества супругов',
      category: 'Семейное право',
      description: 'Добились справедливого раздела имущества с учетом вклада каждого супруга',
      result: 'Клиент получил 65%',
      icon: 'Scale',
      amount: '45 млн ₽'
    },
    {
      title: 'Оспаривание сделки с недвижимостью',
      category: 'Недвижимость',
      description: 'Признали сделку купли-продажи квартиры недействительной из-за нарушений',
      result: 'Возврат квартиры клиенту',
      icon: 'Home',
      amount: '12 млн ₽'
    },
    {
      title: 'Трудовой спор с работодателем',
      category: 'Трудовое право',
      description: 'Восстановили на работе незаконно уволенного сотрудника с выплатой компенсации',
      result: 'Восстановление + 2,3 млн',
      icon: 'Briefcase',
      amount: '2,3 млн ₽'
    },
    {
      title: 'Регистрация холдинговой структуры',
      category: 'Регистрация бизнеса',
      description: 'Создали оптимальную корпоративную структуру для группы компаний',
      result: 'Оформлено за 10 дней',
      icon: 'Building2',
      amount: '7 компаний'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/projects/81dc8db3-5b4b-4171-bc32-9b835381540c/files/aea0c567-3608-4123-8bd0-43b998796db6.jpg" 
              alt="qweqwe" 
              className="h-12 md:h-16 w-auto"
            />
          </div>
          
          <nav className="hidden lg:flex gap-8">
            <a href="#services" className="text-sm font-medium text-foreground hover:text-accent transition-colors">Услуги</a>
            <a href="#cases" className="text-sm font-medium text-foreground hover:text-accent transition-colors">Кейсы</a>
            <a href="#testimonials" className="text-sm font-medium text-foreground hover:text-accent transition-colors">Отзывы</a>
            <a href="#benefits" className="text-sm font-medium text-foreground hover:text-accent transition-colors">Почему мы</a>
            <a href="#bots" className="text-sm font-medium text-foreground hover:text-accent transition-colors">Боты</a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors">Контакты</a>
          </nav>
          
          <Dialog open={consultationDialogOpen} onOpenChange={setConsultationDialogOpen}>
            <DialogTrigger asChild>
              <Button className="hidden lg:flex bg-gradient-to-r from-accent to-primary hover:opacity-90 text-white shadow-lg">
                Бесплатная консультация
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  🎁 Специальное предложение!
                </DialogTitle>
                <DialogDescription className="text-lg mt-4">
                  Получите бесплатную консультацию юриста прямо сейчас
                </DialogDescription>
              </DialogHeader>
              
              <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-6 rounded-xl border-2 border-accent/30 my-4">
                <div className="flex items-center gap-3 mb-3">
                  <Icon name="Gift" className="h-8 w-8 text-accent" />
                  <h3 className="text-2xl font-bold text-foreground">Только сегодня!</h3>
                </div>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="font-semibold">30 минут с экспертом абсолютно бесплатно</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Анализ вашей ситуации</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>План решения проблемы</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Ответим в течение 15 минут</span>
                  </li>
                </ul>
              </div>

              {selectedService && (
                <div className="bg-primary/5 p-4 rounded-lg mb-4">
                  <p className="text-sm text-muted-foreground">Интересующая услуга:</p>
                  <p className="font-semibold text-foreground">{selectedService}</p>
                </div>
              )}

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
                <Button type="submit" className="w-full h-14 bg-gradient-to-r from-accent to-primary hover:opacity-90 text-white text-lg shadow-xl">
                  <Icon name="Sparkles" className="mr-2 h-5 w-5" />
                  Получить бесплатную консультацию
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </DialogContent>
          </Dialog>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
          </Button>
        </div>
        
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border/40 bg-background/98 backdrop-blur">
            <nav className="container py-6 flex flex-col gap-4">
              <a 
                href="#services" 
                className="text-base font-medium text-foreground hover:text-accent transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Услуги
              </a>
              <a 
                href="#cases" 
                className="text-base font-medium text-foreground hover:text-accent transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Кейсы
              </a>
              <a 
                href="#testimonials" 
                className="text-base font-medium text-foreground hover:text-accent transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Отзывы
              </a>
              <a 
                href="#benefits" 
                className="text-base font-medium text-foreground hover:text-accent transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Почему мы
              </a>
              <a 
                href="#bots" 
                className="text-base font-medium text-foreground hover:text-accent transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Боты
              </a>
              <a 
                href="#contact" 
                className="text-base font-medium text-foreground hover:text-accent transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Контакты
              </a>
              <Button className="w-full bg-gradient-to-r from-accent to-primary hover:opacity-90 text-white shadow-lg mt-4">
                Бесплатная консультация
              </Button>
            </nav>
          </div>
        )}
      </header>

      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <div className="relative h-full w-full">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/30 to-background z-10" />
            <img 
              src="https://cdn-ru.bitrix24.ru/b26317548/landing/729/729082975a5bcde7c7538c6ced035df2/advogado_embacado_de_vista_frontal_trabalhando_fotor_20250716104132_2x_1x.jpg"
              alt="Юрист за работой"
              className="h-full w-full object-cover opacity-100 brightness-110"
            />
          </div>
        </div>
        
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-4">
          <a 
            href="https://t.me/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative w-14 h-14 bg-gradient-to-br from-[#229ED9] to-[#0088cc] rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 hover:rotate-6 transition-all duration-300"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-[#229ED9] to-[#0088cc] rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-300" />
            <Icon name="Send" className="h-6 w-6 text-white relative z-10" />
          </a>
          
          <a 
            href="https://wa.me/79143408445" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative w-14 h-14 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 hover:rotate-6 transition-all duration-300"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-300" />
            <Icon name="MessageCircle" className="h-6 w-6 text-white relative z-10" />
          </a>
          
          <a 
            href="tel:+79143408445" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 hover:rotate-6 transition-all duration-300"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-accent to-primary rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-300" />
            <Icon name="Phone" className="h-6 w-6 text-white relative z-10" />
          </a>
        </div>
        
        <div className="container relative z-20">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-3 py-2 rounded-full mb-6 md:mb-8 border border-accent/20">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-xs md:text-sm font-medium text-foreground break-words">Работаем с 2026 года • Новый уровень юридических услуг</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight break-words">
              <span className="text-foreground">Юридические услуги</span>
              <br />
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                с гарантией результата
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-muted-foreground max-w-2xl break-words">
              Комплексное юридическое сопровождение бизнеса и частных лиц. Более 300 довольных клиентов
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mb-8 md:mb-16">
              <a href="tel:+79143408445" className="w-full sm:w-auto">
                <Button size="lg" className="bg-gradient-to-r from-accent to-primary hover:opacity-90 text-white text-base md:text-lg px-6 md:px-8 shadow-xl shadow-accent/20 w-full">
                  <Icon name="Phone" className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  <span className="break-words">+7 (914) 340-84-45</span>
                </Button>
              </a>
              <Dialog open={servicesDialogOpen} onOpenChange={setServicesDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline" className="border-2 border-accent/30 text-foreground hover:bg-accent/5 text-base md:text-lg px-6 md:px-8 w-full sm:w-auto">
                    Наши услуги
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-3xl font-bold text-foreground">
                      Наши юридические услуги
                    </DialogTitle>
                    <DialogDescription className="text-lg">
                      Выберите услугу для получения бесплатной консультации
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="group relative cursor-pointer"
                        onClick={() => {
                          setServicesDialogOpen(false);
                          handleServiceClick(service.title);
                        }}
                      >
                        <div className="absolute -inset-1 bg-gradient-to-br from-accent via-primary to-accent rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-all duration-300" />
                        <div className="relative h-full bg-card rounded-2xl border-2 border-border hover:border-accent/50 transition-all duration-300 p-6">
                          <div className="flex flex-col h-full">
                            <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-accent/20">
                              <Icon name={service.icon} className="h-7 w-7 text-white" />
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-accent transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
                              {service.description}
                            </p>
                            <ul className="space-y-2">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start text-xs text-muted-foreground">
                                  <div className="w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                                    <Icon name="Check" className="h-2.5 w-2.5 text-accent" />
                                  </div>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-card/50 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-border/50 hover:border-accent/50 transition-all">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-1 break-words">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm font-medium text-foreground mb-0.5 break-words">{stat.label}</div>
                    <div className="text-[10px] md:text-xs text-muted-foreground break-words">{stat.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 relative bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mb-12 md:mb-16 text-center mx-auto px-4">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 text-xs md:text-sm break-words">Наши услуги</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-foreground break-words">
              Полный спектр юридических услуг
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground break-words">
              От регистрации бизнеса до судебных споров — решаем задачи любой сложности
            </p>
          </div>
          
          <div className="hidden lg:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative cursor-pointer"
                onClick={() => handleServiceClick(service.title)}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-accent via-primary to-accent rounded-3xl blur-lg opacity-0 group-hover:opacity-60 transition duration-500 animate-gradient bg-[length:200%_200%]" />
                <div className="relative h-full bg-gradient-to-br from-card via-card to-accent/5 p-8 rounded-3xl border-2 border-border hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20">
                  <div className="flex flex-col h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-accent/20">
                      <Icon name={service.icon} className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors break-words">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed break-words">{service.description}</p>
                    <ul className="space-y-2.5 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mr-2.5 flex-shrink-0 mt-0.5">
                            <Icon name="Check" className="h-3 w-3 text-accent" />
                          </div>
                          <span className="break-words">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="outline" 
                      className="w-full border-accent/50 text-accent hover:bg-accent hover:text-white mt-auto"
                    >
                      Получить консультацию
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:hidden">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1.2}
              centeredSlides={true}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              className="!pb-12"
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="group relative h-full" onClick={() => handleServiceClick(service.title)}>
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-accent via-primary to-accent rounded-3xl blur-lg opacity-60 animate-gradient bg-[length:200%_200%]" />
                    <div className="relative h-full bg-gradient-to-br from-card via-card to-accent/5 p-6 rounded-3xl border-2 border-accent/30">
                      <div className="flex flex-col h-full">
                        <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-accent/20">
                          <Icon name={service.icon} className="h-7 w-7 text-white" />
                        </div>
                        <h3 className="text-base md:text-lg font-bold mb-2 text-foreground break-words">{service.title}</h3>
                        <p className="text-xs md:text-sm text-muted-foreground mb-4 leading-relaxed break-words">{service.description}</p>
                        <ul className="space-y-2 mb-4">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-xs text-muted-foreground">
                              <div className="w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                                <Icon name="Check" className="h-2.5 w-2.5 text-accent" />
                              </div>
                              <span className="break-words">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button 
                          variant="outline" 
                          className="w-full border-accent/50 text-accent hover:bg-accent hover:text-white mt-auto text-sm"
                        >
                          Получить консультацию
                        </Button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16 px-4">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 text-xs md:text-sm break-words">Как мы работаем</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-foreground break-words">
              Простой путь к решению
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground break-words">
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
                        <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground break-words">{item.title}</h3>
                        <p className="text-sm md:text-base text-muted-foreground break-words">{item.description}</p>
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
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16 px-4">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 text-xs md:text-sm break-words">Telegram боты</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-foreground break-words">
              Получите документы мгновенно
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground break-words">
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
                      <CardTitle className="text-xl md:text-2xl text-foreground break-words">{bot.title}</CardTitle>
                      <div className="inline-block bg-muted px-3 py-1 rounded-full text-xs md:text-sm font-mono text-accent my-2 break-all">
                        {bot.handle}
                      </div>
                      <CardDescription className="text-sm md:text-base text-muted-foreground break-words">{bot.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center pb-6">
                      <Badge className="bg-green-500/10 text-green-600 border-green-500/30 px-4 py-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                        {bot.status}
                      </Badge>
                      <a href={bot.link} target="_blank" rel="noopener noreferrer" className="block">
                        <Button className="w-full mt-4 bg-accent hover:bg-accent/90 text-white">
                          <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
                          Открыть в Telegram
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-24 relative bg-background overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="max-w-2xl mb-12 md:mb-16 px-4">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 text-xs md:text-sm break-words">Успешные кейсы</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-foreground break-words">
              Реальные победы наших клиентов
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground break-words">
              Примеры дел, которые мы успешно довели до победного завершения
            </p>
          </div>
          
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((caseItem, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-accent via-primary to-accent rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500 animate-gradient bg-[length:200%_200%]" />
                <div className="relative h-full bg-gradient-to-br from-card via-card to-primary/5 rounded-3xl border-2 border-border hover:border-accent/50 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-accent/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-2xl" />
                  
                  <div className="relative p-8 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-accent/20">
                        <Icon name={caseItem.icon} className="h-8 w-8 text-white" />
                      </div>
                      <Badge variant="outline" className="text-xs border-accent/30 break-words max-w-full">{caseItem.category}</Badge>
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors break-words">
                      {caseItem.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed break-words">
                      {caseItem.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-sm bg-accent/5 p-3 rounded-xl">
                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                          <Icon name="DollarSign" className="h-4 w-4 text-accent" />
                        </div>
                        <span className="font-bold text-foreground break-words">{caseItem.amount}</span>
                      </div>
                      
                      <div className="bg-gradient-to-br from-accent/10 via-primary/5 to-accent/5 border-2 border-accent/20 p-4 rounded-xl">
                        <div className="flex items-start gap-3">
                          <Icon name="CheckCircle2" className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <p className="text-sm font-semibold text-foreground break-words">{caseItem.result}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="md:hidden">
            <Swiper
              modules={[EffectCards, Pagination]}
              effect="cards"
              grabCursor={true}
              pagination={{ clickable: true }}
              className="!pb-12 w-full max-w-sm mx-auto"
            >
              {cases.map((caseItem, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-[480px]">
                    <div className="absolute -inset-2 bg-gradient-to-br from-accent via-primary to-accent rounded-3xl blur-2xl opacity-60 animate-gradient bg-[length:200%_200%]" />
                    <div className="relative h-full bg-gradient-to-br from-card via-card to-primary/5 rounded-3xl border-2 border-accent/30 overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-2xl" />
                      
                      <div className="relative p-6 flex flex-col h-full">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center shadow-lg shadow-accent/20">
                            <Icon name={caseItem.icon} className="h-7 w-7 text-white" />
                          </div>
                          <Badge variant="outline" className="text-xs border-accent/30 break-words max-w-full">{caseItem.category}</Badge>
                        </div>
                        
                        <h3 className="text-lg md:text-xl font-bold mb-3 text-foreground break-words">
                          {caseItem.title}
                        </h3>
                        
                        <p className="text-xs md:text-sm text-muted-foreground mb-4 flex-grow leading-relaxed break-words">
                          {caseItem.description}
                        </p>
                        
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm bg-accent/5 p-3 rounded-xl">
                            <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center">
                              <Icon name="DollarSign" className="h-4 w-4 text-accent" />
                            </div>
                            <span className="font-bold text-foreground break-words">{caseItem.amount}</span>
                          </div>
                          
                          <div className="bg-gradient-to-br from-accent/10 via-primary/5 to-accent/5 border-2 border-accent/20 p-3 rounded-xl">
                            <div className="flex items-start gap-2">
                              <Icon name="CheckCircle2" className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                              <p className="text-sm font-semibold text-foreground break-words">{caseItem.result}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
          <div className="mt-12 text-center">
            <Dialog open={casesDialogOpen} onOpenChange={setCasesDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline" className="border-2 border-accent/30 text-foreground hover:bg-accent/5">
                  Посмотреть все кейсы
                  <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold text-foreground">
                    Все наши успешные кейсы
                  </DialogTitle>
                  <DialogDescription className="text-lg">
                    Детальная информация о делах, которые мы выиграли
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  {cases.map((caseItem, index) => (
                    <div
                      key={index}
                      className="group relative"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-br from-accent via-primary to-accent rounded-2xl blur-lg opacity-30" />
                      <div className="relative h-full bg-card rounded-2xl border-2 border-border p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent/20">
                            <Icon name={caseItem.icon} className="h-7 w-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <Badge variant="outline" className="text-xs border-accent/30 mb-2">{caseItem.category}</Badge>
                            <h3 className="text-lg font-bold text-foreground mb-2">
                              {caseItem.title}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {caseItem.description}
                        </p>
                        
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 bg-accent/5 p-3 rounded-lg">
                            <Icon name="DollarSign" className="h-5 w-5 text-accent flex-shrink-0" />
                            <div>
                              <p className="text-xs text-muted-foreground">Сумма дела</p>
                              <p className="font-bold text-foreground">{caseItem.amount}</p>
                            </div>
                          </div>
                          
                          <div className="bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/20 p-3 rounded-lg">
                            <div className="flex items-start gap-2">
                              <Icon name="CheckCircle2" className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">Результат</p>
                                <p className="text-sm font-semibold text-foreground">{caseItem.result}</p>
                              </div>
                            </div>
                          </div>

                          <Button 
                            onClick={() => {
                              setCasesDialogOpen(false);
                              setConsultationDialogOpen(true);
                            }}
                            className="w-full bg-gradient-to-r from-accent to-primary text-white hover:opacity-90 mt-2"
                          >
                            Обсудить мой случай
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 relative bg-background overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16 px-4">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 text-xs md:text-sm break-words">Отзывы клиентов</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-foreground break-words">
              Что говорят о нас клиенты
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground break-words">
              Реальные отзывы людей, которым мы помогли решить их юридические вопросы
            </p>
          </div>
          
          {(() => {
            const testimonials = [
              {
                name: 'Анна Соколова',
                role: 'Владелец ООО',
                text: 'Помогли выиграть арбитражный спор на 5 млн рублей. Профессиональный подход на каждом этапе. Рекомендую!',
                rating: 5,
                avatar: '👩‍💼'
              },
              {
                name: 'Дмитрий Петров',
                role: 'Индивидуальный предприниматель',
                text: 'Быстро зарегистрировали ИП, помогли выбрать систему налогообложения. Всё объяснили простым языком.',
                rating: 5,
                avatar: '👨‍💻'
              },
              {
                name: 'Елена Волкова',
                role: 'Частное лицо',
                text: 'Решили семейный спор по разделу имущества. Получила справедливую долю, спасибо за поддержку!',
                rating: 5,
                avatar: '👩'
              },
              {
                name: 'Сергей Иванов',
                role: 'Директор компании',
                text: 'Составили договор с контрагентом, провели правовую экспертизу. Всё чётко и в срок.',
                rating: 5,
                avatar: '👨‍💼'
              },
              {
                name: 'Ольга Морозова',
                role: 'Владелец недвижимости',
                text: 'Сопровождали сделку с квартирой, проверили юридическую чистоту. Спокойна за свою покупку!',
                rating: 5,
                avatar: '👩‍🦰'
              },
              {
                name: 'Александр Ким',
                role: 'Руководитель отдела',
                text: 'Выиграли трудовой спор, восстановили на работе с компенсацией. Профессионалы своего дела!',
                rating: 5,
                avatar: '👨'
              }
            ];
            
            return (
              <>
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1}
                  breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                  }}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  className="!pb-12"
                >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      <div className="group relative h-full">
                        <div className="absolute -inset-1 bg-gradient-to-br from-accent via-primary to-accent rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500" />
                        <div className="relative h-full bg-card p-6 rounded-3xl border-2 border-border hover:border-accent/50 transition-all hover:shadow-xl min-h-[280px] flex flex-col">
                          <div className="flex items-start gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-xl shadow-lg flex-shrink-0">
                              {testimonial.avatar}
                            </div>
                            <div>
                              <h4 className="font-bold text-foreground text-sm break-words">{testimonial.name}</h4>
                              <p className="text-xs text-muted-foreground break-words">{testimonial.role}</p>
                            </div>
                          </div>
                          
                          <div className="flex gap-1 mb-3">
                            {Array(testimonial.rating).fill(0).map((_, i) => (
                              <Icon key={i} name="Star" className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                            ))}
                          </div>
                          
                          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed italic flex-grow break-words">
                            "{testimonial.text}"
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </>
            );
          })()}
        </div>
      </section>

      <section id="benefits" className="py-24 relative bg-background overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16 px-4">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 text-xs md:text-sm break-words">Почему мы?</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-foreground break-words">
              Преимущества работы с нами
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground break-words">
              Мы создали сервис, где клиент получает максимум результата и комфорта
            </p>
          </div>
          
          {(() => {
            const benefits = [
              {
                icon: 'Shield',
                title: 'Гарантия результата',
                description: 'Работаем на результат. Если не выиграем — вернём деньги',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: 'Clock',
                title: 'Быстрое решение',
                description: 'Оперативно реагируем на запросы, держим в курсе 24/7',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: 'Wallet',
                title: 'Прозрачные цены',
                description: 'Фиксируем стоимость в договоре, никаких скрытых платежей',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: 'Award',
                title: '10 лет опыта',
                description: 'Более 300 успешных дел, работаем с 2026 года',
                color: 'from-orange-500 to-red-500'
              },
              {
                icon: 'Users',
                title: 'Личный подход',
                description: 'Каждый клиент получает персонального юриста',
                color: 'from-indigo-500 to-blue-500'
              },
              {
                icon: 'Zap',
                title: 'Инновации',
                description: 'Telegram-боты для мгновенного получения выписок',
                color: 'from-yellow-500 to-orange-500'
              }
            ];

            return (
              <>
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="group relative">
                      <div className={`absolute -inset-1 bg-gradient-to-br ${benefit.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500`} />
                      <div className="relative h-full bg-card p-8 rounded-3xl border-2 border-border hover:border-accent/50 transition-all hover:shadow-2xl">
                        <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                          <Icon name={benefit.icon} className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors break-words">
                          {benefit.title}
                        </h3>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed break-words">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="md:hidden">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1.2}
                    centeredSlides={true}
                    navigation
                    pagination={{ clickable: true }}
                    className="!pb-12"
                  >
                    {benefits.map((benefit, index) => (
                      <SwiperSlide key={index}>
                        <div className="relative h-full">
                          <div className={`absolute -inset-1 bg-gradient-to-br ${benefit.color} rounded-3xl blur-xl opacity-60`} />
                          <div className="relative h-full bg-card p-6 rounded-3xl border-2 border-accent/30 min-h-[220px]">
                            <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-4 shadow-xl`}>
                              <Icon name={benefit.icon} className="h-7 w-7 text-white" />
                            </div>
                            <h3 className="text-base md:text-lg font-bold mb-2 text-foreground break-words">
                              {benefit.title}
                            </h3>
                            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed break-words">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </>
            );
          })()}
        </div>
      </section>

      <section id="contact" className="py-24 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-12 px-4">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 text-xs md:text-sm break-words">Свяжитесь с нами</Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-foreground break-words">
                Бесплатная консультация
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground break-words">
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
                      <a href="tel:+79143408445" className="text-xl md:text-2xl font-bold text-accent hover:text-primary transition-colors break-words">
                        +7 (914) 340-84-45
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
                      <a href="tel:+79143408445" className="text-base md:text-xl font-semibold text-accent hover:text-primary transition-colors break-all">
                        +7 (914) 340-84-45
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
                      <p className="font-semibold mb-1 text-foreground break-words">г. Владивосток</p>
                      <p className="break-words">Запорожская ул., 77, офис 634</p>
                      <p className="text-xs md:text-sm mt-2 break-words">Пн-Пт: 9:00 - 19:00, Сб: 10:00 - 16:00</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition" />
                <Card className="relative border-2 border-border shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl text-foreground break-words">Оставьте заявку</CardTitle>
                    <CardDescription className="text-sm md:text-base break-words">Мы перезвоним в течение 15 минут</CardDescription>
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
                      <Button type="submit" className="w-full h-12 bg-gradient-to-r from-accent to-primary hover:opacity-90 text-white text-base md:text-lg shadow-xl shadow-accent/20">
                        <Icon name="Send" className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                        <span className="break-words">Отправить заявку</span>
                      </Button>
                      <p className="text-xs text-muted-foreground text-center break-words">
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
              <img 
                src="https://cdn.poehali.dev/projects/81dc8db3-5b4b-4171-bc32-9b835381540c/files/aea0c567-3608-4123-8bd0-43b998796db6.jpg" 
                alt="qweqwe" 
                className="h-12 w-auto mb-4"
              />
              <p className="text-sm text-muted-foreground leading-relaxed break-words">
                Юридические услуги с гарантией результата
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground break-words">Услуги</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors break-words">Судебная защита</a></li>
                <li><a href="#" className="hover:text-accent transition-colors break-words">Регистрация бизнеса</a></li>
                <li><a href="#" className="hover:text-accent transition-colors break-words">Недвижимость</a></li>
                <li><a href="#" className="hover:text-accent transition-colors break-words">Семейные споры</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground break-words">Компания</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors break-words">О нас</a></li>
                <li><a href="#" className="hover:text-accent transition-colors break-words">Команда</a></li>
                <li><a href="#" className="hover:text-accent transition-colors break-words">Отзывы</a></li>
                <li><a href="#" className="hover:text-accent transition-colors break-words">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground break-words">Telegram боты</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="https://t.me/EGRN_GlavbuhBot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors break-all">
                    <Icon name="Bot" className="h-4 w-4 flex-shrink-0" />
                    <span>@EGRN_GlavbuhBot</span>
                  </a>
                </li>
                <li>
                  <a href="https://t.me/GlavbuhVL_BOT" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors break-all">
                    <Icon name="Building" className="h-4 w-4 flex-shrink-0" />
                    <span>@GlavbuhVL_BOT</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border/40">
            <div className="text-center mb-4">
              <p className="text-xs md:text-sm text-muted-foreground break-words px-4">
                © 2026 Пугин и партнеры. Все права защищены.
              </p>
            </div>
            <div className="text-center space-y-1">
              <p className="text-xs md:text-sm text-muted-foreground break-words">
                ИП ПУГИН ДМИТРИЙ АЛЕКСАНДРОВИЧ
              </p>
              <p className="text-xs text-muted-foreground/80 break-words">
                ИНН: 253812279944 | ОГРНИП: 320253600061103
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;