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
  andress: "vivva 2323",
  description: "Casa de campo rodeada de naturaleza: Esta casa de alquiler se encuentra en una zona poco poblada, rodeada de exuberante vegetación y aire fresco. Es ideal para aquellos que buscan alejarse del ajetreo y el bullicio de la ciudad y disfrutar de un entorno tranquilo y relajante."
},{
  name: "casa rustica 323",
  id: 2,
  image: "https://arkihome.com/wp-content/uploads/2019/08/casa-rusticas-de-campo-29.jpg",
  floor: 2,
  rooms: 6,
  bathrooms: 1,
  price: 1600000,
  andress: "dads 22",
  description: "Cabaña acogedora en la montaña: Esta cabaña se encuentra en una zona de montaña poco poblada, rodeada de espectaculares vistas panorámicas y aire fresco de la montaña. Es perfecta para aquellos que buscan un ambiente rústico y acogedor para sus vacaciones."

},{
  name: "departamento 23",
  id: 3,
  image: "https://images.estilosdeco.com/2016/03/departamento-2-ambientes-pequeno-dumbo-1.jpg",
  floor: 2,
  rooms: 6,
  bathrooms: 1,
  price: 500000,
  andress: "dre 123",
  description: "Casa de playa privada: Esta casa de alquiler se encuentra en una zona de playa poco poblada, con acceso privado a la playa y espectaculares vistas del océano. Es ideal para aquellos que buscan un lugar tranquilo y privado para disfrutar de la playa y el sol."
},{
  name: "casa gris de 4 piezas",
  id: 4,
  image: "https://verplanos.com/wp-content/uploads/2020/06/plano-de-casa-de-campo-de-3-dormitorios-2-banos-gratis-en-autocad-y-pdf.jpg",
  floor: 1,
  rooms: 4,
  bathrooms: 1,
  price: 1000000,
  andress: "vivva 2323",
  description: "Casa de campo histórica: Esta casa de alquiler es una casa de campo histórica ubicada en una zona poco poblada, rodeada de historia y cultura. Es perfecta para aquellos interesados en la historia y la arquitectura y que deseen disfrutar de un ambiente tranquilo y relajante."

},{
  name: "casa rustica 323",
  id: 5,
  image: "https://arkihome.com/wp-content/uploads/2019/08/casa-rusticas-de-campo-29.jpg",
  floor: 2,
  rooms: 6,
  bathrooms: 1,
  price: 1600000,
  andress: "dads 22",
  description: "Casa en el bosque: Esta casa de alquiler se encuentra en una zona boscosa poco poblada, rodeada de árboles y aire fresco. Es ideal para aquellos que buscan alejarse de la ciudad y disfrutar de un ambiente natural y relajante."

},{
  name: "departamento 23",
  id: 6,
  image: "https://images.estilosdeco.com/2016/03/departamento-2-ambientes-pequeno-dumbo-1.jpg",
  floor: 2,
  rooms: 6,
  bathrooms: 1,
  price: 500000,
  andress: "dre 123",
  description: "Chalet de montaña aislado: Este chalet se encuentra en una zona de montaña poco poblada y aislada, rodeada de impresionantes vistas panorámicas y aire fresco de la montaña. Es perfecto para aquellos que buscan un lugar privado y tranquilo para disfrutar de la naturaleza y la relajación."
}]


const Houses = () => {
    return (
        <House houses={houses}/>
    )
}

export default Houses;