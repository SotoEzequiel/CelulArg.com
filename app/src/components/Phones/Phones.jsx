import React from 'react';
import { Text, View } from 'react-native';

import Phone from '../Phone/Phone';
const phone = [
  {
    marca: "Apple",
    modelo: "iPhone 13 Pro Max",
    pantalla: "6.7 pulgadas, OLED, 2778 x 1284 píxeles",
    procesador: "A15 Bionic con Neural Engine de 5 núcleos",
    camara: "Triple cámara trasera de 12 MP (gran angular, ultra gran angular y teleobjetivo) y cámara frontal de 12 MP",
    bateria: "hasta 28 horas de duración de la batería",
    precio: 1899.99,
    imagen: "https://cdn.pixabay.com/photo/2021/09/23/09/23/iphone-13-pro-6658854_960_720.jpg"
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S21 Ultra",
    pantalla: "6.8 pulgadas, AMOLED, 3200 x 1440 píxeles",
    procesador: "Exynos 2100 / Snapdragon 888",
    camara: "Cuádruple cámara trasera de 108 MP (gran angular), 12 MP (ultra gran angular), 10 MP (teleobjetivo 1) y 10 MP (teleobjetivo 2) y cámara frontal de 40 MP",
    bateria: "hasta 25 horas de duración de la batería",
    precio: 1399.99,
    imagen: "https://cdn.pixabay.com/photo/2021/05/20/12/37/samsung-galaxy-s21-6274347_960_720.jpg"
  },
  {
    marca: "OnePlus",
    modelo: "9 Pro",
    pantalla: "6.7 pulgadas, AMOLED, 3216 x 1440 píxeles",
    procesador: "Qualcomm Snapdragon 888",
    camara: "Cuádruple cámara trasera de 48 MP (gran angular), 50 MP (ultra gran angular), 8 MP (teleobjetivo) y 2 MP (monocromo) y cámara frontal de 16 MP",
    bateria: "hasta 34 horas de duración de la batería",
    precio: 969.99,
    imagen: "https://cdn.pixabay.com/photo/2021/03/26/08/29/oneplus-9-pro-6126974_960_720.jpg"
  },
  {
    marca: "Google",
    modelo: "Pixel 6 Pro",
    pantalla: "6.7 pulgadas, AMOLED, 3120 x 1440 píxeles",
    procesador: "Google Tensor",
    camara: "Triple cámara trasera de 50 MP (gran angular), 12 MP (ultra gran angular) y 48 MP (teleobjetivo) y cámara frontal de 11 MP",
    bateria: "hasta 36 horas de duración de la batería",
    precio: 1099.99,
    imagen: "https://cdn.pixabay.com/photo/2021/11/03/12/00/google-pixel-6-pro-6773379_960_720.jpg"
  },
]


const Phones = () => {
    return (
        <Phones phone={phone}/>
    )
}

export default Phones;