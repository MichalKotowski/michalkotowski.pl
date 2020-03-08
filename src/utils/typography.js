import Typography from "typography"

const typography = new Typography({
    baseFontSize: '16px',
    baseLineHeight: 1.666,
    googleFonts: [
        {
            name: "Poppins",
            styles: [
                '300',
                '300i',
                '400',
                '400i',
                '700',
                '700i',
            ]
        },
        {
            name: "Montserrat",
            styles: [
                '300',
                '300i',
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