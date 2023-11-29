import React, { ReactNode, useState } from 'react';
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
} from 'antd';

type SizeType = Parameters<typeof Form>[0]['size'];

const FormComponent: React.FC = (props: ReactNode) => {
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
  const [seller , setSeller] = useState<string>(`${props.seller}`);
  const [payMethod, setPayMethod] = useState<string>('');
  const [modePay, setModePay] = useState<string[]>('');
  const [price, setPrice] = useState<number>(props.price);

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

  const onSubmit = (e) => {
  console.log("🚀 ~ file: index.tsx:31 ~ onSubmit ~ e:", e.target.value)
  }

  const PayMethodOption = (e) => {
      setPayMethod(e);
  }

  const ModeMethodOptions = (e) => {
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
        <InputNumber disabled={true} value={onSubTotal(price, props.offert.porcentual)}/>
      </Form.Item>

      {props.offert ? (<p>Oferta: {props.offert.porcentual}%</p>) : null}

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

export default FormComponent;