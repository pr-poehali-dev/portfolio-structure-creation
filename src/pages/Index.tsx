import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center z-10 max-w-5xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
              Виктория
            </h1>
            <h2 className="text-2xl md:text-3xl text-brand-purple font-medium mb-6">
              SMM‑специалист
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              «Помогаю брендам находить отклик у своей аудитории»
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-lg">
            <div className="flex items-center gap-3 bg-brand-pink/10 rounded-xl px-6 py-4">
              <Icon name="Phone" size={20} className="text-brand-pink" />
              <span className="font-medium">8 988 525‑74‑79</span>
            </div>
            <div className="flex items-center gap-3 bg-brand-blue/10 rounded-xl px-6 py-4">
              <Icon name="Send" size={20} className="text-brand-blue" />
              <span className="font-medium">@via02t</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900">
            О себе
          </h2>
          <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-10 md:p-16">
              <p className="text-xl md:text-2xl leading-relaxed text-gray-700 text-center">
                Я — SMM‑специалист с опытом более года. Работала с брендами Hi Home, Axis, Concord.
                Создаю визуалы, пишу тексты, адаптирую тренды под аудиторию.
                В работе использую современные инструменты и нейросети, умею снимать и монтировать Reels и Stories.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-900">
            Навыки
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "Target", text: "Анализ аудитории и конкурентов", color: "brand-pink" },
              { icon: "TrendingUp", text: "Разработка SMM‑стратегий", color: "brand-blue" },
              { icon: "Palette", text: "Создание визуалов, Stories и Reels", color: "brand-purple" },
              { icon: "PenTool", text: "Написание текстов (посты, конкурсы, акции)", color: "brand-yellow" },
              { icon: "Instagram", text: "Ведение Instagram и Telegram", color: "brand-green" },
              { icon: "Bot", text: "Использование нейросетей для контента", color: "brand-pink" },
              { icon: "Camera", text: "Съёмка и монтаж с мобильным стабилизатором", color: "brand-blue" },
              { icon: "Layout", text: "Подготовка мудбордов и оформление ленты", color: "brand-purple" }
            ].map((skill, index) => (
              <Card 
                key={index}
                className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className={`w-16 h-16 bg-${skill.color}/10 rounded-full flex items-center justify-center`}>
                      <Icon name={skill.icon as any} size={24} className={`text-${skill.color}`} />
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed font-medium">{skill.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center text-gray-900">
            Кейсы
          </h2>
          
          {/* Case 1: Axis + Hi Home */}
          <div className="mb-32">
            <Card className="bg-gradient-to-br from-brand-pink/5 to-brand-blue/5 border border-gray-200 shadow-lg">
              <CardContent className="p-10 md:p-16">
                <h3 className="text-3xl md:text-4xl font-bold mb-12 text-brand-pink text-center">
                  Кейс Axis + Hi Home
                </h3>
                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h4 className="text-2xl font-bold mb-6 text-brand-blue">Цель:</h4>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      Привлечь новых партнёров, увеличить охваты, собрать заявки
                    </p>
                    
                    <h4 className="text-2xl font-bold mb-6 text-brand-blue">Что сделала:</h4>
                    <ul className="text-lg text-gray-700 space-y-3">
                      <li className="flex items-center gap-3">
                        <Icon name="Check" size={20} className="text-brand-pink" />
                        Визуалы, посты, Stories, Reels
                      </li>
                      <li className="flex items-center gap-3">
                        <Icon name="Check" size={20} className="text-brand-pink" />
                        Тексты и призывы к действию
                      </li>
                      <li className="flex items-center gap-3">
                        <Icon name="Check" size={20} className="text-brand-pink" />
                        Размещение в Instagram и WhatsApp
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-2xl font-bold mb-6 text-brand-purple">Результат:</h4>
                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-6 shadow-md">
                        <div className="text-3xl font-bold text-brand-pink">15</div>
                        <div className="text-gray-600">заявок с двух постов</div>
                      </div>
                      <div className="bg-white rounded-xl p-6 shadow-md">
                        <div className="text-3xl font-bold text-brand-blue">3</div>
                        <div className="text-gray-600">продажи (195 000 ₽)</div>
                      </div>
                      <div className="bg-white rounded-xl p-6 shadow-md">
                        <div className="text-3xl font-bold text-brand-purple">14+</div>
                        <div className="text-gray-600">откликов и заявок</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gallery for Axis + Hi Home */}
                <div>
                  <h4 className="text-2xl font-bold mb-8 text-center text-gray-900">Примеры работ</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <img 
                      src="/img/71294159-89e0-40a3-b008-edc0d62ad007.jpg" 
                      alt="SMM пост для Axis + Hi Home"
                      className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-64 object-cover"
                    />
                    <img 
                      src="/img/ad71d124-1449-47da-94e8-1bd319716339.jpg" 
                      alt="Instagram Story для Hi Home"
                      className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-64 object-cover"
                    />
                    <img 
                      src="/img/61afd150-0f2c-4a47-ade4-59f27138b97e.jpg" 
                      alt="Обложка Reels"
                      className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Case 2: День рождения Hi Home */}
          <div className="mb-32">
            <Card className="bg-gradient-to-br from-brand-purple/5 to-brand-yellow/5 border border-gray-200 shadow-lg">
              <CardContent className="p-10 md:p-16">
                <h3 className="text-3xl md:text-4xl font-bold mb-12 text-brand-purple text-center">
                  День рождения Hi Home
                </h3>
                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h4 className="text-2xl font-bold mb-6 text-brand-yellow">Цель:</h4>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      Продвижение мероприятия и вовлечение аудитории
                    </p>
                    
                    <h4 className="text-2xl font-bold mb-6 text-brand-yellow">Что сделала:</h4>
                    <ul className="text-lg text-gray-700 space-y-3">
                      <li className="flex items-center gap-3">
                        <Icon name="Check" size={20} className="text-brand-purple" />
                        Визуал для афиши и постов
                      </li>
                      <li className="flex items-center gap-3">
                        <Icon name="Check" size={20} className="text-brand-purple" />
                        Сторис-анонсы
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-2xl font-bold mb-6 text-brand-blue">Результат:</h4>
                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-6 shadow-md">
                        <div className="text-3xl font-bold text-brand-purple">5</div>
                        <div className="text-gray-600">комментариев в первые сутки</div>
                      </div>
                      <div className="bg-white rounded-xl p-6 shadow-md">
                        <div className="text-xl font-bold text-brand-yellow">Высокий интерес</div>
                        <div className="text-gray-600">аудитории</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gallery for Hi Home Birthday */}
                <div>
                  <h4 className="text-2xl font-bold mb-8 text-center text-gray-900">Примеры работ</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <img 
                      src="/img/bc2d3d35-67f4-49de-abfd-99c27b7d5133.jpg" 
                      alt="Афиша для дня рождения Hi Home"
                      className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-64 object-cover"
                    />
                    <img 
                      src="/img/83da4883-b37a-4927-af2d-d1f7e94686ca.jpg" 
                      alt="Промо в Stories"
                      className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-64 object-cover"
                    />
                    <img 
                      src="/img/f2b27ee9-5c7c-4a0b-8b37-88d5484e75ea.jpg" 
                      alt="Пост о мероприятии"
                      className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Case 3: Concord */}
          <div className="mb-20">
            <Card className="bg-gradient-to-br from-brand-blue/5 to-brand-green/5 border border-gray-200 shadow-lg">
              <CardContent className="p-10 md:p-16">
                <h3 className="text-3xl md:text-4xl font-bold mb-12 text-brand-blue text-center">
                  Кейс Concord
                </h3>
                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h4 className="text-2xl font-bold mb-6 text-brand-green">Цель:</h4>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      Обновление визуального стиля
                    </p>
                    
                    <h4 className="text-2xl font-bold mb-6 text-brand-green">Что сделала:</h4>
                    <ul className="text-lg text-gray-700 space-y-3">
                      <li className="flex items-center gap-3">
                        <Icon name="Check" size={20} className="text-brand-blue" />
                        Рендеры мебели, изменение дизайна
                      </li>
                      <li className="flex items-center gap-3">
                        <Icon name="Check" size={20} className="text-brand-blue" />
                        Адаптация изголовья, создание мини‑ролика
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-2xl font-bold mb-6 text-brand-pink">Результат:</h4>
                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-6 shadow-md">
                        <div className="text-xl font-bold text-brand-blue">Современный визуал</div>
                        <div className="text-gray-600">для соцсетей</div>
                      </div>
                      <div className="bg-white rounded-xl p-6 shadow-md">
                        <div className="text-xl font-bold text-brand-green">Повышение привлекательности</div>
                        <div className="text-gray-600">продукта</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gallery for Concord */}
                <div>
                  <h4 className="text-2xl font-bold mb-8 text-center text-gray-900">Примеры работ</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <img 
                      src="/img/75e80dd0-b995-47f3-aea8-64910e090031.jpg" 
                      alt="3D рендер мебели Concord"
                      className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-64 object-cover"
                    />
                    <img 
                      src="/img/c8a77dc2-aeeb-4fa5-be63-236ec83fd6a3.jpg" 
                      alt="До и после рестайлинга"
                      className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-64 object-cover"
                    />
                    <img 
                      src="/img/fc538e47-8632-4d83-9438-2ce8d61e0a79.jpg" 
                      alt="Превью видеоролика"
                      className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            Давайте работать вместе!
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-16 leading-relaxed">
            Готова помочь вашему бренду увеличить охваты, заявки и вовлечённость
          </p>
          
          <div className="flex flex-wrap justify-center gap-8">
            <Button className="bg-brand-pink hover:bg-brand-pink/90 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Icon name="Phone" size={20} className="mr-3" />
              8 988 525‑74‑79
            </Button>
            <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Icon name="Send" size={20} className="mr-3" />
              Telegram: @via02t
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}