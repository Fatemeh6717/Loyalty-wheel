import classes from './Button.module.css';
const Button=(props)=>{

    return(<button onClick={props.spinHandler} className={classes.button}  disabled={props.disable}>
<svg fill="red" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 496.156 496.156"  xmlSpace="preserve">
<path  d="M0,248.08C0,111.06,111.069,0.002,248.074,0.002c137.013,0,248.082,111.059,248.082,248.078
	c0,137.005-111.069,248.074-248.082,248.074C111.069,496.154,0,385.085,0,248.08z"/>
	<path  fill="white" d="M428.243,172.149c-10.348,0.023-20.694,0.054-31.042,0.077
		c-23.272-52.177-68.95-89.871-126.649-98.91c-64.287-10.071-125.816,19.788-162.504,72.312
		c-16.296,23.326,22.003,45.165,38.16,22.034c50.317-72.037,157.757-65.527,201.907,4.686c-9.559,0.022-19.118,0.046-28.678,0.068
		c-2.674,0.008-4.574,1.197-5.749,2.877c-1.92,2.058-2.65,5.072-0.639,8.186c18.204,28.25,36.408,56.499,54.616,84.745
		c3.061,4.747,9.663,4.708,12.696-0.046c18.062-28.338,36.126-56.675,54.188-85.013C437.538,178.48,433.602,172.135,428.243,172.149
		z"/>
	<path fill="white"  d="M350.353,327.224c-49.927,71.49-156.108,65.63-200.886-3.049c9.161-0.022,18.322-0.046,27.484-0.068
		c2.666-0.008,4.563-1.19,5.741-2.865c1.924-2.059,2.658-5.072,0.646-8.197c-18.2-28.246-36.405-56.499-54.609-84.741
		c-3.056-4.751-9.662-4.712-12.695,0.046c-18.063,28.334-36.13,56.671-54.196,85.009c-2.987,4.689,0.948,11.032,6.308,11.017
		c10.669-0.027,21.337-0.054,32.006-0.08c23.498,51.319,68.777,88.332,125.865,97.275c64.287,10.072,125.816-19.784,162.496-72.312
		C404.806,325.928,366.508,304.09,350.353,327.224z"/>
</svg>
    </button>);
    };
    
    export default Button;