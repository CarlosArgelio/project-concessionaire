import React from 'react';
import { Button, Flex } from 'antd';

function ButtonSeller() {
    return (
        <>
            <div>
                <Flex vertical gap="small" style={{ width: '100%' }}>
                    <Button block>Comprame ya!</Button>
                </Flex> 
            </div>
        </>
    )
}

export { ButtonSeller };