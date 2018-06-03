import React from 'react';
import ChargeType from '../data/ChargeType';
import ChargeTypeMenu from './ChargeTypeMenu';
import PercentageInput from './PercentageInput';
import TurnInput from './TurnInput';

export interface INPChargeProps {
    value: number;
    type: ChargeType;
}

export default function NPCharge({ value, type }: INPChargeProps) {
    return (
        <div>
            <ChargeTypeMenu />
            {type === ChargeType.EACH_TURN ? <TurnInput value={3} /> : null}
            <PercentageInput value={value} />
        </div>
    );
}
