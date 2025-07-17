import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const results = [
    { metric: "342%", label: "Рост трафика", icon: "TrendingUp" },
    { metric: "2.4x", label: "Увеличение конверсии", icon: "Target" },
    { metric: "156", label: "Успешных кейсов", icon: "Trophy" },
    { metric: "89%", label: "Средний ROAS", icon: "DollarSign" }
  ];

  const process = [
    { step: "01", title: "Аудит", description: "Анализируем текущую ситуацию и находим точки роста", icon: "Search" },
    { step: "02", title: "Стратегия", description: "Создаем персональную стратегию привлечения студентов", icon: "Lightbulb" },
    { step: "03", title: "Запуск", description: "Настраиваем рекламные кампании и воронки продаж", icon: "Rocket" },
    { step: "04", title: "Масштабирование", description: "Оптимизируем и увеличиваем объемы трафика", icon: "BarChart3" }
  ];

  const testimonials = [
    { name: "Анна Петрова", role: "Основатель онлайн-школы английского", text: "За 3 месяца увеличили количество заявок в 4 раза. Команда профессионалов!", rating: 5 },
    { name: "Дмитрий Козлов", role: "Директор IT-академии", text: "Отличная работа с воронками. CAC снизился на 40%, а качество лидов выросло", rating: 5 },
    { name: "Елена Смирнова", role: "Создатель курсов по дизайну", text: "Наконец-то нашла агентство, которое понимает специфику образовательных проектов", rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={20} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">TrafficPro</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#results" className="text-gray-600 hover:text-orange-500 transition-colors">Результаты</a>
            <a href="#process" className="text-gray-600 hover:text-orange-500 transition-colors">Процесс</a>
            <a href="#reviews" className="text-gray-600 hover:text-orange-500 transition-colors">Отзывы</a>
            <a href="#contact" className="text-gray-600 hover:text-orange-500 transition-colors">Контакты</a>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            Получить консультацию
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
              Взрывной рост трафика
              <br />
              для онлайн-школ
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Превращаем ваши образовательные курсы в магнит для студентов. 
              Работаем только с результатом — увеличиваем продажи в 2-5 раз
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg">
                <Icon name="Rocket" className="mr-2" size={20} />
                Запустить рекламу
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 px-8 py-4 text-lg">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть кейсы
              </Button>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="relative mt-16">
            <div className="absolute top-0 left-1/4 w-20 h-20 bg-orange-500 rounded-full opacity-20 animate-float"></div>
            <div className="absolute top-10 right-1/4 w-12 h-12 bg-blue-500 rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-0 left-1/3 w-16 h-16 bg-purple-500 rounded-full opacity-25 animate-float" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Результаты наших клиентов</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы не просто привлекаем трафик — мы создаем системы, которые приносят реальную прибыль
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <Card key={index} className="text-center p-8 border-2 border-gray-100 hover:border-orange-500 transition-all duration-300 hover:shadow-lg animate-slide-up hover:scale-105">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
                    <Icon name={result.icon} size={32} className="text-orange-500" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2 animate-bounce-slow">{result.metric}</div>
                  <div className="text-gray-600">{result.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gradient-to-r from-orange-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Как мы работаем</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Проверенная методология, которая работает для любых образовательных проектов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="relative overflow-hidden border-2 border-gray-100 hover:border-orange-500 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="absolute top-4 right-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{step.step}</span>
                  </div>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Icon name={step.icon} size={32} className="text-blue-500" />
                  </div>
                  <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Узнайте, что говорят о нас владельцы онлайн-школ
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-2 border-gray-100 hover:border-blue-500 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                      <Icon name="User" size={24} className="text-gray-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-orange-500 to-blue-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Готовы увеличить продажи вашей школы?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Оставьте заявку и получите бесплатный аудит вашей текущей рекламы + план по масштабированию
            </p>
            
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Получить консультацию</CardTitle>
                <CardDescription className="text-center">
                  Заполните форму и наш эксперт свяжется с вами в течение 30 минут
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Телефон" />
                </div>
                <Input placeholder="Email" />
                <Input placeholder="Название онлайн-школы" />
                <Textarea placeholder="Расскажите о вашем проекте..." />
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
                <p className="text-sm text-gray-600 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={20} className="text-white" />
                </div>
                <span className="text-2xl font-bold">TrafficPro</span>
              </div>
              <p className="text-gray-400">
                Агентство трафика для онлайн-школ. Увеличиваем продажи в 2-5 раз.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Таргетированная реклама</li>
                <li>Контекстная реклама</li>
                <li>SMM продвижение</li>
                <li>Email-маркетинг</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Кейсы</li>
                <li>Команда</li>
                <li>Блог</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>hello@trafficpro.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, Красная площадь, 1</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TrafficPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;