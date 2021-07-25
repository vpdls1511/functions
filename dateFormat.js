const dateFormatting = (date) => {
    const year = date.getFullYear().toString();
    const month = date.getMonth().toString();
    const day = date.getDate().toString();
    const hour = date.getHours().toString();
    const min = date.getMinutes().toString();
    const sec = date.getSeconds().toString();

    // YYYY-MM-DD HH:mm:ss
    return year+'-'+month+'-'+day+' '+hour+':'+min+':'+sec;
}

console.log(dateFormatting(new Date()));
