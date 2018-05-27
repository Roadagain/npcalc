enum ChargeType {
    IMMEDIATELY,
    EACH_TURN,
}

export function toString(type: ChargeType) {
    switch (type) {
        case ChargeType.IMMEDIATELY: return '即時';
        case ChargeType.EACH_TURN: return '毎ターン';
    }
}

export const CHARGE_TYPES = [ChargeType.IMMEDIATELY, ChargeType.EACH_TURN];

export default ChargeType;
