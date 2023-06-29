module.exports = (say) =>{
    say.on ('hello', req => {
        console.log("In Hello");
    });
}