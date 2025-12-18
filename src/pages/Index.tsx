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

  const practices = [
    {
      icon: 'Building2',
      title: 'Корпоративное право',
      description: 'M&A, реструктуризация, корпоративное управление',
      cases: '120+ сделок'
    },
    {
      icon: 'Landmark',
      title: 'Арбитражные споры',
      description: 'Защита интересов в судах всех инстанций',
      cases: '200+ выигранных дел'
    },
    {
      icon: 'FileCheck',
      title: 'Налоговое право',
      description: 'Налоговое планирование и споры с ФНС',
      cases: '5 млрд ₽ защищено'
    },
    {
      icon: 'Scale',
      title: 'Разрешение споров',
      description: 'Медиация, арбитраж, судебная защита',
      cases: '85% досудебных урегулирований'
    },
    {
      icon: 'Users',
      title: 'Трудовое право',
      description: 'Сопровождение HR-процессов и трудовые споры',
      cases: '300+ компаний'
    },
    {
      icon: 'Shield',
      title: 'Антимонопольное право',
      description: 'Защита от ФАС и сопровождение проверок',
      cases: '50+ защит в год'
    }
  ];

  const testimonials = [
    {
      name: 'Алексей Морозов',
      position: 'Генеральный директор',
      company: 'ООО "ТехноЛогистика"',
      text: 'Команда Пугин и партнеры помогла успешно завершить сделку M&A на сумму 800 млн рублей. Высочайший уровень экспертизы.',
      rating: 5
    },
    {
      name: 'Мария Соколова',
      position: 'Финансовый директор',
      company: 'Группа компаний "Интеграл"',
      text: 'Выиграли налоговый спор на 150 млн рублей благодаря блестящей стратегии юристов. Рекомендую!',
      rating: 5
    },
    {
      name: 'Дмитрий Волков',
      position: 'Председатель правления',
      company: 'АО "СтройИнвест"',
      text: 'Профессиональное сопровождение арбитражного спора от первой инстанции до кассации. Победили!',
      rating: 5
    }
  ];

  const blogPosts = [
    {
      title: 'Новые правила валютного контроля: что изменилось для бизнеса',
      date: '15 декабря 2024',
      category: 'Валютное регулирование',
      readTime: '8 мин',
      excerpt: 'Разбираем ключевые изменения в валютном законодательстве и их влияние на внешнеэкономическую деятельность компаний.'
    },
    {
      title: 'Корпоративные конфликты: превентивные меры защиты',
      date: '10 декабря 2024',
      category: 'Корпоративное право',
      readTime: '12 мин',
      excerpt: 'Как защитить бизнес от корпоративных захватов и конфликтов между акционерами. Практические рекомендации.'
    },
    {
      title: 'Налоговая реконструкция: риски и возможности',
      date: '5 декабря 2024',
      category: 'Налоговое право',
      readTime: '10 мин',
      excerpt: 'Анализируем судебную практику применения налоговой реконструкции и способы минимизации рисков.'
    }
  ];

  const bots = [
    {
      icon: 'Bot',
      title: 'Юридический ассистент',
      description: 'Первичная консультация по вашему вопросу 24/7',
      status: 'Доступен'
    },
    {
      icon: 'FileSearch',
      title: 'Анализ договоров',
      description: 'Проверка договоров на риски за 5 минут',
      status: 'Бета-тест'
    },
    {
      icon: 'Calculator',
      title: 'Калькулятор издержек',
      description: 'Расчет судебных расходов и госпошлины',
      status: 'Доступен'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-white">П</span>
            </div>
            <div>
              <div className="text-xl font-bold">Пугин и партнеры</div>
              <div className="text-xs text-muted-foreground">Юридическая компания</div>
            </div>
          </div>
          <nav className="hidden lg:flex gap-8">
            <a href="#practices" className="text-sm font-medium hover:text-accent transition-colors">Практики</a>
            <a href="#how-we-work" className="text-sm font-medium hover:text-accent transition-colors">Процесс</a>
            <a href="#bots" className="text-sm font-medium hover:text-accent transition-colors">Боты</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-accent transition-colors">Отзывы</a>
            <a href="#cases" className="text-sm font-medium hover:text-accent transition-colors">Кейсы</a>
            <a href="#blog" className="text-sm font-medium hover:text-accent transition-colors">Блог</a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">Контакты</a>
          </nav>
          <Button className="bg-accent hover:bg-accent/90">
            Консультация
          </Button>
        </div>
      </header>

      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent -z-10" />
        <div className="absolute inset-0 opacity-10 -z-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        <div className="container">
          <div className="max-w-4xl animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white text-sm">Работаем с 2008 года</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Решаем сложные<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                юридические задачи
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl">
              Комплексное сопровождение бизнеса, арбитражные споры и корпоративные сделки любой сложности
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                +7 (495) 120-30-40
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8">
                Наши практики
                <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <div>
                <div className="text-4xl font-bold text-white mb-1">16</div>
                <div className="text-sm text-white/70">лет на рынке</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-white/70">успешных дел</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1">15 млрд ₽</div>
                <div className="text-sm text-white/70">защищено активов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1">92%</div>
                <div className="text-sm text-white/70">положительных решений</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="practices" className="py-24 relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="container">
          <div className="max-w-2xl mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Наши практики</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Экспертиза в ключевых областях права</h2>
            <p className="text-lg text-muted-foreground">
              Специализируемся на сложных делах, требующих глубокой экспертизы и индивидуального подхода
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practices.map((practice, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-card to-card/50 p-8 rounded-2xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-all" />
                <div className="relative">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon name={practice.icon} className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{practice.title}</h3>
                  <p className="text-muted-foreground mb-4">{practice.description}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-accent">
                    <Icon name="TrendingUp" className="h-4 w-4" />
                    {practice.cases}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-we-work" className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Как мы работаем</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Четыре шага к результату</h2>
            <p className="text-lg text-muted-foreground">
              Проверенная методология ведения дел от первой консультации до успешного завершения
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: '01',
                title: 'Анализ',
                description: 'Глубокое изучение вашей ситуации, документов и перспектив дела',
                icon: 'Search'
              },
              {
                step: '02',
                title: 'Стратегия',
                description: 'Разработка индивидуальной стратегии с учетом всех рисков и возможностей',
                icon: 'Target'
              },
              {
                step: '03',
                title: 'Действия',
                description: 'Реализация стратегии: переговоры, подготовка документов, судебная защита',
                icon: 'Zap'
              },
              {
                step: '04',
                title: 'Победа',
                description: 'Достижение поставленных целей и максимально выгодного результата',
                icon: 'Trophy'
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-card p-8 rounded-2xl border-2 border-accent/20 hover:border-accent transition-all duration-300 h-full">
                  <div className="text-6xl font-bold text-accent/20 mb-4">{item.step}</div>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={item.icon} className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {index < 3 && (
                  <Icon name="ArrowRight" className="hidden md:block absolute top-1/2 -right-4 h-6 w-6 text-accent/50 -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="bots" className="py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Цифровые инструменты</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Технологии для вашего удобства</h2>
            <p className="text-lg text-muted-foreground">
              Используем современные решения для повышения скорости и качества сервиса
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {bots.map((bot, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity blur-xl" />
                <Card className="relative border-2 border-border group-hover:border-accent transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Icon name={bot.icon} className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-xl">{bot.title}</CardTitle>
                    <CardDescription className="text-base">{bot.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge className="bg-accent/10 text-accent border-accent/30">{bot.status}</Badge>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Отзывы клиентов</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Нам доверяют лидеры рынка</h2>
            <p className="text-lg text-muted-foreground">
              Более 200 компаний выбрали нас своим надежным юридическим партнером
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-accent">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription className="text-sm">
                    <div className="font-medium">{testimonial.position}</div>
                    <div>{testimonial.company}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic leading-relaxed">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 -z-10" />
        <div className="container">
          <div className="max-w-2xl mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Наши достижения</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Успешные кейсы</h2>
            <p className="text-lg text-muted-foreground">
              Реальные примеры побед наших клиентов в сложнейших делах
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Защита от доначисления НДС на 450 млн ₽',
                category: 'Налоговое право',
                description: 'Оспорили решение ФНС о доначислении НДС. Победа в суде первой инстанции и апелляции.',
                result: '450 млн ₽ экономии клиента',
                icon: 'Shield'
              },
              {
                title: 'Сопровождение M&A сделки 2,5 млрд ₽',
                category: 'M&A',
                description: 'Полное юридическое сопровождение покупки доли в крупной логистической компании.',
                result: 'Сделка закрыта за 45 дней',
                icon: 'Handshake'
              },
              {
                title: 'Взыскание 180 млн ₽ долга',
                category: 'Арбитражные споры',
                description: 'Успешно взыскали задолженность по контракту через арбитраж и исполнительное производство.',
                result: '100% возврат средств',
                icon: 'CircleDollarSign'
              }
            ].map((caseItem, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-card to-card/80 rounded-2xl p-8 border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-2xl -z-10" />
                <Badge className="mb-4" variant="outline">{caseItem.category}</Badge>
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={caseItem.icon} className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{caseItem.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{caseItem.description}</p>
                <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Icon name="CheckCircle2" className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-semibold text-foreground">{caseItem.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Экспертный блог</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Аналитика и новости права</h2>
            <p className="text-lg text-muted-foreground">
              Практические рекомендации и анализ изменений законодательства от наших экспертов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border-2 hover:border-accent">
                <div className="h-2 bg-gradient-to-r from-accent to-primary" />
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Icon name="Clock" className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-accent transition-colors leading-tight">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Icon name="Calendar" className="h-4 w-4" />
                    {post.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center text-accent font-medium text-sm group-hover:gap-3 gap-2 transition-all">
                    Читать статью
                    <Icon name="ArrowRight" className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/98 to-accent -z-10" />
        <div className="absolute inset-0 opacity-10 -z-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Свяжитесь с нами</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Бесплатная консультация</h2>
              <p className="text-xl text-white/90">
                Оставьте заявку — мы перезвоним в течение 30 минут и проведем первичный анализ вашей ситуации
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/10 border-white/20 backdrop-blur-lg">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Наши контакты</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-white/90">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Телефон</p>
                      <p className="text-lg">+7 (495) 120-30-40</p>
                      <p>+7 (495) 120-30-41</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Email</p>
                      <p>info@puginpartners.ru</p>
                      <p>office@puginpartners.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Офис</p>
                      <p>Москва, Пресненская наб., 12</p>
                      <p>Башня Федерация, 42 этаж</p>
                      <p className="mt-2 text-sm">Пн-Пт: 9:00 - 20:00, Сб: 10:00 - 17:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Оставьте заявку</CardTitle>
                  <CardDescription className="text-base">Мы свяжемся с вами в ближайшее время</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder="Телефон"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-12"
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
                    <Button type="submit" className="w-full h-12 bg-accent hover:bg-accent/90 text-lg">
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
      </section>

      <footer className="py-16 border-t bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-white">П</span>
                </div>
                <div>
                  <div className="font-bold">Пугин и партнеры</div>
                  <div className="text-xs text-muted-foreground">Юридическая компания</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Профессиональные юридические услуги для бизнеса с 2008 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Практики</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Корпоративное право</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Арбитражные споры</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Налоговое право</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Трудовое право</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Команда</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Следите за нами</h4>
              <div className="flex gap-3 mb-6">
                <a href="#" className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center hover:bg-accent/20 transition-colors">
                  <Icon name="Linkedin" className="h-5 w-5 text-accent" />
                </a>
                <a href="#" className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center hover:bg-accent/20 transition-colors">
                  <Icon name="Send" className="h-5 w-5 text-accent" />
                </a>
              </div>
              <p className="text-xs text-muted-foreground">
                Подписывайтесь на наши каналы для получения актуальной правовой информации
              </p>
            </div>
          </div>
          <div className="pt-8 border-t text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Пугин и партнеры. Все права защищены. | 
              <a href="#" className="hover:text-accent transition-colors ml-1">Политика конфиденциальности</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
