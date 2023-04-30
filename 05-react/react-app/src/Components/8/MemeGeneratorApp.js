import Header from "./Header";
import MemeGenerator from "./MemeGenerator";

import styles from "./MemeGenerator.module.css"

export default function MemeGeneratorApp() {
    return (
        <div>
            <Header />
            <MemeGenerator />
        </div>
    );
}