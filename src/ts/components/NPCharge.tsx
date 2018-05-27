import React from 'react';
import ChargeTypeMenu from './ChargeTypeMenu';
import PercentageInput from './PercentageInput';
import TurnInput from './TurnInput';

export interface INPChargeProps {
    value: number;
}

export default function NPCharge({ value }: INPChargeProps) {
    return (
        <div>
            <ChargeTypeMenu />
            <TurnInput value={3} />
            <PercentageInput value={value} />
        </div>
    );
}
