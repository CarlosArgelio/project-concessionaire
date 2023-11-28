import React from 'react';
import { Card } from 'antd';
import { MdLocalOffer } from "react-icons/md";
import { CardsImage } from '../../assets';
import { ButtonSeller } from '../ButtonSeller';

function CardConcessionaire({ stock, model, color, transmision, price, offer, seller }: any) {

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
        <p>{`Vendedor: ${seller}`}</p>
        { offer && ( <p>Oferta: <MdLocalOffer /> </p>) }
        
        <ButtonSeller />
      </Card>    
    </>
  )
}

export default CardConcessionaire