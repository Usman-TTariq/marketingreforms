const RectangleBk = ({ className, ...props }) => (
    <svg
        className={className}
        width={2188}
        height={980}
        viewBox="0 0 2188 980"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g filter="url(#filter0_f_74_89)">
            <path d="M300 300H1888V680H300V300Z" fill="#635684" />
        </g>
        <defs>
            <filter
                id="filter0_f_74_89"
                x={0}
                y={0}
                width={2188}
                height={980}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                />
                <feGaussianBlur
                    stdDeviation={150}
                    result="effect1_foregroundBlur_74_89"
                />
            </filter>
        </defs>
    </svg>

)

export default RectangleBk;