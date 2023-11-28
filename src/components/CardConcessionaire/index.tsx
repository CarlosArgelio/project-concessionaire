import React from 'react';
import { Card } from 'antd';
import { MdLocalOffer } from "react-icons/md";
import { CardsImage } from '../../assets';

function CardConcessionaire({ stock, model, color, transmision, price, offer }: any) {

  return (
    <>
      <Card 
        title={`${stock}`}
        bordered={false} 
        style={
            { width: 300, boxShadow: '0 0 10px #ccc' }
            }
        cover={<img alt="example" src={CardsImage.CardsImage.Ford} />}
    >
        <p>{`Modelo: ${model}`}</p>
        <p>{`Precio: $${price}`}</p>
        { offer && ( <p>Oferta: <MdLocalOffer /> </p>) }
      </Card>    
    </>
  )
}

export default CardConcessionaire