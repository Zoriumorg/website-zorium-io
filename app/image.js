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
import FirstBuildImg from "../public/Developers/BuildFirstImg.svg";
import SecondBuildImg from "../public/Developers/BuildSecondImg.svg";
import Ecosystem from "../public/Developers/Ecosystem.svg";
import Grants from "../public/Developers/Grants.svg";
import Credits from "../public/Developers/Credits.svg";
import InvolvedImg from "../public/Developers/Involved.svg";
import NoticedImg from "../public/Developers/Noticed.svg";
import BuildingBenar from "../public/Developers/buildingBenar.svg";
import footerZorium from "../public/footer/footerZorium.svg";
import ExploreMain from "../public/Explore/ExploreMain.svg";
import Zeero0x from "../public/Explore/0x.svg";
import Zeero0xPPL from "../public/Explore/0xPPL.svg";
import Across from "../public/Explore/Across.svg";
import Zeero0xSplitsL from "../public/Explore/0xSplits.svg";


const activityImages = Array.from({ length: 76 }, (_, i) =>
  require(`@/public/assets/learn/zor/ActivityImage${i + 1}.png`)
);




export { Logo, heroSection, WalletIcon, appsIcon, networksIcon, zorIcon, MobileHeroSection, bitcoin, zorWalletLogo, Financial, usecasesNetwork, usecasesInternet, activityImages, FirstBuildImg, SecondBuildImg, Ecosystem, Grants, Credits, InvolvedImg, NoticedImg, BuildingBenar, footerZorium, ExploreMain, Zeero0x, Zeero0xPPL, Across, Zeero0xSplitsL }