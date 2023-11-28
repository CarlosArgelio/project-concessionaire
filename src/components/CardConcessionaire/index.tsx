import React from 'react';
import { Card } from 'antd';
import { MdLocalOffer } from "react-icons/md";
import { CardsImage } from '../../assets';

function CardConcessionaire() {

  return (
    <>
      <Card 
        title='Ford'
        bordered={false} 
        style={
            { width: 300, boxShadow: '0 0 10px #ccc' }
            }
        cover={<img alt="example" src={CardsImage.CardsImage.Ford} />}
    >
        <p>{`Modelo: Fiesta`}</p>
        <p>{`Precio: $150.000`}</p>
        <p>Oferta: {<MdLocalOffer />}</p>
      </Card>    
    </>
  )
}

export default CardConcessionaire