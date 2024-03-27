import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [res, setRes] = useState(null);

  const fetchData = async (numberid) => {
    try {
      const res = await axios.get(`http://localhost:9876/numbers/${numberid}`);
      setRes(res.data);
    } catch (error) {
      console.error(error);
    }
  };






















