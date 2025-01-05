import { Container, TextArea, Select } from './styles';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { BsBox } from "react-icons/bs";
import { IoPricetagOutline } from "react-icons/io5";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { api } from '../../service/api';


export function ProductForm({...rest}) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const navigate = useNavigate();

  async function handleNewProduct(event) {
    event.preventDefault();

    const priceFloat = parseFloat(price.replace(",", "."));
    if (isNaN(priceFloat)) {
      alert('Por favor, insira um valor numérico válido para o preço.');
      return;
    }
    const formattedPrice = priceFloat.toFixed(2);
    
    await api.post("/products", {
      name,
      price: formattedPrice,
      description
    });

    alert("Produto cadastrado com sucesso!");
    navigate('/list');
  }

  return (
    <Container>
      <h1><span>Cadastro</span> de Produtos</h1>

      <label htmlFor="name">Nome do Produto:</label>
      <Input
        type="text"
        id="name"
        icon={BsBox}
        onChange={e => setName(e.target.value)}
        required
        placeholder="Ex: Farinha de Trigo"
      />

      <label htmlFor="description">Descrição do Produto:</label>
        <TextArea
          type="text"
          id="description"
          onChange={e => setDescription(e.target.value)}
          required
          placeholder="Ex: Farinha de Trigo Zigaro Kg"
        >
        </TextArea>

      <label htmlFor="price">Valor do Produto:</label>
      <Input
        type="text"
        id="price"
        icon={IoPricetagOutline}
        onChange={e => setPrice(e.target.value)}
        required
        placeholder="Ex: 2,98"
      />

    <label htmlFor="available">Disponível para Venda:</label>
    <Select
      id="available"
      required
    >
      <option value="yes">Sim</option>
      <option value="no">Não</option>
    </Select>

    <Button title="Cadastrar" onClick={handleNewProduct} />
      
    </Container>
  )

}