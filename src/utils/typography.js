import Typography from "typography"

const typography = new Typography({
    baseFontSize: '16px',
    baseLineHeight: 1.73,
    googleFonts: [
        {
            name: "Poppins",
            styles: [
                '700',
                '700i',
            ]
        },
        {
            name: "Montserrat",
            styles: [
                '400',
                '400i',
                '700',
                '700i',
            ],  
        },
    ],
    headerFontFamily: ["Poppins"],
    bodyFontFamily: ["Montserrat"],
})

export default typography