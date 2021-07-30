import React from "react";
import "./Home.css";

import MainMenuOption from "./MainMenuOption"
import banner from "./images/mainBanner.gif";
import { Container, Image } from 'react-bootstrap';


import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import BrushIcon from '@material-ui/icons/Brush';
import RedeemIcon from '@material-ui/icons/Redeem';
import SpaIcon from '@material-ui/icons/Spa';

function Home() {
  return (
    <Container className="home">
        <Image className="home__image" src={banner} alt="banner_image"></Image>

        <Container className="home__row">
          <MainMenuOption
              title="Jardineras"
              link="/jardinera"
              img={<SpaIcon />}
          />
          <MainMenuOption
            title="Libros"
            link="/library"
            img={<MenuBookIcon />}
          />
          <MainMenuOption
            title="Café"
            link="/coffe"
            img={<LocalCafeIcon />}
          />
        </Container>
        <Container className="home__row">
          <MainMenuOption
              title="Arte"
              link="/art"
              img={<BrushIcon />}
          />
          <MainMenuOption
            title="Donación"
            link="/donation"
            img={<RedeemIcon />}
          />
        </Container>
    </Container>
  );
}

export default Home;
