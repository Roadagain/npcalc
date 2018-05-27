import React from 'react';
import ChargeTypeMenu from './ChargeTypeMenu';
import PercentageInput from './PercentageInput';

export interface INPChargeProps {
    value: number;
}

export default function NPCharge({ value }: INPChargeProps) {
    return (
        <div>
            <ChargeTypeMenu />
            <PercentageInput value={value} />
        </div>
    );
}
