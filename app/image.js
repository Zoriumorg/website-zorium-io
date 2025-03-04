import Logo from '@/public/assets/layout/zoriumLogo.svg';
import heroSection from '@/public/assets/learn/heroSection.svg'
import MobileHeroSection from '@/public/assets/learn/mobileHero.png'
import WalletIcon from '@/public/assets/learn/wallet.png'
import appsIcon from '@/public/assets/learn/apps.png'
import networksIcon from '@/public/assets/learn/network.png'
import zorIcon from '@/public/assets/learn/zor.png'
import bitcoin from '@/public/assets/learn/usecasesBitcoin.svg'
import zorWalletLogo from '@/public/assets/learn/zorWalletLogo.svg'
import Financial from '@/public/assets/learn/usecasesFinancial.svg'
import usecasesNetwork from '@/public/assets/learn/usecasesNetwork.svg'
import usecasesInternet from '@/public/assets/learn/usecasesInternet.svg'
import LearnZorium from '@/public/assets/learn/LearnZorium.png'
import EconsystemBg from '@/public/assets/learn/EconsystemBg.svg'


const activityImages = Array.from({ length: 76 }, (_, i) =>
  require(`@/public/assets/learn/zor/ActivityImage${i + 1}.png`)
);




export { Logo, heroSection, WalletIcon, appsIcon, networksIcon, zorIcon, MobileHeroSection, bitcoin, zorWalletLogo, Financial, usecasesNetwork, usecasesInternet, activityImages, LearnZorium, EconsystemBg }