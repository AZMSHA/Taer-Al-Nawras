export default function letterfy(str,styleObject) {
    const charArray = Array.from(str);
    const letters = charArray.map((char, index) => {
    return <span key={index}  style={styleObject} className={"letter"+index}>{char}</span>
    })
    return letters
};