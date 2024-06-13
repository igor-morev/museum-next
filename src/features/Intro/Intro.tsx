import Image from 'next/image';

import './Intro.scss';

import logoGroup from '@/assets/images/logo/logo-group.png';
import StartButton from '@/ui/StartButton/StartButton';

export default function Intro() {
  return (
    <div className="intro">
      <div className="expo-container mx-auto">
        <div className="header">
          <div className="header-inner">
            <div className="header-logo">
              <Image src={logoGroup} alt="Company logo" />
            </div>
            <h1 className="heading">Мультимедийный центр теплоэнергетики</h1>
          </div>
        </div>
      </div>
      <div className="intro-content expo-container mx-auto">
        <div className="bg" />
        <div className="intro-button-container">
          <StartButton url="expo" />
        </div>
        <div className="bottom-text">
          <div className="description">
            <p className="bold f-20">
              Рады приветствовать вас на сайте интерактивной экспозиции компании «Т Плюс»,
              посвященной теплоснабжению.{' '}
            </p>
            <p>
              Здесь вы сможете узнать: как устроена ТЭЦ, откуда берется горячая вода и зачем ее
              отключают летом, какой путь проходит тепло от станции до вашей квартиры, как правильно
              подавать показания приборов учета, и многое другое.
              <br />
              Добро пожаловать!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
