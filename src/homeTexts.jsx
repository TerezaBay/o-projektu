import TerkaUrl from './img/Terka.jpg';
import VeraUrl from './img/vera.jpg';

export const home = {
  logo: 'Moje porodní přání',
  headerButton1: 'O aplikaci',
  button1Url: '#main',
  headerButton2: 'O autorkách',
  button2Url: '#authors',
  headerButton3: 'Sestavit porodní přání',
  headerTitle: 'Pro lepší zážitek z porodu',
  headerText: 'Aplikace pro sestavení porodního přání',

  section1:
    'V aplikaci "Moje porodní přání" si nastávající rodiče zdarma vytvoří porodní plán na míru svým osobním preferencím a potřebám.',
  section2: 'Na tom, jak přicházíme na svět, záleží.',

  mainTitleText: 'Aplikace Moje porodní přání rodičům pomůže:',
  mainListText: [
    'sestavit si porodní plán podle svých potřeb a představ,',
    'informovat se o jednotlivých možnostech,',
    'zjistit, co je pro ně u porodu opravdu důležité,',
    'sdílet porodní plán s ostatními,',
    'uložit si rozpracovaný porodní plán a vrátit se k němu později,',
    'hotový plán si jednoduše vytisknout dle předpřipravené šablony.',
  ],
  mainEmphaText:
    'Výstupem z aplikace bude přehledný a reprezentativní porodní plán, který si uživatel bude moci vzít s sebou do porodnice.',

  authorsTitleText: 'O autorkách projektu:',
  authors: [
    {
      authorsImg: VeraUrl, // tady bude třeba vložit naše obrázky a cestu k nim
      authorsName: 'Věra Staňková',
      authorsText:
        'Věrka pracuje pro skvělou neziskovku Aperio. Je hlavním nositelem nápadu a určitě se vyřádí na stylování! Má velikou radost, že projekt začíná dostávat pevné obrysy a doufá, že aplikace brzy pomůže prvním nastávajícím rodičům s přípravou na porod.',
    },
    {
      authorsImg: TerkaUrl, // tady bude třeba vložit naše obrázky a cestu k nim
      authorsName: 'Tereza Bařinková',
      authorsText:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo odio dolorum reprehenderit officia minima facere, iusto aliquid necessitatibus ipsum in deserunt, non suscipit tenetur, nulla quasi corporis doloribus id quibusdam?', // tady bude třeba dopsat text
    },
  ],

  footerLinks: [
    { name: 'Domů', url: '#header' },
    { name: 'Sestavit porodní přání', url: '#header' },
    { name: 'O aplikaci', url: '#main' },
    { name: 'O autorkách', url: '#authors' },
  ],
  footerCopyright: 'Homepage verze 1. 0',
};
