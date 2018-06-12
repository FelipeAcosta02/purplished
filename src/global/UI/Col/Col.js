import React from 'react'; 
import styled from 'styled-components';
import PropTypes from 'prop-types';

const getWidthString = (span) => {
    if (!span) return;

    let width = span / 24 * 100;
    return `width: ${width}%`;
}

const col = styled.div`
    display: inline-block;
    ${({ xs }) => (xs ? getWidthString(xs) : "width: 100%")};
    margin: auto;
    min-height: 1.1em;
    padding: 0.2%;


    @media (min-width: 576px) {
        ${({ sm }) => sm && getWidthString(sm)};
    }
    @media (min-width: 768px) {
        ${({ md }) => md && getWidthString(md)};
    }
    @media (min-width: 992px) {
        ${({ lg }) => lg && getWidthString(lg)};
    }
    @media (min-width: 1200px) {
        ${({ xl }) => xl && getWidthString(xl)};
    }
    @media (min-width: 1600px) {
        ${({ xxl }) => xxl && getWidthString(xxl)};
    }
`;

export default col;

col.propTypes = {
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
    xxl: PropTypes.number,
}
col.defaultProps = {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    xxl: null,
}