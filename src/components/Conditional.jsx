import Code from "./Code";
import Welcome from "./Welcome";

export default function Conditional() {
    const display = false;
    return display ? <Welcome/> : <Code/>;
}