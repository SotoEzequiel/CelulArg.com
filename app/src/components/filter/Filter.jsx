import React, { useState } from 'react';
import { View, Modal, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SortingAndFilteringComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    option1: '',
    option2: '',
    option3: '',
    option4: ''
  });

  const handleOptionSelect = (key, value) => {
    setSelectedOptions({
      ...selectedOptions,
      [key]: value
    });
  };

  const handleSubmit = () => {
    setIsModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        <Icon name="filter-outline" size={50} />
      </TouchableOpacity>
      <Modal visible={isModalVisible} animationType="slide">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: '#FFF', padding: 20 }}>
            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
              <Icon name="close-outline" size={24} />
            </TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>Opciones de ordenamiento y filtrado</Text>
            <View style={{ marginBottom: 20 }}>
              <Text style={{ fontWeight: 'bold' }}>Opción 1:</Text>
              <TouchableOpacity onPress={() => handleOptionSelect('option1', 'Opción 1 - seleccionada')}>
                <Text>{selectedOptions.option1 || 'Seleccione una opción'}</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text style={{ fontWeight: 'bold' }}>Opción 2:</Text>
              <TouchableOpacity onPress={() => handleOptionSelect('option2', 'Opción 2 - seleccionada')}>
                <Text>{selectedOptions.option2 || 'Seleccione una opción'}</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text style={{ fontWeight: 'bold' }}>Opción 3:</Text>
              <TouchableOpacity onPress={() => handleOptionSelect('option3', 'Opción 3 - seleccionada')}>
                <Text>{selectedOptions.option3 || 'Seleccione una opción'}</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text style={{ fontWeight: 'bold' }}>Opción 4:</Text>
              <TouchableOpacity onPress={() => handleOptionSelect('option4', 'Opción 4 - seleccionada')}>
                <Text>{selectedOptions.option4 || 'Seleccione una opción'}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleSubmit} style={{ backgroundColor: '#00FF00', padding: 10, alignItems: 'center' }}>
              <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Aplicar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SortingAndFilteringComponent;
