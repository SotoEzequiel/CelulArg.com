import React from 'react';
import { Text, View , StyleSheet} from 'react-native';

import Phone from '../Phone/Phone';
const data = [
  {
    marca: "Apple",
    modelo: "iPhone 13 Pro Max",
    pantalla: "6.7 pulgadas, OLED, 2778 x 1284 píxeles",
    procesador: "A15 Bionic con Neural Engine de 5 núcleos",
    camara: "Triple cámara trasera de 12 MP (gran angular, ultra gran angular y teleobjetivo) y cámara frontal de 12 MP",
    bateria: "hasta 28 horas de duración de la batería",
    precio: 1899.99,
    imagen: "https://thumbs.dreamstime.com/b/nuevo-iphone-pro-y-apple-po-color-de-espacio-gris-m%C3%A1ximo-en-un-fondo-negro-tres-c%C3%A1maras-tel%C3%A9fono-closet-cierre-logotipo-manzana-233711451.jpg"
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S21 Ultra",
    pantalla: "6.8 pulgadas, AMOLED, 3200 x 1440 píxeles",
    procesador: "Exynos 2100 / Snapdragon 888",
    camara: "Cuádruple cámara trasera de 108 MP (gran angular), 12 MP (ultra gran angular), 10 MP (teleobjetivo 1) y 10 MP (teleobjetivo 2) y cámara frontal de 40 MP",
    bateria: "hasta 25 horas de duración de la batería",
    precio: 1399.99,
    imagen: "https://www.techies.es/wp-content/uploads/2021/01/samsung-galaxy-s21-ultra-1.jpg"
  },
  {
    marca: "OnePlus",
    modelo: "9 Pro",
    pantalla: "6.7 pulgadas, AMOLED, 3216 x 1440 píxeles",
    procesador: "Qualcomm Snapdragon 888",
    camara: "Cuádruple cámara trasera de 48 MP (gran angular), 50 MP (ultra gran angular), 8 MP (teleobjetivo) y 2 MP (monocromo) y cámara frontal de 16 MP",
    bateria: "hasta 34 horas de duración de la batería",
    precio: 969.99,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJ1d78Uvz1xMp25bEj1kIUCSixz82r41wQQ&usqp=CAU"
  },
  {
    marca: "Google",
    modelo: "Pixel 6 Pro",
    pantalla: "6.7 pulgadas, AMOLED, 3120 x 1440 píxeles",
    procesador: "Google Tensor",
    camara: "Triple cámara trasera de 50 MP (gran angular), 12 MP (ultra gran angular) y 48 MP (teleobjetivo) y cámara frontal de 11 MP",
    bateria: "hasta 36 horas de duración de la batería",
    precio: 1099.99,
    imagen: "https://undertec.store/wp-content/uploads/2021/10/Google-Pixel-6-undertaker-tec-store.jpg"
  },
]


const Phones = () => {
    return (
      <View style={styles.container}> 
        <Phone data={data}/>

      </View>
    )
}

const styles = StyleSheet.create({
  container : {
    marginVertical: 70,
  }
})

export default Phones;