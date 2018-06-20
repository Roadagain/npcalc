import React from 'react';
import ChargeType from '../data/ChargeType';
import ChargeTypeMenu from './ChargeTypeMenu';
import SuffixedNumberInput from './SuffixedNumberInput';
import TargetMenu from './TargetMenu';

export interface INPChargeProps {
    value: number;
    type: ChargeType;
}

export default function NPCharge({ value, type }: INPChargeProps) {
    return (
        <div>
            <ChargeTypeMenu />
            <TargetMenu />
            {type === ChargeType.EACH_TURN ? <SuffixedNumberInput value={3} suffix="turns" /> : null}
            <SuffixedNumberInput value={value} suffix="%" />
        </div>
    );
}
