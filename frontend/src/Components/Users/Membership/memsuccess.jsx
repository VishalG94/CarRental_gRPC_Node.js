import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import "../../Common/SignUp/SignUp-style.css";
// import React  from 'react';
// import Moment from 'react-moment';
// import * as moment from 'moment'

import "./membership.styles.css";
import TextField from '@material-ui/core/TextField';
import CustomButton from "../../Common/CustomButton/CustomButton";
// import axios from "axios";
// import Constants from "../../../Utils/Constants";
// import { Grid } from "@material-ui/core";

class memsuccess extends Component {
    state = {
        // let displaydate = moment().add(6, 'm');
        memstartdate: '',
    };
    componentDidMount() {
        var that = this;
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 7; //Current Month
        var year = new Date().getFullYear(); //Current Year 
        that.setState({
            //Setting the value of the date time
            date:
                date + '/' + month + '/' + year + ' ',
        });
    }
    render() {

        // var displaydate = moment().add(6, 'm');

        return (
            <div>
                <div style={{ width: "450px", minHeight: "450px", margin: "auto" }}>
                    <br></br>
                    <br></br>
                    <p><h2>Congratulations on new membership!</h2></p>
                    <p><h3>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        {/* you are now all set to make reservations!  */}

            You have purchased the 6 month membership that expires on {this.state.date}
                        {/* insert date here */}

                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br></h3>
                    </p>

                    <p>  <Link to="/login" >
                        Yayy! You are now all set to make reservations!
            </Link>
                        {/* you have purchased the 6 month membership which is valid through : //display date here// */}
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </p>

                </div>
                {/* <p>
            you have now all set to make reservations! 
            you have purchased the 6 month membership which is valid through 
        </p>*/}
                <div>
                    <h5>
                        {/* your membership expires on {displaydate} ; */}
                    </h5>
                </div>
            </div>
        );
    }
}
export default memsuccess;





// start here

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

// class memsuccess() extends component {

//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

//   return (
//     <Card className={classes.root}>
//       <CardContent>
//         <h2>
//             Congratulations on your new membership!!
//         </h2>

//         <Typography className={classes.pos} color="textSecondary">
//           Congratulations on your new membership!
//         </Typography>
//         {/* <Typography variant="body2" component="p">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button> 
//         </CardActions>*/}
//         </CardContent>
//     </Card>
//   );
// }
// export default memsuccess;