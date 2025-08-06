import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

// Star component for decorative elements
const Star = ({ className, size = "w-8 h-8" }: { className?: string, size?: string }) => (
  <div className={`${size} ${className}`}>
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
            stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  </div>
);

// Explosion/burst element
const Burst = ({ className }: { className?: string }) => (
  <div className={`absolute ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M50 5 L55 25 L75 20 L60 40 L90 45 L65 55 L80 75 L55 65 L50 95 L45 75 L25 80 L40 60 L10 55 L35 45 L20 25 L45 35 Z" 
            fill="currentColor" stroke="black" strokeWidth="2"/>
    </svg>
  </div>
);

export default function Index() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-comic-white text-comic-black relative overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 bg-lime">
        {/* Decorative stars */}
        <Star className="absolute top-10 left-10 text-star-pink animate-bounce" size="w-12 h-12" />
        <Star className="absolute top-20 right-20 text-bubblegum animate-pulse" size="w-16 h-16" />
        <Star className="absolute bottom-20 left-1/4 text-star-pink animate-spin" size="w-10 h-10" />
        <Burst className="top-1/4 right-1/3 w-24 h-24 text-star-pink opacity-80" />
        <Burst className="bottom-1/3 left-1/5 w-32 h-32 text-bubblegum opacity-60" />

        <div className="text-center z-10 max-w-5xl mx-auto bg-comic-white border-4 border-comic-black rounded-3xl p-12 shadow-[8px_8px_0px_0px_#000] transform rotate-1">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black mb-6 text-comic-black transform -rotate-2"
                style={{ fontFamily: 'Comic Sans MS, cursive' }}>
              Виктория
            </h1>
            <div className="bg-bubblegum text-comic-white px-6 py-3 rounded-full border-4 border-comic-black inline-block transform rotate-1 shadow-[4px_4px_0px_0px_#000]">
              <h2 className="text-xl md:text-2xl font-bold">SMM‑специалист</h2>
            </div>
            <div className="mt-6 bg-star-pink text-comic-white px-8 py-4 rounded-2xl border-4 border-comic-black transform -rotate-1 inline-block shadow-[4px_4px_0px_0px_#000]">
              <p className="text-lg md:text-xl font-bold italic">
                «Помогаю брендам находить отклик у своей аудитории»
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Button className="bg-bubblegum hover:bg-bubblegum/90 text-comic-white font-black py-4 px-8 rounded-2xl text-lg border-4 border-comic-black shadow-[4px_4px_0px_0px_#000] transform hover:scale-105 transition-transform">
              Смотреть работы
            </Button>
            <Button className="bg-lime hover:bg-lime/90 text-comic-black font-black py-4 px-8 rounded-2xl text-lg border-4 border-comic-black shadow-[4px_4px_0px_0px_#000] transform hover:scale-105 transition-transform">
              Связаться
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-3 bg-star-pink text-comic-white rounded-full px-6 py-3 border-4 border-comic-black shadow-[4px_4px_0px_0px_#000] transform rotate-1">
              <Icon name="Phone" size={20} />
              <span className="font-bold">8 988 525‑74‑79</span>
            </div>
            <div className="flex items-center gap-3 bg-lime text-comic-black rounded-full px-6 py-3 border-4 border-comic-black shadow-[4px_4px_0px_0px_#000] transform -rotate-1">
              <Icon name="Send" size={20} />
              <span className="font-bold">@via02t</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-star-pink relative">
        <Star className="absolute top-10 left-10 text-lime animate-pulse" size="w-14 h-14" />
        <Star className="absolute bottom-10 right-10 text-comic-white animate-bounce" size="w-12 h-12" />
        <Burst className="top-1/4 right-1/4 w-28 h-28 text-lime opacity-50" />
        
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-12 text-center text-comic-white transform -rotate-1"
              style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            Обо мне
          </h2>
          <Card className="bg-comic-white border-4 border-comic-black shadow-[8px_8px_0px_0px_#000] transform rotate-1">
            <CardContent className="p-12">
              <div className="bg-lime text-comic-black p-8 rounded-2xl border-4 border-comic-black shadow-[4px_4px_0px_0px_#000] transform -rotate-1">
                <p className="text-xl md:text-2xl leading-relaxed font-bold text-center">
                  Я — SMM‑специалист с опытом более года. Работала с брендами Hi Home, Axis, Concord.
                  Создаю визуалы, пишу тексты, адаптирую тренды под аудиторию.
                  В работе использую современные инструменты и нейросети, умею снимать и монтировать Reels и Stories.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-comic-white relative">
        <Star className="absolute top-5 right-20 text-bubblegum animate-spin" size="w-10 h-10" />
        <Star className="absolute bottom-20 left-10 text-star-pink animate-pulse" size="w-16 h-16" />
        
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-center text-comic-black transform rotate-1"
              style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            Навыки
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "Target", text: "Анализ аудитории и конкурентов", color: "bubblegum" },
              { icon: "TrendingUp", text: "Разработка SMM‑стратегий", color: "lime" },
              { icon: "Palette", text: "Создание визуалов, Stories и Reels", color: "star-pink" },
              { icon: "PenTool", text: "Написание текстов (посты, конкурсы, акции)", color: "bubblegum" },
              { icon: "Instagram", text: "Ведение Instagram и Telegram", color: "lime" },
              { icon: "Bot", text: "Использование нейросетей для контента", color: "star-pink" },
              { icon: "Camera", text: "Съёмка и монтаж с мобильным стабилизатором", color: "bubblegum" },
              { icon: "Layout", text: "Подготовка мудбордов и оформление ленты", color: "lime" }
            ].map((skill, index) => (
              <Card 
                key={index}
                className={`bg-${skill.color} border-4 border-comic-black shadow-[6px_6px_0px_0px_#000] hover:shadow-[8px_8px_0px_0px_#000] transition-all duration-200 transform hover:scale-105 ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-comic-white rounded-full flex items-center justify-center border-4 border-comic-black shadow-[4px_4px_0px_0px_#000]">
                      <Icon name={skill.icon as any} size={24} className="text-comic-black" />
                    </div>
                  </div>
                  <p className="text-comic-white font-bold leading-relaxed text-lg">{skill.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 bg-lime relative">
        <Star className="absolute top-10 left-1/4 text-bubblegum animate-bounce" size="w-12 h-12" />
        <Star className="absolute bottom-10 right-1/3 text-star-pink animate-pulse" size="w-14 h-14" />
        <Burst className="top-1/3 left-10 w-20 h-20 text-star-pink opacity-60" />
        
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-20 text-center text-comic-black transform -rotate-1"
              style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            Кейсы
          </h2>
          
          {/* Case 1: Axis + Hi Home */}
          <div className="mb-20">
            <Card className="bg-comic-white border-4 border-comic-black shadow-[8px_8px_0px_0px_#000] transform rotate-1">
              <CardContent className="p-12">
                <div className="bg-bubblegum text-comic-white p-6 rounded-2xl border-4 border-comic-black shadow-[4px_4px_0px_0px_#000] mb-12 transform -rotate-1 inline-block">
                  <h3 className="text-3xl md:text-4xl font-black">
                    Кейс Axis + Hi Home
                  </h3>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                  <div className="bg-star-pink p-8 rounded-2xl border-4 border-comic-black shadow-[4px_4px_0px_0px_#000] transform rotate-1">
                    <h4 className="text-2xl font-black mb-6 text-comic-white">Цель:</h4>
                    <p className="text-lg text-comic-white mb-8 leading-relaxed font-bold">
                      Привлечь новых партнёров, увеличить охваты, собрать заявки
                    </p>
                    
                    <h4 className="text-2xl font-black mb-6 text-comic-white">Что сделала:</h4>
                    <ul className="text-lg text-comic-white space-y-3 font-bold">
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-lime rounded-full border-2 border-comic-black flex items-center justify-center">
                          <Icon name="Check" size={16} className="text-comic-black" />
                        </div>
                        Визуалы, посты, Stories, Reels
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-lime rounded-full border-2 border-comic-black flex items-center justify-center">
                          <Icon name="Check" size={16} className="text-comic-black" />
                        </div>
                        Тексты и призывы к действию
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-lime rounded-full border-2 border-comic-black flex items-center justify-center">
                          <Icon name="Check" size={16} className="text-comic-black" />
                        </div>
                        Размещение в Instagram и WhatsApp
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-lime p-6 rounded-2xl border-4 border-comic-black shadow-[4px_4px_0px_0px_#000] transform -rotate-1">
                      <h4 className="text-2xl font-black mb-6 text-comic-black">Результат:</h4>
                    </div>
                    
                    <div className="grid gap-4">
                      <div className="bg-bubblegum p-6 rounded-xl border-4 border-comic-black shadow-[4px_4px_0px_0px_#000] transform rotate-1">
                        <div className="text-4xl font-black text-comic-white">15</div>
                        <div className="text-comic-white font-bold">заявок с двух постов</div>
                      </div>
                      <div className="bg-star-pink p-6 rounded-xl border-4 border-comic-black shadow-[4px_4px_0px_0px_#000] transform -rotate-1">
                        <div className="text-4xl font-black text-comic-white">3</div>
                        <div className="text-comic-white font-bold">продажи (195 000 ₽)</div>
                      </div>
                      <div className="bg-lime p-6 rounded-xl border-4 border-comic-black shadow-[4px_4px_0px_0px_#000] transform rotate-1">
                        <div className="text-4xl font-black text-comic-black">14+</div>
                        <div className="text-comic-black font-bold">откликов и заявок</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gallery */}
                <div className="bg-star-pink p-8 rounded-2xl border-4 border-comic-black shadow-[4px_4px_0px_0px_#000] transform rotate-1">
                  <h4 className="text-2xl font-black mb-8 text-center text-comic-white">Примеры работ</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="transform -rotate-2">
                      <img 
                        src="/img/71294159-89e0-40a3-b008-edc0d62ad007.jpg" 
                        alt="SMM пост для Axis + Hi Home"
                        className="rounded-xl border-4 border-comic-black shadow-[4px_4px_0px_0px_#000] w-full h-48 object-cover hover:shadow-[6px_6px_0px_0px_#000] transition-shadow"
                      />
                    </div>
                    <div className="transform rotate-1">
                      <img 
                        src="/img/ad71d124-1449-47da-94e8-1bd319716339.jpg" 
                        alt="Instagram Story для Hi Home"
                        className="rounded-xl border-4 border-comic-black shadow-[4px_4px_0px_0px_#000] w-full h-48 object-cover hover:shadow-[6px_6px_0px_0px_#000] transition-shadow"
                      />
                    </div>
                    <div className="transform -rotate-1">
                      <img 
                        src="/img/61afd150-0f2c-4a47-ade4-59f27138b97e.jpg" 
                        alt="Обложка Reels"
                        className="rounded-xl border-4 border-comic-black shadow-[4px_4px_0px_0px_#000] w-full h-48 object-cover hover:shadow-[6px_6px_0px_0px_#000] transition-shadow"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Similar structure for other cases... */}
          
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-bubblegum relative">
        <Star className="absolute top-10 right-10 text-lime animate-spin" size="w-16 h-16" />
        <Star className="absolute bottom-10 left-10 text-comic-white animate-bounce" size="w-12 h-12" />
        <Burst className="top-1/3 left-1/3 w-32 h-32 text-lime opacity-40" />
        
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-comic-white transform rotate-1"
              style={{ fontFamily: 'Comic Sans MS, cursive' }}>
            Давайте работать вместе!
          </h2>
          <div className="bg-comic-white text-comic-black p-8 rounded-2xl border-4 border-comic-black shadow-[8px_8px_0px_0px_#000] mb-16 transform -rotate-1 inline-block">
            <p className="text-xl md:text-2xl leading-relaxed font-bold">
              Готова помочь вашему бренду увеличить охваты, заявки и вовлечённость
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <Button className="bg-lime hover:bg-lime/90 text-comic-black font-black py-6 px-10 rounded-2xl text-xl border-4 border-comic-black shadow-[6px_6px_0px_0px_#000] transform hover:scale-110 transition-all duration-200 rotate-1">
              <Icon name="Phone" size={24} className="mr-3" />
              8 988 525‑74‑79
            </Button>
            <Button className="bg-comic-white hover:bg-comic-white/90 text-comic-black font-black py-6 px-10 rounded-2xl text-xl border-4 border-comic-black shadow-[6px_6px_0px_0px_#000] transform hover:scale-110 transition-all duration-200 -rotate-1">
              <Icon name="Send" size={24} className="mr-3" />
              Telegram: @via02t
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}