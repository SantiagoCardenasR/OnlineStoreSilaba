import React, { useEffect } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { reference } from "./firebase";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import Register from "./Register";
import AddProduct from "./AddProduct";
import Store from "./Store";
import ProductDetails from "./ProductDetails";
import Donation from "./Donation";
import CheckouBill from "./CheckoutBill";
import AdminHeader from "../src/admin/components/AdminHeader"
import AdminHome from  "../src/admin/components/AdminHome"
import AdminTable from "../src/admin/components/AdminTable";
import AdminBillsTable from "../src/admin/components/AdminBillsTable";
import AdminDonationsTable from "../src/admin/components/AdminDonationsTable";
import MainPageIndex from "../src/mainPage/index"
import MainPageHeader from "../src/mainPage/Header"
import MainPageFooter from "../src/mainPage/footer"
import Asis from "./mainPage/Asis";
import Empresa from "./mainPage/Empresa";
import Educacion from "./mainPage/Educacion";
import Infancia from "./mainPage/Infancia";
import Adulto from "./mainPage/Adulto";
import Mujer from "./mainPage/Mujer"
import SeParteDelCambio from "./mainPage/SeParteDelCambio";
import ReactWhatsapp from 'react-whatsapp';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


function App() {
  const [{ user, user_name, user_email, user_id, adminData }, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    reference.child("products").on("value", (snap) => {
      snap.forEach((element) => {
        if (element.val() !== null) {
          dispatch({
            type: "ADD_SHOP_ITEMS",
            item: element.val(),
          });
        }
      });
    });

    reference.child("donations").on("value", (snap) => {
      let donationsValue = 0;
      snap.forEach((element) => {
        if (element.val() !== null) {
          donationsValue = donationsValue + element.val().donationValue
        }
      });
      dispatch({
        type: "ADD_DONATIONS",
        donationsValue: donationsValue,
      });
    });

    reference.child("bills/").on("value", (snap) => {
        snap.forEach((element) => {
          let date = element.val().date.split("/")
          let newDate = new Date()
          newDate.setDate(date[0])
          newDate.setMonth(date[1])
          newDate.setFullYear(date[2])
          let today = new Date();
          let mm = String(today.getMonth() + 1).padStart(2,'0');
          if (element.val() !== null && newDate.getMonth() == mm) {
            dispatch({
              type: "ADD_MONTH_SALES",
              billPrice: element.val().billPrice,
            });
          }
        });
      });

      reference.child("bills/").on("value", (snap) => {
        let salesJan=0
        let salesFeb=0
        let salesMar=0
        let salesApr=0
        let salesMay=0
        let salesJun=0
        let salesJul=0
        let salesAgst=0
        let salesSep=0
        let salesOct=0
        let salesNov=0
        let salesDec=0
        snap.forEach((element) => {
          let date = element.val().date.split("/")
          let newDate = new Date()
          newDate.setDate(date[0])
          newDate.setMonth(date[1])
          newDate.setFullYear(date[2])
          if (element.val() !== null && newDate.getMonth() == 1) {
            salesJan = salesJan + element.val().billPrice
          }
          if (element.val() !== null && newDate.getMonth() == 2) {
            salesFeb = salesFeb + element.val().billPrice
          }
          if (element.val() !== null && newDate.getMonth() == 3) {
            salesMar = salesMar + element.val().billPrice
          }
          if (element.val() !== null && newDate.getMonth() == 4) {
            salesApr = salesApr + element.val().billPrice
          }
          if (element.val() !== null && newDate.getMonth() == 5) {
            salesMay = salesMay + element.val().billPrice
          }
          if (element.val() !== null && newDate.getMonth() == 6) {
            salesJun = salesJun + element.val().billPrice
          }
          if (element.val() !== null && newDate.getMonth() == 7) {
            salesJul = salesJul + element.val().billPrice
          }
          if (element.val() !== null && newDate.getMonth() == 8) {
            salesAgst = salesAgst + element.val().billPrice
          }
          if (element.val() !== null && newDate.getMonth() == 9) {
            salesSep = salesSep + element.val().billPrice
          }
          if (element.val() !== null && newDate.getMonth() == 10) {
            salesOct = salesOct + element.val().billPrice
          }
          if (element.val() !== null && newDate.getMonth() == 11) {
            salesNov = salesNov + element.val().billPrice
          }
          if (element.val() !== null && newDate.getMonth() == 12) {
            salesDec = salesDec + element.val().billPrice
          }
        });
        dispatch({
          type: "ADD_MONTHLY_SALES",
          pricesByMonth: {
            salesJan: salesJan,
            salesFeb: salesFeb,
            salesMar: salesMar,
            salesApr: salesApr,
            salesMay: salesMay,
            salesJun: salesJun,
            salesJul: salesJul,
            salesAgst:salesAgst,
            salesSep: salesSep,
            salesOct: salesOct,
            salesNov: salesNov,
            salesDec: salesDec,
          }
        })
      });

      reference.child("bills/").on("value", (snap) => {
        snap.forEach((element) => {
          let date = element.val().date.split("/")
          let newDate = new Date()
          newDate.setDate(date[0])
          newDate.setMonth(date[1])
          newDate.setFullYear(date[2])
          let today = new Date();
          let yy = today.getFullYear();
          if(element.val() !== null && newDate.getFullYear() == yy) {
            dispatch({
              type: "ADD_YEAR_SALES",
              billPrice: element.val().billPrice
            })
          }
        });
      });

      reference.child("bills/").on("value", (snap) => {
        let coffeeSales = 0;
        let booksSales = 0;
        snap.forEach((element) => {
          for(let i=0; i < element.val().items.length ; i++) {
            let actualItem = element.val().items[i];
            if(actualItem.category === "Cafe") {
              coffeeSales = coffeeSales + (actualItem.price * actualItem.quantity)
            }
            if(actualItem.category === "Libro") {
              booksSales = booksSales + (actualItem.price * actualItem.quantity)
            }
          }
        });
        dispatch({
          type: "ADD_CATEGORY_SALES",
          salesByCategory: {
            coffeeSales: coffeeSales,
            booksSales: booksSales,
          }
        })
      });

      reference.child("products").on("value", (snap) => {
        let booksStock = 0;
        let coffeeStock = 0;
        snap.forEach((element) => {
          if (element.val() !== null && element.val().category === "Cafe") {
            coffeeStock = coffeeStock + element.val().stock;
          }
          if (element.val() !== null && element.val().category === "Libro") {
            booksStock = booksStock + element.val().stock;
          }
        });
        dispatch({
          type: "ADD_CATEGORY_STOCK",
          stockByCategory: {
            coffeeStock: coffeeStock,
            booksStock: booksStock,
          }
        })
      });

    reference.child("bills/").on("value", (snap) => {
      snap.forEach((element) => {
          if(element.val() !== null) {
            dispatch({
              type: "ADD_BILL",
              actualBill: element.val() 
            })
          }
      });
    });

    reference.child("donations/").on("value", (snap) => {
      snap.forEach((element) => {
          if(element.val() !== null) {
            dispatch({
              type: "ADD_DONATION",
              actualDonation: element.val() 
            })
          }
      });
    });

    if (sessionStorage.getItem("User") !== null) {
      const actualUser = sessionStorage.getItem("User");
      const name = sessionStorage.getItem("User_name");
      const email = sessionStorage.getItem("User_email");
      const id = sessionStorage.getItem("User_id");
      if (name && email && id && actualUser) {
        dispatch({
          type: "SET_USER",
          user: actualUser,
        });

        dispatch({
          type: "ADD_USER_DATA",
          userData: {
            user_name: name,
            user_email: email,
            user_id: id,
          },
        });

        /* reference
          .child(
            "shopping_carts/SHPNCRT_" +
              sessionStorage.getItem("User_id") +
              "/products/"
          )
          .on("value", (snap) => {
            snap.forEach((element) => {
              if(element.val() !== null) {
                dispatch({
                  type: "ADD_TO_CART",
                  item: element.val(),
                });
              }
            });
          }); */
      }
    }

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (user_name !== "" && user_email !== "" && user_id !== 0 && user) {
      sessionStorage.setItem("User", user);
      sessionStorage.setItem("User_name", user_name);
      sessionStorage.setItem("User_email", user_email);
      sessionStorage.setItem("User_id", user_id);
    }
  });

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/admin">
            <AdminHeader />
            <AdminHome/>
          </Route>

          <Route path="/adminTable">
            <AdminHeader />
            <AdminTable />
          </Route>

          <Route path="/adminBills">
            <AdminHeader />
            <AdminBillsTable />
          </Route>

          <Route path="/adminDonations">
            <AdminHeader />
            <AdminDonationsTable />
          </Route>

          <Route path="/addProduct">
            <AddProduct />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/checkoutBill">
            <Header />
            <CheckouBill />
          </Route>

          <Route path="/donation">
            <Header />
            <Donation />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/product/:productId">
            <Header />
            <ProductDetails />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/store/:search">
            <Header />
            <Store />
          </Route>

          <Route path="/library">
            <Header />
            <Store category="Libro" />
          </Route>

          <Route path="/coffe">
            <Header />
            <Store category="Cafe" />
          </Route>

          <Route path="/art">
            <Header />
            <Store category="Art" />
          </Route>

          <Route path="/jardinera">
            <Header />
            <Store category="Jardinera" />
          </Route>

          <Route path="/Tienda">
            <Header />
            <Home />
          </Route>

          <Route path="/AsiS">
          <div className="app__mainPage" style={{display: "flex", flexDirection: "column", width: "100%"}}>
            <MainPageHeader />
            <Asis />
            <ReactWhatsapp number="573102162496" message="Hola, estoy interesad@ en la corporación..." style={{position: "fixed", bottom: "15px", right: "0", border: "none", backgroundColor: "transparent" }}> <WhatsAppIcon style={{color: "#007bff", fontSize: "50px"}} /> </ReactWhatsapp>
            <MainPageFooter /> 
          </div>
          </Route>

          <Route path="/empresa">
          <div className="app__mainPage" style={{display: "flex", flexDirection: "column", width: "100%"}}>
            <MainPageHeader />
            <Empresa />
            <ReactWhatsapp number="573102162496" message="Hola, estoy interesad@ en la corporación..." style={{position: "fixed", bottom: "15px", right: "0", border: "none",backgroundColor: "transparent"  }}> <WhatsAppIcon style={{color: "#007bff", fontSize: "50px"}} /> </ReactWhatsapp>
            <MainPageFooter /> 
          </div>
          </Route>

          <Route path="/educacion">
          <div className="app__mainPage" style={{display: "flex", flexDirection: "column", width: "100%"}}>
            <MainPageHeader />
            <Educacion />
            <ReactWhatsapp number="573102162496" message="Hola, estoy interesad@ en la corporación..." style={{position: "fixed", bottom: "15px", right: "0", border: "none",backgroundColor: "transparent"  }}> <WhatsAppIcon style={{color: "#007bff", fontSize: "50px"}} /> </ReactWhatsapp>
            <MainPageFooter /> 
          </div>
          </Route>

          <Route path="/Infancia">
          <div className="app__mainPage" style={{display: "flex", flexDirection: "column", width: "100%"}}>
            <MainPageHeader />
            <Infancia />
            <ReactWhatsapp number="573102162496" message="Hola, estoy interesad@ en la corporación..." style={{position: "fixed", bottom: "15px", right: "0", border: "none",backgroundColor: "transparent"  }}> <WhatsAppIcon style={{color: "#007bff", fontSize: "50px"}} /> </ReactWhatsapp>
            <MainPageFooter /> 
          </div>
          </Route>

          <Route path="/Adulto">
          <div className="app__mainPage" style={{display: "flex", flexDirection: "column", width: "100%"}}>
            <MainPageHeader />
            <Adulto />
            <ReactWhatsapp number="573102162496" message="Hola, estoy interesad@ en la corporación..." style={{position: "fixed", bottom: "15px", right: "0", border: "none",backgroundColor: "transparent"  }}> <WhatsAppIcon style={{color: "#007bff", fontSize: "50px"}} /> </ReactWhatsapp>
            <MainPageFooter /> 
          </div>
          </Route>

          <Route path="/Mujer">
          <div className="app__mainPage" style={{display: "flex", flexDirection: "column", width: "100%"}}>
            <MainPageHeader />
            <Mujer />
            <ReactWhatsapp number="573102162496" message="Hola, estoy interesad@ en la corporación..." style={{position: "fixed", bottom: "15px", right: "0", border: "none",backgroundColor: "transparent"  }}> <WhatsAppIcon style={{color: "#007bff", fontSize: "50px"}} /> </ReactWhatsapp>
            <MainPageFooter /> 
          </div>
          </Route>

          <Route path="/seParteDelCambio">
          <div className="app__mainPage" style={{display: "flex", flexDirection: "column", width: "100%"}}>
            <MainPageHeader />
            <SeParteDelCambio />
            <ReactWhatsapp number="573102162496" message="Hola, estoy interesad@ en la corporación..." style={{position: "fixed", bottom: "15px", right: "0", border: "none",backgroundColor: "transparent"  }}> <WhatsAppIcon style={{color: "#007bff", fontSize: "50px"}} /> </ReactWhatsapp>
            <MainPageFooter /> 
          </div>
          </Route>

          <Route path="/">
            <div className="app__mainPage" style={{display: "flex", flexDirection: "column", width: "100%"}}>
              <MainPageHeader />
              <MainPageIndex />
              <ReactWhatsapp number="573102162496" message="Hola, estoy interesad@ en la corporación..." style={{position: "fixed", bottom: "15px", right: "0", border: "none",backgroundColor: "transparent"  }}> <WhatsAppIcon style={{color: "#007bff", fontSize: "50px"}} /> </ReactWhatsapp>
              <MainPageFooter />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
