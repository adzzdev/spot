import React from 'react'
import ButtonRoot from './Button';

export default function Button({ color, variant, size, circular, iconOnly, children, ...rest }) {
    return 
    (
        <ButtonRoot
            {...rest}
            color="primary"
            variant={variant === "gradient" ? "contained" : variant}
            size={size}
            ownerState={{ color, variant, size, circular, iconOnly}}
        >
            {children}
        </ButtonRoot>
    );
}