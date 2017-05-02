import React from "react";

const BIQLogoIcon = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 206 41">
            <title>BlueIQ</title>
            <g>
                <path fill={props.fillColor} d="M.41,32.92A.44.44,0,0,1,0,32.51v-31A.45.45,0,0,1,.41,1H9c8.3,0,10.4,4.15,10.4,7.41,0,3.84-3.24,6.41-6.89,7.27,4.38.27,9.26,3.52,9.26,8.81,0,5-3.92,8.4-10.54,8.4ZM8.71,3.61c-1.73,0-3.6,0-5.34-.14.09,2,.09,3.84.09,5.64s0,3.88-.09,5.78c1.41-.09,3-.09,4.33-.09,5.61,0,8-2.48,8-5.74C15.74,5.46,13.5,3.61,8.71,3.61Zm9.4,20.59c0-4.06-2.74-7-9.17-7-1.82,0-3.7,0-5.57-.14.09,2.12.09,4.29.09,6.46s0,4.56-.09,6.86c2.55-.09,5.16-.09,7.62-.09C15.74,30.34,18.11,28.22,18.11,24.2Z"/>
                <path fill={props.fillColor} d="M48.63,30.16c2.83,0,6.11,0,8.85,0a.33.33,0,0,1,.37.36l-.23,2a.37.37,0,0,1-.36.41H37.59a.44.44,0,0,1-.41-.41v-31A.45.45,0,0,1,37.59,1h2.65a.48.48,0,0,1,.41.45V24.38c0,1.94,0,3.88-.14,6C43.2,30.25,46,30.16,48.63,30.16Z"/>
                <path fill={props.fillColor} d="M95.14,1a.49.49,0,0,1,.41.45V22.26c0,6.77-5,11.24-13,11.24s-13-4.7-13-11.42V1.49A.45.45,0,0,1,70,1H72.7a.49.49,0,0,1,.41.45V21.67c0,5.42,3.56,8.9,9.44,8.9,6.2,0,9.67-2.84,9.67-8.67V1.49A.45.45,0,0,1,92.63,1Z"/>
                <path fill={props.fillColor} d="M132.56,30.21a.32.32,0,0,1,.32.41l-.23,1.94c0,.23-.09.36-.32.36H113.13a.44.44,0,0,1-.41-.41v-31a.45.45,0,0,1,.41-.45h18.52c.23,0,.37.14.37.41l.18,1.94c0,.23-.09.36-.32.36-2.74,0-7.48-.09-10.31-.09-2.33,0-3.83,0-5.47-.09.09,1.9.09,3.93.09,5.55,0,1.85,0,3.84-.09,5.78,1.41-.09,3-.18,5.2-.18,2.55,0,4.29,0,5.25,0,.18,0,.32.14.32.41V17c0,.23-.09.36-.32.36-1,0-2.83,0-5.34,0-2,0-3.65,0-5.11-.18.09,2.17.09,4.29.09,6.37,0,2.26,0,4.61-.09,6.86,2.05-.09,4-.09,7.57-.09C126.59,30.3,129.83,30.21,132.56,30.21Z"/>
                <path fill={props.fillColor} d="M150.79,32.51a.48.48,0,0,1-.41.41h-2.65a.44.44,0,0,1-.41-.41v-31a.45.45,0,0,1,.41-.45h2.65a.48.48,0,0,1,.41.45Z"/>
                <path fill={props.fillColor} d="M182.28,33.5c-8.67-.18-15.74-6.64-15.74-17.07C166.54,6.23,174.2,0,182.6,0s16,6,16,16.44c0,8.44-5.2,14.72-12,15.94,5.93,1.22,9.9,5.42,15.47,5.42a8,8,0,0,0,2.69-.41,3.77,3.77,0,0,1,.82-.23c.27,0,.41.27.41.59v1.76c0,.81-1.51,1.49-3.88,1.49C194.5,41,189.07,33.64,182.28,33.5Zm12.45-17c0-9.21-5.52-13.68-12.14-13.68s-12.18,4.43-12.18,13.68c0,8.13,4.43,14.27,12.14,14.27S194.73,24.84,194.73,16.48Z"/>
            </g>
        </svg>
    )
};

BIQLogoIcon.defaultProps = {
    fillColor: '#000',
    width: '206px',
    height: '41px'
};

export default BIQLogoIcon;