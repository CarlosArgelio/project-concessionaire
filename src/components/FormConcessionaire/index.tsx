import React, { useState } from 'react';
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
} from 'antd';

type SizeType = Parameters<typeof Form>[0]['size'];
type PaymentMethod = 'paypal' | 'binance' | 'Pago movil' | 'transeferencia';
type ModePay = 'Al contado' | 'Financiamiento';
type OffertType = {
    offert: {
        porcentual: number;
        offert: boolean;
    };
} | {
    offert: false;
}

type Prop = {
    seller: string;
    offert: OffertType;
    price: number;
}

const FormComponent: React.FC<Prop> = (props) => {
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
  const [seller] = useState<string>(`${props.seller}`);
  const [, setPayMethod] = useState<PaymentMethod | ''>('');
  const [, setModePay] = useState<ModePay | ''>('');
  const [price] = useState<number>(0);

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const onSubTotal = (price: number, offert?: number) => {
    const iva = 16;
    const subTotal = (price * iva) / 100;
    if (offert) {
        return (price - (price * (offert + iva)) / 100);
    }
    return subTotal;
  }

  const onSubmit = (e: object) => {
    console.log("🚀 ~ file: index.tsx:31 ~ onSubmit ~ e:", e);
  }

  const PayMethodOption = (e: PaymentMethod) => {
      setPayMethod(e);
  }

  const ModeMethodOptions = (e: ModePay) => {
    setModePay(e)
  }

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="vertical"
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
      style={{ maxWidth: 600 }}
      onSubmitCapture={onSubmit}
    >
      <Form.Item name="size">
      </Form.Item>
      <Form.Item label="Vendedor">
        <Input value={`${seller}`} disabled={true}/>
      </Form.Item>

      <Form.Item>
        <label >Metodo de pago</label>
        <Select onSelect={PayMethodOption}>
            {paymentMethods.map(method => <Select.Option value={method}>{method}</Select.Option>)}
        </Select>
      </Form.Item>

      <Form.Item>
        <label >Modo de pago</label>
        <Select onSelect={ModeMethodOptions}>
            {modePayment.map(mode => <Select.Option value={mode}>{mode}</Select.Option>)}
        </Select>
      </Form.Item>

      <Form.Item style={{ display: 'inline-block', width: 'calc(20% - 8px)' }}>
        <label>Total</label>
        <InputNumber disabled={true} value={price}/>
      </Form.Item>
    
      <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}>
        <label>Subtotal</label>

        {
            (props.offert.offert && typeof props.offert.offert.porcentual === 'number') ? (
                <>
                    <label>Oferta: {props.offert.offert.porcentual}%</label>
                    <InputNumber disabled={true} value={onSubTotal(price, props.offert.offert.porcentual)} />
                </>
            ) : (
                <InputNumber disabled={true} value={onSubTotal(price)} />
            )
        }
      </Form.Item>

      <Form.Item >
        <Button type="primary" htmlType="submit">
            Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

const paymentMethods = ['paypal', 'binance', 'Pago movil', 'transeferencia'];
const modePayment = ['Al contado', 'Financiamiento'];

export { FormComponent };