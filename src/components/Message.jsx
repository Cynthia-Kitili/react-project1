export default function Message() {
    function handleClick(){
        console.log("You clicked me")
    }
    return (
        <>
            <button onClick={handleClick}>Click to get message</button>
        </>
    );
}