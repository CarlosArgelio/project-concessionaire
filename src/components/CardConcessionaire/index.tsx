import { Card } from 'antd';
import { MdLocalOffer } from "react-icons/md";
import { CardsImage } from '../../assets';
import ModalComponent from '../Modal';

function CardConcessionaire(props: any) {

  return (
    <>
      <Card 
        title={`${props.stock}`}
        bordered={false} 
        style={
            { width: 300, boxShadow: '0 0 10px #ccc' }
            }
        cover={<img alt="example" src={CardsImage.CardsImage.Ford} />}
    >
        <p>{`Modelo: ${props.model}`}</p>
        <p>{`Precio: $${props.price}`}</p>
        <p>{`Vendedor: ${props.seller}`}</p>
        { props.offert && ( <p>Oferta: <MdLocalOffer /> </p>) }
        
        <ModalComponent 
          {...props}
        />
      </Card>    
    </>
  )
}

export default CardConcessionaire