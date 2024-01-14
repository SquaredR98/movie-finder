"use client";

import React, { useEffect, useState } from 'react';
import { fetchData } from '../../lib/utils';

interface IGenresProps {
  type: string;
  genreIds: number[];
}

export default function Genres({ type, genreIds }: IGenresProps) {
  const [genres, setGenres] = useState<any>([])
  
  useEffect(() => {
    async function fetchAndModifyGenres() {
      const data = await fetchData(`/genre/${type}/list`);
      console.log(data);
    }
    fetchAndModifyGenres();
  }, [])
  
  return (
    <div></div>
  )
}
