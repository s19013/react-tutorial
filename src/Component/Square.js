import React from 'react';
import './Square.css'

// {}<-これがpropsみたいになってる?
// props.OO みたいに書かなくてすむ
export default function Square({value,onSquareClick}) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}