import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input, Button } from '@chakra-ui/react';

import {
  Table,
  Tbody,
  Tr,
  Td,
  Th,
  Thead,
  TableContainer,
} from '@chakra-ui/react';

interface RowData {
  id: number;
  name: string;
  headline: string;
  featured: number;
}

const DataComponent: React.FC = () => {
  const [data, setData] = useState<RowData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(4);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://instrutor-api.onrender.com/instructor');
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      setError('Error fetching data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase());
  };

  const filteredData = data.filter((item) => 
    search.toLowerCase() === "" ? item : item.name.toLowerCase().includes(search)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <form>
        <Input onChange={handleSearch} placeholder="Search by name or headline" />
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>NAME</Th>
                  <Th>DESIGNATION</Th>
                  <Th  >PREVIOUS COMPANY </Th>
                </Tr>
              </Thead>
              <Tbody>
                {currentData.map((item) => (
                  <Tr key={item.id} id="tr">
                    <Td>{item.name}</Td>
                    <Td>{item.designation}</Td>
                    <img src={item.logo}/>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
            <Button onClick={handlePrevPage} disabled={currentPage === 1}>
              Previous
            </Button>
            <span style={{ margin: '0 10px' }}>Page {currentPage} of {totalPages}</span>
            <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
              Next
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default DataComponent;
