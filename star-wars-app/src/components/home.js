import '../site.css';
import background from "../images/background.png"

export const Home = () => {
    return <div style={styles.container}>
        <body>
            <h1>Home Page</h1>
        </body>
    </div>
}

const styles = {
    container:{
        backgroundImage: `url(${background})`, 
        display: "flex",
        backgroundRepeat:"no-repeat",
        height: "80vh"
    }
}