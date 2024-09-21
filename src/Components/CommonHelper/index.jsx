const LIGHT = 'light'
const DARK  = 'dark'

export const themeDecider = () => {
    const timeHourIn24 =  new Date()?.getHours()
    if(timeHourIn24  >= 8 && timeHourIn24 < 18) {
        // return LIGHT
        return DARK
    }
    else{
        return DARK
    }
}