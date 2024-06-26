import { Container, Table, Thead, Tbody } from './styles';

import { Button } from '../../components/Button';
import { api } from '../../service/api';

import { useState, useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';

export function ProductList() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  function handleNewProduct() {
    navigate('/');
  }

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get(`/products/list`)
      setData(response.data);
    }

    fetchProducts();
  }, []);

  return (
    <Container>
      { data && (
        <>
          <div className="title-header">
            <h1><span>Lista</span> de Produtos</h1>
            <Button title="Novo Produto" onClick={handleNewProduct} />
          </div>

          <div className="box-table">

              <Table>
                <Thead>
                  <tr>
                    <th>Nome</th>
                    <th>Valor</th>
                    <th>Descrição</th>
                  </tr>
                </Thead>

                <Tbody>
                  <div className="scrollbar">
                    {data.map(product => (
                      <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                      </tr>
                    ))}
                  </div>
                </Tbody>
              </Table>

          </div>
        </>
      )}
    </Container>
  )

}