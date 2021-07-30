import {reference} from './firebase';

export const initialState = {
    user: null,
    user_name: "",
    user_email: "",
    user_id: 0,
    carrito: [],
    shippingInfo: {
        name: "",
        lastName: "",
        city: "",
        address1: "",
        address2: "",
        phone: "",
    },
    items: [],
    adminData: {
        salesThisMonth: 0,
        salesThisYear: 0,
        salesJan: 0,
        salesFeb: 0,
        salesMar: 0,
        salesApr: 0,
        salesMay: 0,
        salesJun: 0,
        salesJul: 0,
        salesAgst: 0,
        salesSep: 0,
        salesOct: 0,
        salesNov: 0,
        salesDec: 0,
        salesByBooks: 0,
        salesByCoffee: 0,
        booksStock: 0,
        coffeeStock: 0,
        donations: 0,
    },
    bills: [],
    donations: [],
};

export const getCartTotal = (carrito) =>
carrito?.reduce((amount,item) => (item.price * item.quantity) + amount, 0); 

export const getTotalCartItems = (carrito) =>
carrito?.reduce((amount, item) => parseInt(item.quantity) + amount,0);

export const getItemById = (id, state) => {
    var actualItems = [...state.items];
    for (let i=0; i< actualItems.length ; i++) {
        if(actualItems[i].id === id) {
            return (actualItems[i])
        }
    }
}

