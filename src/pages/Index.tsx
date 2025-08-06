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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-coral to-skyblue rounded-full animate-blob opacity-60"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
          <div 
            className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-lavender to-coral animate-morph opacity-60"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
          <div 
            className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-r from-skyblue to-lavender rounded-full animate-float opacity-60"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          />
        </div>

        <div className="text-center z-10 max-w-4xl mx-auto">
          <div className="mb-8 animate-float">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-coral via-skyblue to-lavender bg-clip-text text-transparent">
              Виктория
            </h1>
            <h2 className="text-2xl md:text-4xl text-gray-300 mb-6">
              SMM‑специалист
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 italic">
              «Помогаю брендам находить отклик у своей аудитории»
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3">
              <Icon name="Phone" size={20} />
              <span>8 988 525‑74‑79</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3">
              <Icon name="Send" size={20} />
              <span>@via02t</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-coral to-skyblue bg-clip-text text-transparent">
            О себе
          </h2>
          <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg md:text-xl leading-relaxed text-gray-200">
                Я — SMM‑специалист с опытом более года. Работала с брендами Hi Home, Axis, Concord.
                Создаю визуалы, пишу тексты, адаптирую тренды под аудиторию.
                В работе использую современные инструменты и нейросети, умею снимать и монтировать Reels и Stories.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-lavender to-coral bg-clip-text text-transparent">
            Навыки
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "Target", text: "Анализ аудитории и конкурентов" },
              { icon: "TrendingUp", text: "Разработка SMM‑стратегий" },
              { icon: "Palette", text: "Создание визуалов, Stories и Reels" },
              { icon: "PenTool", text: "Написание текстов (посты, конкурсы, акции)" },
              { icon: "Instagram", text: "Ведение Instagram и Telegram" },
              { icon: "Bot", text: "Использование нейросетей для контента" },
              { icon: "Camera", text: "Съёмка и монтаж с мобильным стабилизатором" },
              { icon: "Layout", text: "Подготовка мудбордов и оформление ленты" }
            ].map((skill, index) => (
              <Card 
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/10 hover:from-white/15 hover:to-white/10 transition-all duration-300 transform hover:scale-105 hover:-rotate-1"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-coral to-skyblue rounded-full flex items-center justify-center">
                      <Icon name={skill.icon as any} size={24} className="text-white" />
                    </div>
                  </div>
                  <p className="text-gray-200 leading-relaxed">{skill.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-skyblue to-lavender bg-clip-text text-transparent">
            Кейсы
          </h2>
          
          {/* Case 1: Axis + Hi Home */}
          <Card className="mb-12 bg-gradient-to-br from-coral/20 to-skyblue/20 backdrop-blur-md border-white/10 hover:from-coral/30 hover:to-skyblue/30 transition-all duration-300">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-6 text-coral">
                Кейс Axis + Hi Home
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-skyblue">Цель:</h4>
                  <p className="text-gray-200 mb-6">
                    Привлечь новых партнёров, увеличить охваты, собрать заявки
                  </p>
                  
                  <h4 className="text-xl font-bold mb-3 text-skyblue">Что сделала:</h4>
                  <ul className="text-gray-200 space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-coral" />
                      Визуалы, посты, Stories, Reels
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-coral" />
                      Тексты и призывы к действию
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-coral" />
                      Размещение в Instagram и WhatsApp
                    </li>
                  </ul>
                </div>
                
                    <div>
                      <h4 className="text-xl font-bold mb-3 text-lavender">Результат:</h4>
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="text-2xl font-bold text-coral">15</div>
                          <div className="text-gray-300">заявок с двух постов</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="text-2xl font-bold text-skyblue">3</div>
                          <div className="text-gray-300">продажи (195 000 ₽)</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="text-2xl font-bold text-lavender">14+</div>
                          <div className="text-gray-300">откликов и заявок</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <img 
                    src="/img/71294159-89e0-40a3-b008-edc0d62ad007.jpg" 
                    alt="Пример визуалов для Axis + Hi Home"
                    className="rounded-lg shadow-lg max-w-full h-auto transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Case 2: День рождения Hi Home */}
          <Card className="mb-12 bg-gradient-to-br from-lavender/20 to-coral/20 backdrop-blur-md border-white/10 hover:from-lavender/30 hover:to-coral/30 transition-all duration-300">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-6 text-lavender">
                День рождения Hi Home
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-coral">Цель:</h4>
                  <p className="text-gray-200 mb-6">
                    Продвижение мероприятия и вовлечение аудитории
                  </p>
                  
                  <h4 className="text-xl font-bold mb-3 text-coral">Что сделала:</h4>
                  <ul className="text-gray-200 space-y-2">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-lavender" />
                      Визуал для афиши и постов
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-lavender" />
                      Сторис-анонсы
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-3 text-skyblue">Результат:</h4>
                  <div className="space-y-3">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-coral">5</div>
                      <div className="text-gray-300">комментариев в первые сутки</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-lg font-bold text-lavender">Высокий интерес</div>
                      <div className="text-gray-300">аудитории</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Case 3: Concord */}
          <Card className="bg-gradient-to-br from-skyblue/20 to-lavender/20 backdrop-blur-md border-white/10 hover:from-skyblue/30 hover:to-lavender/30 transition-all duration-300">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-6 text-skyblue">
                Кейс Concord
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-lavender">Цель:</h4>
                  <p className="text-gray-200 mb-6">
                    Обновление визуального стиля
                  </p>
                  
                  <h4 className="text-xl font-bold mb-3 text-lavender">Что сделала:</h4>
                  <ul className="text-gray-200 space-y-2">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-skyblue" />
                      Рендеры мебели, изменение дизайна
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-skyblue" />
                      Адаптация изголовья, создание мини‑ролика
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-3 text-coral">Результат:</h4>
                  <div className="space-y-3">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-lg font-bold text-skyblue">Современный визуал</div>
                      <div className="text-gray-300">для соцсетей</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-lg font-bold text-lavender">Повышение привлекательности</div>
                      <div className="text-gray-300">продукта</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-coral via-skyblue to-lavender bg-clip-text text-transparent">
            Давайте работать вместе!
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Готова помочь вашему бренду увеличить охваты, заявки и вовлечённость
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Button className="bg-gradient-to-r from-coral to-skyblue hover:from-coral/80 hover:to-skyblue/80 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              <Icon name="Phone" size={20} className="mr-2" />
              8 988 525‑74‑79
            </Button>
            <Button className="bg-gradient-to-r from-skyblue to-lavender hover:from-skyblue/80 hover:to-lavender/80 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              <Icon name="Send" size={20} className="mr-2" />
              Telegram: @via02t
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}