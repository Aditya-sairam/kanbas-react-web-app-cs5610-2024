const ConditionalOutputIfElse = () => {
    const loggedIn = true 
    if(loggedIn){
        return(<h2 id="wd-condtional-output-if-else-welcome">Welcome back user1!</h2>)
    }
    else{
        return(<h2 id="wd-condtional-output-if-else-login">please login!</h2>)
    }
}
export default  ConditionalOutputIfElse