import React from 'react';
import useLenisScroll from './hooks/useLenisScroll';
import { Outlet } from 'react-router-dom';

export default function App() {
  useLenisScroll();
  return (
    <Outlet />
  );
}
