import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../../assets/css/landing-module.css';
import { Box } from './Box';
let result: any = [];
const url: string = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=33c356c655755f654a67a5f28e94126c&hash=182cc5c03618b84f8601ccb4e51d55d5&limit=30';

export const Home = (props: any) => {
  const [charaters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getCharacters(url);
  }, [])

  const getCharacters = (url: string) => {
    setIsLoading(true);
    axios.get(url)
      .then(res => {
        result = res?.data?.data?.results;
        setCharacters(result);
        setIsLoading(false);
    }, (error: any) => {
      setIsLoading(false);
    })
  }

  
  const onChange = (e: any) => {
    let data = result;
    if(e.target.value.length > 2) {
      // Implemented the Serverside search
        // const url1 = url + `&nameStartsWith=${e.target.value}`;
        // getCharacters(url1);
      // Implemented the Serverside search

      // Implemented the client search
        data = data.filter((x: any) => x.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setCharacters(data);
      // Implemented the client search
    }
    if(e.target.value === '') {
      // setCharacters(result);
      getCharacters(url);
    }
  }

  return (
    <div className='container-fluid'>
      <h4 className='text-center'>MARVEL CHARACTERS</h4>
      <div className='row mb-4 mt-2'>
        <div className='form-group col-sm-4 col-xs-12'>
          <input type="text" className='form-control' placeholder='search' onChange={onChange}/>
        </div>
      </div>
      <div className='row'>
        {isLoading ? <h5>Loading ....</h5> : charaters.map((data: any, index: number) =>
          <div className='col-sm-4 mb-3' key={index}>
            <Box data={data} />
          </div>
        )}
      </div>
    </div>
  );
};
function err(arg0: (res: import("axios").AxiosResponse<any, any>) => void, err: any, arg2: (any: any) => void) {
  throw new Error('Function not implemented.');
}

