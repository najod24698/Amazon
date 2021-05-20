import './App.css';
import Header from './components/Header';
// import Login from './components/Login';  
import LoginEmailPassword from './components/LoginEmailPassword';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Content from './components/Content';
import Navmain from './components/Nav_main';
import Cart from './components/Cart';
import Product from './components/Product';
import AmazonBasic from './components/AmazonBasic';

function App() {



  const bannerimages = [

    {
      image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
    },
    {
      image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
    },
    {
      image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg"
    },
    {
      image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
    }
  ]


  
  const contentImage = [
    {
      id: 1,
      title: "AmazonBasics",
      image:  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
    },

    {
      id: 2,
      title: "Shop by Category",
      image:  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
    },

    {
      id: 3,
      title: "Find your ideal TV",
      image:  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg"
    },

    {
      id: 4,
      title: "Sign in for the best",
      image:  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"
    }
  ]


  const contentImage2 = [
    {
      id: 1,
      title: "AmazonBasics",
      image:  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"
    },

    {
      id: 2,
      title: "Shop by Category",
      image:  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
    },

    {
      id: 3,
      title: "Find your ideal TV",
      image:  "https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
    },

    {
      id: 4,
      title: "Sign in for the best",
      image:  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
    }
  ]


  const contentImage3 = [
    {
      id: 1,
      title: "AmazonBasics",
      image:  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg"
    },

    {
      id: 2,
      title: "Shop by Category",
      image:  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
    },

    {
      id: 3,
      title: "Find your ideal TV",
      image:  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg"
    },
  ]




  const basketProduct = [
    {
      id: 1,
      title: "Book",
      cost: 45,
      image:  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
    },

    {
      id: 2,
      title: "Mixer",
      cost: 50,
      image:  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg"
    }
  ]



  // amazonBasics
  const amazonBasic = [
    {
      id: 1,
      title: "AmazonBasics",
      image:  "https://m.media-amazon.com/images/I/71IdKRlm8+L._AC_UL320_.jpg"
    },

    {
      id: 2,
      title: "Shop by Category",
      image:  "https://m.media-amazon.com/images/I/71K7Q4FpguL._AC_UL320_.jpg"
    },

    {
      id: 3,
      title: "Find your ideal TV",
      image:  "https://m.media-amazon.com/images/I/716vdWfenAL._AC_UL320_.jpg"
    },

    {
      id: 4,
      title: "Sign in for the best",
      image:  "https://m.media-amazon.com/images/I/71nDX36Y9UL._AC_UL320_.jpg"
    }
  ] 

  // const user = true;

  
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route path="/login" component={LoginEmailPassword}></Route>
            <Route path="/cart">
              <Cart  allBasketItems={basketProduct}/>
            </Route>
            <Route path="/product"> 
              <Header />
              <Product allBasketItems={basketProduct} />
            </Route>
            <Route path="/amazonBasics">
              <AmazonBasic data={amazonBasic}/>
            </Route>
            <Route path="/">
              <Header />
              <Navmain  path={Navmain}/>
              <Banner all={bannerimages} />
              <Content data={contentImage} date={contentImage2} comfy={contentImage3}/>
            </Route>            
        </Switch>
      </div>
    </Router>
  );
}

export default App;
