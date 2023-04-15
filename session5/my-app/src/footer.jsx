import './footer.css'

// function Footer() {
//     return(
//         <p>This app is brought to you by CFG</p>
//     );
// };

function Footer(props) {
    return (
        <div>
            <h1>{props.header}</h1>
            <p>This is brought to you by {props.name}</p>
        </div>
    );
};

export default Footer;