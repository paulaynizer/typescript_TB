
import TransportadoraAdapter from "./Adapters/TransportadoraAdapter";
import PayoneerAdapter from "./Adapters/TransportadoraAdapter";
import Correios from "./correios/Correios";
import ICorreios from "./correios/ICorreios";

import Transportadora from "./transportadora/Transportadora";


//const envio : ICorreios = new Correios();
//envio.sendCorreios();
//envio.receiveCorreios();

const envio : ICorreios = new TransportadoraAdapter(new Transportadora());
envio.sendCorreios();
envio.receiveCorreios();