function reducer(state, action)
{
    switch(action.type)
    {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_CART':
            return {...state, carrito: action.cart}
        case 'ADD_TO_CART':
            return {...state, carrito: [...state.carrito, action.item], };
        case 'REMOVE_FROM_CART':
            let newCarrito = [...state.carrito];
            const index = state.carrito.findIndex((basketItem) => basketItem.id === action.id);
            if(index >= 0)
            {
                newCarrito.splice(index, 1);
            } 
            return {...state, carrito: newCarrito};
        case 'ADD_USER_DATA':
            return {
                ...state, 
                user_name: action.userData.user_name, 
                user_email: action.userData.user_email, 
                user_id: action.userData.user_id
            }
        case 'ADD_SHIPPING_DATA':
            return{
                ...state,
                shippingInfo: {
                    name: action.shippingInfo.name,
                    lastName: action.shippingInfo.lastName,
                    city: action.shippingInfo.city,
                    address1: action.shippingInfo.address1,
                    address2: action.shippingInfo.address2,
                    phone: action.shippingInfo.phone,
                }
            }
        case 'ADD_SHOP_ITEMS':
            return {...state, items: [...state.items, action.item], };
        case 'CHANGE_QUANTITY':
            let carritoToChange = [...state.carrito];
            carritoToChange.forEach(element => {
                if(element.id === action.data.itemId) {
                    element.quantity = action.data.itemQuantity
                    if(action.data.user) {
                        var updates = {};
                        var cartData = {
                        id: element.id,
                        title: element.title,
                        image: element.image,
                        price: element.price,
                        quantity: element.quantity
                        };
                        updates['shopping_carts/SHPNCRT_'+action.data.userId+'/products/'+ action.data.itemId] =  cartData;
                        reference.update(updates);
                    }
                }
            });
            return {...state, carrito: carritoToChange};
        case 'MAKE_BILL':
            let today = new Date();
            let dd = String(today.getDate()).padStart(2,'0');
            let mm = String(today.getMonth() + 1).padStart(2,'0');
            let yy = today.getFullYear();
            today = dd + '/' + mm + '/' + yy;
            let billData = {
                items: [],
                date: today,
                buyerId: action.billData.buyerId,
                buyerName: action.billData.shippingInfo.name,
                buyerLastName: action.billData.shippingInfo.lastName,
                buyerEmail: action.billData.buyer_email,
                billPrice: action.billData.billPrice,
                shippingAddress: action.billData.shippingInfo.address1 + " " + action.billData.shippingInfo.address2,
                shippingCity: action.billData.shippingInfo.city,
                buyerPhone: action.billData.shippingInfo.phone,
            }
            for(let i = 0; i < action.billData.carrito.length; i++) {
                var shopUpdates = {};
                let actualItem = getItemById(action.billData.carrito[i].id, state);
                let itemToAdd = {
                    price: actualItem.price,
                    name: actualItem.name,
                    image: actualItem.image,
                    id: actualItem.id,
                    description: actualItem.description,
                    category: actualItem.category,
                    stock: parseInt(actualItem.stock) - parseInt(action.billData.carrito[i].quantity),
                }
                shopUpdates['products/PRDCT_'+ action.billData.carrito[i].id ] = itemToAdd;
                reference.update(shopUpdates);
                billData.items.push(action.billData.carrito[i]);
            }

            var updates = {};
            //Add Bill to the dataBase
            updates['bills/BILL_'+ action.billData.referenceCode ] =  billData;
            reference.update(updates);
            //Remove Shopping Cart from dataBase
            updates['shopping_carts/SHPNCRT_'+ action.billData.buyerId] = null
            reference.update(updates);
            return {...state}
        case 'MAKE_DONATION_BILL':
            let today2 = new Date();
            let dd2 = String(today2.getDate()).padStart(2,'0');
            let mm2 = String(today2.getMonth() + 1).padStart(2,'0');
            let yy2 = today2.getFullYear();
            today2 = dd2 + '/' + mm2 + '/' + yy2;
            let donationData = {
                date: today2,
                donator_id: action.billData.donatorId,
                donatorFullName: action.billData.donator_name,
                donatorEmail: action.billData.donator_email,
                donationValue: parseInt(action.billData.billPrice),
                donationMessage: action.billData.donationMessage,
            }
            var updates = {};
            //Add Donation to the dataBase
            updates['donations/DNTN_'+ action.billData.referenceCode ] =  donationData;
            reference.update(updates);
            return {...state}
        case 'ADD_MONTH_SALES':
            let adminMonthData = {...state.adminData}
            return {...state, adminData: {
                    salesThisMonth: adminMonthData.salesThisMonth + action.billPrice,
                    salesThisYear: adminMonthData.salesThisYear,
                    salesJan: adminMonthData.salesJan,
                    salesFeb: adminMonthData.salesFeb,
                    salesMar: adminMonthData.salesMar,
                    salesApr: adminMonthData.salesApr,
                    salesMay: adminMonthData.salesMay,
                    salesJun: adminMonthData.salesJun,
                    salesJul: adminMonthData.salesJul,
                    salesAgst:adminMonthData.salesAgst,
                    salesSep: adminMonthData.salesSep,
                    salesOct: adminMonthData.salesOct,
                    salesNov: adminMonthData.salesNov,
                    salesDec: adminMonthData.salesDec,
                    salesByBooks: adminMonthData.salesByBooks,
                    salesByCoffee: adminMonthData.salesByCoffee,
                    booksStock: adminMonthData.booksStock,
                    coffeeStock: adminMonthData.coffeeStock,
                    donations: adminMonthData.donations,
                } 
            }
        case 'ADD_YEAR_SALES':
            let adminYearData = {...state.adminData}
            return {...state, adminData: {
                    salesThisMonth: adminYearData.salesThisMonth,
                    salesThisYear: adminYearData.salesThisYear + action.billPrice,
                    salesJan: adminYearData.salesJan,
                    salesFeb: adminYearData.salesFeb,
                    salesMar: adminYearData.salesMar,
                    salesApr: adminYearData.salesApr,
                    salesMay: adminYearData.salesMay,
                    salesJun: adminYearData.salesJun,
                    salesJul: adminYearData.salesJul,
                    salesAgst:adminYearData.salesAgst,
                    salesSep: adminYearData.salesSep,
                    salesOct: adminYearData.salesOct,
                    salesNov: adminYearData.salesNov,
                    salesDec: adminYearData.salesDec,
                    salesByBooks: adminYearData.salesByBooks,
                    salesByCoffee: adminYearData.salesByCoffee,
                    booksStock: adminYearData.booksStock,
                    coffeeStock: adminYearData.coffeeStock,
                    donations: adminYearData.donations,
                } 
            }
        case 'ADD_MONTHLY_SALES':
            let adminmonthlyData = {...state.adminData}
            return {...state, adminData: {
                    salesThisMonth: adminmonthlyData.salesThisMonth,
                    salesThisYear: adminmonthlyData.salesThisYear,
                    salesJan: adminmonthlyData.salesJan + action.pricesByMonth.salesJan,
                    salesFeb: adminmonthlyData.salesFeb + action.pricesByMonth.salesFeb,
                    salesMar: adminmonthlyData.salesMar + action.pricesByMonth.salesMar,
                    salesApr: adminmonthlyData.salesApr + action.pricesByMonth.salesApr,
                    salesMay: adminmonthlyData.salesMay + action.pricesByMonth.salesMay,
                    salesJun: adminmonthlyData.salesJun + action.pricesByMonth.salesJun,
                    salesJul: adminmonthlyData.salesJul + action.pricesByMonth.salesJul,
                    salesAgst:adminmonthlyData.salesAgst + action.pricesByMonth.salesAgst,
                    salesSep: adminmonthlyData.salesSep + action.pricesByMonth.salesSep,
                    salesOct: adminmonthlyData.salesOct + action.pricesByMonth.salesOct,
                    salesNov: adminmonthlyData.salesNov + action.pricesByMonth.salesNov,
                    salesDec: adminmonthlyData.salesDec + action.pricesByMonth.salesDec,
                    salesByBooks: adminmonthlyData.salesByBooks,
                    salesByCoffee: adminmonthlyData.salesByCoffee,
                    booksStock: adminmonthlyData.booksStock,
                    coffeeStock: adminmonthlyData.coffeeStock,
                    donations: adminmonthlyData.donations,
                } 
            }
        case 'ADD_CATEGORY_SALES':
            let adminCategoryData = {...state.adminData}
            return {...state, adminData: {
                    salesThisMonth: adminCategoryData.salesThisMonth,
                    salesThisYear: adminCategoryData.salesThisYear,
                    salesJan: adminCategoryData.salesJan,
                    salesFeb: adminCategoryData.salesFeb,
                    salesMar: adminCategoryData.salesMar,
                    salesApr: adminCategoryData.salesApr,
                    salesMay: adminCategoryData.salesMay,
                    salesJun: adminCategoryData.salesJun,
                    salesJul: adminCategoryData.salesJul,
                    salesAgst:adminCategoryData.salesAgst,
                    salesSep: adminCategoryData.salesSep,
                    salesOct: adminCategoryData.salesOct,
                    salesNov: adminCategoryData.salesNov,
                    salesDec: adminCategoryData.salesDec,
                    salesByBooks: adminCategoryData.salesByBooks + action.salesByCategory.booksSales,
                    salesByCoffee: adminCategoryData.salesByCoffee + action.salesByCategory.coffeeSales,
                    booksStock: adminCategoryData.booksStock,
                    coffeeStock: adminCategoryData.coffeeStock,
                    donations: adminCategoryData.donations,
                } 
            }
        case 'ADD_CATEGORY_STOCK':
            let adminStockData = {...state.adminData}
            return {...state, adminData: {
                    salesThisMonth: adminStockData.salesThisMonth,
                    salesThisYear: adminStockData.salesThisYear,
                    salesJan: adminStockData.salesJan,
                    salesFeb: adminStockData.salesFeb,
                    salesMar: adminStockData.salesMar,
                    salesApr: adminStockData.salesApr,
                    salesMay: adminStockData.salesMay,
                    salesJun: adminStockData.salesJun,
                    salesJul: adminStockData.salesJul,
                    salesAgst:adminStockData.salesAgst,
                    salesSep: adminStockData.salesSep,
                    salesOct: adminStockData.salesOct,
                    salesNov: adminStockData.salesNov,
                    salesDec: adminStockData.salesDec,
                    salesByBooks: adminStockData.salesByBooks,
                    salesByCoffee: adminStockData.salesByCoffee,
                    booksStock: adminStockData.booksStock + action.stockByCategory.booksStock,
                    coffeeStock: adminStockData.coffeeStock + action.stockByCategory.coffeeStock,
                    donations: adminStockData.donations,
                } 
            }
        case 'ADD_DONATIONS':
            let adminDonationData = {...state.adminData}
            return {...state, adminData: {
                    salesThisMonth: adminDonationData.salesThisMonth,
                    salesThisYear: adminDonationData.salesThisYear,
                    salesJan: adminDonationData.salesJan,
                    salesFeb: adminDonationData.salesFeb,
                    salesMar: adminDonationData.salesMar,
                    salesApr: adminDonationData.salesApr,
                    salesMay: adminDonationData.salesMay,
                    salesJun: adminDonationData.salesJun,
                    salesJul: adminDonationData.salesJul,
                    salesAgst:adminDonationData.salesAgst,
                    salesSep: adminDonationData.salesSep,
                    salesOct: adminDonationData.salesOct,
                    salesNov: adminDonationData.salesNov,
                    salesDec: adminDonationData.salesDec,
                    salesByBooks: adminDonationData.salesByBooks,
                    salesByCoffee: adminDonationData.salesByCoffee,
                    booksStock: adminDonationData.booksStock ,
                    coffeeStock: adminDonationData.coffeeStock ,
                    donations: adminDonationData.donations + action.donationsValue,
                } 
            }
        case 'ADD_BILL':
            return {...state, bills: [...state.bills, action.actualBill], };
        case 'ADD_DONATION':
            return {...state, donations: [...state.donations, action.actualDonation], };
        default:
            return state;
    }
}

export default reducer;