import MercadoPagoAdapter from "./Adapters/MercadoPagoAdapter";
import PayoneerAdapter from "./Adapters/PayoneerAdapter";
import MercadoPago from "./mercadoPago/MercadoPago";
import IPayoneer from "./payoneer/IPayoneerPayment";
import Payoneer from "./payoneer/Payoneer";
import IPayPalPayment from "./paypal/IPayPalPayment";
import PayPal from "./paypal/PayPal";

//const payment : IPayPalPayment = new PayPal();
//const payment : IPayPalPayment = new PayoneerAdapter(new Payoneer());
//payment.paypalPayment();
//payment.paypalReceive();

const payment : IPayPalPayment = new MercadoPagoAdapter(new MercadoPago());
payment.paypalPayment();
payment.paypalReceive();