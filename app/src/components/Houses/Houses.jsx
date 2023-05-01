import React from 'react';
import { Text, View } from 'react-native';
import { styled } from 'nativewind';
import House from '../House/House';
const houses = [{
  name: "casa gris de 4 piezas",
  id: 1,
  image: "https://verplanos.com/wp-content/uploads/2020/06/plano-de-casa-de-campo-de-3-dormitorios-2-banos-gratis-en-autocad-y-pdf.jpg",
  floor: 1,
  rooms: 4,
  bathrooms: 1,
  price: 1000000,
  andress: "vivva 2323"

},{
  name: "casa rustica 323",
  id: 2,
  image: "https://arkihome.com/wp-content/uploads/2019/08/casa-rusticas-de-campo-29.jpg",
  floor: 2,
  rooms: 6,
  bathrooms: 1,
  price: 1600000,
  andress: "dads 22"

},{
  name: "departamento 23",
  id: 3,
  image: "https://images.estilosdeco.com/2016/03/departamento-2-ambientes-pequeno-dumbo-1.jpg",
  floor: 2,
  rooms: 6,
  bathrooms: 1,
  price: 500000,
  andress: "dre 123"
},{
  name: "casa gris de 4 piezas",
  id: 4,
  image: "https://verplanos.com/wp-content/uploads/2020/06/plano-de-casa-de-campo-de-3-dormitorios-2-banos-gratis-en-autocad-y-pdf.jpg",
  floor: 1,
  rooms: 4,
  bathrooms: 1,
  price: 1000000,
  andress: "vivva 2323"

},{
  name: "casa rustica 323",
  id: 5,
  image: "https://arkihome.com/wp-content/uploads/2019/08/casa-rusticas-de-campo-29.jpg",
  floor: 2,
  rooms: 6,
  bathrooms: 1,
  price: 1600000,
  andress: "dads 22"

},{
  name: "departamento 23",
  id: 6,
  image: "https://images.estilosdeco.com/2016/03/departamento-2-ambientes-pequeno-dumbo-1.jpg",
  floor: 2,
  rooms: 6,
  bathrooms: 1,
  price: 500000,
  andress: "dre 123"
}]


const Houses = () => {
    return (
        <House houses={houses}/>
    )
}

export default Houses;