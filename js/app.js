
import { BinaryCalculator } from "./BinaryCalculator";
import "./style.scss";
import { DecCalculator } from "./DecCalculator";


$(document).ready(function() {
    const bitCalc = new BinaryCalculator(".binary-calculator");
    const decCalc = new DecCalculator('.dec-calculator');
});


